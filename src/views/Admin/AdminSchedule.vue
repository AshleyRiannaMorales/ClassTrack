<script setup>
import AdminSideBarMenu from "../../components/AdminSideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import { ref, onMounted } from 'vue';
import axios from "axios";

const mon_semSched = ref(null);
const tue_semSched = ref(null);
const wed_semSched = ref(null);


onMounted(async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/semester-schedules/first-semester');
        console.log('Response data:', response.data);

        mon_semSched.value = mon_semSched.value = response.data.filter(entry => entry.schedDay === "Monday");
        tue_semSched.value = tue_semSched.value = response.data.filter(entry => entry.schedDay === "Tuesday");
        wed_semSched.value = wed_semSched.value = response.data.filter(entry => entry.schedDay === "Wednesday");
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

</script>

<template>
    <AdminSideBarMenu />
    <TopBarMenu />

    <div class="adminSched-container">
        <span class="greetings">Schedule</span>

        <!--
            <div class="addbutton-container">
                <Button label="Update Schedule"></Button>
            </div>
        -->

        <div class="weekTables">

            <div class="table">
                
                <DataTable :value="mon_semSched" tableStyle="min-width: 50rem">
                    <Column header="Day" field="schedDay"/>
                    <Column header="Room" field="computerLabID"/>
                    <Column header="Subject" field="subject" />
                    <Column header="Instructor" field="instructorName" />
                    <Column header="Start Time" field="schedStartTime" />
                    <Column header="End Time" field="schedEndTime" />
                    <Column header="Course" field="student_course" />
                    <Column header="Year" field="student_year" />
                    <Column header="Section" field="student_section" />
                </DataTable>

                <DataTable :value="tue_semSched" tableStyle="min-width: 50rem">
                    <Column header="Day" field="schedDay"/>
                    <Column header="Room" field="computerLabID"/>
                    <Column header="Subject" field="subject" />
                    <Column header="Instructor" field="instructorName" />
                    <Column header="Start Time" field="schedStartTime" />
                    <Column header="End Time" field="schedEndTime" />
                    <Column header="Course" field="student_course" />
                    <Column header="Year" field="student_year" />
                    <Column header="Section" field="student_section" />
                </DataTable>

                <DataTable :value="wed_semSched" tableStyle="min-width: 50rem">
                    <Column header="Day" field="schedDay"/>
                    <Column header="Room" field="computerLabID"/>
                    <Column header="Subject" field="subject" />
                    <Column header="Instructor" field="instructorName" />
                    <Column header="Start Time" field="schedStartTime" />
                    <Column header="End Time" field="schedEndTime" />
                    <Column header="Course" field="student_course" />
                    <Column header="Year" field="student_year" />
                    <Column header="Section" field="student_section" />
                </DataTable>
            </div>


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
    font-family: 'Inter', sans-serif;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}

.addbutton-container {
    margin-top: 10px;
}

.weekTables {
    margin-top: 15px;
}

.table {
    margin-bottom: 25px;
}

.monTable {
    text-align: left;
}
</style>