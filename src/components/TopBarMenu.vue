<script setup>
import 'primeicons/primeicons.css'
</script>


<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">

    <div class="menuWrapper">
        <router-link to="/">
            <Button id="signoutButton" label="Log out" icon="pi pi-sign-out" />
        </router-link>
    </div>
</template>


<style scoped>
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #DD385A;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
}

.menuWrapper {
    position: absolute;
    right: 30px;
    top: 18px;
}

#signoutButton {
    background-color: transparent;
    padding: 10px;
    border: none;
}

#signoutButton:hover {
    background-color: #fcebeb;
}


ul {
    list-style: none;
    text-align: left;
    width: 126px;
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