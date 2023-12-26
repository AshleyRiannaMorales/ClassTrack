<script setup>
import SideBarMenu from "../components/SideBarMenu.vue";
import TopBarMenu from "../components/TopBarMenu.vue";


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
            <h2 class="overview-title">Overview</h2>

            <!-- Pending -->
            <div class="pending-wrapper">
                <div class="pending-wrapper-2">
                    <div class="pending-header">
                        <div class="pending-details">
                            <span class="title-wrapper">Pending</span>
                            <span class="value-wrapper">5 Bookings</span>
                        </div>
                        <i class="pi pi-inbox" style="font-size: 1.5rem"></i>
                    </div>
                </div>
            </div>

            <!-- Confirmed -->
            

            <!-- Cancelled -->
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
    font-size: 36px;
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

.pending-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    
}

.pending-wrapper-2 {
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
}

</style>