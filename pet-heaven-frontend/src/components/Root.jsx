import { Outlet } from "@tanstack/react-router";
import Navbar from "./navbar";
import Footer from "./Footer"

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
