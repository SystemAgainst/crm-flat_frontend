<script setup>
import { cardData } from "@/data/cardData.js";
import { computed } from "vue";


const cards = computed(() => cardData);
</script>

<template>
	<div class="card">
		<h2 class="title">Ваши активы</h2>

		<article
			class="card__article card_margin"
			v-for="card in cards"
			:key="card.id"
		>
			<img class="card__img" :src='card.image' :alt='card.alt'>

			<div class="card__data">
				<div class="card__data-upper">
					<div class="card__title">{{ card.title }}</div>
					<div class="card__price">{{ card.price }}</div>
				</div>
				<div class="card__description">{{ card.description }}</div>
				<router-link class="card__btn" :to="`/cards/${card.id}`">Подробнее</router-link>
			</div>
		</article>
	</div>
</template>

<style scoped lang="scss">
$sidebar-bg-color: #2f855a;
$sidebar-item-hover: #38a169;
$sidebar-item-active: #276749;

img {
	display: block;
	max-width: 100%;
	height: auto;
}

.card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&__article {
		display: flex;
		gap: 2rem;

		background-color: #efefef;
		padding: 2rem;
		border-radius: 2rem;
	}

	&__data {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	&__btn {
		display: block;
		text-decoration: none;
		background-color: $sidebar-bg-color;
		text-align: center;
		padding: 1rem 1.5rem;
		border-radius: 8px;
		width: fit-content;
		color: white;
		transition: background-color .2s linear;

		&:hover,
		&:active,
		&:focus {
			background-color: $sidebar-item-hover;
		}
	}

	&__title {
		font-size: 1.5rem;
		font-weight: 700;
	}

	&__price {
		font-size: 1.25rem;
		text-space: 1px;
		font-weight: 500;
	}

	&__img {
		//width: 328px;
		border-radius: 1.5rem;
	}

	&_margin {
		margin-bottom: 2rem;
	}
}

</style>