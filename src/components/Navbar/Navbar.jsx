import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png"
import { MdCall } from "react-icons/md";
import { Avatar } from '@/components/ui/avatar';
import Avatarr from "../../assets/avatar.png"


const Navbar = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="flex items-center gap-2">
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
            <a className='flex gap-[10px] items-center' href='tel:+844-787-6566'> <MdCall className="h-4 w-4  text-[#0A0D14]" />
              <span className="text-[#0A0D14] font-medium hidden sm:block">844-787-6566</span>
            </a>

          </div>

          <div className="flex cursor-pointer items-center gap-2 border-l pl-4 border-gray-200">
            <span className="text-gray-700 xs:hidden md:flex">Hi Joy</span>
            <div className="md:hidden">
              <Avatar  className=" h-8 w-8 rounded-full border border-gray-300 shadow-sm" />
             <a href='#'> <img className='xs:w-[32px] xs:mt-[-28px]' src={Avatarr}/></a>
            </div>
            <ChevronDown className="h-4 w-4 xs:hidden md:flex text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
