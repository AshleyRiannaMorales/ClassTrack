<script setup>
import AdminSideBarMenu from "../../components/AdminSideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import { ref, onMounted } from 'vue';
import axios from "axios";


const selectedOption = ref({ option: 'First Semester A.Y. 2023-2024', api: 'newest-to-oldest' });
const sortOptions = [
    { option: 'First Semester A.Y. 2023-2024', api: 'newest-to-oldest' },
    { option: 'Second Semester A.Y. 2022-2023', api: 'oldest-to-newest' }
];

const semSched = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/semester-schedules/first-semester');
        console.log('Response data:', response.data);

        semSched.value = response.data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

</script>

<template>
    <AdminSideBarMenu />
    <TopBarMenu />

    <div class="adminSched-container">
        <span class="greetings">Semester Schedule</span>

        <div class="buttons-container">
            <label for="dropdown"> Select Semester: </label>
            <Dropdown id="semDropdown" v-model="selectedOption" :options="sortOptions" optionLabel="option"
                placeholder="Semester" checkmark :highlightOnSelect="false" class="w-full md:w-14rem"
                @change="fetchData" />

            <Button label="Add a New Schedule" id="updateButton" icon="pi pi-file-edit"></Button>
        </div>




        <div class="table">

            <DataTable :value="semSched" tableStyle="min-width: 50rem">
                <Column header="Day" field="schedDay" style="color: #DD385A;" />
                <Column header="Room" field="computerLabID" style="color: #DD385A;" />
                <Column header="Subject" field="subject" style="color: #DD385A;" />
                <Column header="Instructor" field="instructorName" style="color: #DD385A;" />
                <Column header="Start Time" field="schedStartTime" style="color: #DD385A;" />
                <Column header="End Time" field="schedEndTime" style="color: #DD385A;" />
                <Column header="Course" field="student_course" style="color: #DD385A;" />
                <Column header="Year" field="student_year" style="color: #DD385A;" />
                <Column header="Section" field="student_section" style="color: #DD385A;" />
            </DataTable>


        </div>



    </div>

</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
}

.adminSched-container {
    margin-left: 60px;
    padding: 70px 100px;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}

.buttons-container {
    margin: 15px 0px;
}

#semDropdown {
    margin-left: 10px;
}


#updateButton {
    background-color: #DD385A;
    border: none;
    padding: 11px 15px;
    margin-left: 15px;
}

.table {
    margin-bottom: 25px;
    margin-top: 15px;
    color: #DD385A;
}
</style>