<script setup>
defineProps({
	cardId: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="detail">This is the page that opens on <strong>/blog/{{ $route.params.id }}</strong></div>
</template>

<style scoped lang="scss">
</style>