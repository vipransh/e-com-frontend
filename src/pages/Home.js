import React from 'react'
import Banner from '../components/Banner';
import FeaturedProduct from '../components/FeaturedProduct';
import Features from '../components/Features'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProductsHome from '../components/ProductsHome';

function Home() {
  return (
    <div className='bg-[#010409]'>  
        <Navbar/>
        <Hero/>
        <Features/>
        <Banner/>
        <FeaturedProduct/>
        <ProductsHome/>
    </div>
  )
}

export default Home