

import { Button } from '@/components/ui/button'
import Jenny from "../../assets/jenny.png"
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import React, { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { RiVideoFill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi2";
import { TbLayoutDashboardFilled } from "react-icons/tb";




const ProfileSideBar = () => {
    const [active, setActive] = useState("profile");

    const menuItems = [
        { id: "profile", label: "View My Profile", icon: <IoEyeSharp className="h-4 w-4 mr-2" />, activeColor: "text-teal-600 bg-teal-50" },
        { id: "favorites", label: "My Favorites", icon: <IoIosHeart className="h-4 w-4 mr-2" /> },
        { id: "edit", label: "Edit Application", icon: <AiFillEdit className="h-4 w-4 mr-2" /> },
        { id: "cost", label: "Program Cost", icon: <RiMoneyDollarBoxFill className="h-4 w-4 mr-2" /> },
        { id: "videos", label: "Helpful Videos", icon: <RiVideoFill className="h-4 w-4 mr-2" /> },
        { id: "resources", label: "Resources", icon: <HiLightBulb className="h-4 w-4 mr-2" /> },
        { id: "dashboard", label: "My Dashboard", icon: <TbLayoutDashboardFilled className="h-4 w-4 mr-2" /> },
      ];
  return (
    <div className="w-full md:w-72 bg-[#F6F8FA] rounded-lg p-3 ">
    <h2 className="text-[18px] font-inter font-semibold text-[#0A0D14]  mb-6">Need Help? <a href='#'>Contact Us</a></h2>

    <div className="mb-6">
    <div className="flex items-start gap-[10px]  ">
  {/* Image */}
  <div className="flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden">
    <img
      src={Jenny}
      alt="Jenny Wilson"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text Info */}
  <div className=''>
    
    <h3 className="mt-[35px] text-[18px] font-semibold font-inter text-[#0A0D14]">Jenny Wilson</h3>
    <p className="text-[12px] font-inter font-normal text-[#0A0D14]">Family Advising Associate</p>

   
    
  </div>
</div>

      <div className="space-y-3 mb-6">
        <div className="flex mt-[20px] items-center gap-2">
         <div className="bg-white w-[24px] h-[24px] rounded-full">
         <IoMail className="h-4 w-4 text-center mt-[4px] ml-[4px] text-gray-500" />
         </div>
          <a href="mailto:jennywilson@gmail.com" className="text-[14px] font-inter font-normal text-[#0A0D14]">
            jennywilson@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white w-[24px] h-[24px] rounded-full">
          <MdPhone className="h-4 w-4 text-center mt-[4px] ml-[4px] text-gray-500" />
          </div>
          <a href="tel:+16832556699" className="text-[14px] font-inter font-normal text-[#0A0D14]">
            +16832556699
          </a>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[14px] font-inter font-normal text-[#0A0D14]">Colour Code:</span>
          <span className="w-[11px] h-[11px] rounded-full bg-[#375DFB]"></span>
          <span className="w-[11px] h-[11px] rounded-full bg-[#DF1C41]"></span>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full cursor-pointer bg-teal-500 font-inter font-semibold text-[14px]  hover:bg-teal-600 text-white">Schedule Call</Button>
        <div className="border-[#E2E4E9] border"></div>
        <Button className="w-full cursor-pointer bg-teal-500 font-inter font-semibold text-[14px] hover:bg-teal-600 text-white">Search Candidates</Button>
      </div>
    </div>

    <div className="space-y-3 bg-white p-4 rounded-xl">
      {menuItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className={`w-full cursor-pointer justify-start font-normal border border-gray-200 ${
            active === item.id
              ? "bg-teal-50 text-teal-600"
              : "text-gray-500 hover:bg-gray-100 hover:text-[#45B5AA]"
          }`}
          onClick={() => setActive(item.id)}
        >
          {React.cloneElement(item.icon, {
            className: `h-4 w-4 mr-2 ${
              active === item.id ? "font-inter font-medium text-[14px] text-[#45B5AA]" : "font-inter font-medium text-[14px] text-[#868C98]"
            }`,
          })}
          {item.label}
        </Button>
      ))}
    </div>
  </div>
  )
}

export default ProfileSideBar
