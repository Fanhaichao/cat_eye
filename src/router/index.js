import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import( /* webpackChunkName: "group-foo" */ '../views/home')
const Cinema = () => import( /* webpackChunkName: "group-foo" */ '../views/cinema')
const Mine = () => import( /* webpackChunkName: "group-foo" */ '../views/mine')
const Error = () => import( /* webpackChunkName: "group-foo" */ '../views/error')
const HomeComing = () => import( /* webpackChunkName: "group-foo" */ '../views/home/HomeComing.vue')
const HomeHot = () => import( /* webpackChunkName: "group-foo" */ '../views/home/HomeHot.vue')
const City = () => import( /* webpackChunkName: "group-foo" */ '../views/city')
const Search = () => import( /* webpackChunkName: "group-foo" */ '../views/search')



Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/home', //重定向
    }, {
        path: '/home',
        component: Home,
        redirect: '/home/f-hot',
        children: [{
            path: 'f-coming',
            component: HomeComing,
            name: 'f-coming'
        }, {
            path: 'f-hot',
            component: HomeHot,
            name: 'f-hot'
        }]
    }, {
        path: '/cinema',
        component: Cinema
    }, {
        path: '/mine',
        component: Mine
    }, {
        path: '/city',
        component: City
    }, {
        path: '/search',
        component: Search
    }, {
        path: '*',
        component: Error
    }]
})

export default router