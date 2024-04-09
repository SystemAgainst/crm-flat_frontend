import { createMemoryHistory, createRouter } from 'vue-router';


const routes = [
	{ path: '/cards', alias: '/', name: 'home', component: () => import('@/views/CardList.vue') },
	{ path: '/cards/:id', name: 'card', component: () => import('@/views/CardDetail.vue') },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
