import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/content/Home.vue'
import MyCourse from '../components/content/MyCourse.vue'
import AllCourse from '../components/content/AllCourse.vue'
import ViewBooking from '../components/content/ViewBooking.vue'
import Resigter from '../components/content/Resigter.vue'
import CourseDetail from '../components/content/CourseDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home,
            props: { username: "user 1" }
        },
        {
            path: '/allcourse',
            component: AllCourse
        },
        {
            path: '/mycourse',
            component: MyCourse,
        },
        {
            path: '/viewbooking',
            component: ViewBooking
        },
        {
            path: '/register',
            component: Resigter
        },
        {
            path: '/course/:id',
            name: 'CourseDetail',
            component: CourseDetail,
            props: true
        }

    ]
});