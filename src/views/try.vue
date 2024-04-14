<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css'
import Password from 'primevue/password';
import router from '../router';

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
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <link
        href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&family=Inter:wght@400;500;700;900&family=Lexend&family=Poppins:wght@400;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://fonts.cdnfonts.com/css/cocogoose" rel="stylesheet">

    <div>
    <!-- Button to trigger the modal -->
    <button @click="openModal">Open Modal</button>

    <!-- Modal component -->
    <div ref="modal" class="modal">
      <div class="modal-content">
        <!-- Close button -->
        <span class="close" @click="closeModal">&times;</span>

        <!-- Modal content -->
        <p>This is a pop-up window.</p>
      </div>
    </div>
  </div>

</template>


<style scoped>

.modal {
  display: none; /* Initially hidden */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
}

.modal-content {
  background-color: white;
  margin: 15% auto;
  padding: 20px;
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

</style>