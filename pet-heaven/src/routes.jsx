import { createRootRoute, createRoute } from "@tanstack/react-router";
import Root from "./components/root";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Adopt from "./pages/Adopt";
import Donate from "./pages/Donate";

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

const adoptRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/Adopt",
	component: Adopt
})

const donateRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/Donate",
	component: Donate 
})

export const routeTree = rootRoute.addChildren([indexRoute, aboutUsRoute, adoptRoute, donateRoute]);
