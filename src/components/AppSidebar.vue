<script setup>
import { useSidebarStore } from "@/store/sidebarStore.js";
import SidebarLink from "@/components/SidebarLink.vue";


const store = useSidebarStore();
</script>

<template>
	<div class="sidebar" :style="{ width: store.sidebarWidth }">
		<h1>
			<span>CRM FLAT</span>
		</h1>

		<SidebarLink to="/">Главная</SidebarLink>
		<SidebarLink to="/about-user">О пользователе</SidebarLink>

		<div
			class="collapse-icon"
		>
			<SidebarLink to="/auth">
				<span class="pi pi-user"></span>
			</SidebarLink>
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

	display: flex;
	flex-direction: column;
	float: left;
	padding: .5rem;

	color: white;

	background-color: $sidebar-bg-color;

	transition: .3s ease;
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