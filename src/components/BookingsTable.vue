<script setup>
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';

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
    }
]);

const displayConfirmDialog = ref(false);
const selectedBooking = ref(null);

const showConfirmDialog = (rowData) => {
    selectedBooking.value = rowData;
    displayConfirmDialog.value = true;
};

const confirmAction = (approved) => {
    // Logic to execute when the user clicks "Yes" or "No" in the ConfirmDialog
    displayConfirmDialog.value = false;

    if (approved) {
        // Logic to update the booking status to "Approved"
        selectedBooking.value.bookingStatus = "Approved";
    }
};

const rejectAction = () => {
    // Logic to execute when the user clicks "No" in the ConfirmDialog
    displayConfirmDialog.value = false;
};



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
                    <Button :label="rowData.bookingStatus === 'Pending' ? 'Pending' : 'Approved'"
                        :icon="rowData.bookingStatus === 'Pending' ? 'pi pi-spinner' : 'pi pi-check'"
                        :class="rowData.bookingStatus === 'Pending' ? 'p-button-info' : 'p-button-success'"
                        @click="rowData.bookingStatus === 'Pending' ? showConfirmDialog(rowData) : null"></Button>
                </template>
            </Column>
        </DataTable>

        <ConfirmDialog v-model="displayConfirmDialog" @confirm="() => confirmAction(true)" @reject="rejectAction">
            <template #message>
                <span>Do you want to approve this booking request?</span>
            </template>
        </ConfirmDialog>
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
    background-color: #fff0f0;
    color: #DD385A;
}
</style>

