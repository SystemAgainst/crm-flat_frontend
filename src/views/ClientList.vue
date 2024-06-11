<script setup>
import { onMounted, ref } from "vue";
import { getListClients } from "@/api/client.js";

const clients = ref([]);
const pending = ref(true);
const isCardsEmpty = ref(false);

onMounted(async () => {
	setTimeout(async () => {
		try {
			const res = await getListClients();
			pending.value = false;
			if (res.data.count === 0) {
				isCardsEmpty.value = true;
			} else {
				isCardsEmpty.value = false;
				console.log(res.data.rows);
				clients.value = res.data.rows;
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
	<div class="client">
		<h2 class="title">Клиенты</h2>

		<div v-if="pending">Загрузка...</div>

		<div v-else-if="isCardsEmpty === true">Данных пока нет</div>

		<template v-else>
			<article
				class="client__article client_margin"
				v-for="client in clients"
				:key="client.id"
				:client="client"
			>
				<div class="client__data">
					<div class="client__data-upper">
						<div class="client__title">{{ client.passport.name }} {{ client.passport.last_name }}</div>
						<div class="client__price">{{ client.apartment.title }} ({{ client.apartment.cost }} руб/мес + КУ)</div>
					</div>
					<div class="client__description">День оплаты: каждое 5 число текущего месяца</div>
					<router-link class="client__btn" :to="`/apartments/${client.apartmentId}`">Квартира проживания →</router-link>
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
		text-space: 1px;
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
