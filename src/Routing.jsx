import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './home/Home'
import About from './Components/About/About.jsx'
import MainPage from './Components/mainPage/MainPage.jsx'
import Shop from './shop/Shop.jsx'
import Contact from './contact/Contact.jsx'
export default function Routing() {
  return (

    <Routes>
        <Route path='/' element={<Home/>} >
            <Route path='' element={<MainPage/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='collections' element={<Shop/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Route>

    </Routes>
  )
}
