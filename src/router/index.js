import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from "../views/LandingPage.vue";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import AdminBookings from "../views/AdminBookings.vue";
import InstructorDashboard from "../views/InstructorDashboard.vue";
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
        path: "/try",
        component: Try,
    }
    
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;