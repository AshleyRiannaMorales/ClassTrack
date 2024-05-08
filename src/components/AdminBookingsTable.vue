<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

const bookingReq = ref(null);


onMounted(async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/booking-requests/newest-to-oldest');
        console.log('Bookings response data:', response.data);

        bookingReq.value = response.data;
    } catch (error) {
        console.error('Error fetching bookings data:', error);
    }
});


</script>

<template>
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
                    <Button label="Approve" icon="pi pi-check" id="approveButton" class="p-button-info" />
                    <Button label="Reject" icon="pi pi-times" class="p-button-info" id="rejectButton" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
    padding: 15px 0px;
    font-size: 15px
}

button {
    padding: 5px;
    margin: 5px;
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