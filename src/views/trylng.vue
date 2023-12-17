<script setup>
</script>

<template>
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
.wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.container {
    flex: 1;
    max-width: 600px;
    /* Adjust this value as needed */
    margin: 0 auto;
    padding: 20px;
}

.text {
    text-align: center;
}

.text-title {
    font-size: 2rem;
    margin-bottom: 10px;
}

.text-subtitle {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.image {
    flex: 1;
    max-width: 400px;
    /* Adjust this value as needed */
}

.pageIMG {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}

/* Add your existing styles for navigation, buttons, etc. */</style>