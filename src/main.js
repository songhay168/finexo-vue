import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/view/Home.vue"
import Servies from "@/view/Servies.vue"
import Whyus from "@/view/Whyus.vue"
import Teamus from "@/view/Teamus.vue"
import About from "@/view/About.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/servies', component: Servies },
    { path: '/whyus', component: Whyus },
    { path: '/teamus', component: Teamus },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

const app = createApp(App)
app.use(router)
app.mount('#app')
