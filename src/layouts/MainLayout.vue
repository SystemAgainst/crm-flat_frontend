<script setup>
import AppSidebar from "@/components/AppSidebar.vue";
</script>

<template>
	<AppSidebar />
	<div class="container">
		<router-view />
	</div>
</template>

<style scoped lang="scss">
$sidebar-bg-color: #2f855a;
$sidebar-item-hover: #38a169;
$sidebar-item-active: #276749;

.container {
	max-width: 90%;
	padding: 0 2rem;
	margin-left: 300px;
}
</style>
