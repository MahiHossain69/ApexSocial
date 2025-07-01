import { ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { MdCall } from "react-icons/md";
import { Avatar } from '@/components/ui/avatar';
import Avatarr from "../../assets/avatar.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation(); // 👈 Detect route change

  useEffect(() => {
    // Auto-close dropdown on route change
    setDropdownOpen(false);
  }, [location]);

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Apex Social Group"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex cursor-pointer items-center gap-2">
            <a className='flex gap-[10px] items-center' href='tel:+844-787-6566'>
              <MdCall className="h-4 w-4 text-[#0A0D14]" />
              <span className="text-[#0A0D14] font-medium hidden sm:block">844-787-6566</span>
            </a>
          </div>

          <div className="relative flex items-center gap-2 border-l pl-4 border-gray-200">
            <div 
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="text-gray-700 hidden font-inter font-medium text-[14px] cursor-pointer xs:hidden md:flex">
                Hi Joy
              </span>
              <div className="md:hidden relative">
                <Avatar className="h-8 w-8 rounded-full border border-gray-300 shadow-sm" />
                <img className="absolute xs:top-[4px] left-0 w-8 h-8 rounded-full" src={Avatarr} alt="Avatar" />
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500 hidden xs:hidden md:flex" />
            </div>

            {dropdownOpen && (
              <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg w-40 z-50">
                <ul className="py-2 text-sm text-gray-700">
                  <li className='font-inter font-semibold'>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  </li>
                  <li className='font-inter font-semibold'>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                  </li>
                  <li className='font-inter font-semibold'>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
