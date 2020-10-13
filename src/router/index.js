import { createRouter, createWebHistory } from 'vue-router';
import dash1 from '@/views/dashboard/index.vue'
import dash2 from '@/views/dashboard/index2.vue'
const routers = [{
        path: '/',
        component: dash1
    },
    {
        path: '/index2',
        component: dash2
    }
]
export default createRouter({
    history: createWebHistory(),
    routes: routers
})