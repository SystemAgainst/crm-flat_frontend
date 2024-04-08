<script setup>
import { useSidebarStore } from "@/store/index.js";
import SidebarLink from "@/components/SidebarLink.vue";


const store = useSidebarStore();
</script>

<template>
	<div class="sidebar" :style="{ width: store.sidebarWidth }">
		<h1>
      <span v-if="store.collapsed">
        <div>C</div>
        <div>F</div>
      </span>
			<span v-else>CRM FLAT</span>
		</h1>

		<SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
		<SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
		<SidebarLink to="/analytics" icon="fas fa-chart-bar">Analytics</SidebarLink>
		<SidebarLink to="/friends" icon="fas fa-users">Friends</SidebarLink>
		<SidebarLink to="/image" icon="fas fa-image">Images</SidebarLink>

		<span
			class="collapse-icon"
			:class="{ 'rotate-180': store.collapsed }"
			@click="store.toggleSidebar()"
		>
			<
			<!-- <i class="fas fa-angle-double-left" /> -->
    </span>
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
}

.rotate-180 {
	transform: rotate(180deg);
	transition: .2s linear;
}

</style>