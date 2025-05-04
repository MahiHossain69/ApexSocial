import { Button } from "@/components/ui/button";
import Jenny from "../../assets/jenny.png";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { RiVideoFill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi2";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const ProfileSideBar = () => {
  const location = useLocation();

  const menuItems = [
    {
      id: "profile",
      label: "View My Profile",
      icon: <IoEyeSharp />,
      to: "/profile",
    },
    {
      id: "favorites",
      label: "My Favorites",
      icon: <IoIosHeart />,
    },
    {
      id: "edit",
      label: "Edit Application",
      icon: <AiFillEdit />,
    },
    {
      id: "cost",
      label: "Program Cost",
      icon: <RiMoneyDollarBoxFill  />,
      to: "/programcost",
    },
    {
      id: "videos",
      label: "Helpful Videos",
      icon: <RiVideoFill />,
    },
    {
      id: "resources",
      label: "Resources",
      icon: <HiLightBulb />,
    },
    {
      id: "dashboard",
      label: "My Dashboard",
      icon: <TbLayoutDashboardFilled />,
    },
  ];

  return (
    <div className="w-full md:w-72 bg-[#F6F8FA] rounded-lg p-3">
      <h2 className="text-[18px] font-inter font-semibold text-[#0A0D14] mb-6">
        Need Help? <a href="#">Contact Us</a>
      </h2>

      <div className="mb-6">
        <div className="flex items-start gap-[10px]">
          <div className="flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden">
            <img
              src={Jenny}
              alt="Jenny Wilson"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="mt-[35px] text-[18px] font-semibold font-inter text-[#0A0D14]">
              Jenny Wilson
            </h3>
            <p className="text-[12px] font-inter font-normal text-[#0A0D14]">
              Family Advising Associate
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex mt-[20px] items-center gap-2">
            <div className="bg-white w-[24px] h-[24px] rounded-full">
              <IoMail className="h-4 w-4 text-center mt-[4px] ml-[4px] text-gray-500" />
            </div>
            <a
              href="mailto:jennywilson@gmail.com"
              className="text-[14px] font-inter font-normal text-[#0A0D14]"
            >
              jennywilson@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white w-[24px] h-[24px] rounded-full">
              <MdPhone className="h-4 w-4 text-center mt-[4px] ml-[4px] text-gray-500" />
            </div>
            <a
              href="tel:+16832556699"
              className="text-[14px] font-inter font-normal text-[#0A0D14]"
            >
              +16832556699
            </a>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[14px] font-inter font-normal text-[#0A0D14]">
              Colour Code:
            </span>
            <span className="w-[11px] h-[11px] rounded-full bg-[#375DFB]"></span>
            <span className="w-[11px] h-[11px] rounded-full bg-[#DF1C41]"></span>
          </div>
        </div>

        <div className="space-y-3">
          <Button className="w-full cursor-pointer bg-teal-500 font-inter font-semibold text-[14px] hover:bg-teal-600 text-white">
            Schedule Call
          </Button>
          <div className="border-[#E2E4E9] border"></div>
          <Button className="w-full cursor-pointer bg-teal-500 font-inter font-semibold text-[14px] hover:bg-teal-600 text-white">
            Search Candidates
          </Button>
        </div>
      </div>

      <div className="space-y-3 bg-white p-4 rounded-xl">
        {menuItems.map((item) => {
          const isActive = item.to && location.pathname === item.to;

          const iconClass = `h-4 w-4 mr-2 font-inter font-medium text-[14px] ${
            isActive ? "text-[#45B5AA]" : "text-[#868C98]"
          }`;

          const btnContent = (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full justify-start font-normal border border-gray-200 ${
                isActive
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-500 hover:bg-gray-100 hover:text-[#45B5AA]"
              }`}
              onClick={() => {}}
            >
              {React.cloneElement(item.icon, { className: iconClass })}
              {item.label}
            </Button>
          );

          return item.to ? (
            <Link to={item.to} key={item.id} className="block mb-[10px]">
              {btnContent}
            </Link>
          ) : (
            <div key={item.id} className="mb-[10px]">{btnContent}</div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSideBar;
