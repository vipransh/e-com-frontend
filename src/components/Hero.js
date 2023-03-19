import React from 'react'
import bannerImg from '../assets/banner-img.png'

function Hero() {
  return (
    <section className="text-gray-600 body-font ">
  <div className="mx-auto flex px-5 py-8 md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:px-6">
      <h1 className="title-font  md:text-5xl mb-4 font-bold text-white md:tracking-[14px] tracking-[8px]">Select Your New <br/> Perfect Style
      </h1>
      <p className="mb-8 ">Copper mug try-hard pitchfork pour-over freegan  tacos <br/> poke beard tote bag. Heirloom echo park mlkshk tote  bag <br/> selvage authentic tumeric  hexagon.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">SHOP NOW</button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full  w-1/2 mb-12 md:mb-0 ">
      <img className="object-cover object-center md:w-4/5" alt="hero" src={bannerImg}/>
    </div>
  </div>
</section>
  )
}

export default Hero