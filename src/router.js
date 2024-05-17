// importa router e cronologia
import { createRouter, createWebHistory } from "vue-router";
import Index from "./pages/Index.vue";
import Projects from "./pages/Projects.vue";
import FrontEnd from "./pages/FrontEnd.vue";
import BackEnd from "./pages/BackEnd.vue";
import Contact from "./pages/Contact.vue";
import Info from "./pages/Info.vue";
import ProjectDetails from "./pages/ProjectDetail.vue";

// utilizzo funzione router
const router = createRouter({
	history: createWebHistory(),
	// defizione path pages
	routes: [
		{
			path: "/",
			name: "index",
			component: Index,
		},
		{
			path: "/projects",
			name: "projects",
			component: Projects,
		},
		{
			path: "/frontend",
			name: "frontend",
			component: FrontEnd,
		},
		{
			path: "/backend",
			name: "backend",
			component: BackEnd,
		},

		{
			path: "/contact",
			name: "contact",
			component: Contact,
		},
		{
			path: "/info",
			name: "info",
			component: Info,
		},
		{
			path: "/projects/:name",
			name: "project",
			component: ProjectDetails,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// Se viene fornita una posizione salvata, utilizzala
		if (savedPosition) {
			return savedPosition;
		} else {
			// Altrimenti, scorri fino alla parte superiore
			return { top: 0 };
		}
	},
});
export { router };
