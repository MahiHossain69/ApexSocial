import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Rivka from "@/assets/rivka.svg";
import Amanda from "@/assets/amanda.svg";
import {
  FavCheckIcon,
  FavCloseIcon,
  FavHeartIcon,
  FavPinIcon,
} from "../shared/svgs";

const initialFamilies = [
  {
    name: "Rivka's Family",
    image: Rivka,
    availability: "Available to Start",
    date: "January 2025",
    id: "#ID 257",
    description:
      "Help Our Special Needs Daughter Thrive. Join a Caring NJ Family and Gain Hands-On Therapy Experience.",
    children: "2 Children",
    location: "Located in San Clemente, CA, USA",
  },
  {
    name: "Amanda’s Family",
    image: Amanda,
    availability: "Available to Start",
    date: "January 2025",
    id: "#ID 258",
    description:
      "San Francisco Bay Area Family of Four Seeking care professionals to join our family!",
    children: "3 Children",
    location: "Located in San Clemente, CA, USA",
  },
];

const requirements = [
  { label: "Requires Infant Care:", icon: "x", iconSrc: FavCloseIcon },
  { label: "Requires Special Needs:", icon: "check", iconSrc: FavCheckIcon },
  { label: "Requires Driver's License:", icon: "check", iconSrc: FavCheckIcon },
  { label: "Preferred Gender:", icon: "male", iconSrc: FavPinIcon },
];

export const FamilyProfileCardSection = () => {
  const [families, setFamilies] = useState(initialFamilies);

  const handleRemove = (indexToRemove) => {
    const updatedFamilies = families.filter((_, idx) => idx !== indexToRemove);
    setFamilies(updatedFamilies);
  };

  if (families.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full py-10  text-[#697271] font-semibold text-[20px] sm:text-[32px] font-inter">
        No Favorites
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {families.map((family, idx) => (
        <Card
          key={idx}
          className="w-full bg-white cardShadow rounded-[19.35px] border-[1.61px] border-[#fbb9b2] shadow-md overflow-hidden"
        >
          <CardContent className="flex flex-col xl:flex-row w-full gap-6 xl:gap-[38.7px] p-4 lg:p-[38.7px]">
            {/* Left Side */}
            <div className="flex flex-col items-center gap-4 xl:w-[211.23px] w-full">
              <h2 className="font-inter font-semibold text-[#45B5AA] text-[24px] text-center truncate">
                {family.name}
              </h2>
              <img
                src={family.image}
                alt="Family"
                className="rounded-full w-40 sm:w-44 md:w-[185.43px] h-40 sm:h-44 md:h-[185.44px] object-cover"
              />
              <div className="text-center text-[#45B5AA] text-[20px] font-inter flex flex-col gap-1">
                <span>{family.availability}</span>
                <span>{family.date}</span>
                <span>{family.id}</span>
              </div>
            </div>

            {/* Middle */}
            <div className="flex flex-col justify-between xl:w-[308px] w-full mt-4 xl:mt-0">
              <p className="text-[#525866] text-center xl:text-start text-[20px] font-inter mb-4">
                {family.description}
              </p>
              <div className="text-[#45B5AA] text-center xl:text-start text-[20px] font-inter space-y-5">
                <p>{family.children}</p>
                <p className="w-[210px] mx-auto xl:mx-0">{family.location}</p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-between xl:w-[308px] w-full gap-4 mt-4 xl:mt-0">
              {/* Buttons */}
              <div className="flex flex-col gap-2 w-full">
                <Button
                  onClick={() => handleRemove(idx)}
                  className="flex items-center justify-center gap-2 w-full bg-[#edf8f7] hover:bg-[#edf8f7]/80 rounded-lg h-auto text-[15px] sm:text-[20px] text-[#44B5AA] font-inter font-semibold"
                >
                  <FavHeartIcon className="text-[#E53434] w-5 h-5" />
                  Remove from Favorites
                </Button>

                <Button className="flex items-center justify-center w-full bg-[#45B5AA] hover:bg-[#45B5AA]/90 rounded-lg h-auto text-[15px] sm:text-[20px] font-inter font-semibold text-white">
                  View Profile
                </Button>
              </div>

              {/* Requirements */}
              <div className="flex flex-col  items-start gap-[12.9px] w-full mt-4 xl:mt-0">
                {requirements.map((requirement, index) => {
                  const Icon = requirement.iconSrc;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-[12.9px] w-full"
                    >
                      <div className="font-inter font-normal text-[20px]">
                        {requirement.label}
                      </div>
                      <Icon
                        className={`${
                          requirement.icon === "male"
                            ? "w-[25.8px] h-[32.25px] text-[#5281E0]"
                            : "w-[25.8px] h-[25.8px]"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
