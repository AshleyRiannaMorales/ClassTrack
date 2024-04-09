<script setup>
import 'primeicons/primeicons.css'



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


    <div class="sidebar-container">
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
                            <router-link to="/AdminDashboard">
                                <img src="../assets/icon-home3.svg" style="width: 2.1rem; margin-left: -1px">
                                <span class="menuLabel">Dashboard</span>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="containerMenuItem">
                            <router-link to="">
                                <img src="../assets/icon-notif.svg" style="width: 2.1rem; margin-left: -1px">
                                <span class="menuLabel">Notifications</span>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="containerMenuItem">
                            <router-link to="/AdminBookings">
                                <img src="../assets/icon-book3.svg" style="width: 2.1rem; margin-left: -1px">
                                <span class="menuLabel">Bookings</span>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="containerMenuItem">
                            <router-link to="/Laboratories">
                                <img src="../assets/icon-sched.svg" style="width: 2.1rem; margin-left: -1px">
                                <span class="menuLabel">Laboratories</span>
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
    </div>

    <div class=text-container>
        <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</text>
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



.text-container {
    font-size: 50px;
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
    margin-left: 21px;
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