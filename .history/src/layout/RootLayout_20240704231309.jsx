import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

function RootLayout() {
  return (
    <div className="flex w-full min-h-dvh bg-[#E9E9E9]">
      <SideBar className="fixed left-0 top-0 h-full w-64" />
      <div className="flex flex-col w-full ml-64">
        <Navbar className="fixed top-0 left-64 right-0 h-16" />
        <div className="flex flex-1 mt-16 overflow-hidden">
          <section className="flex-1 overflow-y-scroll p-4">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
