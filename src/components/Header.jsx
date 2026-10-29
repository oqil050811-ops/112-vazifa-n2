import React from 'react'
import Bella from '../assets/Bella Olonje logo 111 1.png'

import Group from '../assets/Group 53.png'

function Header() {
  return (
    <div>

        <header className="bg-cover bg-center h-175 w-full mb-20" style={{ backgroundImage: "url('/src/assets/Rectangle 48.png')" }}>

                <nav className='flex py-10 px-10 items-center bg-white'>

                    <img src={Bella} alt="" />

                    <ul className='flex text-[#252B42] pl-110 items-center gap-25 pr-3'>
                        <li className='hover:text-[#FA4A0C]'><a href="#">Home</a></li>
                        <li className='hover:text-[#FA4A0C]'><a href="#">Product</a></li>
                        <li className='hover:text-[#FA4A0C]'><a href="#">Faq</a></li>
                        <li className='hover:text-[#FA4A0C]'><a href="#">Contact</a></li>
                    </ul>

                </nav>

                <div className='flex items-center pt-40 flex-col'>
                  <p className='text-[#F6F6F6] text-2xl'>Food app</p>
                  <p className='text-[#F6F6F6] text-5xl font-bold pt-2'>Why stay hungry when <br /></p>
                  <p className='text-[#F6F6F6] text-5xl font-bold pb-2'>you can order form Bella Onojie</p>
                  <p className='text-[#F6F6F6]'>Download the bella onoje’s food app now on</p>

                  <div className='pt-5 flex gap-7'>
                    <button className='text-white bg-[#FA4A0C] py-3 px-7 rounded-4xl cursor-pointer'>Playstore</button>
                    <button className='text-white py-3 px-7 rounded-4xl border-2 cursor-pointer'>App store</button>
                  </div>

                </div>

        </header>

        <img src={Group} alt="" className='absolute top-[430px] left-1/2 -translate-x-1/2 w-[650px] max-w-full z-20 mb-60'/>
      
    </div>
  )
}

export default Header
