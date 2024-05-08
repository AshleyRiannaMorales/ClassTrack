<script setup>
import AdminSideBarMenu from "../../components/AdminSideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import { ref, onMounted } from 'vue';
import axios from "axios";

const userRequest = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/pending_verification');
        console.log('User verification requests data:', response.data);

        userRequest.value = response.data;
    } catch (error) {
        console.error('Error fetching verification requests:', error);
    }
});

const bookSchedule = async () => {

    

};

</script>

<template>
    <AdminSideBarMenu />
    <TopBarMenu />

    <div class="userManagement-container">
        <span class="greetings">Users</span>

        <div class="userManagement-buttons">


        </div>


        <div class="userManagement-table">
            <div class="tableUsers">
                <DataTable :value="userRequest" tableStyle="max-width: 80rem; font-family: 'Inter', sans-serif;">
                    <Column field="requestID" header="Request ID" style="color: #DD385A;"></Column>
                    <Column field="instructorID" header="Instructor ID" style="color: #DD385A;"></Column>
                    <Column field="instructorFirstName" header="First Name" style="color: #DD385A;"></Column>
                    <Column field="instructorLastName" header="Last Name" style="color: #DD385A;"></Column>
                    <Column field="instructorEmail" header="Email" style="color: #DD385A;"></Column>
                    <Column field="" header="Actions" style="color: #DD385A;">
                        <template #body="rowData">
                            <Button label="Approve" icon="pi pi-check" class="p-button-info" id="approveButton" />
                            <Button label="Reject" icon="pi pi-times" class="p-button-info" id="rejectButton" />
                        </template>
                    </Column>
                </DataTable>
            </div>
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

.userManagement-table {
    margin-top: 20px;
}

button {
    padding: 5px;
    margin: 5px;
}

#approveButton {
    background-color: #31a533;
    color: #ffffff;
    width: 100px;
}

#rejectButton {
    background-color: #cf4545;
    color: #ffffff;
    width: 100px;
}
</style>