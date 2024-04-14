<script setup>
import SideBarMenu from "../components/SideBarMenu.vue";
import TopBarMenu from "../components/TopBarMenu.vue";
import InstructorBookingsTable from "../components/InstructorBookingsTable.vue";


</script>

<template>
    <SideBarMenu />
    <TopBarMenu />

    <div class="instructorBookings-container">
        <span class="greetings">Bookings</span>

        

        <InstructorBookingsTable />

    </div>


</template>

<style scoped>
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
</style>