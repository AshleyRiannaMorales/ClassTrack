<script setup>
import SideBarMenu from "../../components/SideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import InstructorBookingsTable from "../../components/InstructorBookingsTable.vue";
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';



import { ref } from 'vue';


</script>

<template>

    <SideBarMenu />
    <TopBarMenu />

    <div class="instructorBookings-container">

        <span class="greetings">Bookings</span>

        <!-- Buttons: Sorting, Filtering, Creating Request -->


        <div class="instructorBookings-buttons">


            <Button class="modalButton" label="Book a Schedule" icon="pi pi-plus" />
        </div>

        <!-- Modal/Popup: Creating Request -->
        <div class="bookSchedule-container">

        </div>

        <InstructorBookingsTable />

    </div>


</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
}

.instructorBookings-container {
    margin-left: 60px;
    padding: 70px 100px;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}

.modalButton {
    background-color: #DD385A;
}
</style>