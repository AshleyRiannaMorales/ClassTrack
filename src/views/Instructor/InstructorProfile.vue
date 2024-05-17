<script setup>
import SideBarMenu from "../../components/SideBarMenu.vue";
import InstructorTopBar from "../../components/InstructorTopBar.vue";
</script>

<template>
    <SideBarMenu />
    <InstructorTopBar />

    <div class="profile-container">
        <span class="greetings">Instructor Profile</span>

        <div class="profileDetails">
            <div class="detail-group">
                <label for="id">Instructor ID</label>
                <InputText id="username" v-model="value" disabled class="inputBoxes" />
            </div>
            <div class="detail-group">
                <label for="username">Name</label>
                <InputText id="username" v-model="value" disabled class="inputBoxes" />
            </div>
            <div class="detail-group">
                <label for="email">Email</label>
                <InputText id="username" v-model="value" disabled class="inputBoxes" />
            </div>
            <div class="newPassword-group">
                <label for="userPass">Password</label>
                <Password type="text" :feedback="false" placeholder="New Password"
                    class="inputPass" />
            </div>

            <Button type="submit" class="updateButton" label="Update" />

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
    margin-top: 25px;
}

.newPassword-group {
    margin-top: 25px;
}
</style>