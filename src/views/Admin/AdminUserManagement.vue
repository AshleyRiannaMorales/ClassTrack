<script setup>
import AdminSideBarMenu from "../../components/AdminSideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";

</script>

<template>
    <AdminSideBarMenu />
    <TopBarMenu />

    <div class="userManagement-container">
        <span class="greetings">Users</span>

        <div class="userManagement-buttons">


        </div>


        <div class="userManagement-table">
            
        </div>
    </div>

    


</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
}

.userManagement-container {
    margin-left: 60px;
    padding: 70px 100px;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}
</style>