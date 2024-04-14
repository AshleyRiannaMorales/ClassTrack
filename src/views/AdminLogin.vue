<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css'
import Password from 'primevue/password';
import router from '../router';
import axios from 'axios';

const navigateToLogin = () => {
    router.push('/login');
};

const Login = {
  data() {
    return {
      adminID: '',
      adminPass: '',
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
      formData.append('adminID', this.adminID);
      formData.append('adminPass', this.adminPass);

      axios.post('http://127.0.0.1:8000/api/administrator/login/', formData)
        .then(response => {
          if (response.data) {
            console.log("Success");
            this.$router.push('/admindashboard');
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
            <Button icon="pi pi-chevron-left" class="backButton" @click="navigateToLogin" text rounded
                aria-label="Return" />
            <text id="loginTitle">Admin</text>
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