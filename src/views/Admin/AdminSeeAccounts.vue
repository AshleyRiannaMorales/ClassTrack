<script setup>
import AdminSideBarMenu from "../../components/AdminSideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
</script>

<template>
    <AdminSideBarMenu />
    <TopBarMenu />

    <div class="seeAccounts-container">
        <span class="header"> User Management </span>
        <div class="subheader"> Instructor Accounts </div>

        <div class="seeAccounts-table">
            <DataTable tableStyle="max-width: 80rem; font-family: 'Inter', sans-serif;">
                <Column field="requestID" header="Instructor ID" style="color: #DD385A; height: 80px"></Column>
                <Column field="instructorName" header="Name" style="color: #DD385A; height: 70px"></Column>
            </DataTable>
        </div>
    </div>


</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
}

.seeAccounts-container {
    margin-left: 60px;
    padding: 70px 100px;
    color: #DD385A;
}

.header {
    font-size: 40px;
    font-weight: 700;
}

.subheader {
    font-size: 20px;
    font-weight: 500;
}
</style>
