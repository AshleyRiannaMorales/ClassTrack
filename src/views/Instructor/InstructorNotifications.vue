<script setup>
import SideBarMenu from "../../components/SideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const notifications = ref([]);
const pollingInterval = 10000; // 10 seconds
const router = useRouter();

const fetchBookings = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/booking-requests/newest-to-oldest');
        notifications.value = response.data.map(booking => {
            const formattedDate = new Date(booking.bookingDate).toLocaleDateString();
            if (booking.bookingReqStatus === 'Approved') {
                return {
                    message: `Your booking request for Room ${booking.computerLabID} on ${formattedDate} was approved.`,
                    type: 'approved'
                };
            } else if (booking.bookingReqStatus === 'Rejected') {
                return {
                    message: `Your booking request for Room ${booking.computerLabID} on ${formattedDate} was rejected.`,
                    type: 'rejected'
                };
            }
        }).filter(notification => notification !== undefined);
    } catch (error) {
        console.error('Error fetching booking requests:', error);
    }
};

let pollingIntervalId;

onMounted(() => {
    fetchBookings();
    pollingIntervalId = setInterval(fetchBookings, pollingInterval);
});

onUnmounted(() => {
    if (pollingIntervalId) {
        clearInterval(pollingIntervalId);
    }
});

const handleNotificationClick = () => {
    router.push('/InstructorBookings');
};
</script>

<template>
    <div>
        <SideBarMenu />
        <TopBarMenu />
        
        <div class="instructor-notifications-container">
            <span class="greetings">Instructor Notifications</span>
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

.instructor-notifications-container {
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
    cursor: pointer;
}

.notification-item.approved {
    background-color: #ecfff5; /* Light green for approved booking requests */
}

.notification-item.rejected {
    background-color: #ffebeb; /* Light red for rejected booking requests */
}

#message {
    margin-left: 25px;
}
</style>
