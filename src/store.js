import { reactive } from "vue";

export const store = reactive({
	projects: [
		{
			image: "/deliveboo/deliveboo.png",
			title: "Deliveboo",
		},
		{
			image: "/booflix/boolflix.png",
			title: "Boolflix",
		},
		{
			image: "/maxcoach/maxcoach.png",
			title: "Max Coach",
		},
		{
			image: "/over/over-restaurant.png",
			title: "'O ver Restaurant",
		},
	],
});
