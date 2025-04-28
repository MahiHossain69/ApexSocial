import { ChevronDown, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png"

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
            <Phone className="h-4 w-4 text-gray-600" />
            <span className="text-gray-700 font-medium hidden sm:block">844-787-6566</span>
           
          </div>

          <div className="flex cursor-pointer items-center gap-2 border-l pl-4 border-gray-200">
           
            <span className="text-gray-700">Hi Joy</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
