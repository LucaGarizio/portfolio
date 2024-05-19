<template>
	<section>
		<div class="container-fluid p-0">
			<h1>{{ project.title }}</h1>
			<div
				class="project-image"
				:style="{ backgroundImage: 'url(' + project.image + ')' }"
			></div>
			<p>{{ project.description }}</p>
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
	height: 100vh;
	padding-top: 60px;
}
.project-image {
	width: 100%;
	height: 500px;
	background-size: cover;
	background-position-y: 0;
}
</style>
