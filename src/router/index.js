import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from "../views/LandingPage.vue";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import AdminBookings from "../views/AdminBookings.vue";
import dumpPage from "../views/trylng.vue"

const routes = [
    {
        path: "/",
        component: LandingPage,
    },
    {
        path: "/dumppage",
        component: dumpPage,
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
    
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;