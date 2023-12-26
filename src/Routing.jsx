import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './home/Home'
import About from './Components/About/About.jsx'
import MainPage from './Components/mainPage/MainPage.jsx'
export default function Routing() {
  return (

    <Routes>
        <Route path='/' element={<Home/>} >
            <Route path='' element={<MainPage/>}/>
            <Route path='about' element={<About/>}/>
        </Route>

    </Routes>
  )
}
