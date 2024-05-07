import { createWebHistory, createRouter } from 'vue-router';


const routes = [
	{ path: '/cards', alias: '/', name: 'home', component: () => import('@/views/CardList.vue') },
	{ path: '/cards/:id', name: 'card', props: true, component: () => import('@/views/CardDetail.vue') },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
