import { Outlet } from "@tanstack/react-router";
import Navbar from "./navbar";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
