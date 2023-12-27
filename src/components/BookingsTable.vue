<script setup>
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import { ref } from "vue";


const booking = ref([
    {
        id: 1,
        instructorID: 500001,
        roomNum: 201,
        bookingRequestDate: "24 December 2023",
        bookingPurpose: "Meeting",
        bookingStartTime: "14:30",
        bookingEndTime: "16:00",
        bookingStatus: "Approved"
    },
    {
        id: 2,
        instructorID: 500002,
        roomNum: 202,
        bookingRequestDate: "25 December 2023",
        bookingPurpose: "Class",
        bookingStartTime: "10:00",
        bookingEndTime: "12:00",
        bookingStatus: "Pending"
    }
]);


</script>


<template>
    <div class="tableBookings">
        <DataTable :value="booking" tableStyle="max-width: 100rem; font-family: 'Inter', sans-serif;">
            <Column field="roomNum" header="Lab. Room No." style="color: #DD385A;"></Column>
            <Column field="bookingRequestDate" header="Booking Date" style="color: #DD385A;"></Column>
            <Column field="bookingStartTime" header="Start Time" style="color: #DD385A;"></Column>
            <Column field="bookingEndTime" header="End Time" style="color: #DD385A;"></Column>
            <Column field="bookingStatus" header="Status" style="color: #DD385A;">
                <template #body="rowData">
                    <Button label="Pending" icon="pi pi-spinner" class="p-button-info" id="pendingStatus" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>


<style scoped>
* {
    padding: 15px 0px;
}

button {
    padding: 5px;
}

.p-button-info {
    
}

#pendingStatus {
    background-color: #fff0f0;
    color: #DD385A;
}
</style>

