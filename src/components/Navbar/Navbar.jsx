import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

import Avatarr from "../../assets/avater.png";
import Logo from "../../assets/footerlogo.svg";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Close dropdown on route change
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    // Close on outside click
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container_fluid flex items-center justify-between py-3 px-4">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Apex Social Logo"
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Help Icon */}
          <button className="text-gray-700 hover:text-black cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
              <span className="font-semibold text-gray-700 text-[18px]">
                <FaCircleQuestion />
              </span>
            </div>
          </button>

          {/* Notification Bell */}
          <div className="relative">
            <button className="w-9 h-9 flex items-center justify-center rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition">
              <FaBell className="w-4 h-4 text-gray-700" />
            </button>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              1
            </span>
          </div>

          {/* Avatar + Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-full pr-2 pl-1 py-1 hover:shadow-md transition cursor-pointer"
            >
              <img
                src={Avatarr}
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover block"
              />
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="py-2 text-sm text-gray-700 font-inter font-semibold">
                  <li>
                    <Link
                      to="/view-profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="settings" className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
