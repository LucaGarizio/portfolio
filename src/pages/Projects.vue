<template>
	<main>
		<div class="container-fluid" style="height: 100%">
			<div
				class="row gy-5 gy-md-3 justify-content-center justify-content-lg-evenly text-center align-items-center"
				style="height: 100%"
			>
				<!-- FRONTEND -->
				<div
					class="col-12 col-lg-5 p-0 top position-relative"
					@mouseenter="showOverlay('column1')"
					@mouseleave="hideOverlay('column1')"
				>
					<img
						src="https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg"
						alt="front-end image"
					/>
					<router-link to="/frontend">
						<div
							class="position-absolute overlay text-white d-flex justify-content-center align-items-center"
							:class="{ visible: visibility['column1'] }"
						>
							<div class="animation-container">
								<h2 class="from-left pb-3">HTML</h2>
								<h2 class="from-right pb-3">CSS</h2>
								<h2 class="from-left pb-3">JAVASCRIPT</h2>
								<h2 class="from-right">VUE.JS</h2>
							</div>
						</div>
					</router-link>
				</div>
				<!-- BACKEND -->
				<div
					class="col-12 col-lg-5 p-0 bottom position-relative"
					@mouseenter="showOverlay('column2')"
					@mouseleave="hideOverlay('column2')"
				>
					<img
						src="https://img.freepik.com/free-vector/backend-technology-concept-with-glowing-lines-background_1017-28405.jpg"
						alt="back-end image"
					/>
					<router-link to="/backend">
						<div
							class="position-absolute text-white overlay"
							:class="{ visible: visibility['column2'] }"
						>
							<div
								class="animation-container-2 d-flex align-items-center justify-content-center"
							>
								<div
									class="col-4 d-flex flex-row flex-md-column justify-content-center"
								>
									<h2
										v-for="(char, indexPhp) in displayedTextPhp"
										:key="indexPhp"
									>
										{{ char }}
									</h2>
								</div>
								<div
									class="col-4 d-flex flex-row flex-md-column justify-content-center"
								>
									<h2
										v-for="(char, indexMySQL) in displayedTextMySQL"
										:key="indexMySQL"
									>
										{{ char }}
									</h2>
								</div>
								<div
									class="col-4 d-flex flex-row flex-md-column justify-content-center"
								>
									<h3
										v-for="(char, indexLaravel) in displayedTextLaravel"
										:key="indexLaravel"
									>
										{{ char }}
									</h3>
								</div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			visibility: {
				column1: false,
				column2: false,
			},
			textPhp: "PHP",
			textMySQL: "MYSQL",
			textLaravel: "LARAVEL",
			displayedTextPhp: "",
			displayedTextMySQL: "",
			displayedTextLaravel: "",
			indexPhp: 0,
			indexMySQL: 0,
			indexLaravel: 0,
		};
	},
	methods: {
		showOverlay(column) {
			this.visibility[column] = true;
			if (column === "column2") {
				this.resetTypingPhp();
				this.typeLetterPhp();
				this.resetTypingMySQL();
				this.typeLetterMySQL();
				this.resetTypingLaravel();
				this.typeLetterLaravel();
			}
		},
		hideOverlay(column) {
			this.visibility[column] = false;
			if (column === "column2") {
				this.resetTypingPhp();
				this.resetTypingMySQL();
				this.resetTypingLaravel();
			}
		},
		resetTypingPhp() {
			this.displayedTextPhp = "";
			this.indexPhp = 0;
		},
		resetTypingMySQL() {
			this.displayedTextMySQL = "";
			this.indexMySQL = 0;
		},
		resetTypingLaravel() {
			this.displayedTextLaravel = "";
			this.indexLaravel = 0;
		},
		typeLetterPhp() {
			if (this.indexPhp < this.textPhp.length) {
				this.displayedTextPhp += this.textPhp.charAt(this.indexPhp);
				this.indexPhp++;
				setTimeout(this.typeLetterPhp, 300);
			}
		},
		typeLetterMySQL() {
			if (this.indexMySQL < this.textMySQL.length) {
				this.displayedTextMySQL += this.textMySQL.charAt(this.indexMySQL);
				this.indexMySQL++;
				setTimeout(this.typeLetterMySQL, 300);
			}
		},
		typeLetterLaravel() {
			if (this.indexLaravel < this.textLaravel.length) {
				this.displayedTextLaravel += this.textLaravel.charAt(this.indexLaravel);
				this.indexLaravel++;
				setTimeout(this.typeLetterLaravel, 300);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
main {
	height: 100vh;
	padding-top: 100px;
	overflow-y: hidden;
}
.col-lg-5 {
	height: 400px;
}
img {
	height: 100%;
	width: 100%;
	max-height: 100%;
	max-width: 100%;
}
.position-relative {
	position: relative;
}
.overlay {
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	transition: opacity 1s ease;
	opacity: 0;
	cursor: pointer;
}
.overlay.visible {
	opacity: 1;
}
.animation-container h2 {
	transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
}
.overlay.visible .from-left {
	opacity: 1;
	transform: translateX(0);
}
.overlay.visible .from-right {
	opacity: 1;
	transform: translateX(0);
}
.from-left {
	transform: translateX(-100%);
}
.from-right {
	transform: translateX(100%);
}
.top {
	animation: slide-in-up 3s forwards;
}
.bottom {
	animation: slide-in-bottom 3s forwards;
}
.animation-container-2 {
	width: 100%;
	height: 100%;
}
@keyframes slide-in-up {
	0% {
		transform: translateY(-100%);
	}
	100% {
		transform: translateY(0);
	}
}
@keyframes slide-in-bottom {
	0% {
		transform: translateY(100%);
	}
	100% {
		transform: translateY(0);
	}
}

@media all and (max-width: 885px) {
	.container-fluid {
		width: 90%;
	}
	.overlay {
		cursor: auto;
	}
	@keyframes slide-in-up {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0);
		}
	}
	@keyframes slide-in-bottom {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0);
		}
	}
}

@media all and (max-width: 429px) {
	.col-lg-5 {
		height: 270px;
	}
}
</style>
