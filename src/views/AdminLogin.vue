<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import router from '../router';
import { ref } from 'vue';
import axios from 'axios';

const navigateToLogin = () => {
    router.push('/login');
};

const adminData = ref({
    adminID: '',
    adminPass: ''
});

const loginAdmin = async () => {
    try {
        const formData = new FormData();
        formData.append('admin_id', adminData.value.adminID);
        formData.append('admin_pass', adminData.value.adminPass);

        const response = await axios.post('http://127.0.0.1:8000/api/login/admin', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        if (response.status === 200) {
            router.push('/admindashboard');
        } else {
            console.error('Admin login failed:', response.statusText);
            throw new Error('Admin login failed');
        }
    } catch (error) {
        console.error('Error authenticating admin:', error.response ? error.response.data : error.message);
        // Display error message to the user
        alert(error.response.data.detail);
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


    <div class="login-container">
        <form @submit.prevent="loginAdmin">
            <div class="loginHeader">
                <Button icon="pi pi-chevron-left" class="backButton" @click="navigateToLogin" text rounded aria-label="Return" />
                <text id="loginTitle">Admin</text>
            </div>
            <div class="userUsername">
                <label for="userID">User ID</label>
                <div class="p-inputgroup">
                    <InputText type="text" v-model="adminData.adminID" class="p-username-input" />
                </div>
            </div>
            <div class="userPassword">
                <label for="userPass">Password</label>
                <div class="p-inputgroup">
                    <Password type="password" v-model="adminData.adminPass" class="p-password-input" />
                </div>
            </div>
            <Button type="submit" class="loginButton" label="Log In" />
        </form>
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
    color: #DD385A;
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
    color: #DD385A;
}

#signUpLink:hover {
    color: #ff8fa5;
}
</style>