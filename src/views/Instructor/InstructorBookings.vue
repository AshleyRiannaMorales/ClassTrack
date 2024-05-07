<script setup>
import SideBarMenu from "../../components/SideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import InstructorBookingsTable from "../../components/InstructorBookingsTable.vue";
import axios from 'axios';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';


const toast = useToast();


const visible = ref(false);

const rooms = ref([
    { name: '201', code: '201' },
    { name: '202', code: '202' },
    { name: '203', code: '203' },
    { name: '204', code: '204' },
    { name: '205', code: '205' }
]);


const bookingRequestData = ref({
    instructorID: '',
    computerLabID: '',
    bookingDate: '',
    bookingStartTime: '',
    bookingEndTime: '',
    bookingPurpose: '',
});

const bookSchedule = async () => {

    // Validate input fields
    if (!bookingRequestData.value.instructorID || !bookingRequestData.value.computerLabID || !bookingRequestData.value.bookingDate || !bookingRequestData.value.bookingStartTime || !bookingRequestData.value.bookingEndTime || !bookingRequestData.value.bookingPurpose) {
        toast.add({
            severity: 'error',
            summary: 'Submission Error.',
            detail: 'Please fill out all fields.',
            life: 3000
        });
        return;
    }

    try {
        const formData = new FormData();
        formData.append('instructorID', bookingRequestData.value.instructorID);
        formData.append('computer_lab_id', bookingRequestData.value.computerLabID);
        formData.append('booking_date', bookingRequestData.value.bookingDate);
        formData.append('booking_start_time', bookingRequestData.value.bookingStartTime);
        formData.append('booking_end_time', bookingRequestData.value.bookingEndTime);
        formData.append('booking_purpose', bookingRequestData.value.bookingPurpose);


        console.log('FormData:', formData);

        const response = await axios.post('http://127.0.0.1:8000/api/booking-requests/', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });


        if (response.status === 200) {
            toast.add({
            severity: 'success',
            summary: 'Submission Success.',
            detail: 'Booking Request sent!',
            life: 3000
            });
            // Submitting booking request successful
            
            visible.value = false;
        }
    } catch (error) {
        console.error('Error submitting booking request:', error);
        if (error.response) {
            console.error('Server responded with status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
        // Display error message or handle error
        alert('Error submitting booking request: ' + error.message);
    }
};

const submitBookingRequest = () => {
    bookSchedule();
};


</script>

<template>

    <SideBarMenu />
    <TopBarMenu />
    <Toast />

    <div class="instructorBookings-container">

        <span class="greetings">Bookings</span>

        <!-- Buttons: Sorting, Filtering, Creating Request -->
        <div class="instructorBookings-buttons">


            <!-- Button for Dialog Box/Pop Up -->
            <Button id="bookingButton" @click="visible = true" label="Book a Schedule" icon="pi pi-plus" />

            <!-- Dialog Box/Pop Up for Creating Booking Request -->

            <Dialog v-model:visible="visible" modal header="Booking Request" style="font-family: 'Inter', sans-serif;"
                :style="{ width: '30rem' }">
                <span class="p-text-secondary block mb-5">Fill out the details.</span>
                <form @submit.prevent="bookSchedule">
                    <div class="fields">
                        <label for="username" class="font-semibold w-6rem">Instructor ID</label>
                        <InputText id="username" class="inputBox" autocomplete="off"
                            v-model="bookingRequestData.instructorID" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">Computer Lab. No.</label>
                        <InputText id="username" class="inputBox" autocomplete="off"
                            v-model="bookingRequestData.computerLabID" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">Booking Date</label>
                        <InputText id="username" class="inputBox" autocomplete="off"
                            v-model="bookingRequestData.bookingDate" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">Start Time</label>
                        <InputText id="username" class="inputBox" autocomplete="off"
                            v-model="bookingRequestData.bookingStartTime" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">End Time</label>
                        <InputText id="username" class="inputBox" autocomplete="off"
                            v-model="bookingRequestData.bookingEndTime" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">Purpose</label>
                        <InputText id="email" class="inputBox" autocomplete="off"
                            v-model="bookingRequestData.bookingPurpose" />
                    </div>
                    <div class="dialogButtons">
                        <Button type="button" id="cancelButton" label="Cancel" severity="secondary"
                            @click="visible = false"></Button>
                            <Button type="button" id="submitButton" label="Submit" @click="submitBookingRequest"></Button>
                    </div>
                </form>

            </Dialog>



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

label {
    font-weight: 500;
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

.dropdownField {
    margin-left: 15px;
}

.calendarField {
    margin-left: 15px;
}

.timeField-start {
    margin-left: 15px;
}

.timeField-end {
    margin-left: 15px;
}

.dialogButtons {
    padding-top: 15px;
}

#submitButton {
    margin-left: 10px;
    background-color: #DD385A
}
</style>