import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "jwt-token";
const ROLE = "user-role";
const USER = "user-info";

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		token: localStorage.getItem(TOKEN_KEY) || null,
		role: localStorage.getItem(ROLE) || null,
		user: JSON.parse(localStorage.getItem(USER)) || null,
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
			this.user = JSON.stringify(decoded);
			console.log(decoded);
			console.log(JSON.stringify(decoded));
			localStorage.setItem(ROLE, decoded.role);
			localStorage.setItem(USER, JSON.stringify(decoded));
		},
		logout() {
			this.token = null;
			this.role = null;
			localStorage.removeItem(TOKEN_KEY);
			localStorage.removeItem(ROLE);
			localStorage.removeItem(USER);
		},
	},
});
