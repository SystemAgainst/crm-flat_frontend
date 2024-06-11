<script setup>
import { useAuthStore } from "@/store/authStore.js";


const store = useAuthStore();
</script>

<template>
	<nav class="navbar">
		<h3>
			RentApp
		</h3>

		<ul class="navbar-menu">
			<li>
				<router-link to="/">Главная</router-link>
			</li>
			<li>
				<router-link to="/docs">Документы</router-link>
			</li>
			<li>
				<a href="#" @click="store.logout()">Выход</a>
			</li>
		</ul>
	</nav>
</template>

<style scoped lang="scss">
.navbar {
	display: flex;
	padding: 0 2rem;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	z-index: 20;
	top: 0;
	left: 0;
	right: 0;
	height: 56px;
	background-color: #2f855a;
	box-sizing: border-box;
	border-bottom: 1px solid #eaecef;
}
</style>