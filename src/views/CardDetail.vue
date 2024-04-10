<script setup>
defineProps({
	cardId: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="detail">
		<div class="detail__upper">
			<div class="detail__title">1-к. квартира, 43 м², 19/24 эт.</div>
			<div class="detail__price">60_000 руб</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.detail {
	display: flex;
	flex-direction: column;
	text-align: left;
	height: 100vh;
	padding: 2rem;

	&__upper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}
}
</style>