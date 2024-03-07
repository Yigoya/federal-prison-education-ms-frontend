// import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
function RootLayout() {
  return (
    <div className='flex flex-row w-full h-screen gap-8 bg-[#E9E9E9]'>
      <SideBar />
      <div className='w-full h-screen'>
        <Navbar />
        <section >
            <Outlet />
        </section>
      </div>
    </div>
  )
}

export default RootLayout