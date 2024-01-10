import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({ 
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'tabBer',
        component: () => import("@/views/TabBer/index.vue"),
        children: [{
            path: '/',
            name: 'home',
            component: () => import('../views/Home/index.vue'),
            meta: { transition: 'slide-left' },
        }, {
            path: '/my',
            name: 'my',
            component: () => import('../views/My/index.vue'),
            meta: { transition: 'slide-left' },
        }
        ]
    },
    {
        path: '/goodsDetail',
        name: 'goodsDetail',
        component: () => import('@/views/GoodsDetail/index.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/index.vue'),
    }

    ]
})


export default router
