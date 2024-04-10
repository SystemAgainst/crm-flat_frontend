<script setup>
import { useSidebarStore } from "@/store/index.js";
import AppSidebar from "@/components/AppSidebar.vue";


const store = useSidebarStore();
</script>

<template>
	<AppSidebar />
	<div class="home" :style="{ 'margin-left': store.sidebarWidth }">
		<router-view />
	</div>
</template>

<style scoped lang="scss">
$sidebar-bg-color: #2f855a;
$sidebar-item-hover: #38a169;
$sidebar-item-active: #276749;

.home {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding: 0 2rem;
	//background: hsl(187 40% 98%);
	//background-color: white;
}

</style>
