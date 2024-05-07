<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useSidebarStore } from "@/store/sidebarStore.js";


const props = defineProps({
	to: {
		type: String,
		required: true,
		default: "/",
	},
	icon: {
		type: String,
		required: false,
		default: "+",
	},
});


const store = useSidebarStore();
const route = useRoute();

const isActive = computed(() => route.path === props.to);
</script>

<template>
	<router-link
		:to="to"
		class="link"
		:class="{ 'active': isActive}"
	>
		<i class="icon" :class="icon" />
		<transition name="fade">
      <span v-if="!store.collapsed">
        <slot />
      </span>
		</transition>
	</router-link>
</template>

<style scoped lang="scss">
//.fade-enter-active,
//.fade-leave-active {
//	transition: opacity 0.1s;
//}
//
//.fade-enter,
//.fade-leave-to {
//	opacity: 0;
//}

.link {
	display: flex;
	align-items: center;

	cursor: pointer;
	position: relative;
	font-weight: 400;
	user-select: none;

	margin: 0.1em 0;
	padding: 0.4em;
	border-radius: 0.25em;
	height: 1.5em;

	color: white;
	text-decoration: none;
}

.link:hover {
	background-color: var(--sidebar-item-hover);
}

.link.active {
	background-color: var(--sidebar-item-active);
}

.link .icon {
	flex-shrink: 0;
	width: 25px;
	margin-right: 10px;
}
</style>