<template>
	<main>
		<div
			class="container-fluid d-flex align-items-center justify-content-center"
			style="height: 100%"
		>
			<swiper
				:effect="'coverflow'"
				:grabCursor="true"
				:centeredSlides="true"
				:slidesPerView="slidesPerView"
				:coverflowEffect="{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 2,
					slideShadows: false,
				}"
				:pagination="true"
				:loop="true"
				:modules="modules"
				class="mySwiper"
			>
				<swiper-slide v-for="(project, index) in store.projects" :key="index">
					<img :src="project.image" :alt="project.title" />
				</swiper-slide>
			</swiper>
		</div>
	</main>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import { store } from "../store";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const isTablet = window.matchMedia("(max-width: 884px)").matches;
		const slidesPerView = isTablet ? 1 : 2;

		return {
			modules: [EffectCoverflow, Pagination],
			store,
			slidesPerView,
		};
	},
};
</script>

<style scoped>
main {
	height: 100vh;
	padding-top: 70px;
}
.my-swiper {
	width: 100%;
	height: 100%;
}
.swiper {
	width: 100%;
	padding-top: 50px;
	padding-bottom: 50px;
}

img {
	object-fit: contain;
	height: 100%;
	max-width: 100%;
	max-height: 100%;
}

.swiper-slide {
	background-position: center;
	background-size: cover;
	width: 400px;
	height: 400px;
}

.swiper-slide img {
	display: block;
	width: 100%;
}

/* Aggiungi altre regole CSS qui per personalizzare la visualizzazione su tablet */
@media (max-width: 820px) {
	.swiper-slide {
		width: 100%; /* Adatta la larghezza delle slide al 100% su tablet */
	}
}
</style>
