<script setup>
import SideBarMenu from "../components/SideBarMenu.vue";
import TopBarMenu from "../components/TopBarMenu.vue";
import BookingsTable from "../components/BookingsTable.vue";

</script>

<template>
    <SideBarMenu />
    <TopBarMenu />

    <div class="adminBookings-container">
        <span class="greetings">Bookings</span>
        <BookingsTable />
    </div>

    
</template>

<style scoped>

.adminBookings-container {
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