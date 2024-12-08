import React from 'react'
import './VendorsCard.css'
import bg from '../assets/images/oooscillate.png'
function VendorsCard({ data }) {

    console.log('sngoiehgoinngeon')
    console.log(data.State)
    return (
        <div  className='  relative  text-white backdrop-blur-3xl rounded-2xl flex justify-between flex-col '>
            <img src={bg} className='blur-sm absolute w-full' alt="" />
            <div className='w-64 h-72 p-5 rounded-2xl bg-black/25 backdrop-blur-xl flex justify-between flex-col'>
                <div className='flex p-2 flex-row w-full justify-between'>
                    <img src={data.logo} className='h-3' alt="" />
                    <h1 className='text-xs bg-[#008551] rounded-xl px-2 text-white '>{data.status}</h1>
                </div>
                <div className='flex flex-col gap-1 w-full p-2'>
                    <h1 className='text-xs '>{data.category_name}</h1>
                    <h1 className='text-2xl font-bold'>{data.company_name}</h1>
                </div>
                <div className='flex flex-row w-full gap-1 justify-between  items-center'>
                    <div>
                        <h1 className='text-xs'>Locality</h1>
                        <h1 className='text-xs font-base'>{data.Locality}</h1>
                    </div>
                    <div>
                        <h1 className='text-xs'>District</h1>
                        <h1 className='text-xs font-base'>{data.District}</h1>
                    </div>
                    <div>
                        <h1 className='text-xs'>State</h1>
                        <h1 className='text-xs font-base'>{data.State}</h1>
                    </div>
                </div>
                <div className=' p-2 w-full flex flex-row justify-center'>
                    <button className='bg-black px-4 py-1 rounded-md ' onClick={()=>window.location.href='https://users.spenmax.in/user-register '}><h1 className='font-semibold text-sm myshine_gray'>Exclusive Offers</h1></button>
                </div>
            </div>

        </div>
    )
}

export default VendorsCard
