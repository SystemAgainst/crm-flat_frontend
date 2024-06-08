import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "jwt-token";
const ROLE = "user-role";

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		token: localStorage.getItem(TOKEN_KEY) || null,
		role: localStorage.getItem(ROLE) || null,
	}),
	getters: {
		getToken() {
			return this.token;
		},
		getRole() {
			if (this.token && !this.role) {
				const decoded = jwtDecode(this.token);
				this.role = decoded.role;
			}
			return this.role;
		},
		isAuthenticate() {
			return !!this.token;
		},
	},
	actions: {
		login(token) {
			this.token = token;
			localStorage.setItem(TOKEN_KEY, token);
			const decoded = jwtDecode(token);
			this.role = decoded.role;
			localStorage.setItem(ROLE, decoded.role);
		},
		logout() {
			this.token = null;
			this.role = null;
			localStorage.removeItem(TOKEN_KEY);
			localStorage.removeItem(ROLE);
		},
	},
});
