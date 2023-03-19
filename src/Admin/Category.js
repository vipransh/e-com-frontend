import React,{useState, useEffect} from 'react'
import {BsTrashFill} from 'react-icons/bs'
import { createCategory } from './Apicalls'
import { getCategoryList, deleteCategory } from './Apicalls'

function Category() {
    const [categoryData, setCategoryData]=useState()
    const [value, setValue]=useState({
        name: "",
    })
    const ClickHandler=(e)=>{
        e.preventDefault();
        createCategory(value);
        preload();
        setValue({
            ...value,
            name: ""
        })
    }

    const deleteButton=(id)=>{
        deleteCategory(id);
        preload();
    }

    const preload = () => {
        getCategoryList().then(data => {
            setCategoryData(data.collections)
        });
      };

    
        useEffect(() => {
           preload();
          }, [value]);


  return (
    <div className='w-1/2  flex flex-col items-center py-4 border-r border-black'>
    <h1 className='font-bold'>Categories</h1>
        <div className='flex flex-row items-center mt-8'>
            <label>Category Name:</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2 ml-2" type="text" placeholder="Category Name.." onChange={(e)=>{
                setValue({
                    ...value,
                    name: e.target.value
                })
            }} />
            <button onClick={ClickHandler} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center ml-2">Add Category</button>
        </div>
        <div className='mt-8'>
        {
            categoryData && categoryData.map((cate, index)=>(
                <div key={index} className='flex flex-row items-center justify-between p-4 w-60 bg-white border-b dark:bg-gray-900 dark:border-gray-700 mb-3 shadow-lg'>
                <h3>{cate.name}</h3>
                <div className='cursor-pointer' onClick={deleteButton.bind(this, cate._id)}  >
                <BsTrashFill color="#E21717"/>
                </div>
                </div> 
            ))
        } 
        </div>
    </div>
  )
}

export default Category