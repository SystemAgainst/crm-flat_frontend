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
				<router-link class="navbar__link" to="/">Главная</router-link>
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
$sidebar-bg-color: #2f855a;

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
	background-color: $sidebar-bg-color;
	color: white;
	box-sizing: border-box;
	border-bottom: 1px solid #eaecef;
}

.navbar-menu {
	list-style: none;
	display: flex;
}

.navbar-menu li {
	margin-right: 2rem;
}

.navbar-menu li a {
	color: white;
	text-decoration: none;
}

.navbar-menu li a:hover, .navbar-menu li a.active {
	border-bottom: 2px solid #3eaf7c;
}
</style>