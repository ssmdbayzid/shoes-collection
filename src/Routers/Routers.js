import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, About } from '../Page'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default Routers