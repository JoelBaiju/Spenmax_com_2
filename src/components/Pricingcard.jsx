import React from 'react'
import bg from '../../src/assets/images/oooscillate.png'
import tick from '../../src/assets/images/checked.png'
function Pricingcard({ data }) {

    
    return (
        <div className='h-[25rem] w-64  relative  text-white backdrop-blur-3xl rounded-2xl flex justify-between flex-col '>

            <img src={bg} className='blur-sm absolute w-full' alt="" />

            <div className='w-64 h-full p-5 poppins rounded-2xl bg-black/25 backdrop-blur-xl flex justify-between flex-col'>
                <div className='flex flex-col gap-1 w-full p-2'>
                    <h1 className='text-xl font-bold gradient_text'>{data.package_detail.name}</h1>
                    <h1 className='text-xs font-thin text-neutral-400 '>{data.package_detail.discription}</h1>
                </div>

                <div className='flex flex-col w-full justify-between p-2 items-start'>
                    <div>
                        <h1 className='text-xs text-neutral-400 line-through '>{data.actual_price}<s/></h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl text-white font-semibold'>{data.discount_price}</h1>
                        <h1 className='text-xs text-neutral-200'>for {data.duration_days} days</h1>
                    </div>
                    <div className=''> 
                        <p className='text-xs text-black'>For limited period</p>
                    </div>
                    <h1 className='mt-4 texxt-lg text-neutral-200'>Benifits</h1>
                    <div className='benefits p-1 overflow-y-scroll h-14'>

                        {
                            data.package_detail.categories.map((cat) => (
                                <div className='flex items-center gap-2'>
                                    <img className='h-3' src={tick} alt="" />
                                    <h2 className='text-xs font-thin text-neutral-200'>{cat.name}</h2>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className=' p-2 w-full flex flex-row justify-center'>
                    <button className='bg-black px-4 py-1 rounded-md ' onClick={()=>window.location.href='https://users.spenmax.in/user-register '}><h1 className='font-semibold text-sm myshine_gray'>Subscribe Now</h1></button>
                </div>
            </div>

        </div>
    )
}

export default Pricingcard
