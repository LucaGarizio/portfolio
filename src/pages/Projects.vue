<template>
	<section>
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
									class="col-4 d-flex align-items-center flex-column justify-content-center"
								>
									<h4
										v-for="(name, indexPhp) in displayedTextPhp"
										:key="indexPhp"
									>
										{{ name }}
									</h4>
								</div>
								<div
									class="col-4 d-flex align-items-center flex-column justify-content-center"
								>
									<h4
										v-for="(name, indexMySQL) in displayedTextMySQL"
										:key="indexMySQL"
									>
										{{ name }}
									</h4>
								</div>
								<div
									class="col-4 d-flex align-items-center flex-column justify-content-center"
								>
									<h4
										v-for="(name, indexLaravel) in displayedTextLaravel"
										:key="indexLaravel"
									>
										{{ name }}
									</h4>
								</div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</section>
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
			cancelAnimation: false,
		};
	},
	methods: {
		showOverlay(column) {
			this.visibility[column] = true;
			if (column === "column2") {
				this.cancelAnimation = false;
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
				this.cancelAnimation = true;
				this.deleteLetterPhp();
				this.deleteLetterMySQL();
				this.deleteLetterLaravel();
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
			if (this.indexPhp < this.textPhp.length && !this.cancelAnimation) {
				this.displayedTextPhp += this.textPhp.charAt(this.indexPhp);
				this.indexPhp++;
				setTimeout(this.typeLetterPhp, 300);
			}
		},
		typeLetterMySQL() {
			if (this.indexMySQL < this.textMySQL.length && !this.cancelAnimation) {
				this.displayedTextMySQL += this.textMySQL.charAt(this.indexMySQL);
				this.indexMySQL++;
				setTimeout(this.typeLetterMySQL, 300);
			}
		},
		typeLetterLaravel() {
			if (
				this.indexLaravel < this.textLaravel.length &&
				!this.cancelAnimation
			) {
				this.displayedTextLaravel += this.textLaravel.charAt(this.indexLaravel);
				this.indexLaravel++;
				setTimeout(this.typeLetterLaravel, 300);
			}
		},
		deleteLetterPhp() {
			if (this.displayedTextPhp.length > 0 && this.cancelAnimation) {
				this.displayedTextPhp = this.displayedTextPhp.slice(0, -1);
				setTimeout(this.deleteLetterPhp, 300);
			}
		},
		deleteLetterMySQL() {
			if (this.displayedTextMySQL.length > 0 && this.cancelAnimation) {
				this.displayedTextMySQL = this.displayedTextMySQL.slice(0, -1);
				setTimeout(this.deleteLetterMySQL, 300);
			}
		},
		deleteLetterLaravel() {
			if (this.displayedTextLaravel.length > 0 && this.cancelAnimation) {
				this.displayedTextLaravel = this.displayedTextLaravel.slice(0, -1);
				setTimeout(this.deleteLetterLaravel, 300);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@use "../styles/project.scss";
</style>
