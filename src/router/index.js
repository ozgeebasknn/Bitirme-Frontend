import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KayitView from '../views/KayitView.vue'
import notFound from '../components/notFound.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {


        path: '/anasayfa',
        name: 'anasayfa',
        component: () => import('../views/AnasayfaView.vue')
    },
    {
        path: '/profil/:id',
        name: 'profil',

        component: () => import ('../views/ProfilView.vue')
    },
    {
        path: '/userIlan',
        name: 'userIlan',

        component: () => import ('../views/UserIlanlar.vue')
    },
    {
        path: '/favoriler',
        name: 'favoriler',

        component: () => import ('../views/FavorilerView.vue')
    },
    {
        path: '/ilanDetay/:id',
        name: 'ilanDetay',

        component: () => import ('../views/İlanDetay.vue')
    },
    {
        path: '/favoriler/:id',
        name: 'favoriler',

        component: () => import ('../views/FavorilerView.vue')
    },
    {
        path: '/ilanEkle',
        name: 'ilanEkle',
        component: () => import ('../views/İlanEkle.vue')
    },

    {
        path: '/kayit',
        name: 'kayit',
        meta: {layout: 'blank'},
        component: KayitView
    },
    {
        path: '/giris',
        name: 'giris',
        meta: {layout: 'blank'},
        component: () => import ('../views/LoginView.vue')
    },
    {
        path: '/giris',
        name: 'giris',
        meta: {layout: 'blank'},
        component: () => import ('../views/LoginView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import ('../components/notFound.vue')
    },

    {
        path: '/admin/anasayfa',
        name: 'adminAnasayfa',

        component: () => import ('../views/AdminAnasayfa.vue')
    },
    {
        path: '/admin/login',
        name: 'adminLogin',

        component: () => import ('../views/AdminLoginPanel.vue')
    },
    {
        path: '/admin/adminIlanDetay/:id',
        name: 'adminIlanDetay',

        component: () => import ('../views/AdminIlanDetay.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
