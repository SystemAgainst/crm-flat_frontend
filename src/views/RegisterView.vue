<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/authStore.js";
import { useField, useForm } from "vee-validate";
import { computed, watch } from "vue";
import * as yup from "yup";
import { registerUser } from "@/api/lessor.js";


const store = useAuthStore();
const router = useRouter();

const { handleSubmit, isSubmitting, submitCount } = useForm({
	initialValues: {
		role: "LESSOR",
	},
});

const MIN_PASSWORD_LENGTH = 5;
const PASSPORT_NUMBER_LENGTH = 4;
const PASSPORT_SERIES_LENGTH = 6;

const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
	'email',
	yup
		.string()
		.email()
		.trim()
		.required()
);

const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
	'password',
	yup
		.string()
		.trim()
		.required()
		.min(MIN_PASSWORD_LENGTH)
);

const { value: name, errorMessage: nError, handleBlur: nBlur } = useField(
	'name',
	yup
		.string()
		.trim()
		.required()
);

const { value: last_name, errorMessage: lnError, handleBlur: lnBlur } = useField(
	'last_name',
	yup
		.string()
		.trim()
		.required()
);

const { value: passport_number, errorMessage: pnError, handleBlur: pnBlur } = useField(
	'passport_number',
	yup
		.string()
		.trim()
		.required()
		.length(PASSPORT_NUMBER_LENGTH)
		.nonNullable()
);

const { value: passport_series, errorMessage: psError, handleBlur: psBlur } = useField(
	'passport_series',
	yup
		.string()
		.trim()
		.required()
		.length(PASSPORT_SERIES_LENGTH)
		.nonNullable()
);

const { value: role } = useField('role');

const onSubmit = handleSubmit(async (values) => {
	try {
		const response = await registerUser(values);
		const refresh_token = response.data.token;
		await store.login(refresh_token);
		await router.push('/');
	} catch (error) {
		console.error('Ошибка аутентификации:', error);
		await router.push('/auth');
	}
});

const isTooManyAttempts = computed(() => {
	return submitCount.value >= 3;
});

const navigateToLogin = () => {
	router.push({ name: 'Auth' });
}

watch(isTooManyAttempts, (val) => {
	if (val) {
		setTimeout(() => submitCount.value = 0, 2000);
	}
});
</script>

<template>
	<form class="card" @submit.prevent="onSubmit" @keydown.enter="onSubmit">
		<h1>
			<span @click.prevent="navigateToLogin()" class="title inactive">Войти</span>
			<span class="title inactive"> / </span>
			<span class="title active">Регистрация</span>
		</h1>

		<div :class="['form-control', {invalid: eError}]">
			<label>
				<span>Почта</span>
				<input type="text" v-model="email" @blur="eBlur" />
			</label>
			<small v-if="eError">{{ eError }}</small>
		</div>

		<div :class="['form-control', {invalid: pError}]">
			<label>
				<span>Пароль</span>
				<input type="password" v-model="password" @blur="pBlur">
			</label>
			<small v-if="pError">{{ pError }}</small>
		</div>

		<div :class="['form-control', {invalid: nError}]">
			<label>
				<span>Имя</span>
				<input type="text" v-model="name" @blur="nBlur" />
			</label>
			<small v-if="nError">{{ nError }}</small>
		</div>
		<div :class="['form-control', {invalid: lnError}]">
			<label>
				<span>Фамилия</span>
				<input type="text" v-model="last_name" @blur="lnBlur" />
			</label>
			<small v-if="lnError">{{ lnError }}</small>
		</div>

		<div class="form-control">
			<label>
				<span>Роль</span>
				<select v-model="role">
					<option value="LESSOR">Арендодатель</option>
				</select>
			</label>
		</div>

		<div :class="['form-control', {invalid: pnError}]">
			<label>
				<span>Номер паспорта</span>
				<input type="number" v-model="passport_number" @blur="pnBlur" />
			</label>
			<small v-if="pnError">{{ pnError }}</small>
		</div>
		<div :class="['form-control', {invalid: psError}]">
			<label>
				<span>Серия паспорта</span>
				<input type="number" v-model="passport_series" @blur="psBlur" />
			</label>
			<small v-if="psError">{{ psError }}</small>
		</div>

		<button class="btn primary" type="submit" :disabled="isSubmitting || isTooManyAttempts">Зарегистрироваться</button>
		<div class="text-danger" v-if="isTooManyAttempts">
			Подозрительно частые попытки войти в систему. Попробуйте позже
		</div>
	</form>
</template>

<style scoped lang="scss">
.title {
	cursor: pointer;
	&.active {
		font-size: 2.2rem;
		font-weight: 600;
	}
	&.inactive {
		font-size: 2rem;
		font-weight: 200;
	}
}

.btn {
	color: #42b983;
	position: relative;
	place-content: center;
	place-items: center;
	width: fit-content;
	border-radius: 8px;
	letter-spacing: 0.05em;
	border: 1px solid #42b983;
	text-decoration: none;
	text-transform: uppercase;
	margin-right: 10px;
	padding: 0.5rem 1.5rem;
	white-space: nowrap;
	font-weight: 700;
	outline: none;
	background: #fff;
	transition: all 0.22s;
}

.btn:hover {
	cursor: pointer;
	opacity: 0.8;
}

.btn:disabled {
	cursor: not-allowed;
	opacity: 1!important;
	background: #eee!important;
	border-color: #ddd!important;
	color: #999!important;
}

.btn:active {
	box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.btn.primary {
	background: #42b983;
	color: #fff;
}

.form-control {
	position: relative;
	margin-bottom: 0.5rem;
}

.form-control input,
.form-control select,
.form-control textarea{
	font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
	margin: 0;
	outline: none;
	border: 2px solid #ccc;
	display: block;
	width: 100%;
	color: #2c3e50;
	padding: 0.5rem 1.5rem;
	border-radius: 3px;
	font-size: 1rem;
	resize: none;
}

.form-control small {
	color: #e53935;
}

.form-control.invalid input {
	border-color: #e53935;
}

.form-checkbox {
	margin-bottom: 1rem;
}

.form-checkbox .label {
	display: block;
	margin: 0 0 0.3rem 0.3rem;
	font-weight: 500;
}

.form-checkbox .checkbox input {
	margin-right: 1rem;
}

.form-control label {
	display: block;
	margin: 0 0 0.3rem 0.3rem;
	font-weight: 500;
}

.form-control input:active,
.form-control input:focus {
	transition: border 0.22s;
	border: 2px solid #42b983;
}

.card {
	overflow: hidden;
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 10px;
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
	background: #fff;
}
</style>