<script setup>
import { computed, onMounted, ref } from "vue";
import { getAllApartments, removeApartmentById } from "@/api/apartament.js";

const cards = ref([]);
const pending = ref(true);
const isAnyCard = computed(() => cards.value.length > 0);

onMounted(async () => {
	fetchAllApartments();
});

const fetchAllApartments = () => {
	pending.value = true;

	getAllApartments().then((res) => {
		cards.value = res.data?.rows;
	}).catch((e) => {
		console.error("Ошибка при получении данных:", e);
	}).finally(() => {
		pending.value = false;
	});
};

const deleteCard = async (id) => {
	pending.value = true;
	await removeApartmentById(id)
		.then(() => {
			fetchAllApartments();
		})
		.catch((e) => {
			console.error(e);
		})
		.finally(() => {
			pending.value = false;
		});
};
</script>

<template>
	<div class="card">
		<h2 class="title">Ваши активы</h2>

		<div v-if="pending">Загрузка...</div>

		<div v-if="!isAnyCard">Данных пока нет</div>

		<template v-else>
			<article
				class="card__article card_margin"
				v-for="card in cards"
				:key="card.id"
				:card="card"
			>
				<button class="card__btn_delete" @click="deleteCard(card.id)">×</button>
				<img class="card__img" src="/static/mockFlatImage.webp" :alt="card.title" />

				<div class="card__data">
					<div class="card__data-upper">
						<div class="card__title">{{ card.title }}</div>
						<div class="card__price">{{ card.cost }}</div>
					</div>
					<div class="card__description">{{ card.description }}</div>
					<router-link class="card__btn" :to="`/apartments/${card.id}`">Подробнее</router-link>
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

		position: relative;

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

		&_delete {
			position: absolute;
			top: 10px;
			right: 10px;
			background: none;
			border: none;
			font-size: 1.5rem;
			color: #000;
			cursor: pointer;

			&:hover {
				color: $sidebar-bg-color;
			}
		}

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
