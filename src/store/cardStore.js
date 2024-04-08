import { defineStore } from 'pinia';


export const useCardStore = defineStore('card', {
	state: () => ({
		cardData: {
			title: "1-к. квартира, 43 м², 19/24 эт.",
			price: "60_000 руб.",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, voluptate."
		}
	}),
	getters: {
		getCardData (state) {
			return state.cardData;
		}
	},
	actions: {}
})
