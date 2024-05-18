// store.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        user: {}, // User information
        bookings: [], // List of booking requests
    },
    getters: {
        getUser: (state) => state.user,
        getBookings: (state) => state.bookings.filter(booking => booking.instructorID === state.user.id),
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        SET_BOOKINGS(state, bookings) {
            state.bookings = bookings;
        },
    },
    actions: {
        async fetchBookings({ commit }, sortOption) {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/booking-requests/${sortOption}`);
                commit('SET_BOOKINGS', response.data);
            } catch (error) {
                console.error('Error fetching bookings data:', error);
            }
        },
    },
});
