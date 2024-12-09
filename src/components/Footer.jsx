import React from 'react'
import { useNavigate } from 'react-router-dom'
import playstore from '../../src/assets/images/play-removebg-preview 1@2x.png'

function Footer() {
    const navigate =useNavigate()

    return (

        <div className='md:h-1/6 rise-animation w-full md:mt-0 mt-10   md:px-16 flex flex-col-reverse  md:flex-row p-3 gap-2 md:gap-0 md:items-start items-center  justify-between '>
            <div className='md:w-2/6 flex flex-col md:items-start items-center'>
                <h1 className='text-center md:text-left w-full text-[#22494b] tracking-wider text-xs'>
                    We believe in building lasting partnerships with our clients. Together, we create opportunities for growth. <br className='md:hidden' /><span className='font-semibold text-base myshine poppins cursor-pointer ' onClick={() => window.location.href = 'https://users.spenmax.in/user-register'}>  Signup Now  </span>
                </h1>
                <div className='flex flex-row  gap-4 text-[10px] mt-3 cursor-pointer'>
                    <p className='hover:text-neutral-200 transition-all ease-in-out duration-300' onClick={() => navigate('/privacypolicy')}>Privacy Policy</p>
                    <p className='hover:text-neutral-200 transition-all ease-in-out duration-300' onClick={() => navigate('/terms&conditions')}>Terms & Conditions</p>
                    <p className='hover:text-neutral-200 transition-all ease-in-out duration-300' onClick={() => navigate('/refundpolicy')}>Refund Policy</p>
                </div>
            </div>
            <div className='flex flex-col md:items-end gap-2 '>
                <h1 className='poppins text-sm font-light '>Start your savings journey!</h1>
                <button className=' text-xl font-semibold poppins text-[#22494b]   py-1 px-4 rounded-3xl' onClick={()=>window.location.href='https://spenmax.in/api/user/download-apk/'}>Download Here</button>
            </div>
        </div>
    )
}

export default Footer
