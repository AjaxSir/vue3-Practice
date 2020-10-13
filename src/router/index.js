import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import dash1 from '@/views/dashboard/index.vue'
import dash2 from '@/views/dashboard/index2.vue'
const routers = [{
        path: '/dash',
        component: dash1
    },
    {
        path: '/index2',
        name: 'index2',
        component: dash2,
        beforeEnter: (to, from, next) => {
            console.log(from, 'from route', to)
            next()
        }
    }
]
export default createRouter({
    history: createWebHashHistory(),
    routes: routers
})