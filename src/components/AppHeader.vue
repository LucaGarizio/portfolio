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
nav {
	background: rgb(0, 212, 255);
	background: linear-gradient(
		90deg,
		rgba(0, 212, 255, 1) 0%,
		rgba(9, 9, 121, 1) 35%,
		rgba(2, 0, 36, 1) 100%
	);

	font-size: 18px;
	position: fixed;
	width: 100%;
	z-index: 998;
	background-color: white;
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
	ul {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	li {
		height: 70px;
	}
	a {
		color: white;
		height: 100%;
		padding: 0 30px;
		display: flex;
		align-items: center;
		transition: 0.5s;
		&:hover {
			background-color: rgba(0, 212, 255, 1);
		}
	}
	li:first-child {
		margin-right: auto;
	}
}

.sidebar {
	animation: opening 0.5s linear;
	position: fixed;
	height: 100vh;
	width: 250px;
	top: 0;
	right: 0;
	z-index: 999;
	background-color: rgb(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	li {
		width: 100%;
		height: 50px;
	}
	a {
		width: 100%;
	}
}
.sidebar.closing {
	animation: closing 0.6s linear;
}

@keyframes opening {
	from {
		right: -250px;
	}
	to {
		right: 0;
	}
}

@keyframes closing {
	from {
		right: 0;
		background-color: rgb(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
	}
	to {
		right: -250px;
		opacity: 0.1;
	}
}

svg {
	cursor: pointer;
}
@media screen and (min-width: 300px) and (max-width: 767px) {
	.hide {
		display: none;
	}
}
@media screen and (min-width: 767px) {
	.container-fluid {
		width: 98%;
	}
}
@media screen and (min-width: 991px) {
	.container-fluid {
		width: 97%;
	}
}
@media screen and (min-width: 300px) and (max-width: 479px) {
	.hide {
		display: none;
	}
	.sidebar {
		width: 100%;
	}
}
@media screen and (min-width: 767px) {
	.visibility {
		display: none;
	}
	.sidebar {
		display: none;
	}
}
</style>
