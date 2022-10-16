import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import BaseInput from './components/BaseInput.vue'
import Sidebar from './components/Sidebar.vue'

const app = createApp(App)
app.component("sidebar", Sidebar)
app.component("base-input", BaseInput)
app.use(router)
app.mount('#app')