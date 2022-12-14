import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import CreateView from '../views/CreateView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/registration',
			name: 'registration',
			component: RegistrationView,
		},
		{
			path: '/create-post',
			name: 'create-post',
			component: CreateView,
		},
		{
			path: '/post/:id',
			name: 'post',
			component: PostView,
		},
	],
})

export default router
