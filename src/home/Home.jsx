import React from 'react';
import './home.css'
import Header from '../Components/Header/Header.jsx'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className='Home-Page'>
      
        <Header/>




        <Outlet/>   
    </div>
  )
}
