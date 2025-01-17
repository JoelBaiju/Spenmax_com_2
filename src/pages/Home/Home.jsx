import React from 'react'
import Header from '../../components/Header'
import phone from '../../assets/images/iphone13.png'
import AnimatedShinyText from '../../components/magicui/AnimatedShinyText'
import cart from '../../assets/images/shopping-cart.png'
import coins from '../../assets/images/coin.png'
import wallet from '../../assets/images/wallet.png'
import wishlist from '../../assets/images/wishlist.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'

function Home() {
    const navigate=useNavigate()

    const redirectToWhatsApp = (id) => {
        const phoneNumber = '9048001820';
        const whatsappUrl = `https://wa.me/${9037975042}`;
        window.open(whatsappUrl, '_blank');
    }

    return (
        <div className='relative md:mt-36 flex flex-col items-end  justify-center  h-full w-full gap-y-4'>

            <div className='flex absolute md:pl-28 gap-5 md:gap-2 opacity-10  items-end flex-row z-10 md:w-1/2 '>
                <img src={cart} className='h-28 md:h-44 translate-y-20 ' alt="" />
                <img src={wallet} className='h-16 md:h-32 translate-y-15' alt="" />
                <img src={wishlist} className='h-12 md:h-24 translate-y-10' alt="" />
                <img src={coins} className='h-16 md:h-16' alt="" />
            </div>  

            <div className='w-full h-full relative md:absolute z-20 '>
                {/* <div className='absolute z-20 h-1/6 w-full'>
                    <Header />
                </div> */}

                <div className='  flex md:flex-row flex-col  h-4/6 px-5 md:px-16  w-full'>
                    <div className='md:w-2/6 slide-animation-l-r h-full pt-10'>
                        <h1 className='text-[#22494b] montserrat md:text-2xl md:w-3/4 text-left font-extrabold'><span className='font-light'>Discover exclusive deals & discounts on top products! </span>Shop Smart, Save Big – <span className='font-light'>with unbeatable offers</span></h1>
                        <p className='text-[#22494b] poppins text-xs font-light'> Promo codes & more. Start shopping now and unlock huge savings!</p>
                        <div className='mt-5 cursor-pointer bg-black px-5 w-fit py-2 md:py-3  rounded-md shadow-xl shadow-neutral-800/50 '>
                            <p className='myshine_gray text-sm font-semibold' onClick={()=>navigate('/vendors')}>  Find the Best Deals Near You! &gt;&gt; </p>
                        </div>
                    </div>
                    <div className='w-full fadein-animation md:w-2/6 flex flex-col items-center justify-center pt-10'>
                        <img src={phone} className='w-2/4 phone' alt="" />
                    </div>
                    <div className='md:w-2/6 h-full slide-animation-r-l pt-10 flex flex-col items-end gap-y-4'>
                        <h1 className='text-right'><span className='font-bold montserrat'>Have Questions</span> <br />or Need Assistance? Let’s Get Started!</h1>
                        <button className='h-8 shadow-ngit branch
eutral-800/50 shadow-lg w-40 text-center bg-[#387478] rounded-3xl text-xs text-[#f2ffff] font-light ' onClick={redirectToWhatsApp}>Contact Us Today</button>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Home
