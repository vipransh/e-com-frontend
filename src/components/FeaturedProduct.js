import React from 'react'

function FeaturedProduct() {
  return (
    <div>
        <section>
  <div className=" max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 bg-gray-100">
    <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="w-full grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
        <div className="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Watches</h2>

            <p className="mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              rerum quam amet provident nulla error!
            </p>
          </header>

          <div
            className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <div  className="block group">
              <img
                src="https://ecom-images-2023.s3.ap-south-1.amazonaws.com/products/63f1b5d4f7f312e044ba9d42/photo_1.png"
                alt=""
                className="object-cover w-full rounded aspect-square"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Samsung Watch
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="block group">
              <img
                src="https://ecom-images-2023.s3.ap-south-1.amazonaws.com/products/63f1af1af7f312e044ba9d1b/photo_1.png"
                alt=""
                className="object-cover w-full rounded aspect-square"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Apple Watch
                </h3>

                
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default FeaturedProduct