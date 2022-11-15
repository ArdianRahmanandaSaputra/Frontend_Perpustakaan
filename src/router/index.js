import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Login
		},
		{
			path: '/Home',
			component: () => import('../views/Home/Home.vue')
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
			path: '/CreateAnggota',
			component: () => import('../views/Create/AnggotaCreateView.vue')
		},
		{
			path: '/CreateBuku',
			component: () => import('../views/Create/BukuCreateView.vue')
		},
		{
			path: '/CreatePeminjaman',
			component: () => import('../views/Create/PeminjamanCreateView.vue')
		},
		{
			path: '/UpdateAnggota/:id',
			component: () => import('../views/Update/AnggotaUpdateView.vue')
		},
		{
			path: '/UpdateBuku/:id',
			component: () => import('../views/Update/BukuUpdateView.vue')
		},
		{
			path: '/UpdatePeminjaman/:id',
			component: () => import('../views/Update/PeminjamanUpdateView.vue')
		},
		{
			path: '/FormPengembalian/:id',
			component: () => import('../views/Create/PengembalianCreateView.vue')
		},
		{
			path: '/Pengembalian',
			component: () => import('../views/Home/Pengembalian.vue')
		},
		{
			path: '/CetakView/:id',
			component: () => import('../views/CetakView.vue')
		},
	],
})

export default router