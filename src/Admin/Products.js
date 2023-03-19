import React,{useState, useEffect} from 'react'
import Productform from './Productform'
import { getProductList } from './Apicalls'

function Products() {
    const [flag,setFlag]=useState(false);
    const [productList,setProductList]=useState();
    const buttonClick=()=>{
        if(flag)
        setFlag(false)
        else
        setFlag(true)
    }

    const preload=()=>{
        getProductList().then(data=>{
            setProductList(data.products)
        });
    }

    useEffect(()=>{
        preload();
    },[]);

  return (
    <div>
      {flag ?  <Productform setFlag={setFlag} />: ""}
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<div className='flex flex-row items-center   justify-between p-2 mb-4'>
<input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products"/>
<button onClick={buttonClick} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2">{flag?"Close Form": "Add Product"}</button>
</div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-y-scroll">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Stocks
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {
                productList && productList.map((prod,index)=>(
                    <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {prod.name}
                </th>
                <td className="px-6 py-4">
                    {prod.stock}
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    ${prod.price}
                </td>
                <td className="px-6 py-4">
                    <button href="{somelink}" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
                <td className="px-6 py-4">
                    <button href="{somelink}" className="font-medium text-[#E21717] dark:text-[#E21717] hover:underline">Delete</button>
                </td>
            </tr>
                ))
            }
        </tbody>
    </table>
  
</div>
</div>
  )
}

export default Products