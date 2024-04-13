<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css'
import Password from 'primevue/password';
import router from '../router';

const navigateToHome = () => {
    router.push('/');
};


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


    <div class="signup-container">

        <div class="signupHeader">
            <Button icon="pi pi-chevron-left" class="backButton" @click="navigateToHome" text rounded aria-label="Return" />
            <text id="signupTitle">Sign Up</text>
        </div>

        <div class="instructorUsername">
            <label for="instructorID">Instructor Username</label>
            <div class="p-inputgroup">
                <InputText type="text" v-model="instructorID" class="p-username-input" />
            </div>
        </div>

        <div class="instructorFirstName">
            <label for="instructorFname">Instructor First Name</label>
            <div class="p-inputgroup">
                <InputText type="text" v-model="instructorFname" class="p-firstname-input" />
            </div>
        </div>

        <div class="instructorLastName">
            <label for="instructorLname">Instructor Last Name</label>
            <div class="p-inputgroup">
                <InputText type="text" v-model="instructorLname" class="p-lastname-input" />
            </div>
        </div>

        <div class="instructorPassword">
            <label for="instructorPass">Password</label>
            <div class="p-inputgroup">
                <Password type="text" v-model="instructorPass" class="p-password-input" />
            </div>
        </div>

        <Button type="submit" class="signupButton" label="Sign Up" />

        <div class="haveAccountContainer">
            <text id="haveAccount">Already have an account?</text>
            <router-link to="/LogIn"> <text id="logInLink">Log In</text> </router-link>
        </div>

    </div>

</template>


<style scoped>

* {
    font-family: Inter, 'sans serif';
}

.signup-container {
    width: 270px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
}

.signupHeader {
    margin-bottom: 50px;
}

#signupTitle {
    color: #DD385A;
    font-size: 33px;
    font-weight: 700;
    margin-left: 15%;
}

label {
    font-weight: 700;
    font-size: 15px;
    color: #DD385A;
}

.backButton {
    color:#DD385A;
}

.p-inputgroup {
    margin-bottom: 8%;
    width: 100%;
}

.signupButton {
    margin-top: 30px;
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
    color:#DD385A;
}

#logInLink:hover {
    color: #ff8fa5;
}

</style>