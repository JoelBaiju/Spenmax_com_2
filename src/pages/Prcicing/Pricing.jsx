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
  

  const [activeTier, setActiveTier] = useState('BASIC');

  const handleClick = (tier) => {
    setActiveTier(tier);
    settier(tier);
  };

  return (
    <div className='flex w-full justify-center'>
      <div className='flex w-full flex-col md:flex-row items-center justify-center gap-5 p-5'>

        <div className="flex items-start gap-2 p-2 flex-row md:flex-col">
          {['BASIC', 'COMBO', 'ALL'].map((tier) => (
            <button
              key={tier}
              className={`h-8 shadow-neutral-800/50 shadow-lg w-24 text-center border-[#387478] border-2 rounded-lg text-xs font-normal transition-all ease-in-out duration-500 ${activeTier === tier
                ? 'bg-[#387478] text-white current'
                : 'text-[#1d3c3e]'
                }`}
              onClick={() => handleClick(tier)}
            >
              {tier==='ALL'?'GRAND':tier}
            </button>
          ))}
        </div>

        <div className='flex  w-full benefits gap-3 overflow-x-scroll '>
          {
            pricings.length>0 ? pricings.map((i, index) => (
              <Pricingcard data={i} />
            )) : <div className='h-[25rem] w-full text-center items-center flex flex-col justify-center'> <h1 className='font-semibold text-[#264f52]'>Currently no packages are <br /> available for the selected option </h1></div>
          }
        </div>
      </div>

    </div>
  )
}

export default Pricing
