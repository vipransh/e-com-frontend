import React from 'react'

function Banner() {
  return (
    <div>
        
        <div className=" mx-auto py-9 md:py-6 px-4 md:px-6 bg-gray-50 mt-4 ">
            <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Best Deal</h1>
                        <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2">Save upto <span className="font-bold">50%</span></p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <img src="https://ecom-images-2023.s3.ap-south-1.amazonaws.com/products/63f1b432f7f312e044ba9d30/photo_1.png" alt="banner" className="w-36" />
                    </div>
                </div>
                <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Game Console</h1>
                        <p className="text-base lg:text-xl text-gray-800 dark:text-white">Save Upto <span className="font-bold">30%</span></p>
                    </div>
                    <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                        <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="banner2" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner