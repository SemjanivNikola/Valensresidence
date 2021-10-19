import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main'
import ContactUs from "../views/ContactUs";
import Gallery from "../views/Gallery";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    props: true,
    component: Main
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    props: true,
    component: ContactUs
  },
  {
    path: '/gallery',
    name: 'Gallery',
    props: true,
    component: Gallery
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router
