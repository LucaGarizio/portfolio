<template>
	<nav style="margin-bottom: 100px">
		<ul :class="['sidebar', { closing: isClosing }]" v-if="visibility">
			<li @click="CloseSideBar" class="text-end p-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="30"
					viewBox="0 -960 960 960"
					width="30"
				>
					<path
						fill="white"
						d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
					/>
				</svg>
			</li>
			<li>
				<router-link @click.native="CloseSideBar" to="/">Logo</router-link>
			</li>
			<li>
				<router-link @click.native="CloseSideBar" to="/projects"
					>Progetti</router-link
				>
			</li>
			<li>
				<router-link @click.native="CloseSideBar" to="/info">Info</router-link>
			</li>
			<li>
				<router-link @click.native="CloseSideBar" to="/contact"
					>Contatti</router-link
				>
			</li>
		</ul>
		<ul class="container-fluid">
			<li>
				<router-link class="" to="/">Home</router-link>
			</li>
			<li class="hide">
				<router-link to="/projects">Progetti</router-link>
			</li>
			<li class="hide">
				<router-link to="/info">Info</router-link>
			</li>
			<li class="hide">
				<router-link to="/contact">Contatti</router-link>
			</li>
			<li @click.prevent="ShowSideBar" class="visibility" v-show="!sidebarOpen">
				<!-- Aggiungi v-show qui -->
				<a style href="#">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="30"
						viewBox="0 -960 960 960"
						width="30"
					>
						<path
							fill="white"
							d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</nav>
</template>
<script>
export default {
	data() {
		return {
			visibility: false,
			sidebarOpen: false,
			isClosing: false,
		};
	},
	methods: {
		ShowSideBar() {
			this.visibility = true;
			this.sidebarOpen = true;
			this.isClosing = false;
		},
		CloseSideBar() {
			this.isClosing = true;
			setTimeout(() => {
				this.visibility = false;
				this.sidebarOpen = false;
			}, 600);
		},
	},
};
</script>
<style lang="scss" scoped>
@use "../styles/navbar.scss";
</style>
