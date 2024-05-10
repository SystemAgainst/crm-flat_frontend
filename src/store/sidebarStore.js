import { defineStore } from 'pinia';


export const useSidebarStore = defineStore('sidebar', {
	state: () => ({
		collapsed: false,
		SIDEBAR_WIDTH: 300,
		SIDEBAR_WIDTH_COLLAPSED: 38
	}),
	getters: {
		sidebarWidth(state) {
			return state.collapsed ? `${state.SIDEBAR_WIDTH_COLLAPSED}px` : `${state.SIDEBAR_WIDTH}px`;
		}
	},
	actions: {
		toggleSidebar() {
			this.collapsed = !this.collapsed;
		}
	}
})
