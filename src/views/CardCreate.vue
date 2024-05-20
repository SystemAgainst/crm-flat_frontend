<script setup>

</script>

<template>
	<div class="create">
		<form action="">
			<h3>Создание апартамента</h3>
			<div class="form__control">
				<input class="form__input" type="text" placeholder="1-к. квартира, 43 м², 19/24 эт."/>
			</div>
			<div class="form__control">
				<input class="form__input" type="text" placeholder="Описание"/>
			</div>
			<div class="form__control">
				<input class="form__input" type="text" placeholder="Адрес"/>
			</div>
			<div class="form__control">
				<input class="form__input" type="number" placeholder="Площадь в кв.м"/>
			</div>
			<div class="form__control">
				<input class="form__input" type="number" placeholder="Кол-во комнат"/>
			</div>
			<div class="form__control">
				<input class="form__input" type="number" placeholder="Стоимость в месяц"/>
			</div>
			<button class="form__btn">Создать</button>
		</form>
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
</style>