import { createRootRoute, createRoute } from "@tanstack/react-router";
import Root from "./components/root";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Adopt from "./pages/Adopt";
import Donate from "./pages/Donate";
import ContactUs from "./pages/ContactUs";
import Release from "./pages/Release";

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

const contactUsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/ContactUs",
	component: ContactUs
})

const releaseRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/Release",
	component: Release
})

export const routeTree = rootRoute.addChildren([indexRoute, aboutUsRoute, adoptRoute, donateRoute, contactUsRoute, releaseRoute]);
