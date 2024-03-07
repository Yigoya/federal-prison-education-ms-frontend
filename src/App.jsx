import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Register from './pages/Register'
import Students from './pages/Students'
import Courses from './pages/Courses'
import RootLayout from './layout/RootLayout'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/Login'
import Teachers from './pages/Teachers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route element={<AuthLayout/>}>
              <Route path='/login' element= {<Login/>}/>
          </Route>
          <Route element={<RootLayout/>}>
            <Route path='/' element= {<DashBoard/>}/>
            <Route path='/register' element= {<Register/>}/>
            <Route path='/students' element= {<Students/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/teachers' element={<Teachers/>}/>
            <Route path='/staffmembers' element={<Courses/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
