<script setup>
import { computed, onMounted, ref } from "vue";
import { getAllApartments } from "@/api/apartament.js";
import { useAuthStore } from "@/store/authStore.js";

const cards = ref([]);
const store = useAuthStore();

const pending = ref(true);
const isAnyCard = computed(() => cards.value.length > 0);

const filteredCards = computed(() => {
	if (cards.value.length === 0) return cards.value;

	return cards.value.filter((el) => el.client?.id === store.user.id);
});

onMounted(async () => {
	fetchAllApartments();
});

const fetchAllApartments = () => {
	pending.value = true;

	getAllApartments()
		.then((res) => {
			cards.value = res.data?.rows;
		})
		.catch((e) => {
			console.error("Ошибка при получении данных:", e);
		})
		.finally(() => {
			pending.value = false;
		});
};
</script>

<template>
	<div class="client">
		<h2 class="title">Ваш апартамент</h2>

		<div v-if="pending">Загрузка...</div>

		<div v-else-if="!isAnyCard">Данных пока нет</div>

		<template v-else>
			<article
				class="client__article client_margin"
				v-for="card in filteredCards"
				:key="card.id"
				:card="card"
			>
				<div class="client__data">
					<div class="client__data-upper">
						<div class="client__title">{{ card.title }}</div>
						<div class="client__price">{{ card.cost }} руб/мес + КУ</div>
					</div>
					<div class="client__description">День оплаты: каждое 5 число текущего месяца</div>
					<router-link class="client__btn" :to="`/client/main/apartment/${card.client.apartmentId}`">Квартира проживания →</router-link>
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

.client {
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
		color: $sidebar-item-hover;
		cursor: pointer;
		border: none;
	}

	&__title {
		font-size: 1.5rem;
		font-weight: 700;
	}

	&__price {
		font-size: 1.25rem;
		font-weight: 500;
	}

	&__description {
		margin: 2rem 0;
	}

	&_margin {
		margin-bottom: 2rem;
	}
}
</style>
