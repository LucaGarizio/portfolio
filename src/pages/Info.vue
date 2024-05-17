import { RouterLink } from 'vue-router';
<template>
	<main>
		<div class="container-fluid">
			<div class="row justify-content-center align-items-center border">
				<div class="col-12 col-lg-7 text-center px-5">
					<h1>Chi sono</h1>
					<p>Sono Luca, un appassionato aspirante sviluppatore web.</p>
					<p>
						Ti do il benvenuto nel mio portfolio, un luogo dove condivido il mio
						percorso di apprendimento e le esperienze acquisite durante il mio
						corso di sei mesi presso Boolean Career.
					</p>
					<p>
						Questo portfolio rappresenta il mio viaggio nel mondo dello sviluppo
						web, un percorso che mi ha portato a esplorare le varie
						sfaccettature della programmazione e a mettere in pratica le mie
						conoscenze attraverso una serie di progetti e esercizi.
					</p>
					<p>
						Qui troverai una raccolta dei progetti che ho sviluppato, dai
						semplici esercizi iniziali ai progetti più complessi che ho
						affrontato nel corso del mio percorso formativo. Ogni progetto è
						stato un'opportunità per mettere alla prova le mie abilità e
						imparare nuove tecnologie e metodologie. Attraverso questo
						portfolio, voglio condividere con te il mio impegno e la mia
						passione per lo sviluppo web.
					</p>
					<p>
						Spero che tu possa trovare ispirazione e vedere il mio potenziale
						come sviluppatore. Non vedo l'ora di condividere con te il mio
						lavoro e di continuare a crescere professionalmente in questo
						affascinante campo.
					</p>
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
