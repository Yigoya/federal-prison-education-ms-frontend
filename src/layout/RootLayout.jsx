import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
function RootLayout() {
  return (
    <div className='flex flex-row w-full h-screen gap-8'>
      <SideBar />
      <div className='bg-slate-400 w-full'>
        <Navbar />
        <section>
            <Outlet />
        </section>
      </div>
      
    </div>
  )
}

export default RootLayout