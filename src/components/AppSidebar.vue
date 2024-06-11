<script setup>
import SidebarLink from "@/components/SidebarLink.vue";
import { useAuthStore } from "@/store/authStore.js";


const store = useAuthStore();
</script>

<template>
	<div class="sidebar">
		<h1>
			<span class="sidebar__logo">RentApp</span>
		</h1>

		<SidebarLink to="/">
			Главная
		</SidebarLink>
		<SidebarLink to="/list-renter">
			Список клиентов
		</SidebarLink>
		<br>
		<SidebarLink to="/create-apartment">
			Создать апартемент
		</SidebarLink>
		<SidebarLink to="/create-renter">
			Завести съемщика
		</SidebarLink>
		<br>
		<SidebarLink to="/docs">
			Документы
		</SidebarLink>

		<div
			class="collapse-icon"
		>
			<a href="/auth" @click="store.logout()">
				<span class="pi pi-sign-out" style="color: white"></span>
			</a>
    </div>
	</div>
</template>

<style scoped lang="scss">
$sidebar-bg-color: #2f855a;
$sidebar-item-hover: #38a169;
$sidebar-item-active: #276749;

.sidebar {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 1;
	width: 300px;

	display: flex;
	flex-direction: column;
	float: left;
	padding: 1rem 2rem;

	color: white;

	background-color: $sidebar-bg-color;

	transition: .3s ease;

	text-align: center;
}

.collapse-icon {
	position: absolute;
	bottom: 0;

	padding: .75rem;

	color: (255, 255, 255, 0.7);

	transition: .2s linear;
	cursor: pointer;
}
</style>
