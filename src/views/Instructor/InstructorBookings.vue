<script setup>
import SideBarMenu from "../../components/SideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import InstructorBookingsTable from "../../components/InstructorBookingsTable.vue";
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import router from '../../router';
import axios from 'axios';
import { ref } from 'vue';

const useModal = () => {
    const modal = ref(null);

    const openModal = () => {
        modal.value.style.display = 'block';
    };

    const closeModal = () => {
        modal.value.style.display = 'none';
    };

    return { modal, openModal, closeModal };
};

const { modal, openModal, closeModal } = useModal();

const bookingRequestData = ref({
    instructorID: '',
    computerLabID: '',
    bookingDate: '',
    bookingStartTime: '',
    bookingEndTime: '',
    bookingPurpose: '',
});

const bookSchedule = async () => {


    try {
        const formData = new FormData();
        formData.append('instructor_id', bookingRequestData.value.instructorID);
        formData.append('computer_lab_id', bookingRequestData.value.computerLabID);
        formData.append('booking_date', bookingRequestData.value.bookingDate);
        formData.append('booking_start_time', bookingRequestData.value.bookingStartTime);
        formData.append('booking_end_time', bookingRequestData.value.bookingEndTime);
        formData.append('booking_purpose', bookingRequestData.value.bookingPurpose);

        const response = await axios.post('http://127.0.0.1:8000/api/booking-requests/', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        if (response.status === 200) {
            alert("Booking request sent.");
            // Submitting booking request successful
            router.push('/instructorbookings');
        }
    } catch (error) {
        console.error('Error submitting booking request:', error);
        // Display error message or handle error
        alert('Error submitting booking request: ' + error.message);
    }
};



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
            <!-- Button to trigger the modal -->
            <Button @click="openModal" class="modalButton" label="Book a Schedule" icon="pi pi-plus" />


            <!-- Modal component -->
            <div ref="modal" class="modal">
                <div class="modal-content">
                    <!-- Close button -->
                    <span class="close" @click="closeModal">&times;</span>

                    <!-- Modal content -->
                    <div class="bookingRequest-container">
                        <form @submit.prevent="bookSchedule">
                            <div class="header">
                                <span class="headerTitle">Booking Request</span>
                            </div>

                            <div class="form-container">
                                <div class="bookingInstructor">
                                    <label for="computerLab"> Instructor ID </label>
                                    <div class="p-inputgroup">
                                        <InputText type="text" v-model="bookingRequestData.instructorID" class="p-comlab-input" />
                                    </div>
                                </div>
                                <div class="bookingComputerLab">
                                    <label for="computerLab"> Computer Laboratory Room No. </label>
                                    <div class="p-inputgroup">
                                        <InputText type="text" v-model="bookingRequestData.computerLabID" class="p-comlab-input" />
                                    </div>
                                </div>
                                <div class="bookingDate">
                                    <label for="date"> Requested Date </label>
                                    <div class="p-inputgroup">
                                        <InputText type="text" v-model="bookingRequestData.bookingDate" class="p-date-input" />
                                    </div>
                                </div>
                                <div class="bookingStartTime">
                                    <label for="computerLab"> Start Time </label>
                                    <div class="p-inputgroup">
                                        <InputText type="text" v-model="bookingRequestData.bookingStartTime" class="p-comlab-input" />
                                    </div>
                                </div>
                                <div class="bookingEndTime">
                                    <label for="computerLab"> End Time </label>
                                    <div class="p-inputgroup">
                                        <InputText type="text" v-model="bookingRequestData.bookingEndTime" class="p-comlab-input" />
                                    </div>
                                </div>
                                <div class="bookingPurpose">
                                    <label for="computerLab"> Purpose of Booking </label>
                                    <div class="p-inputgroup">
                                        <InputText type="text" v-model="bookingRequestData.bookingPurpose" class="p-comlab-input" />
                                    </div>
                                </div>

                                <div class="button-container">
                                    <Button type="submit" class="submitButton" label="Submit" />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
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