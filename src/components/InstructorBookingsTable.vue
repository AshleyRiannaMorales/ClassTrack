<script setup>
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import { ref, onMounted } from 'vue';
import axios from "axios";

const booking = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/booking-requests/newest-to-oldest');
        console.log('Bookings response data:', response.data);

        booking.value = response.data;
    } catch (error) {
        console.error('Error fetching bookings data:', error);
    }
});


</script>

<template>
    <div class="tableBookings">
        <DataTable :value="booking" tableStyle="max-width: 80rem; font-family: 'Inter', sans-serif;">
            <Column field="computerLabID" header="Room" style="color: #DD385A;"></Column>
            <Column field="bookingStartTime" header="Start Time" style="color: #DD385A;"></Column>
            <Column field="bookingEndTime" header="End Time" style="color: #DD385A;"></Column>
            <Column field="bookingPurpose" header="Purpose" style="color: #DD385A;"></Column>
            <Column field="bookingReqStatus" header="Status" style="color: #DD385A;"></Column>
            <Column field="" header="" style="color: #DD385A;">
                <template #body="rowData">
                    <Button icon="pi pi-bars" class="p-button-info" id="detailsButton"/>
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