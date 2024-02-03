// import './assets/main.css'
import './assets/site/css/bootstrap.min.css'
import './assets/site/css/icons.min.css'
import './assets/site/css/plugins.css'
import './assets/site/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";


const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
