import { createWebHistory, createRouter } from 'vue-router';


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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
});

export default router;
