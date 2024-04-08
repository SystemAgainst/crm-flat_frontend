<script setup>
import { storeToRefs } from "pinia";
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

<style scoped>
.home {
	background-color: white;
}
</style>
