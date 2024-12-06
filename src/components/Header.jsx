import React, { useState } from 'react'
import logo from '../../src/assets/images/Spenmax transparent 1.png'
import menu from '../../src/assets/images/interface.png'
import { Link } from 'react-router-dom'
function Header() {

    const [dropped,setdropped]=useState()
    const drop=()=>{
        setdropped(true)
        const nav=document.getElementById('nav')
        const navicon=document.getElementById('navicon')
        navicon.classList.add('rotate-45')
        nav.classList.remove('opacity-0')
        document.body.style.overflowY='hidden';
    }

    const hide=()=>{
        setdropped(false)
        const nav=document.getElementById('nav')
        const navicon=document.getElementById('navicon')
        navicon.classList.remove('rotate-45')
        nav.classList.add('opacity-0')
        document.body.style.overflowY='scroll';

    }

    return (

    
    <div className='w-full  flex flex-col justify-center items-center'>
        <div className='hidden md:flex w-full h-full pt-6 px-16  flex-row justify-between items-center fall-animation'>
            <div className='h-full flex flex-row justify-center items-center'>
                <img src={logo} className='h-8' alt="" />
            </div>

            <div className='flex flex-row justify-center items-center'>
                <button className='py-2 px-5 mx-2 rounded-3xl bg-black/20 text-sm font-medium poppins text-white hover:text-black transition-all ease-in-out duration-1000 hover:scale-105 hover:bg-white/90'>Home</button>
                <button className='py-2 px-5 mx-2 rounded-3xl bg-black/20 text-sm font-medium poppins text-white hover:text-black transition-all ease-in-out duration-1000 hover:scale-105 hover:bg-white/90'>Vendors</button>
                <button className='py-2 px-5 mx-2 rounded-3xl bg-black/20 text-sm font-medium poppins text-white hover:text-black transition-all ease-in-out duration-1000 hover:scale-105 hover:bg-white/90'>Packages</button>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <button className='px-5 py-2 bg-transparent border-2 hover:bg-white hover:text-black duration-300 ease-in-out transition-all rounded-3xl text-[#f2ffff] font-bold border-[#9bc8cb]' onClick={()=>window.location.href='https://users.spenmax.in/Vendor-register'}>Join As Partner</button>
            </div>
        </div>



        <div className=' md:hidden flex w-full h-full pt-6   flex-col justify-between items-center z-30'>
            <div className=' px-3 h-full flex flex-row justify-between w-full fall-animation'>
                <img src={logo} className='h-5' alt="" />
                <button id='navicon' onClick={dropped?hide:drop}><img src={menu} className='transition-all ease-in-out duration-500 h-8'/></button>
            </div>

            <div id='nav' className='opacity-0 w-full h-screen flex flex-col gap-2 backdrop-blur-xl pt-10  justify-start items-center transition-all ease-in-out duration-700'>
                <button className='py-2 px-5 mx-2 w-40 rounded-3xl bg-[#22494b] text-sm font-medium poppins text-white hover:text-black transition-all ease-in-out duration-1000 hover:scale-105 hover:bg-white/90'>Home</button>
                <button className='py-2 px-5 mx-2 w-40 rounded-3xl bg-[#22494b] text-sm font-medium poppins text-white hover:text-black transition-all ease-in-out duration-1000 hover:scale-105 hover:bg-white/90'>Vendors</button>
                <button className='py-2 px-5 mx-2 w-40 rounded-3xl bg-[#22494b] text-sm font-medium poppins text-white hover:text-black transition-all ease-in-out duration-1000 hover:scale-105 hover:bg-white/90'>Packages</button>
                <button className='px-5 py-2 bg-transparent border-2 hover:bg-white hover:text-black rounded-3xl text-[#f2ffff] font-bold border-[#9bc8cb]' onClick={()=>window.location.href='https://users.spenmax.in/Vendor-register'}>Join As Partner</button>
            </div>
            
        </div>
       
       
      
    </div>
  )
}

export default Header
