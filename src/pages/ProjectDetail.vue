<template>
	<section>
		<div class="container-fluid pb-3">
			<div class="title text-center pt-4">
				<h2 class="mb-4 mt-3">Progetto {{ project.name }}</h2>
			</div>
			<div
				class="project-image"
				:style="{ backgroundImage: 'url(' + project.projectImage + ')' }"
			></div>
			<!-- <div class="project-image" :style="(url'')">
				
				<img :src="project.projectImage" alt="{{ project.name }}" />
			</div> -->

			<!-- <h4 class="text-center mx-lg-5 mx-2 pt-4">{{ project.description }}</h4> -->
			<h4 class="text-center mx-lg-5 mx-2 pt-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
				incidunt, accusantium nesciunt deleniti ad quae nostrum qui quasi quia
				perspiciatis vel ut placeat iusto sit doloribus rerum natus temporibus
				alias. Quos, aperiam asperiores. Velit ratione saepe tenetur recusandae
				obcaecati ad earum, impedit autem quasi sint, numquam sit odio eveniet
				error.
			</h4>
			<div class="row pt-4">
				<div class="col-12 d-flex justify-content-center">
					<h3>
						<a :href="project.link" target="_blank">Vai al progetto</a>
					</h3>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { store } from "../store";

export default {
	created() {
		const projectName = this.$route.params.name;
		this.project = store.projectsFront.find((p) => p.name === projectName);
	},
};
</script>

<style scoped lang="scss">
section {
	padding-top: 50px;
}

.project-image {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-position-y: 0;
	max-width: 100%;
	height: 80vh;
}

@media all and (max-width: 884px) {
	.project-image {
		background-size: cover;
		max-width: 100%;
		height: 30vh;
	}
}

@media all and (max-width: 450px) {
	.project-image {
		background-size: cover;
		background-position-y: 40%;
		height: 22vh;
	}
	h3,
	h4 {
		font-size: 18px;
	}

	section {
		height: auto;
	}
}
</style>
