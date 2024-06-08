import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/style.scss";
import "primeicons/primeicons.css";
import App from "@/App.vue";
import router from "@/router/index.js";
import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import ClientLayout from "@/layouts/ClientLayout.vue";


const pinia = createPinia();
const app = createApp(App);

app
	.use(pinia)
	.use(router)
	.mount("#app");

app.component('main-layout', MainLayout);
app.component('auth-layout', AuthLayout);
app.component('client-layout', ClientLayout);
