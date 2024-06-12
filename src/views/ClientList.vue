<script setup>
import { computed, onMounted, ref } from "vue";
import { deleteClientById, getListClients } from "@/api/client.js";

const clients = ref([]);
const pending = ref(true);
const isAnyCard =  computed(() => clients.value.length > 0);
const countClient = ref();

const fetchAllClients = () => {
	pending.value = true;
	getListClients()
		.then((res) => {
			clients.value = res.data.rows;
			countClient.value = res.data.count;
		})
		.catch((e) => {
			console.error("Ошибка при получении данных:", e);
		})
		.finally(() => {
			pending.value = false;
		});
};

const deleteClient = (id) => {
	pending.value = true;
	deleteClientById(id)
		.then(() => {
			fetchAllClients();
		})
		.catch((e) => {
			console.error(e);
		})
		.finally(() => {
			pending.value = false;
		});
};

onMounted( () => {
	fetchAllClients();
});
</script>

<template>
	<div>
		<h2 class="title">Клиенты</h2>
		<h3>Количество клиентов:
			<span>{{ countClient }}</span>
		</h3>

		<div v-if="pending">Загрузка...</div>

		<div v-else-if="!isAnyCard">Данных пока нет</div>

		<template v-else>
			<div class="client">
				<article
					class="client__article client_margin"
					v-for="client in clients"
					:key="client.id"
					:client="client"
				>
					<button class="delete-btn" @click="deleteClient(client.id)">×</button>
					<div class="client__data">
						<div class="client__data-upper">
							<div class="client__title">{{ client.passport.name }} {{ client.passport.last_name }}</div>
							<div class="client__price">{{ client.apartment.title }} ({{ client.apartment.cost }} руб/мес + КУ)</div>
						</div>
						<div class="client__description">День оплаты: каждое 5 число текущего месяца</div>
						<router-link class="client__btn" :to="`/apartments/${client.apartmentId}`">Квартира проживания →</router-link>
					</div>
				</article>
			</div>
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

.delete-btn {
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
</style>
