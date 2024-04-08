<script setup>
import { useSidebarStore } from "@/store/index.js";

import AppSidebar from "@/components/AppSidebar.vue";


const store = useSidebarStore();
</script>

<template>
	<AppSidebar />
	<div class="home" :style="{ 'margin-left': store.sidebarWidth }">
		<article class="cta">
			<img src='https://images.unsplash.com/photo-1600078686889-8c42747c25fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzMjg5Nw&ixlib=rb-1.2.1&q=80&w=400' alt='Bluetit'>
			<div class="cta__text-column">
				<h2>Aspect ratio is great</h2>
				<p>This image has an aspect ratio of 3/2.</p>
				<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">Read all about it</a>
			</div>
		</article>

		<article class="cta">
			<img src='https://images.unsplash.com/photo-1569762825621-2dab96140a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDkxMQ&ixlib=rb-1.2.1&q=80&w=400' alt='Small blue-grey yellow-breasted bird'>
			<div class="cta__text-column">
				<h2>Aspect ratio is great</h2>
				<p>This image has an aspect ratio of 3/2. But when the text is longer, the image grows too, overriding its aspect ratio. Cool!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">Read all about it</a>
			</div>
		</article>

		<router-view />
	</div>

</template>

<style scoped lang="scss">
$sidebar-bg-color: #2f855a;
$sidebar-item-hover: #38a169;
$sidebar-item-active: #276749;

.home {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	background: hsl(187 40% 98%);
	//background-color: white;
}
.cta {
	--shadowColor: 187 60% 40%;
	display: flex;
	flex-wrap: wrap;
	background: hsl(187 70% 85%);
	max-width: 30rem;
	width: 100%;
	box-shadow: 0.65rem 0.65rem 0 hsl(var(--shadowColor) / 1);
	border-radius: 0.8rem;
	overflow: hidden;
	border: 0.5rem solid;
}

.cta img {
	aspect-ratio: 3 / 2;
	object-fit: cover;
	flex: 1 1 300px;
	outline: 0.5rem solid;
}

.cta__text-column {
	padding: min(2rem, 5vw) min(2rem, 5vw) min(2.5rem, 5vw);
	flex: 1 0 50%;
}

.cta__text-column > * + * {
	margin: min(1.5rem, 2.5vw) 0 0 0;
}

.cta a {
	display: inline-block;
	color: black;
	padding: 0.5rem 1rem;
	text-decoration: none;
	background: hsl(187 75% 64%);
	border-radius: 0.6rem;
	font-weight: 700;
	border: 0.35rem solid;
}
</style>
