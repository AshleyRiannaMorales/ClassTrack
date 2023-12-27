<script setup>
import SideBarMenu from "../components/SideBarMenu.vue";
import TopBarMenu from "../components/TopBarMenu.vue";

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import { ref, computed } from "vue";



const schedWeek = ref([
    {
        id: 1,
        date: "1 January 2024",
        time: "9:00",
        course: "Object-Oriented Programming",
        instructor: "Michel Bolo",
        section: "BSIT 2B",
        roomNum: "202",
        status: "approved",
    },
    {
        id: 2,
        date: "1 January 2024",
        time: "9:00",
        course: "Web Applications Development 1",
        instructor: "Clyde Balaman",
        section: "BSIT 2A",
        roomNum: "203",
        status: "approved",
    }
]);

const confirmedBookings = computed(() => schedWeek.value.filter(item => item.status === "approved").length);

</script>

<template>
    <SideBarMenu />
    <TopBarMenu />
    <div class="adminDashboard-container">
        <span class="greetings">Welcome, Admin!</span>

        <div id="currentDate">
            <!-- needs JS -->
            Date here
        </div>

        <div class="overview-container">
            <h2 class="overview-title">Weekly Overview</h2>

            <div class="wrapper">
                <!-- Pending -->
                <div class="pending-wrapper">
                    <div class="pending-header">
                        <div class="pending-details">
                            <span class="title-wrapper">Pending</span>
                            <span class="value-wrapper">5 Bookings</span>
                        </div>
                        <i class="pi pi-inbox" style="font-size: 1.5rem"></i>
                    </div>
                </div>

                <!-- Confirmed -->
                <div class="pending-wrapper">
                    <div class="pending-header">
                        <div class="pending-details">
                            <span class="title-wrapper">Confirmed</span>
                            <span class="value-wrapper">{{ confirmedBookings }} Bookings</span>
                        </div>
                        <i class="pi pi-check-circle" style="font-size: 1.5rem"></i>
                    </div>
                </div>

                <!-- Cancelled -->
                <div class="pending-wrapper">
                    <div class="pending-header">
                        <div class="pending-details">
                            <span class="title-wrapper">Cancelled</span>
                            <span class="value-wrapper">1 Bookings</span>
                        </div>
                        <i class="pi pi-times-circle" style="font-size: 1.5rem"></i>
                    </div>
                </div>
            </div>
        </div>

        <!-- Schedule (Table) -->
        <div class="schedTable">
            <h1> Schedule </h1>

            <DataTable :value="schedWeek" tableStyle="min-width: 50rem; font-family: 'Inter', sans-serif;">
                <Column field="id" header="ID" style="color: #DD385A;"></Column>
                <Column field="date" header="Date" style="color: #DD385A;"></Column>
                <Column field="time" header="Time (24-Hour Format)" style="color: #DD385A;"></Column>
                <Column field="course" header="Course" style="color: #DD385A;"></Column>
                <Column field="instructor" header="Instructor" style="color: #DD385A;"></Column>
                <Column field="section" header="Section" style="color: #DD385A;"></Column>
                <Column field="roomNum" header="Lab. Room No." style="color: #DD385A;"></Column>
            </DataTable>
        </div>

    </div>
</template>

<style scoped>

.adminDashboard-container {
    padding: 70px 175px;
    font-family: 'Inter', sans-serif;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}

#currentDate {
    font-size: 18px;
}

.overview-container {
    background-color: #fff0f0;
    padding: 2rem;
    border-radius: 10px;
    margin-top: 20px;
}

.overview-title {
    margin-top: 0;
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.pending-wrapper {
    background: white;
    border-radius: 10px;
    padding: 1.2rem;
    width: 290px;
    height: 100px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.pending-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pending-details {
    display: flex;
    flex-direction: column;
}

.value-wrapper {
    display: flex;
    font-size: 20px;
}

.title-wrapper {
    font-size: 18px;
    font-weight: 700;
}

i {
    color: white;
    padding: 1rem;
    height: 60px;
    width: 60px;
    text-align: center;
    border-radius: 50%;
    font-size: 1.5rem;
    background-color: #DD385A;
    padding-top: 17px;
}

.schedTable {
    margin-top: 40px;
}


</style>