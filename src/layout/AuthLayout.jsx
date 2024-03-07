// import React from 'react'
import { Outlet } from 'react-router-dom'
function AuthLayout() {
  return (
    <div>
        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default AuthLayout