<script setup>
import AdminSideBarMenu from "../../components/AdminSideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import router from '../../router';


const notifications = ref([]);
const pollingInterval = 10000; // 10 seconds

onMounted(() => {
    fetchBookings();
    pollingIntervalId = setInterval(fetchBookings, pollingInterval);
});


const fetchBookings = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/booking-requests/newest-to-oldest');
        notifications.value = response.data.map(booking => {
            const formattedDate = new Date(booking.bookingDate).toLocaleDateString();
            if (booking.bookingReqStatus === 'Cancelled') {
                return {
                    message: `Booking request from ${booking.instructorName} for Room ${booking.computerLabID} on ${formattedDate} was cancelled.`,
                    type: 'cancelled'
                };
            } else {
                return {
                    message: `New booking request from ${booking.instructorName} for Room ${booking.computerLabID} on ${formattedDate}.`,
                    type: 'new'
                };
            }
        });
    } catch (error) {
        console.error('Error fetching new booking requests:', error);
    }
};

let pollingIntervalId;



onUnmounted(() => {
    if (pollingIntervalId) {
        clearInterval(pollingIntervalId);
    }
});

const handleNotificationClick = () => {
    router.push('/AdminBookings');
};

</script>

<template>
    <div>
        <AdminSideBarMenu />
        <TopBarMenu />
        
        <div class="admin-notifications-container">
            <span class="greetings">Admin Notifications</span>
            <div class="notification-list">
                <div id="notification-content" v-for="(notification, index) in notifications" :key="index" :class="['notification-item', notification.type]" @click="handleNotificationClick">
                    <p id="message">{{ notification.message }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 450;
}

.admin-notifications-container {
    margin-left: 60px;
    padding: 70px 100px;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}

.notification-list {
    margin-top: 20px;
}


.notification-item {
    background-color: #f9f9f9;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.notification-item.new {
    background-color: #ecfff5; /* Light blue for new booking requests */
}

.notification-item.cancelled {
    background-color: #ffebeb; /* Light red for cancelled booking requests */
}

#message {
    margin-left: 25px;
}

</style>
