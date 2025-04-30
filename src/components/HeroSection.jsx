
import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'
import apple from '../assets/apple.png'
import Android from '../assets/Android.png'

const HeroSection = () => {
  return (
    <div id='home' className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
            Biggest Reliable Online 
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                {" "}
                Shop on campus
            </span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            Discover the best deals on electronics, fashion, and more at our campus shop. 
            Shop now and save big on your favorite products!
        </p>
        <div className='flex justify-center my-10'>
            
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800  py-3 px-4 mx-3 rounded-md'>
                Shop now..!!
            </a>
        </div>
        <div className='flex justify-center my-10'>
            <a href="https://apps.apple.com/gb/app/camfriq/id6475732582" className='flex itemsd'>

                <img src={apple} alt="Apple Store" className='h-12 mx-2 hover:opacity-50' />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.campus.delivery">
                <img src={Android} alt="Play Store" className='h-12 mx-2 hover:opacity-50' />
            </a>
        </div>
        <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default HeroSection
