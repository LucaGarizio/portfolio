import { reactive } from "vue";

export const store = reactive({
	projectsFront: [
		{
			image: "/discord/discord.png",
			name: "Discord",
		},
		{
			image: "/yu-gi-oh/yu-gi-oh.png",
			name: "Yu-Gi-Oh",
		},
		{
			image: "/booflix/boolflix.png",
			name: "Boolflix",
		},
		{
			image: "/boolzapp/boolzapp.png",
			name: "Boolzapp",
		},

		{
			image: "/maxcoach/maxcoach.png",
			name: "Max Coach",
		},
		{
			image: "/over/over-restaurant.png",
			name: "'O ver Restaurant",
		},
	],
	projectsBack: [
		{
			image: "/deliveboo/deliveboo.png",
			name: "Deliveboo",
		},
		{
			image: "/booflix/boolflix.png",
			name: "Boolflix",
		},
	],
});
