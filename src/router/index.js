import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from "../views/LandingPage.vue";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import AdminBookings from "../views/AdminBookings.vue";
import Laboratories from "../views/Laboratories.vue";
import InstructorDashboard from "../views/InstructorDashboard.vue";

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
        path: "/laboratories",
        component: Laboratories,
    },
    {
        path: "/instructordashboard",
        component: InstructorDashboard,
    }
    
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;