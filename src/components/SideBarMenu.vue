<script setup>
import 'primeicons/primeicons.css'
</script>


<template>
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <link href="https://fonts.googleapis.com/css2?family=Inclusive+Sans&family=Inter:wght@400;500;700;900&family=Lexend&family=Poppins:wght@400;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://fonts.cdnfonts.com/css/cocogoose" rel="stylesheet">
                

    <div class="sidebar">
        <nav>
            <ul>
                <li>
                    <div class="logoHeader">
                        <img class="logoCT" src="../assets/Logo-100px.png">
                        <span class="nameCT">
                            <text id="nameClass">Class</text><text id="nameTrack">Track</text>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="containerMenuItem">
                        <router-link to="/InstructorDashboard">
                            <img src="../assets/icon-home3.svg" style="width: 2.1rem; margin-left: -1px">
                            <span class="menuLabel">Dashboard</span>
                        </router-link>
                    </div>
                </li>
                <li>
                    <div class="containerMenuItem">
                        <router-link to="/InstructorNotifications"> 
                            <img src="../assets/icon-notif.svg" style="width: 2.1rem; margin-left: -1px">
                            <span class="menuLabel">Notifications</span>
                        </router-link>
                    </div>
                </li>
                <li>
                    <div class="containerMenuItem">
                        <router-link to="/InstructorBookings">
                            <img src="../assets/icon-book3.svg" style="width: 2.1rem; margin-left: -1px">
                            <span class="menuLabel">Bookings</span>
                        </router-link>
                    </div>
                </li>
                <li>
                    <div class="containerMenuItem">
                        <router-link to="/InstructorSchedule"> 
                            <img src="../assets/icon-sched.svg" style="width: 2.1rem; margin-left: -1px">
                            <span class="menuLabel">Schedule</span>
                        </router-link>
                    </div>
                </li>
                <li>
                    <div class="containerMenuItem">
                        <router-link to=""> 
                            <img src="../assets/icon-bar.svg" style="width: 2.1rem; margin-left: -1px">
                            <span class="menuLabel">Reports</span>
                        </router-link>
                    </div>
                </li>
                
            </ul>
        </nav>
    </div>
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
}

.sidebar {
    position: fixed;
    top: 0;
    width: 100%;
    float: left;
    top: 0;
    left: 0;
    z-index: 1;
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
    transition: width 0.2s linear;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
} 

.logoHeader{
    width: 300px;
    display: flex;
    padding-bottom: 15px;
    padding-top: 15px;
}

.logoCT {
    margin: 20px 24px;
    width: 72px;
    height: 72px;
    position: relative;
    transition: all 0.5s ease;
    top: 0;
}

    
.nameCT {
    font-family: 'COCOGOOSE', sans-serif;
    font-size: 24px;
    margin: auto;
    margin-left: 0px;
}

#nameClass {
    color: #fff5f5;
}

#nameTrack {
    color: #ffd0d0;
}

.containerMenuItem {
    width: 300px;
    padding: 30px;
    margin-top: 5px;
    padding-left: 42px;
    font-family: 'Inter', sans-serif;
}

i {
    position: relative;
    top: -0.5px;
    font-size: 30px;
    text-align: center;
    color: white;
}

.menuLabel {
    padding: 25px;
    font-size: 16px;
    position: relative;
    margin-left: 22px;
    color: white;
    top: -7.5px;
}

.containerMenuItem:hover {
    background: #A52841;
}

#signout {
    position: absolute;
    bottom: 0;
}


nav:hover {
    width: 290px;
    transition: all 0.5s ease;
}

</style>