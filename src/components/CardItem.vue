<script setup>

</script>

<template>
	<article class="card__article">
		<img class="card__img" src='https://images.unsplash.com/photo-1600078686889-8c42747c25fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzMjg5Nw&ixlib=rb-1.2.1&q=80&w=400' alt='Bluetit'>

		<div class="card__data">
			<div class="card__data-upper">
				<div class="card__title">1-к. квартира, 43 м², 19/24 эт.</div>
				<div class="card__price">60_000 РУБ.</div>
			</div>
			<div class="card_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, voluptate.</div>
			<router-link CLASS="card__btn" to="#">Подробнее</router-link>
		</div>
	</article>
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

	&__article {
		display: flex;
		gap: 2rem;

		background-color: #efefef;
		padding: 2rem;
		border-radius: 2rem;
		margin-bottom: 2rem;
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
		width: 5rem;
		color: white;
		transition: background-color .2s linear;

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
		//width: 328px;
		border-radius: 1.5rem;
	}
}

</style>