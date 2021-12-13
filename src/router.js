import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Jobs from "./views/Jobs.vue";
import Profile from "./views/Profile.vue";
import Login from "./views/Auth/Login.vue";
import Register from "./views/Auth/Register.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from) => {
  return true;
});

export default router;
