<script setup>
import SideBarMenu from "../../components/SideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import InstructorBookingsTable from "../../components/InstructorBookingsTable.vue";
import { ref } from 'vue';


const visible = ref(false);



</script>

<template>

    <SideBarMenu />
    <TopBarMenu />

    <div class="instructorBookings-container">

        <span class="greetings">Bookings</span>

        <!-- Buttons: Sorting, Filtering, Creating Request -->
        <div class="instructorBookings-buttons">


            <!-- Button for Dialog Box/Pop Up -->
            <Button id="bookingButton" @click="visible = true" label="Book a Schedule" icon="pi pi-plus" />

            <!-- Dialog Box/Pop Up for Creating Booking Request -->
            <Dialog v-model:visible="visible" modal header="Booking Request" style="font-family: 'Inter', sans-serif; color:#DD385A;" :style="{ width: '30rem' }">
            <span class="p-text-secondary block mb-5">Fill out the details.</span>
            <div class="fields">
                <label for="username" class="font-semibold w-6rem">Instructor ID</label>
                <InputText id="username" class="inputBox" autocomplete="off" />
            </div>
            <div class="fields">
                <label for="email" class="font-semibold w-6rem">Computer Lab. No.</label>
                <InputText id="email" class="inputBox" autocomplete="off" />
            </div>
            <div class="fields">
                <label for="email" class="font-semibold w-6rem">Booking Date</label>
                <InputText id="email" class="inputBox" autocomplete="off" />
            </div>
            <div class="fields">
                <label for="email" class="font-semibold w-6rem">Start Time</label>
                <InputText id="email" class="inputBox" autocomplete="off" />
            </div>
            <div class="fields">
                <label for="email" class="font-semibold w-6rem">End Time</label>
                <InputText id="email" class="inputBox" autocomplete="off" />
            </div>
            <div class="fields">
                <label for="email" class="font-semibold w-6rem">Purpose</label>
                <InputText id="email" class="inputBox" autocomplete="off" />
            </div>
            <div class="dialogButtons">
                <Button type="button" id="cancelButton" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" id="submitButton" label="Submit" @click="visible = false"></Button>
            </div>
        </Dialog>
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

#bookingButton {
    background-color: #DD385A;
}

.fields {
    margin: 15px 0;
}

.inputBox {
    margin-left: 15px;
}

.dialogButtons {
    padding-top: 15px;
}

#submitButton {
    margin-left: 10px;
    background-color:#DD385A
}

</style>