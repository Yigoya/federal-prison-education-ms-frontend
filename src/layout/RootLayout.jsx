import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
function RootLayout() {
  return (
    <div>
      <Navbar />
      <SideBar />
        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default RootLayout