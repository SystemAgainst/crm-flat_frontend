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
		<h3 class="detail__subtitle">Изображения квартиры</h3>
		<div class="detail__carousel">
			<UiSlider />
		</div>
		<div class="detail__upper">
			<div class="detail__name">1-к. квартира, 43 м², 19/24 эт.</div>
			<div class="detail__price">60_000 руб/мес</div>
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
</template>

<style scoped lang="scss">
.detail {
	max-height: 100vh;
	padding: 0 2rem;

	&__title {
		font-size: 1.25rem;
		line-height: 1.5;
		font-weight: 700;
	}

	&__carousel {
		margin-bottom: 2rem;
	}

	&__upper {
		width: 1000px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>