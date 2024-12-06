import React from 'react'
import './Capital.css'
import Home from '../Home/Home'

function Capital() {
  return (
    <div className='w-screen h-full bg-gradient-to-r  from-[#b2d8d9] via-[#c0e7ea] to-[#c1e6e8]  p-5 md:p-10'>
        <div className='homecontainer h-full rounded-2xl md:rounded-3xl'>
          <Home/>
        </div>
    </div>
  )
}

export default Capital
