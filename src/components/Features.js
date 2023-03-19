import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {BsFillShieldLockFill, BsArrowCounterclockwise} from 'react-icons/bs'

function Features() {
  return (
    <div className='py-8 px-14 flex items-center w-full  mt-12'>
        <div className="flex md:flex-row flex-col items-center justify-evenly w-full">
            <div className='flex flex-col items-center bg-white p-4 rounded-xl mb-4 md:mb-0'>
            <TbTruckDelivery size={26}/>
            <h3 className='font-bold'>FASTER DELIVERY</h3>
            <p className='text-sm text-gray-500'>Far far away, behind the word mountains,<br></br> far from the countries.</p>
            </div>
            <div className='flex flex-col items-center bg-white p-4 rounded-xl mb-4 md:mb-0'>
            <BsFillShieldLockFill size={24}/>
            <h3 className='font-bold'>SECURE PAYMENTS</h3>
            <p className='text-sm text-gray-500'>Far far away, behind the word mountains,<br></br> far from the countries.</p>
            </div>
            <div className='flex flex-col items-center bg-white p-4 rounded-xl mb-4 md:mb-0'>
                <BsArrowCounterclockwise size={24}/>
                <h3 className='font-bold'>EASY RETURNS</h3>
                <p className='text-sm text-gray-500'>Far far away, behind the word mountains,<br></br> far from the countries.</p>
            </div>
        </div>
    </div>
  )
}

export default Features