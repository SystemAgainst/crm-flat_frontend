<script setup>
import { computed, ref } from "vue";
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { flatImages } from "@/data/flatImages.js";


const currentSlide = ref(0);
const slideTo = (val) => {
	currentSlide.value = val;
};

const slides = computed(() => flatImages);
</script>

<template>
	<Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
		<Slide v-for="slide in slides" :key="slide">
			<picture>
				<source :srcset="slide.src">
				<img
					class="carousel__item"
					:src="slide.src"
					:alt="slide.alt"
				/>
			</picture>
		</Slide>
	</Carousel>

	<Carousel
		id="thumbnails"
		:items-to-show="4"
		:wrap-around="true"
		v-model="currentSlide"
		ref="carousel"
	>
		<Slide v-for="slide in slides" :key="slide.id">
			<picture>
				<source :srcset="slide.src">
				<img
					class="carousel__item"
					:src="slide.src"
					:alt="slide.alt"
				/>
			</picture>
		</Slide>
	</Carousel>
</template>

<style scoped lang="scss">
.carousel__item {
	max-height: 400px;
	width: 100%;
	background-color: var(--vc-clr-primary);
	color: var(--vc-clr-white);
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel__slide {
	padding: 10px;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
</style>