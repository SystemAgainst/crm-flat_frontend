<script setup>
import { useSidebarStore } from "@/store/sidebarStore.js";
import AppSidebar from "@/components/AppSidebar.vue";


const store = useSidebarStore();
</script>

<template>
	<AppSidebar />
	<div class="home container" :style="{ 'margin-left': store.sidebarWidth }">
		<router-view />
	</div>
</template>

<style scoped lang="scss">
$sidebar-bg-color: #2f855a;
$sidebar-item-hover: #38a169;
$sidebar-item-active: #276749;

.container {
	max-width: 90%;
	margin: 0 auto;
	padding: 0 2rem;
}

.home {}

</style>
