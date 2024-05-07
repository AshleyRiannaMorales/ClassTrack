import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from "../views/LandingPage.vue";
import AdminLogin from "../views/Admin/AdminLogin.vue";

import SignUp from "../views/SignUp.vue";

import AdminDashboard from "../views/Admin/AdminDashboard.vue";
import AdminBookings from "../views/Admin/AdminBookings.vue";
import AdminNotifications from "../views/Admin/AdminNotifications.vue";
import AdminSchedule from "../views/Admin/AdminSchedule.vue";

import InstructorLogIn from "../views/Instructor/InstructorLogIn.vue"
import InstructorDashboard from "../views/Instructor/InstructorDashboard.vue";
import InstructorSchedule from "../views/Instructor/InstructorSchedule.vue";
import InstructorBookings from "../views/Instructor/InstructorBookings.vue";
import CreateBookingRequest from "../views/CreateBookingRequest.vue";

import Try from "../views/try.vue";

const routes = [
    { path: "/", component: LandingPage, },
    { path: "/signup", component: SignUp, },

    { path: "/admindashboard", component: AdminDashboard, },
    { path: "/adminbookings", component: AdminBookings, },
    { path: "/admin", component: AdminLogin, },
    { path: "/adminnotifications", component: AdminNotifications, },
    { path: "/adminschedule", component: AdminSchedule, },

    { path: "/instructor", component: InstructorLogIn, },
    { path: "/instructordashboard", component: InstructorDashboard, },
    { path: "/instructorschedule", component: InstructorSchedule, },
    { path: "/instructorbookings", component: InstructorBookings, },
    { path: "/createbookingrequest", component: CreateBookingRequest, },

    { path: "/try", component: Try, },
    
    
    
    
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;