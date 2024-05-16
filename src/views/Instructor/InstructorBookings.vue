<script setup>
import SideBarMenu from "../../components/SideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';


const selectedSortOption = ref({ option: 'Recently Created', api: 'newest-to-oldest' });
const sortOptions = [
    { option: 'Recently Created', api: 'newest-to-oldest' },
    { option: 'Previously Created', api: 'oldest-to-newest' }
];


const selectedFilterOption = ref(null);
const filterOptions = [
    { status: 'Pending' },
    { status: 'Approved' },
    { status: 'Rejected' },
];

const booking = ref();

onMounted(fetchData);

async function fetchData() {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/booking-requests/${selectedSortOption.value.api}`);
        console.log('Bookings response data:', response.data);
        booking.value = response.data;
    } catch (error) {
        console.error('Error fetching bookings data:', error);
    }
}

const toast = useToast();


const reqVisible = ref(false); // For Dialog: Creating a Booking Request

const rooms = ref([
    { roomNum: '201' },
    { roomNum: '202' },
    { roomNum: '203' },
    { roomNum: '204' },
    { roomNum: '205' }
]);


const bookingRequestData = ref({
    instructorID: '',
    computerLabID: '',
    bookingDate: '',
    bookingStartTime: '',
    bookingEndTime: '',
    bookingPurpose: '',
});

const bookSchedule = async () => {

    // Validate input fields
    if (!bookingRequestData.value.instructorID || !bookingRequestData.value.computerLabID || !bookingRequestData.value.bookingDate || !bookingRequestData.value.bookingStartTime || !bookingRequestData.value.bookingEndTime || !bookingRequestData.value.bookingPurpose) {
        toast.add({
            severity: 'error',
            summary: 'Submission Error.',
            detail: 'Please fill out all fields.',
            life: 3000
        });
        return;
    }

    try {
        const formData = new FormData();
        formData.append('instructorID', bookingRequestData.value.instructorID);
        formData.append('computer_lab_id', bookingRequestData.value.computerLabID);
        formData.append('booking_date', bookingRequestData.value.bookingDate);
        formData.append('booking_start_time', bookingRequestData.value.bookingStartTime);
        formData.append('booking_end_time', bookingRequestData.value.bookingEndTime);
        formData.append('booking_purpose', bookingRequestData.value.bookingPurpose);


        console.log('FormData:', formData);

        const response = await axios.post('http://127.0.0.1:8000/api/booking-requests/', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });


        if (response.status === 200) {
            console.log('Data:', bookingRequestData);

            toast.add({
                severity: 'success',
                summary: 'Submission Success.',
                detail: 'Booking Request sent!',
                life: 3000
            });

            clearInputFields();
            reqVisible.value = false;
        }
    } catch (error) {
        console.error('Error submitting booking request:', error);
        if (error.response) {
            console.error('Server responded with status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
        // Display error message or handle error
        alert('Error submitting booking request: ' + error.message);
    }
};

const submitBookingRequest = () => {
    // Convert date objects to strings
    const bookingDate = bookingRequestData.value.bookingDate instanceof Date
        ? bookingRequestData.value.bookingDate.toISOString().split('T')[0] // Extract YYYY-MM-DD
        : bookingRequestData.value.bookingDate;

    // Convert start time to 24-hour format
    let bookingStartTime = bookingRequestData.value.bookingStartTime instanceof Date
        ? bookingRequestData.value.bookingStartTime.toLocaleTimeString()
        : bookingRequestData.value.bookingStartTime;
    bookingStartTime = convertTo24HourFormat(bookingStartTime); // Convert to 24-hour format

    // Convert end time to 24-hour format
    let bookingEndTime = bookingRequestData.value.bookingEndTime instanceof Date
        ? bookingRequestData.value.bookingEndTime.toLocaleTimeString()
        : bookingRequestData.value.bookingEndTime;
    bookingEndTime = convertTo24HourFormat(bookingEndTime); // Convert to 24-hour format

    // Convert instructorID to integer
    const instructorID = parseInt(bookingRequestData.value.instructorID);

    // Convert computerLabID to integer if it's not already
    let computerLabID = bookingRequestData.value.computerLabID;
    if (typeof computerLabID === 'object') { // Assuming computerLabID is an object
        computerLabID = parseInt(computerLabID.roomNum);
    } else if (typeof computerLabID === 'string') { // Assuming computerLabID is a string
        computerLabID = parseInt(computerLabID);
    }

    const bookingPurpose = bookingRequestData.value.bookingPurpose;

    // Update the bookingRequestData object with the modified data
    bookingRequestData.value = {
        ...bookingRequestData.value,
        instructorID,
        computerLabID,
        bookingDate,
        bookingStartTime,
        bookingEndTime,
        bookingPurpose
    };

    // Now the bookingRequestData object contains the modified data
    console.log("Updated Booking Request Data:", bookingRequestData.value);

    bookSchedule();
};

const clearInputFields = () => {
    // Reset all input fields to initial state
    bookingRequestData.value.instructorID = '';
    bookingRequestData.value.computerLabID = '';
    bookingRequestData.value.bookingDate = '';
    bookingRequestData.value.bookingStartTime = '';
    bookingRequestData.value.bookingEndTime = '';
    bookingRequestData.value.bookingPurpose = '';
};

// Function to convert time to 24-hour format
const convertTo24HourFormat = (timeString) => {
    const [time, modifier] = timeString.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
};

const cancelBookingRequest = async (bookingRequestId) => {
    console.log("Booking Request ID to cancel:", bookingRequestId); // Log for debugging
    try {
        const response = await axios.put(`http://127.0.0.1:8000/api/booking-requests/${bookingRequestId}/cancel`);
        if (response.status === 200) {
            toast.add({
                severity: 'success',
                summary: 'Cancellation Success.',
                detail: 'Booking request cancelled successfully!',
                life: 3000
            });
            // Update the booking status in the local state
            const booking = bookings.value.find(b => b.bookingRequestID === bookingRequestId);
            if (booking) {
                booking.bookingReqStatus = 'Cancelled';
            }
            fetchData(); // Refresh the bookings list
        }
    } catch (error) {
        console.error('Error cancelling booking request:', error);
        if (error.response) {
            // Check the status code and display appropriate toast message
            if (error.response.status === 400) {
                toast.add({
                    severity: 'warn',
                    summary: 'Cancellation Warning.',
                    detail: `${error.response.data.detail}.`,
                    life: 3000
                });
            } else {
                toast.add({
                    severity: 'error',
                    summary: 'Cancellation Error.',
                    detail: 'Error cancelling booking request. Please try again later.',
                    life: 3000
                });
            }
        } else {
            toast.add({
                severity: 'error',
                summary: 'Cancellation Error.',
                detail: 'Error cancelling booking request. Please try again later.',
                life: 3000
            });
        }
    }
};

const getTextColorStyle = (status) => {
    switch (status) {
        case 'Approved':
            return { color: 'green', fontWeight: '600' }; // Change text color to green for Approved
        case 'Pending':
            return { color: 'orange', fontWeight: '600' }; // Change text color to orange for Pending
        case 'Rejected':
            return { color: 'red', fontWeight: '600' }; // Change text color to red for Rejected
        case 'Cancelled':
            return { color: 'gray', fontWeight: '600' }; // Change text color to gray for Cancelled
        default:
            return null;
    }
};

</script>

<template>

    <SideBarMenu />
    <TopBarMenu />
    <Toast />

    <div class="instructorBookings-container">

        <span class="greetings">Bookings</span>

        <!-- Buttons: Sorting, Filtering, Creating Request -->
        <div class="instructorBookings-buttons">



            <span class="sortButton">
                <label for="dropdown" id="sortLabel"> Sort By: </label>
                <Dropdown id="sort" v-model="selectedSortOption" :options="sortOptions" optionLabel="option"
                    placeholder="Date" checkmark :highlightOnSelect="false" class="w-full md:w-14rem"
                    @change="fetchData" />
            </span>

            <span class="filterButton">
                <label for="dropdown" id="filterLabel"> Filter: </label>
                <Dropdown id="sort" v-model="selectedFilterOption" :options="filterOptions" optionLabel="status"
                    placeholder="Status" checkmark :highlightOnSelect="false" class="w-full md:w-14rem"
                    @change="fetchData" />
            </span>

            <span class="clearFilterButton">
                <Button icon="pi pi-filter-slash" id="clearFilters"></Button>
            </span>

            <!-- Button for Dialog Box/Pop Up -->
            <Button id="bookingButton" @click="reqVisible = true" label="Book a Schedule" icon="pi pi-pencil" />

            <!-- Dialog Box/Pop Up for Creating Booking Request -->
            <Dialog v-model:visible="reqVisible" modal header="Booking Request"
                style="font-family: 'Inter', sans-serif;" :style="{ width: '30rem' }">
                <span class="p-text-secondary block mb-5">Fill out the details.</span>
                <form @submit.prevent="bookSchedule">
                    <div class="fields">
                        <label for="username" class="font-semibold w-6rem">Instructor ID</label>
                        <InputText id="username" class="inputBox" autocomplete="off"
                            v-model="bookingRequestData.instructorID" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">Computer Lab. No.</label>
                        <Dropdown v-model="bookingRequestData.computerLabID" :options="rooms" optionLabel="roomNum"
                            placeholder="Select a Room" checkmark :highlightOnSelect="false" class="dropdownField" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">Booking Date</label>
                        <Calendar v-model="bookingRequestData.bookingDate" dateFormat="dd/mm/yy"
                            class="calendarField" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">Start Time</label>
                        <Calendar id="calendar-timeonly" v-model="bookingRequestData.bookingStartTime" timeOnly
                            :timeFormat="'HH:mm'" hourFormat="12" class="timeField-start" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">End Time</label>
                        <Calendar id="calendar-timeonly" v-model="bookingRequestData.bookingEndTime" timeOnly
                            :timeFormat="'HH:mm'" hourFormat="12" class="timeField-end" />
                    </div>
                    <div class="fields">
                        <label for="email" class="font-semibold w-6rem">Purpose</label>
                        <InputText id="purpose" class="inputBox" autocomplete="off"
                            v-model="bookingRequestData.bookingPurpose"
                            placeholder="(e.g., Course Name, Meeting, Event Name)" />
                    </div>
                    <div class="dialogButtons">
                        <Button type="button" id="cancelButton" label="Cancel" severity="secondary"
                            @click="visible = false"></Button>
                        <Button type="button" id="submitButton" label="Submit" @click="submitBookingRequest"></Button>
                    </div>
                </form>

            </Dialog>
        </div>


        <div class="tableBookings">
            <DataTable :value="booking" tableStyle="max-width: 80rem; font-family: 'Inter', sans-serif;">
                <Column field="computerLabID" header="Room" style="color: #DD385A; height: 70px"></Column>
                <Column field="bookingDate" header="Requested Date" style="color: #DD385A;"></Column>
                <Column field="bookingStartTime" header="Start Time" style="color: #DD385A;"></Column>
                <Column field="bookingEndTime" header="End Time" style="color: #DD385A;"></Column>
                <Column field="bookingPurpose" header="Purpose" style="color: #DD385A;"></Column>
                <Column field="bookingReqStatus" header="Status" style="color: #DD385A;">
                    <template #body="slotProps">
                        <span :style="getTextColorStyle(slotProps.data.bookingReqStatus)">
                            {{ slotProps.data.bookingReqStatus }}
                        </span>
                    </template>
                </Column>
                <Column header="Actions" style="color: #DD385A;">
                    <template #body="slotProps">
                        <Button v-if="slotProps.data.bookingReqStatus !== 'Approved'" label="Cancel" icon="pi pi-times"
                            class="p-button-danger" id="cancelRequestButton"
                            :disabled="slotProps.data.bookingReqStatus === 'Cancelled'"
                            @click="cancelBookingRequest(slotProps.data.bookingRequestID)" />
                    </template>
                </Column>
            </DataTable>
        </div>

    </div>


</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
}

.instructorBookings-container {
    margin-left: 60px;
    padding: 70px 100px;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}

.instructorBookings-buttons {
    padding: 15px 0px;
}

label {
    font-weight: 500;
}

.filterButton {
    margin-left: 15px;
}

#sortLabel {
    font-weight: 400;
}

#filterLabel {
    font-weight: 400;
}

#clearFilters {
    background-color: white;
    color: #6C757D;
    border-style: solid;
    border-color: #CED4DA;
    padding: 10px 15px;
    margin-left: 10px;
}

#bookingButton {
    background-color: #DD385A;
    border: none;
    padding: 10px 15px;
    margin-left: 40px;
}

.fields {
    margin: 15px 0;
}

.inputBox {
    margin-left: 15px;
}

.dropdownField {
    margin-left: 15px;
}

.calendarField {
    margin-left: 15px;
}

.timeField-start {
    margin-left: 15px;
}

.timeField-end {
    margin-left: 15px;
}

#purpose {
    width: 320px;
}

.dialogButtons {
    padding-top: 15px;
}

#submitButton {
    margin-left: 10px;
    background-color: #DD385A;
    border: none;
}

#cancelRequestButton {
    background-color: #cf4545;
    color: #ffffff;
    border: none;
}

#cancelRequestButton:disabled {
    background-color: #dcdcdc;
    color: #545454;
    cursor: not-allowed;
}

</style>