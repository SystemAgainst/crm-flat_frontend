<script setup>
import UiSlider from "@/components/ui/UiSlider.vue";

defineProps({
	cardId: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="detail">
		<div class="detail__carousel">
			<UiSlider />
		</div>
		<div class="detail__data">
			<div class="detail__upper">
				<h3 class="detail__subtitle">1-к. квартира, 43 м², 19/24 эт.</h3>
				<h3 class="detail__subtitle">60_000 руб/мес</h3>
			</div>
			<h3 class="detail__subtitle">О квартире</h3>
			<div class="detail__description">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, voluptate
			</div>
			<h3 class="detail__subtitle">Дата оплаты</h3>
			<div class="detail__description">
				Каждое 4 число месяца
			</div>
			<h3 class="detail__subtitle">Статус оплаты</h3>
			<div class="detail__description">
				Оплачено
			</div>
		</div>
		<!-- /.detail__data -->
	</div>
</template>

<style scoped lang="scss">
.detail {
	display: flex;
	flex-direction: row;
	align-items: center;
	width: fit-content;
	height: 100vh;
	margin: 0 auto;
	padding: 0 2rem;
	gap: 4rem;

	&__data {
		min-width: fit-content;
		width: 100%;
		margin: 0 auto;
		padding: 2rem;

		background-color: #f1f1f1;
		border-radius: 1rem;
		box-shadow: 12px 12px 2px 1px rgb(105, 166, 131);	}

	&__title {
		font-size: 1.25rem;
		line-height: 1.5;
		font-weight: 700;
	}

	&__subtitle {
		font-size: 1.2rem;
		line-height: 1.5;
		font-weight: 600;
	}

	&__carousel {
	}

	&__upper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>