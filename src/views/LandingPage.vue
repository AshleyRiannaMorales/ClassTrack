<script setup>
import Button from 'primevue/button';
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    

  <div class="wrapper">

    <!-- Side Bar -->
    <nav>
      <ul>
        <li>
          <div class="logoHeader">
            <img class="logoCT" src="../assets/Logo-100px.png">
          </div>
        </li>
        <div class="items">
          <li>
            <div class="containerMenuItem">
              <router-link to="https://sites.google.com/uic.edu.ph/group11/home">
                <i class="pi pi-google" style="font-size: 1.7rem"></i>
              </router-link>
            </div>
          </li>
          <li>
            <div class="containerMenuItem">
              <router-link to="https://github.com/AshleyRiannaMorales/LabClass">
                <i class="pi pi-github" style="font-size: 1.7rem"></i>
              </router-link>
            </div>
          </li>
          <li>
            <div class="containerMenuItem">
              <router-link to="https://mail.google.com/mail/u/labclass@uic.edu.ph/#compose">
                <i class="pi pi-envelope" style="font-size: 1.7rem"></i>
              </router-link>
            </div>
          </li>
        </div>
      </ul>
    </nav>

    <!-- Top Button (Login) -->
    <router-link to="/login">
      <Button label="Log In" id="button-login" icon="pi pi-user" />
    </router-link>

    <div class="container">

      <!-- Text -->
      <div class="text">
        <div class="text-title">
          <text>Schedule a </text>
          <text>class now.</text>
        </div>

        <div class="text-subtitle">
          <text>Coordinating and managing computer laboratory schedules are made easy.</text>
        </div>

        <router-link to="/signup">
          <Button label="Start using LabClass" id="button-signup" />
        </router-link>
      </div>

      <!-- Image -->
      <div class="image">
        <img class="pageIMG" src="../assets/LandingPageIMG.png" alt="Landing Page Image">
      </div>

    </div>
  </div>
</template>
  
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin-top: 100px;
}

nav {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  background: #DD385A;
  width: 120px;
  overflow: hidden;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
}

.logoCT {
  margin: 20px 24px;
  width: 72px;
  height: 72px;
  position: relative;
  top: 0;
}

.containerMenuItem {
  width: 300px;
  padding: 5px;
  padding-left: 46px;
  margin-top: 6px;
  font-family: 'Inter', sans-serif;

}

i {
  position: relative;
  top: -0.5px;
  margin-top: 25px;
  font-size: 20px;
  text-align: center;
  color: white;
}

i:hover {
  color: #A52841;
}

.items {
  position: absolute;
  bottom: 30px;
}

.text {
  font-family: 'Inter', sans-serif;
  color: #DD385A;
  flex: 1;
  padding: 25px;
}

.text-title {
  font-size: 55px;
  font-weight: 700;
  margin-top: 5%;
}

.text-subtitle {
  margin-top: 0;
  font-size: 15px;
}

.image {
  max-width: 400px;
  padding: 20px;
}

.pageIMG {
  width: 90%;
  height: auto;
  display: block;
  margin: 0 auto;
}

button {
  font-family: 'Inter', sans-serif;
  border: none;
}

#button-login {
  color: #DD385A;
  background-color: white;
  position: absolute;
  right: 0;
  margin-right: 42px;
  margin-top: 12px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 10px;
}

#button-login:hover {
  background-color: #fdecf0;
}

#button-signup {
  background-color: #DD385A;
  color: white;
  font-weight: 700;
  padding: 10px 60px;
  border-radius: 10px;
  margin-top: 25px;
}

#button-signup:hover {
  background-color: #fdecf0;
  color: #DD385A;
}

@media only screen and (max-width: 768px) {

  #button-login {
    margin-right: 20px;
  }

  .text-title {
    font-size: 47px;
  }

  .text-subtitle {
    margin-top: 7px;
    font-size: 13px;
  }

  #button-signup {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .wrapper {
    margin-left: 50px;
    padding: 0;
  }

  .container {
    margin-top: 20px;
    margin-left: 50px;
    margin-bottom: 0;
  }

  .pageIMG {
    width: 80%;
  }

}
</style>