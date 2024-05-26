<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";


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

const route = useRoute();
const isActive = computed(() => route.path === props.to);
</script>

<template>
	<router-link
		:to="to"
		class="link"
		:class="{ 'active': isActive}"
	>
		<slot />
	</router-link>
</template>

<style scoped lang="scss">
$sidebar-bg-color: #2f855a;
$sidebar-item-hover: #38a169;
$sidebar-item-active: #276749;

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.link {
	display: flex;
	align-items: center;

	cursor: pointer;
	position: relative;
	font-weight: 400;
	user-select: none;

	margin: 0.25em 0;

	border-radius: 8px;
	padding: 15px 20px;
	line-height: 1.5;

	color: white;
	text-decoration: none;

	text-align: right;
}

.link:hover {
	background-color: $sidebar-item-active;
}

.link.active {
	background-color: $sidebar-item-hover;
}

//.link .icon {
//	flex-shrink: 0;
//	width: 25px;
//	margin-right: 10px;
//}
</style>
