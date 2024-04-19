<script setup>
import 'primeicons/primeicons.css'
</script>


<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">

    <div class="menuWrapper">
        <ul class="menuDropDown">
            <li>
                <div class="list">
                    <router-link to="">
                        <i class="pi pi-user"></i>
                        <span class="adminProfile"> Administrator </span> <i class="pi pi-angle-down"></i>
                    </router-link>
                </div>
                <ul class="dropdown">
                    <li>
                        <div class="list">
                            <router-link to="">
                                <i class="pi pi-cog"></i>
                                <span class="settings"> Settings </span>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="list">
                            <router-link to="/">
                                <i class="pi pi-sign-out"></i>
                                <span class="signout"> Sign Out </span>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>


<style scoped>
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #DD385A;
}

.menuWrapper {
    position: fixed;
    right: 30px;
    top: 18px;
}

ul {
    list-style: none;
    text-align: left;
}

ul li .list {
    display: inline-block;
    position: relative;
    padding: 9px 15px;
}

span {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
}

ul li ul.dropdown li {
    display: block;
    margin: 4px 0px;
}

ul li ul.dropdown {
    width: auto;
    z-index: 999;
    display: none;
    background-color: #fff0f0;
}

ul li .list:hover {
    background-color: #ecd3d3;
    width: 100%;
}

ul li:hover ul.dropdown {
    display: block;
}
</style>