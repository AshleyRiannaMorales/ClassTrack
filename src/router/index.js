import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from "../views/LandingPage.vue";
import AdminLogin from "../views/Admin/AdminLogin.vue";

import SignUp from "../views/SignUp.vue";

import AdminDashboard from "../views/Admin/AdminDashboard.vue";
import AdminBookings from "../views/Admin/AdminBookings.vue";
import AdminNotifications from "../views/Admin/AdminNotifications.vue";
import AdminSchedule from "../views/Admin/AdminSchedule.vue";
import AdminUserManagement from "../views/Admin/AdminUserManagement.vue";
import AdminSeeAccounts from "../views/Admin/AdminSeeAccounts.vue";


import InstructorLogIn from "../views/Instructor/InstructorLogIn.vue"
import InstructorDashboard from "../views/Instructor/InstructorDashboard.vue";
import InstructorSchedule from "../views/Instructor/InstructorSchedule.vue";
import InstructorBookings from "../views/Instructor/InstructorBookings.vue";
import InstructorProfile from "../views/Instructor/InstructorProfile.vue";
import InstructorNotifications from "../views/Instructor/InstructorNotifications.vue";

import Try from "../views/try.vue";
import Trial from "../views/trial.vue";


const routes = [
    { path: "/", component: LandingPage, },
    { path: "/signup", component: SignUp, },

    { path: "/admindashboard", component: AdminDashboard, },
    { path: "/adminbookings", component: AdminBookings, },
    { path: "/admin", component: AdminLogin, },
    { path: "/adminnotifications", component: AdminNotifications, },
    { path: "/adminschedule", component: AdminSchedule, },
    { path: "/users", component: AdminUserManagement, },
    { path: "/adminseeaccounts", component: AdminSeeAccounts, },


    { path: "/instructor", component: InstructorLogIn, },
    { path: "/instructordashboard", component: InstructorDashboard, },
    { path: "/instructorschedule", component: InstructorSchedule, },
    { path: "/instructorbookings", component: InstructorBookings, },
    { path: "/instructorprofile", component: InstructorProfile, },
    { path: "/instructornotifications", component: InstructorNotifications, },

    { path: "/try", component: Try, },
    { path: "/trial", component: Trial, },
    
    
    
    
]

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;