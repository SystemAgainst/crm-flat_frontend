import { createWebHistory, createRouter } from 'vue-router';
import { useAuthStore } from "@/store/authStore.js";


const routes = [
	{
		path: '/apartments',
		alias: '/',
		name: 'home',
		component: () => import('@/views/ApartmentList.vue'),
		meta: {
			layout: 'main',
			auth: true,
		},
	},
	{
		path: '/create-apartment',
		name: 'create',
		component: () => import('@/views/ApartmentCreate.vue'),
		meta: {
			layout: 'main',
			auth: true,
		},
	},
	{
		path: '/apartments/:id',
		name: 'apartment',
		props: true,
		component: () => import('@/views/ApartmentDetail.vue'),
		meta: {
			layout: 'main',
			auth: true,
		},
	},
	{
		path: '/lessor-data',
		component: () => import('@/views/LessorPersonalData.vue'),
		name: 'LessorPersonalData',
		meta: {
			layout: 'main',
			auth: true,
		},
	},
	{
		path: '/renter-data',
		component: () => import('@/views/RenterPersonalData.vue'),
		name: 'RenterPersonalData',
		meta: {
			layout: 'main',
			auth: true,
		},
	},
	{
		path: '/docs',
		component: () => import('@/views/DocumentView.vue'),
		name: 'Documents',
		meta: {
			layout: 'main',
			auth: true,
		},
	},
	{
		path: '/auth',
		component: () => import('@/views/AuthView.vue'),
		name: 'Auth',
		meta: {
			layout: 'auth',
			auth: false,
		},
	},
	{
		path: '/register',
		component: () => import('@/views/RegisterView.vue'),
		name: 'Register',
		meta: {
			layout: 'auth',
			auth: false,
		},
	},
	{
		path: '/list-renter',
		alias: '/list-renter',
		name: 'RenterList',
		component: () => import('@/views/ClientList.vue'),
		meta: {
			layout: 'main',
			auth: true,
		},
	},
	{
		path: '/create-renter',
		alias: '/create-renter',
		name: 'CreateClient',
		component: () => import('@/views/ClientCreate.vue'),
		meta: {
			layout: 'main',
			auth: true,
		},
	},
	{
		path: '/client/main',
		alias: '/client/main',
		name: 'MainClientRolePage',
		component: () => import('@/views/ClientRole/MainClientRolePage.vue'),
		meta: {
			layout: 'client',
			auth: true,
		},
	},
	{
		path: '/client/main/apartment/:id',
		name: 'apartmentByRole',
		props: true,
		component: () => import('@/views/ClientRole/ApartmentDetailClientPage.vue'),
		meta: {
			layout: 'client',
			auth: true,
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
	const store = useAuthStore();

	const isRequireAuth = to.meta.auth;

	if (isRequireAuth && !store.isAuthenticate) {
		next('/auth?message=auth');
	} else if (isRequireAuth && store.isAuthenticate) {
		const userRole = store.getRole;
		if (userRole === 'CLIENT' && !to.path.startsWith('/client/main')) {
			next('/client/main');
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;
