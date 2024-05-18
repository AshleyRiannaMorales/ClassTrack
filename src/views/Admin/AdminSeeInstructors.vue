<script setup>
import AdminSideBarMenu from "../../components/AdminSideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from "vue-router";


const router = useRouter();
const instructorAccounts = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/get/instructors/');
        instructorAccounts.value = response.data;
    } catch (error) {
        console.error('Error fetching instructor accounts:', error);
    }
});


const menu = ref();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'View Instructor Accounts',
                icon: 'pi pi-user',
                command: () => navigateTo('/AdminSeeAccounts')
            },
            {
                label: 'View Verification Requests',
                icon: 'pi pi-inbox',
                command: () => navigateTo('/users')
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

const navigateTo = (route) => {
    router.push(route); // Programmatically navigate to the specified route
};

</script>

<template>
    <AdminSideBarMenu />
    <TopBarMenu />

    <div class="seeAccounts-container">
        <span class="header"> User Management </span>
        <span class="menuButton">
            <Button type="button" id="ellipsisMenu" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true"
                aria-controls="overlay_menu" />
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </span>

        <div class="subheader"> Instructors </div>


        <div class="seeAccounts-table">
            <DataTable :value="instructorAccounts" tableStyle="max-width: 80rem; font-family: 'Inter', sans-serif;">
                <Column field="instructorID" header="Instructor ID" style="color: #DD385A; height: 70px"></Column>
                <Column field="instructorEmail" header="Email" style="color: #DD385A; height: 70px"></Column>
                <Column field="InstructorFirstName" header="First Name" style="color: #DD385A; height: 70px"></Column>
                <Column field="InstructorLastName" header="Last Name" style="color: #DD385A; height: 70px"></Column>
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
    margin-bottom: 55px;
}

.subheader {
    font-size: 20px;
    font-weight: 500;
}

#ellipsisMenu {
    background-color: transparent;
    color: #DD385A;
    border: none;
    padding: none;
    margin-bottom: 5px;
    margin-left: 10px;
}

.seeAccounts-table {
    margin-top: 25px;
}
</style>
