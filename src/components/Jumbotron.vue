<template>
	<header>
		<div class="container-fluid position-relative" style="height: 100%">
			<div
				class="overlay position-absolute top-0 start-0 w-100 h-100"
				style="background-color: rgba(0, 0, 0, 0.5)"
			></div>
			<div
				class="row justify-content-center align-items-center position-relative"
				style="height: 100%"
			>
				<div class="col-8 text-center p-4">
					<h1>
						{{ displayedText }}
					</h1>

					<a v-if="showArrow" class="animated-arrow p-5" href="#content">
						<i class="fa-solid fa-caret-down text-white position-absolute"></i>
					</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			text: "Benvenuto nel mio Portfolio",
			displayedText: "",
			index: 0,
			showArrow: false,
		};
	},
	mounted() {
		this.typeLetter();
	},
	methods: {
		typeLetter() {
			if (this.index < this.text.length) {
				this.displayedText += this.text.charAt(this.index);
				this.index++;
				setTimeout(this.typeLetter, 120);
			} else {
				this.showArrow = true;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@use "../styles/jumbotron.scss";
</style>
