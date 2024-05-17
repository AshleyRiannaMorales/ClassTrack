<script setup>
import AdminSideBarMenu from "../../components/AdminSideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import { ref, onMounted } from 'vue';
import axios from "axios";
import { useToast } from 'primevue/usetoast';
import { FilterMatchMode } from 'primevue/api';


const toast = useToast();

const bookingReq = ref();
const filteredBookings = ref([]);


const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

const selectedOption = ref({ option: 'Newest', api: 'newest-to-oldest' });
const sortOptions = [
    { option: 'Newest', api: 'newest-to-oldest' },
    { option: 'Oldest', api: 'oldest-to-newest' }
];

const selectedFilterOption = ref({ status: 'All' });
const filterOptions = [
    { status: 'All' },
    { status: 'Pending' },
    { status: 'Approved' },
    { status: 'Cancelled' },
    { status: 'Rejected' },
];

onMounted(() => {
    fetchData().then(() => {
        applyFilter();
    });
});

async function fetchData() {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/booking-requests/${selectedOption.value.api}`);
        console.log('Bookings response data:', response.data);
        bookingReq.value = response.data;
    } catch (error) {
        console.error('Error fetching bookings data:', error);
    }
}

const applyFilter = () => {
    console.log('Selected Filter Option:', selectedFilterOption.value);

    // Check if a status filter option is selected
    if (selectedFilterOption.value.status !== 'All') {
        filteredBookings.value = bookingReq.value.filter(bookingReq => bookingReq.bookingReqStatus === selectedFilterOption.value.status);
    } else {
        // If 'All' status filter option is selected, show all bookings
        filteredBookings.value = bookingReq.value;
    }

    console.log('Filtered Bookings:', filteredBookings.value);
};

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

const getTextColorStyle = (status) => {
    switch (status) {
        case 'Approved':
            return { color: 'green', fontWeight: '600' }; // Change text color to green for Approved
        case 'Pending':
            return { color: 'orange', fontWeight: '600' }; // Change text color to orange for Pending
        case 'Rejected':
            return { color: 'red', fontWeight: '600' }; // Change text color to red for Rejected
        case 'Cancelled':
            return { color: 'gray', fontWeight: '600' }; // Change text color to gray for Cancelled
        default:
            return null;
    }
};

const showRejectDialog = ref(false);
const rejectReason = ref('');

const rejectBooking = (bookingRequestId) => {
    // Show the reject dialog
    showRejectDialog.value = true;
    // Assign the booking request ID to a data property for later use
    bookingRequestIdToReject = bookingRequestId;
};

let bookingRequestIdToReject = null;

const cancelReject = () => {
    // Reset rejectReason and hide the dialog
    rejectReason.value = '';
    showRejectDialog.value = false;
    // Reset the booking request ID
    bookingRequestIdToReject = null;
};

const confirmReject = async () => {
    try {
        // Perform the rejection action here, using the bookingRequestIdToReject and rejectReason
        console.log('Rejecting booking request with ID:', bookingRequestIdToReject);
        console.log('Reason for rejection:', rejectReason.value);
        // After performing the rejection action, you can close the dialog
        showRejectDialog.value = false;
        // Reset the rejectReason and bookingRequestIdToReject
        rejectReason.value = '';
        bookingRequestIdToReject = null;
    } catch (error) {
        console.error('Error rejecting booking request:', error);
        // Handle errors if necessary
    }
};

</script>

<template>
    <AdminSideBarMenu />
    <TopBarMenu />

    <div class="adminBookings-container">
        <span class="greetings">Bookings</span>

        <div class="buttons-container">
            <span class="sortButton">
                <label for="dropdown"> Sort By: </label>
                <Dropdown id="sort" v-model="selectedOption" :options="sortOptions" optionLabel="option"
                    placeholder="Date" checkmark :highlightOnSelect="false" class="w-full md:w-14rem"
                    @change="fetchData" />
            </span>

            <span class="filterButton">
                <label for="dropdown" id="filterLabel"> Status: </label>
                <Dropdown id="sort" v-model="selectedFilterOption" :options="filterOptions" optionLabel="status"
                    placeholder="Status" checkmark :highlightOnSelect="false" class="w-full md:w-14rem"
                    @change="applyFilter" />
            </span>
        </div>

        <div class="tableBookings">
            <DataTable :value="filteredBookings" tableStyle="max-width: 80rem; font-family: 'Inter', sans-serif;"
                v-model:filters="filters" :globalFilterFields="['instructorName']">
                <template #header>
                    <div class="flex justify-content-end">
                        <InputText v-model="filters.global.value" placeholder="Search Instructor" />
                    </div>
                </template>

                <Column field="bookingRequestID" header="ID" style="color: #DD385A; height: 70px"></Column>
                <Column field="instructorName" header="Instructor" style="color: #DD385A; height: 70px"></Column>
                <Column field="computerLabID" header="Room" style="color: #DD385A; height: 70px"></Column>
                <Column field="bookingDate" header="Date" style="color: #DD385A; height: 70px"></Column>
                <Column field="bookingStartTime" header="Start Time" style="color: #DD385A; height: 70px"></Column>
                <Column field="bookingEndTime" header="End Time" style="color: #DD385A; height: 70px"></Column>
                <Column field="bookingPurpose" header="Purpose" style="color: #DD385A; height: 70px"></Column>
                <Column field="bookingReqStatus" header="Status" style="color: #DD385A; height: 70px">
                    <template #body="slotProps">
                        <span :style="getTextColorStyle(slotProps.data.bookingReqStatus)">
                            {{ slotProps.data.bookingReqStatus }}
                        </span>
                    </template>
                </Column>
                <Column field="" header="Actions" style="color: #DD385A;">
                    <template #body="rowData">
                        <Button v-if="rowData.data.bookingReqStatus !== 'Cancelled'"
                            @click="approveBooking(rowData.data.bookingRequestID)" label="Approve" icon="pi pi-check"
                            id="approveButton" class="p-button-info"
                            :disabled="rowData.data.bookingReqStatus === 'Approved' || rowData.data.bookingReqStatus === 'Rejected'" />
                        <Button v-if="rowData.data.bookingReqStatus !== 'Cancelled'"
                            @click="rejectBooking(rowData.data.bookingRequestID)" label="Reject" icon="pi pi-times"
                            class="p-button-info" id="rejectButton"
                            :disabled="rowData.data.bookingReqStatus === 'Approved' || rowData.data.bookingReqStatus === 'Rejected'" />

                    </template>
                </Column>
            </DataTable>

            <Dialog v-model:visible="showRejectDialog" header="Reject Booking Request" modal style="width: 30rem;">
                <div class="dialogContent">
                    <div class="p-fluid">
                        <div class="p-field">
                            <label for="rejectReason" id="reasonLabel">Reason for Rejection:</label>
                            <Textarea id="rejectReason" v-model="rejectReason" rows="2" autoResize />
                        </div>
                    </div>
                    <div class="p-dialog-footer">
                        <Button label="Cancel" id="dialogCancel" icon="pi pi-times" class="p-button-text"
                            @click="cancelReject" />
                        <Button label="Reject" id="dialogReject" icon="pi pi-check" class="p-button-text"
                            @click="confirmReject" />
                    </div>
                </div>
            </Dialog>
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

.filterButton {
    margin-left: 15px;
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

.dialogContent {
    margin-top: 5px;
}

#reasonLabel {
    font-weight: 600;
}

#rejectReason {
    /* For Textarea */
    margin-top: 5px;
}

.p-dialog-footer {
    margin-top: 10px;
    padding: 0;
}

.p-button-text {
    font-weight: 500;
}

#dialogReject {
    background-color: #DD385A;
    color: #ffffff;
    padding: 9px;
}

#dialogCancel {
    background-color: #607D8B;
    color: #ffffff;
    padding: 9px;
}
</style>