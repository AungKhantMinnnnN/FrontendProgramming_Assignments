import { createRootRoute, createRoute } from "@tanstack/react-router";
import Root from "./components/root";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";

const rootRoute = createRootRoute({
	component: () => <Root />,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Home,
});

const aboutUsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/AboutUs",
	component: AboutUs,
});

export const routeTree = rootRoute.addChildren([indexRoute, aboutUsRoute]);
