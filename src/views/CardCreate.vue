<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/authStore.js";
import { storeToRefs } from "pinia";
import VueJwtDecode from 'vue-jwt-decode';
import { useRouter } from "vue-router";
import axios from "axios";
import config from "@/config/index.js";


const router = useRouter();

const authStore = useAuthStore();
const { token } = storeToRefs((authStore));

const decodedUserToken = VueJwtDecode.decode(token.value);

const cardData = ref({
	title: "",
	description: "",
	address: "",
	square: null,
	"room_count": null,
	cost: null,
	img: null,
	user_id: decodedUserToken.id,
});

const handleImageUpload = (event) => {
	const file = event.target.files[0];
	if (file) {
		cardData.value.img = file;
	}
};

const createCard = async (data) => {
	try	{
		console.log("Creating card with data:", data);

		const formData = new FormData();
		formData.append('title', data.title);
		formData.append('description', data.description);
		formData.append('address', data.address);
		formData.append('square', data.square);
		formData.append('room_count', data.room_count);
		formData.append('cost', data.cost);
		formData.append('user_id', data.user_id);
		formData.append('img', data.img);  // Append the image file

		await axios.post('/apartment/create', formData, {
			baseURL: config.apiBaseURI,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});

		await router.push("/");
	} catch (error) {
		console.error(error);
	}
};

</script>

<template>
	<div class="create">
		<form @submit.prevent="createCard(cardData)" @keydown.enter="createCard(cardData)">
			<h3>Создание апартамента</h3>
			<div class="form__control">
				<input
					v-model="cardData.title"
					class="form__input"
					type="text"
					placeholder="1-к. квартира, 43 м², 19/24 эт."
				/>
			</div>
			<div class="form__control">
				<input
					v-model="cardData.description"
					class="form__input"
					type="text"
					placeholder="Описание"
				/>
			</div>
			<div class="form__control">
				<input
					v-model="cardData.address"
					class="form__input"
					type="text"
					placeholder="Адрес"
				/>
			</div>
			<div class="form__control">
				<input
					v-model="cardData.square"
					class="form__input"
					type="number"
					placeholder="Площадь в кв.м"
				/>
			</div>
			<div class="form__control">
				<input
					v-model="cardData.room_count"
					class="form__input"
					type="number"
					placeholder="Кол-во комнат"
				/>
			</div>
			<div class="form__control">
				<input
					v-model="cardData.cost"
					class="form__input"
					type="number"
					placeholder="Арендная плата"
				/>
			</div>
			<div class="form__control">
				<input
					class="form__input"
					type="file"
					@change="handleImageUpload"
				/>
			</div>
			<button class="form__btn">Создать</button>
		</form>
		<div v-if="cardData.img" class="preview">
			<h4>Предварительный просмотр изображения:</h4>
			<img
				:src="cardData.img"
				alt="Preview"
				class="preview__image"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
$sidebar-bg-color: #2f855a;
$sidebar-item-hover: #38a169;
$sidebar-item-active: #276749;

.create {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
	text-align: center;
}
.form {
	width: 300px;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 4px 17px #ccc;
	font-family: sans-serif;
	letter-spacing: .5px;

	&__input,
	&__btn {
		font-family: sans-serif;
		font-size: 1rem;
		letter-spacing: .5px;
	}

	&__control {
		margin-bottom: 2rem;
	}

	&__input {
		width: 100%;
		border: none;
		padding-bottom: 10px;
		border-bottom: 1px solid #e0e0e0;
		outline: none;
		background-color: transparent;
		transition: .5s;

		&:focus {
			animation: ease-out;
			border-bottom: 1px solid #1a73a8;
		}
	}

	&__btn {
		display: block;
		text-decoration: none;
		border: none;
		background-color: $sidebar-bg-color;
		text-align: center;
		padding: .75rem 2rem;
		border-radius: 8px;
		width: fit-content;
		color: white;
		transition: background-color .2s linear;
		cursor: pointer;

		&:hover,
		&:active,
		&:focus {
			background-color: $sidebar-item-hover;
		}
	}
}

.preview {
	margin-top: 2rem;

	&__image {
		max-width: 50%;
		height: auto;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		box-shadow: 0 4px 17px #ccc;
	}
}
</style>