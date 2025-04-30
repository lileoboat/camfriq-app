import React from 'react'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react' 
import whatsapp from '../assets/whatsApp.png'
import Tiktok from '../assets/Tiktok.png'


const Footer = () => {
  return (
    // Lets add social media icons and handle the hover effect
    <div id='footer' className='bg-neutral-900 text-white'>
        <footer className='bg-neutral-900 py-10 mt-20'>
            <div className='container mx-auto text-center'>
            <p className='text-sm text-neutral-500'>© 2025 Camfriq. All rights reserved.</p>
            <p className='text-sm text-neutral-500'>Privacy Policy | Terms of Service</p>
            <div className='flex justify-center space-x-4 mt-4'>
                <a href="https://www.instagram.com/camfriq?igsh=NG1ldDVzbjYybmxq&utm_source=qr" className='text-neutral-500 hover:text-orange-500'>
                    <Instagram className='h-5 w-5' /> 
                </a>
                <a href="https://www.facebook.com/share/16517Q6HHu/?mibextid=wwXIfr" className='text-neutral-500 hover:text-orange-500'>
                    <Facebook className='h-5 w-5' />
                </a>
                <div className='h-5 w-5'>
                 <a href="https://www.tiktok.com/@camfriq?_t=8mpnYIy9Lte&_r=1" > <img src={Tiktok} alt="tiktok" />'</a>
                </div>
               
                <a href="https://x.com/camfriq?s=21" className='text-neutral-500 hover:text-orange-500'>
                    <Twitter className='h-5 w-5' />
                </a>
                <a href="https://whatsapp.com/channel/0029VaQdBlP8vd1WpFdD6U0A" className='text-neutral-500 hover:text-orange-500'> <img src={whatsapp} alt="whatsapp" className='h-5 w-5' /></a>
                
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
