<script setup>

import TheNavbar from "@/components/TheNavbar.vue";
</script>

<template>
	<TheNavbar />
	<div class="container with-nav">
		<router-view />
	</div>
</template>

<style scoped lang="scss">
.container.with-nav {
	margin-top: 70px;
}
</style>