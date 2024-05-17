<template>
	<main class="py-5" id="content">
		<div class="container" style="width: 90%">
			<div class="row pt-5 gy-3 gy-lg-5 justify-content-between">
				<div class="col-lg-5 col-12 text-center left" ref="leftColumn">
					<img class="rounded-5" src="https://picsum.photos/500" alt="" />
				</div>
				<div class="col-lg-5 col-12 text-center right" ref="rightColumn">
					<img class="rounded-5" src="https://picsum.photos/500" alt="" />
				</div>
				<div class="col-12 up text-center" ref="upElement">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero eum
						quam rem praesentium? Eligendi ullam blanditiis optio nemo. Tempora,
						doloremque. Officiis dolorem sed enim mollitia minus, est
						repellendus excepturi architecto a quas, quia asperiores ut eaque
						sunt perspiciatis adipisci possimus laborum magnam eveniet quidem
						dignissimos totam nesciunt! Eius, delectus id.
					</p>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	mounted() {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0,
		};

		const callback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("slide-in");
					observer.unobserve(entry.target);
				}
			});
		};

		const observer = new IntersectionObserver(callback, options);
		observer.observe(this.$refs.leftColumn);
		observer.observe(this.$refs.rightColumn);
		observer.observe(this.$refs.upElement);
	},
};
</script>

<style lang="scss" scoped>
main {
	padding-top: 70px;
	overflow: hidden;
	height: 100vh;
}
img {
	max-height: 100%;
	width: 100%;
}

.left {
	transform: translateX(-100%);
}

.right {
	transform: translateX(100%);
}

.up {
	transform: translateY(10%);
}

.slide-in.left {
	animation: slide-left 1s linear forwards;
}

.slide-in.right {
	animation: slide-right 1s linear forwards;
}

.slide-in.up {
	animation: up 1s forwards;
}
@keyframes slide-left {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0);
	}
}

@keyframes slide-right {
	0% {
		transform: translateX(100%);
	}
	100% {
		transform: translateX(0);
	}
}

@keyframes up {
	0% {
		transform: translateY(20%);
		opacity: 0;
	}
	100% {
		transform: translateY(0%);
		opacity: 1;
	}
}

.col-lg-5 {
	height: 350px;
}

@media all and (max-width: 480px) {
	.left,
	.right {
		transform: translateX(0);
	}
	main {
		height: auto;
		padding-top: 35px;
	}
}
</style>
