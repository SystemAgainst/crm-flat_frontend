<script setup>
import { onMounted, ref } from "vue";
import { getAllApartments } from "@/api/apartament.js";
import { BACKEND_HOST } from "@/data/constants.js";

const cards = ref([]);
const pending = ref(true);
const isCardsEmpty = ref(false);

onMounted(async () => {
	setTimeout(async () => {
		try {
			const res = await getAllApartments();
			pending.value = false;
			if (res.data.length <= 0) {
				isCardsEmpty.value = true;
			} else {
				isCardsEmpty.value = false;
				cards.value = res.data.rows;
			}
		} catch (error) {
			console.error("Ошибка при получении данных:", error);
			pending.value = false;
			isCardsEmpty.value = true;
		}
	}, 300);
});
</script>

<template>
	<div class="card">
		<h2 class="title">Ваши активы</h2>

		<div v-if="pending">Загрузка...</div>

		<div v-else-if="isCardsEmpty">Данных пока нет</div>

		<template v-else>
			<article
				class="card__article card_margin"
				v-for="card in cards"
				:key="card.id"
				:card="card"
			>
				<img class="card__img" :src="`${BACKEND_HOST}/${card.info.img}`" :alt="card.info.title" />

				<div class="card__data">
					<div class="card__data-upper">
						<div class="card__title">{{ card.info.title }}</div>
						<div class="card__price">{{ card.info.price }}</div>
					</div>
					<div class="card__description">{{ card.info.description }}</div>
					<router-link class="card__btn" :to="`/cards/${card.id}`">Подробнее</router-link>
				</div>
			</article>
		</template>
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
	align-items: center;

	&__article {
		display: flex;
		gap: 2rem;

		background-color: #efefef;
		padding: 2rem;
		border-radius: 2rem;

		width: 700px;
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
		transition: background-color 0.2s linear;
		cursor: pointer;
		border: none;

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
		width: 328px;
		border-radius: 1.5rem;
	}

	&_margin {
		margin-bottom: 2rem;
	}
}
</style>
