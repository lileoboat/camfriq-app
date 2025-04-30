import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

import logo2 from '../assets/logo2.png';
import { navItems } from '../constants';
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <img className='h-10 w-10 mr-2' src={logo2} alt="" />
            <span className='text-xl tracking-tight'>Camfriq</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item, index) => (
                <li key={index}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <a href='https://play.google.com/store/apps/details?id=com.campus.delivery' className='py-2 px-3 border rounded-md hover:bg-orange-500'>
                Be a rider 
            </a>
            <a href='https://apps.apple.com/gb/app/camfriq-seller/id6475733457' className='bg-gradient-to-r from bg-orange-500 to-orange-800 hover:opacity-50 py-2 px-3 rounded-md'>
                Be a seller
            </a>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
            <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center item-center lg:hidden'>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className='py-4'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex space-x-6'>
                    <a href="https://play.google.com/store/apps/details?id=com.campus.delivery" className='py-2 px-3 border rounded-md hover:bg-orange-500'>
                         Be a rider
                    </a>
                    <a href="https://apps.apple.com/gb/app/camfriq-seller/id6475733457" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
                        Be a seller
                    </a>
                </div>
            </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
