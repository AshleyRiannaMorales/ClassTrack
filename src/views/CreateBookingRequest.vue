<script setup>
import SideBarMenu from "../components/SideBarMenu.vue";
import TopBarMenu from "../components/TopBarMenu.vue";
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css'

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

</script>

<template>
    <SideBarMenu />
    <TopBarMenu />

<div class="bookingRequest-container">
	<div class="header">
            <router-link to="/instructorbookings">
                <Button icon="pi pi-chevron-left" class="backButton" text rounded aria-label="Return" />
            </router-link>
            <span class="headerTitle">Booking Request</span>
        </div>

    <div class="bookSchedule">
        <!-- Button to trigger the modal -->
        <button @click="openModal" class="modalButton">Book a Schedule</button>

        <!-- Modal component -->
        <div ref="modal" class="modal">
            <div class="modal-content">
                <!-- Close button -->
                <span class="close" @click="closeModal">&times;</span>

                <!-- Modal content -->
                <div class="bookingRequest-container">

                    <div class="header">
                        <span class="headerTitle">Booking Request</span>
                    </div>

                    <div class="form-container">
                        <div class="bookingComputerLab">
                            <label for="computerLab"> Computer Laboratory Room No. </label>
                            <div class="p-inputgroup">
                                <InputText type="text" class="p-comlab-input" />
                            </div>
                        </div>
                        <div class="bookingDate">
                            <label for="date"> Requested Date </label>
                            <div class="p-inputgroup">
                                <InputText type="text" class="p-date-input" />
                            </div>
                        </div>
                        <div class="bookingStartTime">
                            <label for="computerLab"> Start Time </label>
                            <div class="p-inputgroup">
                                <InputText type="text" class="p-comlab-input" />
                            </div>
                        </div>
                        <div class="bookingEndTime">
                            <label for="computerLab"> End Time </label>
                            <div class="p-inputgroup">
                                <InputText type="text" class="p-comlab-input" />
                            </div>
                        </div>
                        <div class="bookingPurpose">
                            <label for="computerLab"> Purpose of Booking </label>
                            <div class="p-inputgroup">
                                <InputText type="text" class="p-comlab-input" />
                            </div>
                        </div>

                        <div class="button-container">
                            <Button type="submit" class="submitButton" label="Submit" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}

.modalButton {
    margin: 70px 175px;
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
  margin: 85px auto;
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