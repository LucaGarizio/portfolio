<template>
	<div>
		<NavBar></NavBar>

		<router-view v-slot="{ Component }">
			<transition name="grow-in" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
	components: {
		NavBar,
	},
};
</script>

<style lang="scss">
@use "./styles/general.scss" as *;

.grow-in-enter-from,
.grow-in-leave-to {
	opacity: 0;
	transform: scale(0.5);
}
.grow-in-enter-active,
.grow-in-leave-active {
	transition: 0.5s ease-out;
}
</style>
