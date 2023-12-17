<script setup>
import Button from 'primevue/button';

</script>


<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&family=Inter:wght@400;500;700;900&family=Lexend&family=Poppins:wght@400;800&display=swap"
    rel="stylesheet">
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link href="https://fonts.cdnfonts.com/css/cocogoose" rel="stylesheet">

  <body>


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
              <router-link to="">
                <i class="pi pi-google" style="font-size: 1.7rem"></i>
              </router-link>
            </div>
          </li>
          <li>
            <div class="containerMenuItem">
              <router-link to="">
                <i class="pi pi-github" style="font-size: 1.7rem"></i>
              </router-link>
            </div>
          </li>
          <li>
            <div class="containerMenuItem">
              <router-link to="">
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

    <!--
    <router-link to="/dumpPage"> <Button role="link" label="TRY" id="dumpButton" /> </router-link>
    -->

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
      <img class="pageIMG" src="../assets/LandingPageIMG.png">

    </div>
  </body>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  box-sizing: border-box;

}

body {
  background: white;
  margin: 0;
  padding: 0;
}

.container {
  flex: 1;
  margin-left: 5%;
}



.pageIMG {
  max-width: 25%;
  height: auto;
  position: absolute;
  right: 150px;
  bottom: 105px;
  top: 145px;
  margin-bottom: 135px;
}

.text {
  font-family: 'Inter', sans-serif;
  padding: 200px;
  color: #DD385A;


  .text-title {
    font-size: 55px;
    font-weight: 700;
    margin-top: 5%;
  }

  .text-subtitle {
    margin-top: 0;
    font-size: 15px;

  }

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

.logoHeader {
  width: 300px;
  display: flex;
}

.logoCT {
  margin: 20px 24px;
  width: 72px;
  height: 72px;
  position: relative;
  transition: all 0.5s ease;
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

button {
  font-family: 'Inter', sans-serif;
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
  font-weight: 700;
  padding: 10px 60px;
  border-radius: 10px;
  margin-top: 25px;
}

#button-signup:hover {
  
  color: #DD385A;
}

@media screen and (max-width: 768px){
  .pageIMG {
    width: 0;
  }

}

</style>