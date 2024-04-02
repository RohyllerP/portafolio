import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './rutas.js'
import VueSplide from '@splidejs/vue-splide';
const app = createApp(App)
app.use(router)
app.use( VueSplide )
app.mount('#app')
