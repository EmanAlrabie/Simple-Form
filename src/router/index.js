import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignUpForm from '../components/SignUpForm'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-up",
    name: "SignUpForm",
    component: SignUpForm,
  },

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
