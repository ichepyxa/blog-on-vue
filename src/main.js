import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'

const app = createApp(App)
axios.defaults.baseURL = 'https://blog-laravel:8888/api'

const token = localStorage.getItem('auth-user-token')
if (token) {
	axios.defaults.headers['Authorization'] = `Bearer ${token}`
}

app.use(router)

app.mount('#app')
