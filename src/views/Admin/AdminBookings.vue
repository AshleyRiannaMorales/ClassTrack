<script setup>
import AdminSideBarMenu from "../../components/AdminSideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import { ref, onMounted } from 'vue';
import axios from "axios";
import { useToast } from 'primevue/usetoast';


const toast = useToast();

const bookingReq = ref(null);

const selectedOption = ref({ option: 'Newest', api: 'newest-to-oldest' });
const sortOptions = [
    { option: 'Newest', api: 'newest-to-oldest' },
    { option: 'Oldest', api: 'oldest-to-newest' }
];

onMounted(fetchData);

async function fetchData() {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/booking-requests/${selectedOption.value.api}`);
        console.log('Bookings response data:', response.data);
        bookingReq.value = response.data;
    } catch (error) {
        console.error('Error fetching bookings data:', error);
    }
}

const approveBooking = async (booking_request_id) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/api/admin/approve-booking-request/${booking_request_id}`);
        console.log('Booking approved:', response.data);
        // Find the booking in the array and update its status to 'Approved'
        const bookingIndex = bookingReq.value.findIndex(booking => booking.bookingRequestID === booking_request_id);
        if (bookingIndex !== -1) {
            bookingReq.value[bookingIndex].bookingReqStatus = 'Approved';
        }
        toast.add({
            severity: 'success',
            summary: 'Request Approved!',
            detail: 'The booking request has been approved.',
            life: 3000
        });
    } catch (error) {
        console.error('Error approving booking:', error);
    }
}


</script>

<template>
    <AdminSideBarMenu />
    <TopBarMenu />

    <div class="adminBookings-container">
        <span class="greetings">Bookings</span>

        <div class="buttons-container">
            <div class="sortButton">
                <label for="dropdown"> Sort By: </label>
                <Dropdown id="sort" v-model="selectedOption" :options="sortOptions" optionLabel="option"
            placeholder="Date" checkmark :highlightOnSelect="false" class="w-full md:w-14rem" @change="fetchData" />
            </div>
        </div>

        <div class="tableBookings">
            <DataTable :value="bookingReq" tableStyle="max-width: 80rem; font-family: 'Inter', sans-serif;">
                <Column field="bookingRequestID" header="ID" style="color: #DD385A;"></Column>
                <Column field="instructorName" header="Instructor" style="color: #DD385A;"></Column>
                <Column field="computerLabID" header="Room" style="color: #DD385A;"></Column>
                <Column field="bookingDate" header="Date" style="color: #DD385A;"></Column>
                <Column field="bookingStartTime" header="Start Time" style="color: #DD385A;"></Column>
                <Column field="bookingEndTime" header="End Time" style="color: #DD385A;"></Column>
                <Column field="bookingPurpose" header="Purpose" style="color: #DD385A;"></Column>
                <Column field="bookingReqStatus" header="Status" style="color: #DD385A;"></Column>
                <Column field="" header="Actions" style="color: #DD385A;">
                    <template #body="rowData">
                        <Button @click="approveBooking(rowData.data.bookingRequestID)" label="Approve"
                            icon="pi pi-check" id="approveButton" class="p-button-info"
                            :disabled="rowData.data.bookingReqStatus === 'Approved' || rowData.data.bookingReqStatus === 'Rejected'" />
                        <Button label="Reject" icon="pi pi-times" class="p-button-info" id="rejectButton"
                            :disabled="rowData.data.bookingReqStatus === 'Approved' || rowData.data.bookingReqStatus === 'Rejected'" />
                    </template>
                </Column>
            </DataTable>
        </div>

    </div>


</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
}

.adminBookings-container {
    margin-left: 60px;
    padding: 70px 100px;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}

.buttons-container {
    padding: 15px 0px;
}

#sort {
    padding: 0px;
    margin-left: 4px;
}

.tableBookings {
    margin-top: 0px;
}

button {
    padding: 5px;
    margin: 5px;
    border: none;
}

#approveButton {
    background-color: #31a533;
    color: #ffffff;
    width: 100px;
}

#rejectButton {
    background-color: #cf4545;
    color: #ffffff;
    width: 100px;

}

#detailsButton {
    background-color: rgb(197, 197, 197);

}
</style>