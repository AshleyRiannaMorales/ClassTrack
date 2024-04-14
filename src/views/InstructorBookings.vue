<script setup>
import SideBarMenu from "../components/SideBarMenu.vue";
import TopBarMenu from "../components/TopBarMenu.vue";
import InstructorBookingsTable from "../components/InstructorBookingsTable.vue";
import Button from 'primevue/button';



</script>

<template>
    <SideBarMenu />
    <TopBarMenu />

    <div class="instructorBookings-container">
        <span class="greetings">Bookings</span>

        <div class="instructorBookings-buttons">

            

            <Button icon="pi pi-plus" label="Create Booking" id="createButton" />
        </div>

        <InstructorBookingsTable />




    </div>


</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
}

.instructorBookings-container {
    margin-left: 60px;
    padding: 70px 100px;
    font-family: 'Inter', sans-serif;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}

.instructorBookings-buttons {
    margin-top: 10px;
}

#createButton {
    background-color: #DD385A;
}
</style>