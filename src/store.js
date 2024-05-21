import { reactive } from "vue";

export const store = reactive({
	projectsFront: [
		{
			name: "Discord",
			carouselImage: "/discord/discord.png",
			projectImage: "/discord/discordprojects.png",
			description:
				"Esercizio strutturato per imparare le basi di Flexbox, un potente modulo di layout di CSS3 che permette di creare layout complessi con facilità e flessibilità.",
			link: "https://github.com/LucaGarizio/htmlcss-discord",
		},
		{
			name: "Yu-Gi-Oh",
			carouselImage: "/yu-gi-oh/yu-gi-oh.png",
			projectImage: "/yu-gi-oh/Yu-gi-project.png",
			description:
				"Esercizio strutturato per imparare le basi di Flexbox, un potente modulo di layout di CSS3 che permette di creare layout complessi con facilità e flessibilità.",
			link: "https://github.com/LucaGarizio/vite-yu-gi-oh",
		},
		{
			name: "Boolflix",
			carouselImage: "/booflix/boolflix.png",
			projectImage: "/booflix/boolflix.png",
			link: "https://github.com/LucaGarizio/vite-boolflix",
		},
		{
			name: "Boolzapp",
			carouselImage: "/boolzapp/boolzapp.png",
			projectImage: "/boolzapp/boolzapp.png",
			link: "https://github.com/LucaGarizio/vue-boolzapp",
		},

		{
			carouselImage: "/maxcoach/max-coach.png",
			projectImage: "/maxcoach/max-coach.png",
			name: "Max Coach",
			link: "https://github.com/LucaGarizio/proj-html-vuejs",
		},
		{
			name: "'O ver Restaurant",
			carouselImage: "/over/over-restaurant.png",
			projectImage: "/over/over-restaurant.png",
			link: "",
		},
	],
	projectsBack: [
		{
			carouselImage: "/deliveboo/deliveboo.png",
			name: "Deliveboo",
			link: "https://github.com/LucaGarizio/DeliveBoo",
		},
		{
			carouselImage: "/booflix/boolflix.png",
			name: "Boolflix",
			link: "",
		},
		{
			carouselImage: "/booflix/boolflix.png",

			name: "Boolflix",
			link: "",
		},
	],
});
