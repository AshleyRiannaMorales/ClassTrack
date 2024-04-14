<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css'
import Password from 'primevue/password';


import Divider from 'primevue/divider';

import router from '../router';

const Login = {
    data() {
        return {
            admin_User: '',
            admin_Password: '',
            prompt: {
                visible: false,
                message: '',
                type: ''
            }
        };
    },
    methods: {
        attemptLogin() {
            const formData = new FormData();
            formData.append('admin_User', this.admin_User);
            formData.append('admin_Password', this.admin_Password);

            axios.post('http://127.0.0.1:8000/api/administrator/login/', formData)
                .then(response => {
                    if (response.data) {
                        console.log("Success");
                        this.$router.push('/maindashboards');
                    } else {
                        console.log("error");
                        this.showStyledPrompt('Incorrect username or password', 'error');
                    }
                })
                .catch(error => {
                    console.error('Error during login:', error);
                    if (error.response && error.response.status === 401) {
                        this.showStyledPrompt('Incorrect username or password', 'error');
                    } else {
                        this.showStyledPrompt('An error occurred. Please try again later.', 'error');
                    }
                });
        },
        showStyledPrompt(message, type) {
            this.prompt.message = message;
            this.prompt.type = type;
            this.prompt.visible = true;

            this.$nextTick(() => {
                if (this.$refs.styledPrompt) {
                    this.$refs.styledPrompt.classList.add('fade-in');
                }
            });

            setTimeout(() => {
                this.hideStyledPrompt();
            }, 3000);
        },
        hideStyledPrompt() {
            if (this.$refs.styledPrompt) {
                this.$refs.styledPrompt.classList.remove('fade-in');
                setTimeout(() => {
                    this.prompt.visible = false;
                }, 500);
            }
        }
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
            <router-link to="/">
                <Button icon="pi pi-chevron-left" class="backButton" text rounded
                aria-label="Return" />
            </router-link>
            <text id="loginTitle">Log In</text>
        </div>


        <div class="chooseUserType">

            <router-link to="/instructorlogin">
                <Button id="instructorUserButton" class="usertypeButton" label="Log in as Instructor" />
            </router-link>

            <router-link to="/adminlogin">
                <Button id="adminUserButton" class="usertypeButton" label="Log in as Administrator" />
            </router-link>

        </div>

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
    margin-top: 185px;
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

.backButton {
    color: #DD385A;
}

.chooseUserType {
    margin-bottom: 10%;
}


.usertypeButton {
    font-size: 15px;
    font-weight: 500;
    background-color: transparent;
    color: #DD385A;
    width: 100%;
    border: 1px solid #DD385A;
    height: 37px;
    margin-bottom: 6%;
}

.usertypeButton:hover {
    background-color: #DD385A;
    color: #fdecf0;
    font-weight: 600;
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