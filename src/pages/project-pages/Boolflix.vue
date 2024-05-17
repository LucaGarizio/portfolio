<template>
	<main>
		<div class="container-fluid">
			<div class="row justify-content-center">
				<div class="col-12 d-flex flex-column align-items-center">
					<a href="#" class="mt-auto align-self-end">Link alla repo</a>
					<h1
						class="text-center p-5"
						@mouseenter="changeColor"
						@mouseleave="resetColor"
					>
						<span
							v-for="(letter, index) in text"
							:key="index"
							:style="{
								color: colors[index],
								transitionDelay: index * 0.1 + 's',
							}"
							>{{ letter }}</span
						>
					</h1>
				</div>
			</div>
			<div class="row py-4">
				<div class="col-12">
					<!-- <video
						src="../../../public/over/over.mp4"
						controls
						width="100%"
					></video> -->
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-12 my-2 shadow-lg">
					<h4 class="mb-2">Tecnologie Utilizzate</h4>
					<ul class="d-flex flex-wrap mb-4">
						<li class="me-2">HTML,</li>
						<li class="me-2">CSS,</li>
						<li class="me-2">Bootstrap,</li>
						<li class="me-2">Javascript,</li>
						<li class="me-2">Vue.Js 3,</li>
						<li class="me-2">Vite,</li>
						<li class="me-2">Axios.</li>
					</ul>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
						accusamus consectetur quibusdam at esse error voluptate fuga
						explicabo molestiae sequi quod dolorum debitis, cum optio. Libero
						soluta laboriosam nihil quidem!
					</p>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
export default {
	data() {
		return {
			text: "Progetto Boolflix",
			colors: [],
		};
	},
	methods: {
		changeColor() {
			const colorOptions = ["blue", "orange", "red", "purple"];
			this.colors = this.text.split("").map(() => {
				const randomIndex = Math.floor(Math.random() * colorOptions.length);
				return colorOptions[randomIndex];
			});
		},
		resetColor() {
			this.colors = [];
		},
	},
};
</script>
<style lang="scss" scoped>
main {
	padding: 100px 20px 50px;
	font-size: 18px;
}

.container-fluid {
	width: 95%;
}
span {
	transition: color 0.1s;
}
h1 {
	cursor: pointer;
}
</style>
