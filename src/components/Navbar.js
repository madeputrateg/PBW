import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex items-center w-full justify-between">
            <div className="flex-shrink-0">
              <img className="" src="/assets/LogoNavbar.svg" alt="Logo" />
            </div>
            
            <div className="flex items-baseline space-x-6">
              <a href="#" className="  text-md font-medium">Home</a>
              <a href="#" className="  text-md font-medium">Services</a>
              <a href="#" className="  text-md font-medium">About</a>
            </div>
            <div className='flex items-center space-x-4'>
              <a href='#' className=''>Login</a>
              <a href='#' className=' bg-sky-500 text-white px-6 py-2 rounded'>Sign In</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block space-y-4 bg-gray-200' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
          <a href="#" className="text-gray-900 block px-3 rounded-md text-sm font-medium">Home</a>
          <a href="#" className="text-gray-900 block px-3 rounded-md text-sm font-medium">Services</a>
          <a href="#" className="text-gray-900 block px-3 rounded-md text-sm font-medium">About</a>
        </div>
        <div className='px-2 pt-2 pb-3 space-y-2 sm:px-3'>
          <a href="#" className="text-gray-900 block px-3 rounded-md text-sm font-medium">Sign In</a>
          <a href="#" className="text-gray-900 block px-3 rounded-md text-sm font-medium">Sign In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
