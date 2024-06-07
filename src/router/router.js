import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import Servies from "@/view/Servies.vue";
import Whyus from "@/view/Whyus.vue";
import Teamus from "@/view/Teamus.vue";
import About from "@/view/About.vue";
import Register from "@/view/Register.vue";
import Login from "@/view/Login.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/servies", component: Servies },
    { path: "/whyus", component: Whyus },
    { path: "/teamus", component: Teamus },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router