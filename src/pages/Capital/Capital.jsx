import React from 'react'
import './Capital.css'
import Home from '../Home/Home'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'


function Capital() {
  return (
    <div className='w-screen min-h-screen md:min-h-full  md:h-full bg-gradient-to-r  from-[#b2d8d9] via-[#c0e7ea] to-[#c1e6e8]  p-5 md:p-10'>
      <div className='homecontainer min-h-screen md:min-h-full relative flex flex-col justify-between md:h-full rounded-2xl md:rounded-3xl'>
        <Header/>
        <div className='h-16'></div>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  )
}

export default Capital
