<script setup>
import SideBarMenu from "../components/SideBarMenu.vue";
import TopBarMenu from "../components/TopBarMenu.vue";

</script>


<template> 
    <SideBarMenu />
    <TopBarMenu />

    <div class="adminLaboratories-container">
        <span class="greetings">Computer Laboratories</span>
    </div>
</template>


<style scoped>
.adminLaboratories-container {
    padding: 70px 175px;
    font-family: 'Inter', sans-serif;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}
</style>