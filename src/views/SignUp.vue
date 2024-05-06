<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css'
import { ref } from 'vue';
import router from '../router';
import axios from 'axios';

import Message from 'primevue/message';


const instructorData = ref({
    instructorEmail: '',
    instructorUsername: '',
    instructorFname: '',
    instructorLname: '',
    instructorPass: '',
});

const navigateToHome = () => {
    router.push('/');
};


const signupInstructor = async () => {

    // Validate input fields
    if (!instructorData.value.instructorEmail || !instructorData.value.instructorUsername || !instructorData.value.instructorFname || !instructorData.value.instructorLname || !instructorData.value.instructorPass) {
        alert('Please fill out all required fields.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(instructorData.value.instructorEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    try {

        // Check if email already exists - INSERT HERE


        const formData = new FormData();
        formData.append('email', instructorData.value.instructorEmail);
        formData.append('username', instructorData.value.instructorUsername);
        formData.append('fname', instructorData.value.instructorFname);
        formData.append('lname', instructorData.value.instructorLname);
        formData.append('password', instructorData.value.instructorPass);

        const response = await axios.post('http://127.0.0.1:8000/api/signup/instructors', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        if (response.status === 200) {
            // Signup successful
            router.push('/instructordashboard');
        } else {
            // Handle specific error cases
            const errorData = response.data;
            if (errorData.error === 'ExistingEmail') {
                alert('Email already exists. Please use a different email address.');
            } else {
                alert('Signup failed: ' + errorData.error);
            }
        }
    } catch (error) {
        console.error('Error signing up instructor:', error);
        // Display error message or handle error
        alert('Error signing up instructor: ' + error.message);
    }
};

</script>


<template>
    <link
        href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&family=Inter:wght@400;500;700;900&family=Lexend&family=Poppins:wght@400;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://fonts.cdnfonts.com/css/cocogoose" rel="stylesheet">


    <div class="signup-container">
        <form @submit.prevent="signupInstructor">
            <div class="signupHeader">
                <Button icon="pi pi-chevron-left" class="backButton" @click="navigateToHome" text rounded
                    aria-label="Return" />
                <text id="signupTitle">Sign Up</text>
            </div>
            <div class="verificationNote">
                <Message :closable="false" severity="secondary" icon="pi pi-info-circle" style="background-color: #fce1e6; color: #DD385A;">
                    <div class="message-text-container">
                        <text class="p-message-text">For security, we want to make sure first that 
                        you are an official UIC Instructor.</text>
                    </div>
                </Message>

            </div>

            <div class="instructorID">
                <label for="instructorEmail">Instructor ID</label>
                <div class="p-inputgroup">
                    <InputText type="text" v-model="instructorData.instructorID" class="p-id-input" />
                </div>
            </div>

            <div class="instructorUsername">
                <label for="instructorEmail">Instructor Email</label>
                <div class="p-inputgroup">
                    <InputText type="text" v-model="instructorData.instructorEmail" class="p-email-input" />
                </div>
            </div>

            <div class="instructorFirstName">
                <label for="instructorFname">Instructor First Name</label>
                <div class="p-inputgroup">
                    <InputText type="text" v-model="instructorData.instructorFname" class="p-firstname-input" />
                </div>
            </div>

            <div class="instructorLastName">
                <label for="instructorLname">Instructor Last Name</label>
                <div class="p-inputgroup">
                    <InputText type="text" v-model="instructorData.instructorLname" class="p-lastname-input" />
                </div>
            </div>

            <Button type="submit" class="signupButton" label="Submit" />

            <div class="haveAccountContainer">
                <text id="haveAccount">Already have an account?</text>
                <router-link to="/instructorlogin"> <text id="logInLink">Log In</text> </router-link>
            </div>

        </form>

    </div>
</template>


<style scoped>
* {
    font-family: Inter, 'sans serif';
}

.signup-container {
    width: 270px;
    margin-top: 65px;
    margin-left: auto;
    margin-right: auto;
}

.signupHeader {
    margin-bottom: 30px;
}

#signupTitle {
    color: #DD385A;
    font-size: 33px;
    font-weight: 700;
    margin-left: 35px;
}

.verificationNote {
    margin-bottom: 30px;
}

.message-text-container {
    margin-left: 7px;
}

.p-message-text {
    font-size: 13px;
    color: #DD385A;
}

label {
    font-weight: 700;
    font-size: 15px;
    color: #DD385A;
}

.backButton {
    color: #DD385A;
}

.p-inputgroup {
    margin-bottom: 8%;
    width: 100%;
}

.signupButton {
    margin-top: 15px;
    font-size: 14px;
    font-weight: 600;
    background-color: #DD385A;
    color: white;
    width: 100%;
}

.signupButton:hover {
    background-color: #ff8fa5;
}

.haveAccountContainer {
    margin-top: 15px;
    text-align: center;
}

#haveAccount {
    font-size: 12px;
    color: #7D7D7D;
}

#logInLink {
    margin-left: 6px;
    font-weight: 700;
    font-size: 12px;
    color: #DD385A;
}

#logInLink:hover {
    color: #ff8fa5;
}
</style>