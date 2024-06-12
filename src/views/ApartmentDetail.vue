<script setup>
import { computed, onMounted, ref } from "vue";
import { getApartmentById } from "@/api/apartament.js";

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const card = ref();
const status = ref();
const pending = ref(true);
const isCardsEmpty = ref(false);

onMounted(async () => {
	setTimeout(async () => {
		try	{
			const res = await getApartmentById(props.id);
			pending.value = false;

			if (res.data.length <= 0) {
				isCardsEmpty.value = true;
			} else {
				isCardsEmpty.value = false;
				console.log(res.data);
				card.value = res.data;
				status.value = res.data.status.statusOccupancy;
			}
		} catch (error) {
			console.error("Ошибка при получении данных:", error);
			pending.value = false;
			isCardsEmpty.value = true;
		}
	}, 500);
});

const paymentStatus = computed(() => {
	if (card.value && card.value.payment) {
		return card.value.payment.status ? "Оплачено" : "Не оплачено";
	}
	return "";
});
</script>


<template>
	<div class="detail">
		<div v-if="pending">Загрузка...</div>
		<template v-else>
			<div class="detail__carousel">
				<router-link class="back-btn" to="/">Назад</router-link>
			</div>
			<div class="detail__data">
				<div class="detail__upper">
					<h3 class="detail__subtitle"> {{ card.title }} </h3>
					<h3 class="detail__subtitle"> {{ card.cost }} руб/мес</h3>
				</div>
				<h3 class="detail__subtitle">О квартире</h3>
				<div class="detail__description">
					{{ card.description }}
				</div>
				<h3 class="detail__subtitle">Статус квартиры</h3>
				<div class="detail__description">
					<label>
						<select v-model="status">
							<option value="FREE">Свободно</option>
							<option value="OCCUPIED">Занято</option>
						</select>
					</label>
				</div>
				<h3 class="detail__subtitle">Статус оплаты</h3>
				<div class="detail__description">
					{{ paymentStatus }}
				</div>
<!--				<div class="detail__description">-->
<!--					<label>-->
<!--						<select v-model="paymentStatus">-->
<!--							<option value="TRUE">Оплачено</option>-->
<!--							<option value="FALSE">Не оплачено</option>-->
<!--						</select>-->
<!--					</label>-->
<!--				</div>-->
			</div>
		</template>
	</div>
</template>

<style scoped lang="scss">
$sidebar-bg-color: #2f855a;
$sidebar-item-hover: #38a169;
$sidebar-item-active: #276749;

.detail {
	width: fit-content;
	height: 100vh;
	margin: auto;
	padding: 0 2rem;

	&__carousel {
		margin: 2rem auto;
	}

	&__data {
		width: 100%;
		margin: 0 auto;
		padding: 2rem;

		background-color: #f1f1f1;
		border-radius: 1rem;
		box-shadow: 12px 12px 2px 1px rgb(105, 166, 131);

		min-width: 700px;
	}

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

	&__upper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}

.back-btn {
	color: $sidebar-bg-color;
	text-decoration: none;
}
</style>