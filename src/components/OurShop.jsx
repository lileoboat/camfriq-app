import React from 'react'

const OurShop = () => {
  return (
   <div id='ourshop' className='mt-20 text-center'>
        <h1 className='text-3xl text-orange-500 sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
            OUR SHOPS
        </h1>
        <p className='mt-10 text-md sm:text-lg lg:text-xl text-neutral-500 max-w-4xl mx-auto'>
            Welcome to our shop! We are dedicated to providing you with the best shopping experience possible.
            We have a wide range of shops to cater to all your needs. 
            From electronics to fashion, we have it all.
        </p>
        <p className='mt-10 text-md sm:text-lg lg:text-xl text-orange-900 max-w-4xl mx-auto'>
            Visit our shop on Apple Store and Play Store today and discover the best deals on campus!
        </p>
        <div className='flex justify-center my-10'>
            <a href="https://play.google.com/store/apps/details?id=com.campusmart.www" className='bg-gradient-to-r from-orange-500 to-orange-800 hover:opacity-50 py-3 px-4 mx-3 rounded-md'>
                Visit Our App
            </a>
        </div>
   </div>
  )
}

export default OurShop
