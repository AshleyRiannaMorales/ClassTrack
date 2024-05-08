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
    { roomNum: '201' },
    { roomNum: '202' },
    { roomNum: '203' },
    { roomNum: '204' },
    { roomNum: '205' }
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
            
            clearInputFields();
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
    // Convert date objects to strings
    const bookingDate = bookingRequestData.value.bookingDate instanceof Date ? bookingRequestData.value.bookingDate.toLocaleDateString() : bookingRequestData.value.bookingDate;
    const bookingStartTime = bookingRequestData.value.bookingStartTime instanceof Date ? bookingRequestData.value.bookingStartTime.toLocaleTimeString() : bookingRequestData.value.bookingStartTime;
    const bookingEndTime = bookingRequestData.value.bookingEndTime instanceof Date ? bookingRequestData.value.bookingEndTime.toLocaleTimeString() : bookingRequestData.value.bookingEndTime;

    // Convert instructorID to integer
    const instructorID = parseInt(bookingRequestData.value.instructorID);

    // Convert computerLabID to integer if it's not already
    let computerLabID = bookingRequestData.value.computerLabID;
    if (typeof computerLabID === 'object') { // Assuming computerLabID is an object
        computerLabID = parseInt(computerLabID.roomNum);
    } else if (typeof computerLabID === 'string') { // Assuming computerLabID is a string
        computerLabID = parseInt(computerLabID);
    }

    const bookingPurpose = bookingRequestData.value.bookingPurpose;

    // Update the bookingRequestData object with the modified data
    bookingRequestData.value = {
        ...bookingRequestData.value,
        instructorID,
        computerLabID,
        bookingDate,
        bookingStartTime,
        bookingEndTime,
        bookingPurpose
    };

    // Now the bookingRequestData object contains the modified data
    console.log("Updated Booking Request Data:", bookingRequestData.value);
    
    bookSchedule();
};

const clearInputFields = () => {
    // Reset all input fields to initial state
    bookingRequestData.value.instructorID = '';
    bookingRequestData.value.computerLabID = '';
    bookingRequestData.value.bookingDate = '';
    bookingRequestData.value.bookingStartTime = '';
    bookingRequestData.value.bookingEndTime = '';
    bookingRequestData.value.bookingPurpose = '';
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
                        <Dropdown v-model="bookingRequestData.computerLabID" :options="rooms" optionLabel="roomNum" placeholder="Select a Room"
                            checkmark :highlightOnSelect="false" class="dropdownField" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">Booking Date</label>
                        <Calendar v-model="bookingRequestData.bookingDate" dateFormat="dd/mm/yy" class="calendarField" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">Start Time</label>
                        <Calendar id="calendar-timeonly" v-model="bookingRequestData.bookingStartTime" timeOnly class="timeField-start" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">End Time</label>
                        <Calendar id="calendar-timeonly" v-model="bookingRequestData.bookingEndTime" timeOnly class="timeField-end" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">Purpose</label>
                        <InputText id="purpose" class="inputBox" autocomplete="off"
                            v-model="bookingRequestData.bookingPurpose" placeholder="(e.g., Course Name, Meeting, Event Name)" />
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

#purpose {
    width: 320px;
}

.dialogButtons {
    padding-top: 15px;
}

#submitButton {
    margin-left: 10px;
    background-color: #DD385A
}
</style>