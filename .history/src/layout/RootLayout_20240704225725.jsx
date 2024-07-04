// import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
function RootLayout() {
  return (
    <div className='flex flex-row w-full min-h-dvh max-h-full gap-8 bg-[#E9E9E9]'>
      <SideBar />
      <div className='w-full min-h-dvh max-h-full'>
        <Navbar />
        <section >
            <Outlet />
        </section>
      </div>
    </div>
  )
}

export default RootLayout