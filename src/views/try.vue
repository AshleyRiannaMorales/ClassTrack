<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css'
import Password from 'primevue/password';
import router from '../router';

import { ref, computed } from "vue";


const admin = ref([
    {
        userID: 100001,
        password: "openlabstaff"
    }
]);

const instructor = ref([
    {
        userID: 500001,
        password: "instructor"
    }
]);

const navigateToHome = () => {
    router.push('/');
};

const userID = ref("");
const userPass = ref("");

const checkUser = () => {
    const isAdmin = admin.value.some(adminUser => adminUser.userID == userID.value && adminUser.password == userPass.value);
    const isInstructor = instructor.value.some(instructorUser => instructorUser.userID == userID.value && instructorUser.password == userPass.value);

    if (isAdmin) {
        router.push('/AdminDashboard');
    } else if (isInstructor) {
        router.push('/InstructorDashboard');
    } else {
        alert("Invalid user credentials. Try again.");
    }
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

    <div class="login-container">

        <div class="loginHeader">
            <Button icon="pi pi-chevron-left" class="backButton" @click="navigateToHome" text rounded aria-label="Return" />
            <text id="loginTitle">Log In</text>
        </div>

        <div class="userUsername">
            <label for="userID">Username</label>
            <div class="p-inputgroup">
                <InputText type="text" v-model="userID" class="p-username-input" />
            </div>
        </div>

        <div class="userPassword">
            <label for="userPass">Password</label>
            <div class="p-inputgroup">
                <Password type="text" v-model="userPass" class="p-password-input" />
            </div>
        </div>

        <Button type="submit" class="loginButton" @click="checkUser" label="Log In" />

        <div class="noAccount-container">
            <text id="noAccount">Don't have an account yet?</text>
            <router-link to="/SignUp"> <text id="signUpLink">Sign Up</text> </router-link>
        </div>

    </div>

</template>


<style scoped>

* {
    font-family: Inter, 'sans serif';
}

.login-container {
    width: 270px;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
}

.loginHeader {
    margin-bottom: 50px;
}

#loginTitle {
    color: #DD385A;
    font-size: 33px;
    font-weight: 700;
    margin-left: 20%;
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

.loginButton {
    margin-top: 30px;
    font-size: 14px;
    font-weight: 600;
    background-color: #DD385A;
    color: white;
    width: 100%;
}

.loginButton:hover {
    background-color: #ff8fa5;
}

.noAccount-container {
    margin-top: 15px;
    text-align: center;
}

#noAccount {
    font-size: 12px;
    color: #7D7D7D;
}

#signUpLink {
    margin-left: 6px;
    font-weight: 700;
    font-size: 12px;
    color:#DD385A;
}

#signUpLink:hover {
    color: #ff8fa5;
}

</style>