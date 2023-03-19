import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useSelector } from "react-redux";
// import { resetPassword } from './Helper/apiHelp';


function Profile() {
  const {user}=useSelector((state)=>state.user.currentUser)
  const [flag, setFlag]=useState(false);
  // const [data,setData]=useState({
  //   password: "",
  //   confirmPassword: ""
  // });

  // const passwordRequest=()=>{
   
  //   console.log(data.password,data.confirmPassword);
  //   if((data.password && data.confirmPassword ))
  //   {
  //     console.log("i am clicked");
  //     resetPassword(data).then(data=>{
  //       console.log("data from page", data);
  //     })
  //   }
  // }


  const clickHandle=()=>{
    if(flag)
    setFlag(false);
    else
    setFlag(true);
  }
  // console.log(user);
  return (
    <div className='bg-gray-100 h-screen'>
      <div className='bg-[#010409]'>
        <Navbar/>
      </div>
      {/* profile section */}
      <div className='w-full flex items-center justify-center '>
      <div className='flex flex-row w-4/5 mt-10 h-auto'>
        {/* left section */}
        <div className='w-1/5 border border-gray-300 bg-[#fff] mr-2 py-4  rounded-xl'>
          <div className='flex flex-row items-center p-2 border-b border-gray-300 '>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-gray-300'><h1 className='font-bold text-xl'>{user && user.name[0].toUpperCase()}</h1></div>
            <h3 className='ml-4'> hello {user && user.name}</h3>
          </div>
            <Link to="/orderHistory">
            <div className='mt-4 flex items-start border-b border-gray-300 hover:bg-gray-300'>
              <h2 className='p-2 ml-4'>Your orders</h2>
             </div>
            </Link>
          
          <div className='flex items-start cursor-pointer hover:bg-gray-300'>
              <h2 onClick={clickHandle} className='p-2 ml-4'>Change Password</h2>
          </div>
        </div>
        {/* right section */}
        <div className='w-4/5 flex flex-row  gap-10 bg-[#fff] border border-gray-300 rounded-xl py-4'>
         <div>
         <div className='flex flex-col items-start px-4 ml-6'>
            <label className='font-bold'>Name</label>
            <h2 className='p-2 border border-gray-300 px-4 mt-2'>{user && user.name}</h2>
          </div>
          <div className='flex flex-col items-start px-4 ml-6 mt-4'>
            <label className='font-bold'>Email</label>
            <h3 className='p-2 border border-gray-300 px-4 mt-2'>{user && user.email}</h3>
          </div>
         </div>
         {/* change password */}
         {flag? <div className='p-2 border border-gray-300'>
          <div className='flex flex-row items-center'>
          <label className='font-bold mr-6'>New Password:</label>
          <input className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2' type="text"/>
          </div>
          <div className='mt-4 flex flex-row items-center'>
            <label className='font-bold'>Confirm Password:</label>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2' type="text"  />
          </div>
          <button  className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center mt-6'>Submit</button>
         </div> : ""}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Profile