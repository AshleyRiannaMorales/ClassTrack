<script setup>
import SideBarMenu from "../components/SideBarMenu.vue";
import TopBarMenu from "../components/TopBarMenu.vue";
import InstructorBookingsTable from "../components/InstructorBookingsTable.vue";
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';


import router from '../router';
import axios from 'axios';
import { ref } from 'vue';

import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';



const visible = ref(false);


const showDialog = () => {
  console.log("Button clicked");
  visible.value = true;
};

defineExpose({ visible });


</script>

<template>
    <SideBarMenu />
    <TopBarMenu />

    <div class="instructorBookings-container">
        <span class="greetings">Bookings</span>

        <div class="instructorBookings-buttons">

        </div>

        <div class="bookSchedule-container">
            <div class="bookSchedule">
            </div>

            <div class="bookingDialog">

                <Button label="Show" @click="showDialog" />
                <Dialog v-model:visible="visible" modal header="Fill out the information." :style="{ width: '25rem' }">
                    <span class="p-text-secondary block mb-5">Update your information.</span>
                    <div class="flex align-items-center gap-3 mb-3">
                        <label for="username" class="font-semibold w-6rem">Instructor ID</label>
                        <InputText id="username" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex align-items-center gap-3 mb-5">
                        <label for="email" class="font-semibold w-6rem">Computer Laboratory Room No.</label>
                        <InputText id="email" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex align-items-center gap-3 mb-5">
                        <label for="email" class="font-semibold w-6rem">Requested Date</label>
                        <InputText id="email" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex align-items-center gap-3 mb-5">
                        <label for="email" class="font-semibold w-6rem">Start Time</label>
                        <InputText id="email" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex align-items-center gap-3 mb-5">
                        <label for="email" class="font-semibold w-6rem">End Time</label>
                        <InputText id="email" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex align-items-center gap-3 mb-5">
                        <label for="email" class="font-semibold w-6rem">Purpose</label>
                        <InputText id="email" class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="flex justify-content-end gap-2">
                        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                        <Button type="button" label="Submit" @click="visible = false"></Button>
                    </div>
                </Dialog>

            </div>

            

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

.modalButton {
    background-color: #DD385A;
    border-radius: 7px;
}

.modal {
    display: none;
    /* Initially hidden */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent black background */
}

.modal-content {
    background-color: white;
    margin: 50px auto;
    padding: 30px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.bookingRequest-container {

    color: #DD385A;
}

.header {
    margin-bottom: 45px;
}

.headerTitle {
    font-size: 30px;
    font-weight: 700;
}

.form-container {
    width: 400px;
    margin-left: 70px;
}

.backButton {
    color: #DD385A;
    padding-bottom: 16px;
}

label {
    font-weight: 700;
    color: #DD385A;
}

.p-inputgroup {
    margin-bottom: 20px;
    width: 100%;
}

.button-container {
    display: flex;
    justify-content: center;
}

.submitButton {
    background-color: #DD385A;
    margin-top: 15px;
}
</style>