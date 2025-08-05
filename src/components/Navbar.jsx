import React  from 'react';
import { useState } from 'react';
import logo from '../assets/Logo.png';
import Button from './Button';
import { Globe, Menu, X } from 'react-feather';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

 

  const toggleMenu = () => setIsMenuOpen(open => !open);
 

  return (
    <header className="fixed top-0 px-4 w-full h-24 bg-white">
      <div className="container mx-auto px-5 py-2 flex items-center justify-between mt-5">
        {/* Logo */}
        <div className="pl-4 h-8 w-25">
          <img src={logo} alt="Logo" className="h-full" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
        <a href="#Home" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Home
            </a>
            <a href="#AboutUs" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              About Us
            </a>
            <a href="#Courses" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Courses
            </a>
            <a href="#Contacts" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Contacts
            </a>
            <a href="#Blog" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Blog
            </a>

            
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center  pr-10 py-2">
          <a href="/Signin">
              <Button
                label="Sign In"
                className="text-white p-10 m-1 w-40 border border-blue-200 hover:bg-gray-200 h-10 w-50 rounded-full bg-[linear-gradient(180deg,_#2769C0_4.79%,_#0F1A4F_48.12%)]"
              />
            </a>
         
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <a href="#Home" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Home
            </a>
            <a href="#AboutUs" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              About Us
            </a>
            <a href="#Courses" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Courses
            </a>
            <a href="#Contacts" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Contacts
            </a>
            <a href="#Blog" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Blog
            </a>

            <a href="/Signin">
              <Button
                label="Sign In"
                className="text-white p-1 w-150 border border-blue-200 hover:bg-gray-200 h-10 w-50 rounded-full bg-[linear-gradient(180deg,_#2769C0_4.79%,_#0F1A4F_48.12%)]"
              />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;