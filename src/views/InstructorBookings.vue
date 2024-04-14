<script setup>
import SideBarMenu from "../components/SideBarMenu.vue";
import TopBarMenu from "../components/TopBarMenu.vue";
import InstructorBookingsTable from "../components/InstructorBookingsTable.vue";
import MultiSelect from 'primevue/multiselect';

import { ref } from "vue";

const selectedCities = ref();
const groupedCities = ref([
    {
        label: 'Germany',
        code: 'DE',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA',
        code: 'US',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan',
        code: 'JP',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
        ]
    }
]);

</script>

<template>
    <SideBarMenu />
    <TopBarMenu />

    <div class="instructorBookings-container">
        <span class="greetings">Bookings</span>

        <div class="instructorBookings-buttons">

            <div class="card flex justify-content-center">
                <MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label"
                    optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Select Cities" class="w-full md:w-20rem">
                    
                </MultiSelect>
            </div>

        </div>

        <InstructorBookingsTable />

    </div>


</template>

<style scoped>
.instructorBookings-container {
    margin-left: 60px;
    padding: 70px 100px;
    font-family: 'Inter', sans-serif;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}
</style>