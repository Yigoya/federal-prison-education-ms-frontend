// import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
function RootLayout() {
  return (
    <div className="flex flex-row w-full min-h-dvh gap-8 bg-[#E9E9E9]">
      <SideBar />

      <div className="w-full min-h-dvh max-h-full">
        <Navbar />
        <div className="flex-1 flex overflow-hidden">
          <section className="flex-1 overflow-y-scroll">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
