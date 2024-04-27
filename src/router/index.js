import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from "../views/LandingPage.vue";
import LogIn from "../views/LogIn.vue";
import AdminLogin from "../views/Admin/AdminLogin.vue";
import InstructorLogin from "../views/InstructorLogin.vue";

import SignUp from "../views/SignUp.vue";

import AdminDashboard from "../views/Admin/AdminDashboard.vue";
import AdminBookings from "../views/Admin/AdminBookings.vue";
import AdminNotifications from "../views/Admin/AdminNotifications.vue";

import InstructorDashboard from "../views/InstructorDashboard.vue";
import InstructorSchedule from "../views/InstructorSchedule.vue";
import InstructorBookings from "../views/InstructorBookings.vue";
import CreateBookingRequest from "../views/CreateBookingRequest.vue";

import Try from "../views/try.vue";

const routes = [
    { path: "/", component: LandingPage, },
    { path: "/login", component: LogIn, },
    { path: "/signup", component: SignUp, },

    { path: "/admindashboard", component: AdminDashboard, },
    { path: "/adminbookings", component: AdminBookings, },
    { path: "/adminlogin", component: AdminLogin, },
    { path: "/adminnotifications", component: AdminNotifications, },

    { path: "/instructordashboard", component: InstructorDashboard, },
    { path: "/instructorschedule", component: InstructorSchedule, },
    { path: "/instructorbookings", component: InstructorBookings, },
    { path: "/instructorlogin", component: InstructorLogin, },
    { path: "/createbookingrequest", component: CreateBookingRequest, },

    { path: "/try", component: Try, },
    
    
    
    
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;