import React from 'react'
import Header from '../../components/Header'
import phone from '../../assets/images/iphone13.png'
import AnimatedShinyText from '../../components/magicui/AnimatedShinyText'
import cart from '../../assets/images/shopping-cart.png'
import coins from '../../assets/images/coin.png'
import wallet from '../../assets/images/wallet.png'
import wishlist from '../../assets/images/wishlist.png'
import playstore from '../../assets/images/play-removebg-preview 1@2x.png'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()

//     const redirectToWhatsApp = (id) => {
//         const phoneNumber = '9048001820';
//         const whatsappUrl = `https://wa.me/${phoneNumber}`;
//         window.open(whatsappUrl, '_blank');
//     }

    return (
        <div className='relative flex flex-col items-end  justify-center  h-full w-full gap-y-4'>

            <div className='flex absolute md:pl-28 gap-5 md:gap-2 opacity-10  items-end flex-row z-10 md:w-1/2 '>
                <img src={cart} className='h-28 md:h-44 translate-y-20 ' alt="" />
                <img src={wallet} className='h-16 md:h-32 translate-y-15' alt="" />
                <img src={wishlist} className='h-12 md:h-24 translate-y-10' alt="" />
                <img src={coins} className='h-16 md:h-16' alt="" />
            </div>  

            <div className='w-full h-full relative md:absolute z-20 '>
                <div className='absolute z-20 h-1/6 w-full'>
                    <Header />
                </div>

                <div className='md:mt-28 mt-14  flex md:flex-row flex-col  h-4/6 px-5 md:px-16  w-full'>
                    <div className='md:w-2/6 slide-animation-l-r h-full pt-10'>
                        <h1 className='text-[#22494b] montserrat md:text-2xl md:w-3/4 text-left font-extrabold'>Shop Smart, Save Big – <span className='font-light'>Discover Exclusive Deals and Discounts on Your Favorite Products!</span></h1>
                        <div className='mt-5 bg-black px-5 w-fit py-2 md:py-3  rounded-md shadow-xl shadow-neutral-800/50 '>
                            <AnimatedShinyText className='text-xs' children='Find the Best Deals Near You!    >>' />
                        </div>
                    </div>
                    <div className='w-full fadein-animation md:w-2/6 flex items-center justify-center pt-10'>
                        <img src={phone} className='w-2/4 phone' alt="" />
                    </div>
                    <div className='md:w-2/6 h-full slide-animation-r-l pt-10 flex flex-col items-end gap-y-4'>
                        <h1 className='text-right'><span className='font-bold montserrat'>Have Questions</span> <br />or Need Assistance? Let’s Get Started!</h1>
                        <button className='h-8 shadow-neutral-800/50 shadow-lg w-40 text-center bg-[#387478] rounded-3xl text-xs text-[#f2ffff] font-light '>Contact Us Today</button>
                    </div>
                </div>

                <div className='md:h-1/6 rise-animation w-full md:mt-0 mt-10   md:px-16 flex flex-col-reverse  md:flex-row p-3 gap-2 md:gap-0 md:items-start items-center  justify-between '>
                    <div className='md:w-2/6 flex flex-col md:items-start items-center'>
                        <h1 className='text-center md:text-left w-full text-[#22494b] tracking-wider text-xs'>
                            We believe in building lasting partnerships with our clients. Together, we create opportunities for growth. <br className='md:hidden'/><span className='font-semibold text-base myshine poppins ' onClick={()=>window.location.href='https://spenmax.in/user-register'}>  Signup Now  </span>
                        </h1>
                        <div className='flex flex-row  gap-4 text-[10px] mt-3 cursor-pointer'>
                            <p className='hover:text-neutral-200 transition-all ease-in-out duration-300' onClick={()=>navigate('/privacypolicy')}>Privacy Policy</p>
                            <p className='hover:text-neutral-200 transition-all ease-in-out duration-300' onClick={()=>navigate('/terms&conditions')}>Terms & Conditions</p>
                            <p className='hover:text-neutral-200 transition-all ease-in-out duration-300' onClick={()=>navigate('/refundpolicy')}>Refund Policy</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:items-end gap-2 '>
                        <h1 className='poppins text-sm font-light '>Start your savings journey!</h1>
                        <button className=' text-xs font-semibold poppins text-[#22494b]   py-1 px-4 rounded-3xl'><img className='h-10' src={playstore} alt="" /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
