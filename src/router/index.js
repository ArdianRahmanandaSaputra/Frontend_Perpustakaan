import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/Anggota',
			component: () => import('../views/Home/Anggota.vue')
		},
		{
			path: '/Buku',
			component: () => import('../views/Home/Buku.vue')
		},
		{
			path: '/Peminjaman',
			component: () => import('../views/Home/Peminjaman.vue')
		},
		{
			path: '/Login',
			component: () => import('../views/Login.vue')
		},
		{
			path: '/CreateAnggota',
			component: () => import('../views/Create/AnggotaView.vue')
		},
		{
			path: '/CreateBuku',
			component: () => import('../views/Create/BukuView.vue')
		},
		{
			path: '/CreatePeminjaman',
			component: () => import('../views/Create/PeminjamanView.vue')
		},
	],
})

export default router