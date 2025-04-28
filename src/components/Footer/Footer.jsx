import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 px-4 mt-10">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-1">
          <img
            src={Logo}
            alt="Apex Social Group"
            width={50}
            height={30}
            className="h-7 w-auto"
          />
          
        </div>
        
      </div>

      <div className="text-xs text-gray-600 text-center md:text-left ">
        <div className="flex mb-2 gap-[5px]">
          <Link href="https://my.apex-social.com" className="hover:underline text-black font-semibold">
            my.apex-social.com
          </Link>{" "}
         <h1 className='text-black font-semibold'> - powered by A.P.EX. American Professional Exchange, LLC. |{" "}</h1>
          <Link href="/career" className="hover:underline text-black font-semibold">
            Career
          </Link>{" "}
          |{" "}
          <Link href="/terms" className="hover:underline text-black font-semibold">
            Terms of Service
          </Link>{" "}
          |{" "}
          <Link href="/privacy" className="hover:underline text-black font-semibold">
            Privacy Policy
          </Link>
        </div>
        <div>
          © 2020 A.P.EX. American Professional Exchange, LLC. - 55 N El Camino Real, Suite #-435, San Clemente, CA
          92673 USA
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link href="#" aria-label="Facebook">
          <Facebook className="h-5 w-5 text-gray-600 hover:text-gray-800" />
        </Link>
        <Link href="#" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-800" />
        </Link>
        <Link href="#" aria-label="Twitter">
          <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-800" />
        </Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer
