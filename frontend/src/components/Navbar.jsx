import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

function Navbar({isCartOpen, setIsCartOpen, cartItems}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(false);

  const totalItem = cartItems.length;

  const location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
      case '/':
        setActiveLink('Home');
        break;
      case '/discover':
        setActiveLink('Discover');
        break;
      case '/about':
        setActiveLink('About');
        break;
      case '/shop':
        setActiveLink('Shop');
        break;
      case '/contact':
        setActiveLink('Contact');
        break;
      default:
        setActiveLink('');
    }
  }, [location.pathname]);

  return (
    <>
      <header className="px-4 md:px-10 lg:px-20 xl:px-32 py-6 fixed top-0 right-0 left-0 bg-neutral-lightBeige shadow-sm
        scroll-mt-28 z-[70] 2xl:max-w-[110rem] 2xl:mx-auto">
        <div className="flex justify-between md:items-center">
          <div className="flex items-start md:items-center gap-1">
            <img 
              src="images/logo.svg" 
              alt="logo" 
              className="w-8 h-8"
            />
            <span className="text-2xl lg:text-[2.13rem] font-medium text-neutral-darkBrown">Medifit</span>
          </div>

          <div className={`md:hidden fixed inset-0 h-screen w-screen bg-neutral-950 transition-opacity duration-700 z-10
            ${isOpen ? 'opacity-80 pointer-events-none' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}>
          </div>

          <div className="">
            <nav className={`md:relative bg-neutral-paleBeige md:bg-transparent pt-20 p-8 md:p-0 top-0 fixed right-0 h-full w-3/4 sm:w-2/3 md:w-auto 
              md:h-auto md:right-0 shadow-lg shadow-neutral-softGray md:shadow-none transition-all duration-700 z-20 md:z-0
              ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
              <ul className="flex flex-col md:flex-row items-end md:items-center gap-6 lg:gap-8">
                <li><Link to="/" className={`hover-link ${activeLink === 'Home' ? 'after:w-full after:left-0 after:bg-neutral-darkBrown' : ''}`}>Home</Link></li>
                <li><Link to="/discover" className={`hover-link ${activeLink === 'Discover' ? 'after:w-full after:left-0 after:bg-neutral-darkBrown' : ''}`}>Discover</Link></li>
                <li><Link to="/about" className={`hover-link ${activeLink === 'About' ? 'after:w-full after:left-0 after:bg-neutral-darkBrown' : ''}`}>About</Link></li>
                <li><Link to="/shop" className={`hover-link ${activeLink === 'Shop' ? 'after:w-full after:left-0 after:bg-neutral-darkBrown' : ''}`}>Shop</Link></li>
                <li><Link to="/contact" className={`hover-link ${activeLink === 'Contact' ? 'after:w-full after:left-0 after:bg-neutral-darkBrown' : ''}`}>Contact</Link></li>
              </ul>

              {isOpen && (
              <div className="md:hidden absolute top-6 right-5" onClick={() => setIsOpen(false)}>
                <img src="images/close.svg" alt="close" className="w-6 cursor-pointer"/>
              </div>
            )}

            </nav> 
          </div>

          <div className="relative">
            <img 
              src="images/cart.svg" 
              alt="" 
              className="cursor-pointer transition-all duration-300 hover:brightness-200 mr-12 md:mr-0"
              onClick={() => setIsCartOpen(!isCartOpen)}
            />
              <span 
                className="absolute -top-2 right-10 md:-right-2.5 bg-neutral-lightBrown rounded-full text-neutral-light text-[0.6rem] px-1.5 py-0.5"
              >
                {totalItem}
              </span>
          </div>

            {!isOpen && (
              <div className="md:hidden absolute top-6 right-4" onClick={() => setIsOpen(true)}>
                <img src="images/hamburger.svg" alt="close" className="w-7 cursor-pointer"/>
              </div>
            )}
        </div>
      </header>
    </>
  )
}

export default Navbar;