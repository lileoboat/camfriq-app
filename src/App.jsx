import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import ShopsSection from './components/ShopsSection';
import OurShop from './components/OurShop';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
     <Navbar/>
     <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
      <ShopsSection/>
      <OurShop/>
      <Testimonials/>
      <Footer/>
     </div>
    
    </>
   
  )
}

export default App
