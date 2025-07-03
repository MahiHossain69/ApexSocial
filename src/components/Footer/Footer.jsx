import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../assets/footerlogo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-4 sm:py-6 px-2 sm:px-6 mt-6 sm:mt-0">
      <div className="container_fluid flex flex-col space-y-4 sm:space-y-6 lg:space-y-0 lg:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
          <div className="flex items-center gap-1">
            <Link to="/">
              <img src={Logo} alt="Apex Social Group" width={50} height={30} className="w-full" />
            </Link>
          </div>
        </div>

        {/* Links and Copyright Section */}
        <div className="text-xs text-gray-600 text-center lg:text-left max-w-full px-2 sm:px-4">
          {/* Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-[5px] mb-2">
            <Link href="https://my.apex-social.com" className="font-inter text-black text-[10px] sm:text-[12px] font-medium whitespace-nowrap">
              my.apex-social.com
            </Link>
            <span className="font-inter text-black text-[10px] sm:text-[12px] font-medium whitespace-nowrap">- powered by A.P.EX. American Professional Exchange, LLC. |</span>
            <Link href="/career" className="hover:underline font-inter text-black text-[10px] sm:text-[12px] font-medium whitespace-nowrap">
              Career
            </Link>
            <span className="whitespace-nowrap">|</span>
            <Link href="/terms" className="hover:underline font-inter text-black text-[10px] sm:text-[12px] font-medium whitespace-nowrap">
              Terms of Service
            </Link>
            <span className="whitespace-nowrap">|</span>
            <Link href="/privacy" className="hover:underline font-inter text-black text-[10px] sm:text-[12px] font-medium whitespace-nowrap">
              Privacy Policy
            </Link>
          </div>

          {/* Copyright */}
          <div className="font-inter text-[#525866] text-[10px] sm:text-[12px] font-medium px-2 sm:px-0">
            © 2020 A.P.EX. American Professional Exchange, LLC. - 55 N El Camino Real, Suite #-435, San Clemente, CA 92673 USA
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-4 lg:mt-0">
          <Link href="#" aria-label="Facebook">
            <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5 text-[#3B5896] hover:text-gray-800 transition-colors" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5 text-[#047AB5] hover:text-gray-800 transition-colors" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <RiMessage3Fill className="h-4 w-4 sm:h-5 sm:w-5 text-[#45B5AA] hover:text-gray-800 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
