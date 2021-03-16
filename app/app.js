import {routes} from './routes.js';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

const app = Vue.createApp({})
app.use(router)

app.mount('#app')