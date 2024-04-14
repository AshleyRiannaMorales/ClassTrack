import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from "../views/LandingPage.vue";
import LogIn from "../views/LogIn.vue";
import AdminLogin from "../views/AdminLogin.vue";
import InstructorLogin from "../views/InstructorLogin.vue";

import SignUp from "../views/SignUp.vue";

import AdminDashboard from "../views/AdminDashboard.vue";
import AdminBookings from "../views/AdminBookings.vue";

import InstructorDashboard from "../views/InstructorDashboard.vue";
import InstructorSchedule from "../views/InstructorSchedule.vue";
import InstructorBookings from "../views/InstructorBookings.vue";

import Try from "../views/try.vue";

const routes = [
    {
        path: "/",
        component: LandingPage,
    },
    {
        path: "/login",
        component: LogIn,
    },
    {
        path: "/signup",
        component: SignUp,
    },
    {
        path: "/admindashboard",
        component: AdminDashboard,
    },
    {
        path: "/adminbookings",
        component: AdminBookings,
    },
    {
        path: "/instructordashboard",
        component: InstructorDashboard,
    },
    {
        path: "/instructorschedule",
        component: InstructorSchedule,
    },
    {
        path: "/try",
        component: Try,
    },
    {
        path: "/instructorbookings",
        component: InstructorBookings,
    },
    {
        path: "/adminlogin",
        component: AdminLogin,
    },
    {
        path: "/instructorlogin",
        component: InstructorLogin,
    }
    
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;