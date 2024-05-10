import { createWebHistory, createRouter } from 'vue-router';
import { useAuthStore } from "@/store/authStore.js";


const routes = [
	{
		path: '/cards',
		alias: '/',
		name: 'home',
		component: () => import('@/views/CardList.vue'),
		meta: {
			layout: 'main',
			auth: true,
		},
	},
	{
		path: '/cards/:id',
		name: 'card',
		props: true,
		component: () => import('@/views/CardDetail.vue'),
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

	switch (true) {
		case isRequireAuth && store.isAuthenticate:
			next();
			break;
		case isRequireAuth && !store.isAuthenticate:
			next('/auth?message=auth');
			break;
		default:
			next();
			break;
	}
});

export default router;
