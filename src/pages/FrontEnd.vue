<template>
	<section>
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
				<swiper-slide
					v-for="(project, index) in store.projectsFront"
					:key="index"
				>
					<router-link
						:to="{ name: 'project', params: { name: project.name } }"
					>
						<img :src="project.image" :alt="project.title" />
					</router-link>
				</swiper-slide>
			</swiper>
		</div>
	</section>
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

<style scoped lang="scss">
@use "../styles/carousel.scss";
</style>
