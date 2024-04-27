<script setup>
import SideBarMenu from "../../components/SideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import AdminBookingsTable from "../../components/AdminBookingsTable.vue";


</script>

<template>
    <SideBarMenu />
    <TopBarMenu />

    <div class="adminBookings-container">
        <span class="greetings">Bookings</span>

        <div class="instructorBookings-buttons">





        </div>

        <AdminBookingsTable />
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
</style>