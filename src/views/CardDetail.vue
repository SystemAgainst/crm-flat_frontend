<script setup>
import { onMounted, ref } from "vue";
import UiSlider from "@/components/ui/UiSlider.vue";
import { getApartmentById } from "@/api/apartament.js";

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const card = ref({
	info: {},
	payments: [],
	status: {}
});

const paymentStatus = ref("NOT_PAID");
const status = ref("");
const pending = ref(true);

onMounted(async () => {
	setTimeout(async () => {
		await getApartmentById(props.id).then((res) => {
			card.value = {
				info: res.data.info,
				payments: res.data.payments,
				status: res.data.status
			};
			paymentStatus.value = res.data.payments.length > 0 ? res.data.payments[0].is_paid : 'NOT_PAID';
			status.value = res.data.status.status;
			pending.value = false;
		});
	}, 500);
});
</script>


<template>
	<div class="detail">
		<div v-if="pending">Загрузка...</div>
		<template v-else>
			<div class="detail__carousel">
				<router-link class="back-btn" to="/">Назад</router-link>
				<UiSlider />
			</div>
			<div class="detail__data">
				<div class="detail__upper">
					<h3 class="detail__subtitle"> {{ card.info.title }} </h3>
					<h3 class="detail__subtitle"> {{ card.info.cost }} руб/мес</h3>
				</div>
				<h3 class="detail__subtitle">О квартире</h3>
				<div class="detail__description">
					{{ card.info.description }}
				</div>
				<h3 class="detail__subtitle">Статус квартиры</h3>
				<div class="detail__description">
					<label>
						<select v-model="status">
							<option value="available">Свободно</option>
							<option value="booked">Занято</option>
							<option value="maintenance">Ремонт</option>
							<option value="unavailable">Не доступно</option>
						</select>
					</label>
				</div>
				<h3 class="detail__subtitle">Статус оплаты</h3>
				<div class="detail__description">
					<label>
						<select v-model="paymentStatus">
							<option value="PAID">Оплачено</option>
							<option value="NOT_PAID">Не оплачено</option>
						</select>
					</label>
				</div>
			</div>
		</template>
	</div>
</template>


<style scoped lang="scss">
$sidebar-bg-color: #2f855a;
$sidebar-item-hover: #38a169;
$sidebar-item-active: #276749;

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
		box-shadow: 12px 12px 2px 1px rgb(105, 166, 131);
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

	&__carousel {}

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