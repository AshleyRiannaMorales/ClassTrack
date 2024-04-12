<script setup>
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import { ref } from "vue";

const booking = ref([
    {
        instructor: "Gelo Yaco",
        bookingDate: "12 April 2024",
        bookingStartTime: "14:30",
        bookingEndTime: "16:00",
        bookingPurpose: "Web Applications Development 2",
        labRoom: "203",
        bookingStatus: "Pending"
    },
]);

</script>

<template>
    <div class="tableBookings">
        <DataTable :value="booking" tableStyle="max-width: 80rem; font-family: 'Inter', sans-serif;">
            <Column field="instructor" header="Instructor" style="color: #DD385A;"></Column>
            <Column field="bookingDate" header="Booking Date" style="color: #DD385A;"></Column>
            <Column field="bookingStartTime" header="Start Time" style="color: #DD385A;"></Column>
            <Column field="bookingEndTime" header="End Time" style="color: #DD385A;"></Column>
            <Column field="bookingPurpose" header="Purpose" style="color: #DD385A;"></Column>
            <Column field="labRoom" header="Lab. Room No." style="color: #DD385A;"></Column>
            <Column field="bookingStatus" header="Status" style="color: #DD385A;"></Column>
            <Column field="" header="Actions" style="color: #DD385A;">
                <template #body="rowData">
                    <Button label="Approve" icon="pi pi-check" class="p-button-info" id="approveButton"/>
                    <Button label="Reject" icon="pi pi-times" class="p-button-info" id="rejectButton"/>
                    <Button icon="pi pi-bars" class="p-button-info" id="detailsButton"/>
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