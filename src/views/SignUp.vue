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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    
    <div class="signupContainer">
        <div class="header">
            <div class="flex flex-wrap justify-content-center gap-3">
                <Button icon="pi pi-chevron-left" class="buttonBack" @click="navigateToHome" text rounded aria-label="Return" />
            </div>
        <text id="titleSignUp">Sign Up</text>
        </div>

        <label for="userInsID">Instructor ID</label>
        <div class="p-inputgroup">
            <InputText type="text" v-model="userInsID" />
        </div>

        <label for="userFName">Instructor First Name</label>
        <div class="p-inputgroup">
            <InputText type="text" v-model="userFName" />
        </div>

        <label for="userLName">Instructor Last Name</label>
        <div class="p-inputgroup">
            <InputText type="text" v-model="userLName" />
        </div>

        <label for="userInsPass">Password</label>
        <div class="p-inputgroup">
            <Password type="text" v-model="userInsPass" />
        </div>

        <Button type="submit" class="buttonSignup" label="Sign Up" />

        <div class="haveAccountContainer">
            <text id="haveAccount">Already have an account?</text>
            <router-link to="/LogIn"> <text id="logInLink">Log In</text> </router-link>
        </div>
    </div>
    
</template>

<style scoped>

.signupContainer {
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

#titleSignUp {
    font-family: Inter, 'sans serif';
    color: #DD385A;
    font-size: 33px;
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

.buttonSignup {
    font-family: Inter, 'sans serif';
    font-size: 14px;
    font-weight: 600;
    background-color: #DD385A;
    margin-right: 0.5%;
    margin-top: 25%;
    width: 120%;
    height: 38px;
}

.buttonSignup:hover {
    background-color: #ff8fa5;
}

.haveAccountContainer {
    margin-top: 15px;
    margin-left: 50px;
    width: 120%;
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

</style>