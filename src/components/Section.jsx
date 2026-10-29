import React from 'react'
import Desk from '../assets/Desktop Footer Light 2 (1).png'

function Section() {
  return (
    <div>

      <div className="bg-cover bg-center h-140 w-full mb-20" style={{ backgroundImage: "url('/src/assets/Rectangle 47.png')" }}>
        
        <p className='text-5xl text-center text-white font-medium pt-40 pb-5'>Download the app now.</p>
        <p className='text-white text-3xl text-center pb-15'>Available on your favorite store. Start your premium experience now</p>

        <div className='text-center'>
          <button className='bg-[#FA4A0C] text-white px-10 rounded-2xl py-5 mr-10 cursor-pointer'>Playstore</button>
          <button className='text-white border-2 px-10 rounded-2xl py-5 cursor-pointer'>App store</button>
        </div>

      </div>

      <footer>
        <img src={Desk} alt="" />
      </footer>

    </div>
  )
}

export default Section
