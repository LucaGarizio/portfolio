import { RouterLink } from 'vue-router';
<template>
	<section>
		<div class="container-fluid">
			<div class="row justify-content-center align-items-center border">
				<div class="col-12 col-lg-7 text-center px-5">
					<h3 class="text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet labore
						tempore quia. Aliquam sapiente esse doloremque voluptas soluta
						veniam aliquid iure? Illum eius expedita dolorum fuga nemo
						praesentium eaque enim. Omnis maxime unde iure vel itaque, sunt
						tempore cum odio porro beatae doloremque quasi est aliquam obcaecati
						magni eaque? Officia.
					</h3>
				</div>
				<div class="row">
					<div class="col-12">
						<div class="card-body text-center">
							<h5 class="card-title">Luca</h5>
							<p class="card-text">Junior web developer</p>
							<RouterLink to="/projects" class="btn btn-primary"
								>I miei Progetti</RouterLink
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
@use "../styles/info.scss";
</style>
