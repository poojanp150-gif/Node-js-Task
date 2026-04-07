import React from 'react'
import Register from './R&l/Register'
import { Route, Routes } from 'react-router-dom'
import Login from './R&l/Login'
import Navbar from './Navbar'
import Alltasks from './Alltasks'
import Displatalltask from './Displatalltask'
import Updatetask from './Updatetask'

export default function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Displatalltask/>} >
        <Route path='/register' element={<Register/>} />
        <Route path='/addtask' element={<Alltasks/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Update/:id' element={<Updatetask/>} />
        </Route>
      </Routes>
    </div>
  )
}
