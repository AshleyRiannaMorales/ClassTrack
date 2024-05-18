<script setup>
import SideBarMenu from "../../components/SideBarMenu.vue";
import InstructorTopBar from "../../components/InstructorTopBar.vue";
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

// Define state variables
const instructorID = ref('');
const oldPassword = ref('');
const newPassword = ref('');

onMounted(async () => {
    const storedInstructorID = localStorage.getItem('instructorEmailorID');
    console.log("ID stored in local storage:", storedInstructorID);

    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/admin/view/instructor_accounts/`);
        console.log("Response:", response.data);

        const instructorData = response.data.find(instructor => instructor.instructorID === parseInt(storedInstructorID));

        if (instructorData) {
            // Update state variables with fetched data
            instructorID.value = instructorData.instructorID;
        } else {
            console.log("Instructor not found with ID:", storedInstructorID);
        }
    } catch (error) {
        console.error("Error fetching instructor accounts data:", error);;
    }
});

async function changePassword() {

    
    try {

        const formData = new FormData();
        formData.append('instructorID', parseInt(instructorID.value));
        formData.append('oldPassword', oldPassword.value);
        formData.append('newPassword', newPassword.value);

        const response = await axios.put(`http://127.0.0.1:8000/api/instructor/update_password`, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        console.log("Password updated successfully:", response.data);

        toast.add({
                severity: 'success',
                summary: 'Password Updated.',
                detail: 'Password successfully changed.',
                life: 3000
            });

    } catch (error) {
        console.error("Error updating password:", error);
    }
}

</script>

<template>
    <SideBarMenu />
    <InstructorTopBar />

    <Toast />

    <div class="profile-container">
        <span class="greetings">Instructor Profile</span>

        <div class="profileDetails">
            <form @submit.prevent="changePassword">
                <div class="detail-group">
                    <label for="instructorid">Instructor ID</label>
                    <InputText id="instructorid" v-model="instructorID" class="inputBoxes" />
                </div>
                <div class="oldPassword-group">
                    <label for="userPass">Old Password</label>
                    <Password type="text"  v-model="oldPassword" :feedback="false" placeholder="Old Password" class="inputPass" />
                </div>
                <div class="newPassword-group">
                    <label for="userPass">New Password</label>
                    <Password type="text" v-model="newPassword" :feedback="false" placeholder="New Password" class="inputPass" />
                </div>

                <Button type="submit" class="updateButton" label="Update" />
            </form>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
}

.profile-container {
    margin-left: 60px;
    padding: 70px 100px;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}

.profileDetails {
    padding: 50px;
}

label {
    font-weight: 600;
}

.inputBoxes {
    margin-left: 25px;
}

.inputPass {
    margin-left: 25px;
}

.detail-group {
    margin-top: 25px;
}

.updateButton {
    background-color: #DD385A;
    border: none;
    margin-top: 35px;
}

.oldPassword-group {
    margin-top: 25px;
}

.newPassword-group {
    margin-top: 25px;
}
</style>