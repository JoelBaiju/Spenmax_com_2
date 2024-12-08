import React, { useEffect, useState } from 'react'
import Pricingcard from '../../components/Pricingcard'
import { handler } from 'tailwindcss-animate'

function Pricing() {
  const [tier, settier] = useState('BASIC')
  const [pricings, setpricings] = useState('')
 


  const fetchpricing = async () => {
    try {
      const response = await fetch(`https://spenmax.in/api/shop/package_option/all_user/?type=${tier}`);

      if (response.ok) {
        const data = await response.json();
        console.log("Response Data:", data);
        setpricings(data)
      } else {
        console.error("Failed to fetch pricing. Status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred while fetching pricing:", error);
    }
  };

  useEffect(() => {
    fetchpricing();
  }, [tier]);


  

  return (
    <div className='flex w-full justify-center'>
      <div className='flex w-full flex-col md:flex-row items-center gap-5 p-5'>
        <div className='flex items-start gap-2 p-2 flex-row md:flex-col '>
          <button className='h-8 shadow-neutral-800/50 shadow-lg w-24 text-center bg-[#387478] rounded-lg text-xs text-[#f2ffff] font-light ' onClick={()=>settier('BASIC')}>Basic</button>
          <button className='h-8 shadow-neutral-800/50 shadow-lg w-24 text-center border-[#387478] border-2 rounded-lg text-xs text-[#1d3c3e]' onClick={()=>settier('COMBO')} >Combo</button>
          <button className='h-8 shadow-neutral-800/50 shadow-lg w-24 text-center border-[#387478] border-2 rounded-lg text-xs text-[#1e3e41]' onClick={()=>settier('ALL')}>Grand</button>

        </div>
        <div className='flex w-full benefits gap-3 overflow-x-scroll '>
          {
            pricings ? pricings.map((i, index) => (
              <Pricingcard data={i} />
            )) : ''
          }
        </div>
      </div>

    </div>
  )
}

export default Pricing
