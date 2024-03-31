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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    
    <div class="loginContainer">
        <div class="header">
            <router-link to="/"> 
                <div class="flex flex-wrap justify-content-center gap-3">
                    <Button icon="pi pi-chevron-left" class="buttonBack" @click="navigateToHome" text rounded aria-label="Return" />
                </div>
            </router-link>
            <text id="titleLogin">Log In</text>
        </div>
        
        <label for="userID">Username</label>
        <div class="p-inputgroup">
            <InputText type="text" v-model="userID" />
        </div>

        <label for="userPass">Password</label>
        <div class="p-inputgroup">
            <Password type="text" v-model="userPass" />
        </div>

        <Button type="submit" class="buttonLogin" @click="checkUser" label="Log In" />

        <div class="noAccountContainer">
            <text id="noAccountYet">Don't have an account yet?</text>
            <router-link to="/SignUp"> <text id="signUpLink">Sign Up</text> </router-link>
        </div>
    </div>
</template>

<style scoped>
.loginContainer {
    font-family: Inter, 'sans serif';
    color: #DD385A;
    margin: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);   
}

.buttonBack {
    color:#DD385A;
}

#titleLogin {
    font-family: Inter, 'sans serif';
    color: #DD385A;
    font-size: 35px;
    font-weight: 700;
    margin-left: 20%;
}

.header {
    margin-bottom: 27%;
    display: flex;
}

label {
    font-weight: 700;
    font-size: 15px;
}

.p-inputgroup {
    margin-bottom: 10%;
    width: 120%;
}

.buttonLogin {
    font-family: Inter, 'sans serif';
    font-size: 14px;
    font-weight: 600;
    background-color: #DD385A;
    margin-right: 0.5%;
    margin-top: 25%;
    width: 120%;
    height: 38px;
}

#loginButton:hover {
    background-color: #ff8fa5;
}

.noAccountContainer {
    margin-top: 15px;
    margin: 7% 10%;
    width: 120%;
}

#noAccountYet {
    font-size: 12px;
    color: #7D7D7D;
}

#signUpLink {
    margin-left: 6px;
    font-weight: 700;
    font-size: 12px;
    color:#DD385A;
}

#signUpLink:link {
    text-decoration: none;
}

#signUpLink:visited {
    text-decoration: none;
}

#signUpLink:hover {
    text-decoration: underline;
}

#signUpLink:active {
    text-decoration: none;
}

@media only screen and (max-width: 768px) { 
    .loginContainer {
        margin-left: 0;
    }
}

</style>