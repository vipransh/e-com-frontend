import React,{useEffect} from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Admin/Sidebar';
import Users from '../Admin/Users';

function Userpage() {
    const navigate=useNavigate();
    const user=useSelector((state)=>state.user.currentUser);
     const role=user.user?.role;
    useEffect(()=>{
        if(role!=="ADMIN")
        {
           navigate("/", { replace: true });
        }
    },[navigate,role])
  return (
    <div className='flex flex-row w-screen h-full'>
        <div className='w-1/5 h-max  border-r border-black'>
        <Sidebar/>
        </div>
        <div className='w-4/5 h-100% px-2'><Users/></div>
    </div>
  )
}

export default Userpage