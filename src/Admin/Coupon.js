import React,{useState, useEffect} from 'react'
import {BsClipboard, BsTrashFill} from 'react-icons/bs'
import { createCoupon, getCoupons, deleteCoupon } from './Apicalls'

function Coupon() {
  const [couponList, setCouponList]=useState();
  const [value,setValues]=useState({
    code: "",
    discount: ""
  })
  const clickHandler=(e)=>{
    e.preventDefault();
    createCoupon(value);
    preload();
  }

  const deleteButton=(id)=>{
    deleteCoupon(id);
    preload();
}

  const preload=()=>{
    getCoupons().then(data=>{
      setCouponList(data.coupons)
    })
  }

  useEffect(()=>{
    preload();
  },[value])

  return (
    <div className='w-1/2 flex flex-col items-center py-4'>
    <h1 className='font-bold'>Coupons</h1>
    <div className='flex flex-row items-center mt-8'>
    <label>Code:</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2 ml-2 mr-2" type="text" placeholder="Coupon Code.." onChange={(e)=>{
              setValues({
                ...value,
                code: e.target.value
              })
            }} />
    <label>Discount(%):</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2 ml-2 w-16" type="number" placeholder="Discount %.." onChange={(e)=>{
              setValues({
                ...value,
                discount: e.target.value
              })
            }} />        
            <button onClick={clickHandler} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center ml-2">Create</button>
    </div>
    {/* coupon list */}
      <div className='mt-8'>
      {
      couponList && couponList.map((coup,index)=>(
        <div key={index} className='flex flex-row items-center justify-between p-4 w-96 bg-white border-b dark:bg-gray-900 dark:border-gray-700 mb-3 shadow-lg'>
                <h3>{coup.code}</h3>
                <BsClipboard/>
                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                  <input type="checkbox" value={coup.active} className="sr-only peer "  defaultChecked  />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                </label>
                <BsTrashFill className='cursor-pointer' value={coup._id} onClick={deleteButton.bind(this, coup._id)} color="#E21717"/>
           </div>
      ))
    }
      </div>
    </div>
  )
}

export default Coupon


