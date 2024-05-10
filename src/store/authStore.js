import { defineStore } from "pinia";


const TOKEN_KEY = "jwt-token";

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		token: localStorage.getItem(TOKEN_KEY) || null,
	}),
	getters: {
		getToken() {
			return this.token;
		},
		isAuthenticate() {
			return !!this.token;
		},
	},
	actions: {
		async login(token) {
			this.token = token;
			localStorage.setItem(TOKEN_KEY, token);
		},
		logout() {
			this.token = null;
			localStorage.removeItem(TOKEN_KEY);
		},
	},
});