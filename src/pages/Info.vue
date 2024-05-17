import { RouterLink } from 'vue-router';
<template>
	<main>
		<div class="container-fluid">
			<div class="row justify-content-center align-items-center border">
				<div class="col-12 col-lg-7 text-center px-5">
					<h1>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
						quaerat similique! Soluta sed praesentium expedita? Adipisci soluta
						quod qui officia, sunt suscipit cumque eaque, cupiditate accusantium
						maxime aliquid hic similique? Aspernatur hic fugit quidem
						perspiciatis ipsum voluptate fugiat iure beatae. Voluptates tempore
						voluptate dolor rem natus illo sapiente, ipsa hic ducimus commodi
						consequatur. Eos facilis doloremque minus vitae ipsam tenetur
						corrupti cum ipsa accusamus autem, adipisci facere dolorum
						exercitationem neque voluptatum quaerat porro laudantium architecto?
						Sunt non reiciendis, voluptas debitis fugiat ad velit iste qui! Vel
						facilis quibusdam quae nostrum dolores exercitationem amet! Dolor
						fugiat culpa reiciendis quis doloremque possimus ratione error
						libero. Temporibus, omnis. Minus sint vel repudiandae deleniti
						aliquid, corporis laborum quos ea rem commodi excepturi placeat
						voluptatibus perferendis. Natus molestias ad quidem velit, culpa
						fugit magnam saepe assumenda aliquid sequi, deleniti est officiis!
						Voluptatibus quis earum harum provident rem, atque accusamus quaerat
						obcaecati enim aliquam! Dicta, soluta cum sit repellat accusamus
						fuga numquam perspiciatis qui voluptatibus error id odio recusandae
						labore ipsum magni quae eius quod dolore unde rem consectetur ullam
						voluptates cumque! Necessitatibus mollitia recusandae perferendis
						doloribus rem provident eaque voluptatum ipsam! Blanditiis ea iste
						recusandae ducimus natus dolor atque sequi inventore laboriosam
						fugit, officiis minima.
					</h1>
				</div>
				<div class="col-12 offset-lg-1 col-lg-4 hide">
					<div class="card text-center d-flex justify-content-center">
						<img
							src="../assets/WhatsApp Image 2024-04-02 at 22.26.35.jpeg"
							class="rounded-circle p-4"
							alt="avatar"
						/>
						<div class="card-body">
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
	</main>
</template>
<style lang="scss" scoped>
main {
	padding: 140px 0 100px;
}
.container {
	height: 100vh;
}
.row {
	height: 100%;
	font-size: 20px;
}
@media all and (max-width: 480px) {
	.hide {
		display: none;
	}
}
</style>
