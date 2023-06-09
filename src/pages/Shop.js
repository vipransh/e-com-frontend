import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import {getProductList} from '../Admin/Apicalls'
import { getCategoryList, getProductsByCategory } from './Helper/apiHelp'
import { Link } from 'react-router-dom'

function Shop() {
  const [categories,setCategories]=useState();
  const [productList, setProductList]=useState();
  const [selectedOption, setSelectedOption] = useState(null);


  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const preload=()=>{
    getCategoryList().then(data=>{
      setCategories(data.collections)
    });
  }

 
  useEffect(()=>{
    if(!(selectedOption))
    {
      getProductList().then(data=>{
        setProductList(data.products)
    });
    }
    if(selectedOption)
    {
      getProductsByCategory(selectedOption).then(data=>{
        setProductList(data.products)
      });
    }
  },[selectedOption])
 

  useEffect(() => {
    preload();
   }, []);

  return (
    <div>
        <div className='bg-[#010409]'>
        <Navbar/>
      </div>
      <div className='flex flex-row'>
        <div className='w-1/5 h-screen'>
          <div className='flex flex-col items-start pl-6'>
            <h1 className='font-bold text-md mt-6'>Categories</h1>
            <div>
            {
              categories && categories.map((cat,index)=>(
                <div key={index} className="flex items-center ml-2 mt-4">
              <input  type="checkbox" value={cat._id} checked={selectedOption===cat._id} onChange={handleCheckboxChange}
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                {cat.name}
              </label>
            </div>
              ))
            }
            </div>
          </div>
        </div>
        <div className='w-4/5 border-l border-gray-300  bg-[#fff] py-5'>
        <div className='p-2 flex flex-row flex-wrap items-center gap-10'>
         {
        productList && productList.map((prod,index)=>(
            <div key={index}  className=" mb-6 w-72 bg-white shadow-md rounded-xl hover:shadow-xl duration-500 hover:scale-105">
            <Link to={`/product/${prod._id}`}>
        <img  src={prod.photos[0]?.secure_url} alt="Product" className="h-60 w-72 object-scale-down rounded-t-xl" /></Link>
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">{prod.name}</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">${prod.price}</p>
            
            <div className="ml-auto cursor-pointer" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#22CB5C" className="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg></div>
          </div>
        </div>
    </div>
        ))
    }
    </div>
        </div>
      </div>
    </div>
  )
}

export default Shop