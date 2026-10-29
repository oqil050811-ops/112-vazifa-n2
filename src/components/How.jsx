import React from 'react'
import Rect from '../assets/Rectangle (1).png'
import Rec from '../assets/Rectangle (2).png'
import Mobil from '../assets/Rectangle (3).png'

function How() {
  return (
    <div>
      <main>
          
          <p className='text-4xl mt-155 text-center font-medium'>How the app works</p>

          <div className='flex justify-center items-center'>

            <img src={Rect} alt="" />

            <div>

            <p className='pb-6 text-[#FA4A0C] font-medium'>Create an account</p>
            <h1 className='text-4xl font-semibold pb-6'>Create/login to an existing <br />account to get started</h1>
            <p className='text-[#737373]'>An account is created with your email <br />and a desired password</p>

            </div>

          </div>

          <div className='flex justify-center items-center'>

            <div>

            <p className='pb-6 text-[#FA4A0C] font-medium'>Explore varieties</p>
            <h1 className='text-4xl font-semibold pb-6'>Shop for your favorites<br /> meal as e dey hot. </h1>
            <p className='text-[#737373]'>Shop for your favorite meals or drinks <br />and enjoy while doing it.</p>

            </div>

            <img src={Rec} alt="" />

          </div>

          <div className='flex justify-center items-center'>

            <img src={Mobil} alt="" />

            <div>

            <p className='pb-6 text-[#FA4A0C] font-medium'>Checkout</p>
            <h1 className='text-4xl font-semibold pb-6'>When you done check out <br />and get it delivered.</h1>
            <p className='text-[#737373]'>When you done check out and get it  <br />delivered with ease.</p>

            </div>

          </div>

      </main>
    </div>
  )
}

export default How
