import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Pencil,
} from "lucide-react";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Allycin from "/images/home/family-images/allycins-family.jpg";
import Rivka from "/images/home/family-images/rivkas-family.jpg";
import Susan from "/images/home/family-images/susans-family.jpg";

import HostFamiliesCardV2 from "./hostFamiliesCardV2";

const HostFamilies2 = () => {
  // State: Current page for pagination
  const [currentPage, setCurrentPage] = useState(1);
  // State: Entries per page dropdown
  const [entriesPerPage, setEntriesPerPage] = useState("7");

  // Candidates Data
  const candidates = [
    {
      id: "255",
      name: "Susan’s Family",
      location: "San Clemente, CA, USA",

      description:
        "German speaker needed for Annabell (5) to help us raise her bilingual German/English and to contribute to her development with creativity and enthusiasm",

      qualifications: {
        children: "2",
        infantQualified: true,
        specialNeedsQualified: true,
        driversLicense: true,
        preferredGender: "Female",
      },
      availableToStart: "January 2025",
      image: Susan,
    },
    {
      id: "256",
      name: "Allycin’s Family",
      location: "San Clemente, CA, USA",

      description:
        "Care Professional Oppourtunity in Beautiful Colorado: Help Us Provide the Best Life for Our Son!",
      qualifications: {
        children: "2",
        infantQualified: false,
        specialNeedsQualified: true,
        driversLicense: true,
        preferredGender: "Female",
      },
      availableToStart: "January 2025",
      image: Allycin,
    },
    {
      id: "257",
      name: "Rivka’s Family",
      location: "San Clemente, CA, USA",

      description:
        "Help Our Special Needs Daughter Thrive. Join a Caring NJ Family and Gain Hands-On Theraphy Experience.",
      qualifications: {
        children: "2",
        infantQualified: true,
        specialNeedsQualified: true,
        driversLicense: true,
        preferredGender: "Male",
      },
      availableToStart: "March 2025",
      image: Rivka,
    },
  ];
  return (
    <section className="space-y-6 p-4 md:p-6">
      <div className="md:flex hidden flex-col pl-[10px] pr-[10px] sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        {/* Title */}
        <h1 className="text-xl sm:text-[18px] font-inter font-semibold text-black">
          My Apex
        </h1>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button className="bg-[#45B5AA] hover:bg-teal-500 text-white rounded-xl shadow-md px-5 py-2 font-inter text-sm font-semibold">
            <MdOutlineDashboard className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
          <Button className="bg-[#45B5AA] hover:bg-teal-500 text-white rounded-xl shadow-md px-5 py-2 text-sm font-inter font-semibold">
            <Pencil className="w-4 h-4 mr-2" />
            Edit Application
          </Button>
        </div>
      </div>
      {/* Pagination Top Bar (Desktop Only) */}
      <div className=" hidden h-[56px] pl-[10px] pr-[10px] rounded-lg bg-[#F6F8FA] lg:flex md:justify-between items-center">
        <div className="xl:text-[14px] lg:text-[12px] md:text-[0px] font-inter font-normal text-[#525866]">
          1 to 10 of 67 candidates
        </div>

        <ul className="flex cursor-pointer items-center gap-2 list-none m-0 p-0">
          <li
            onClick={() => setCurrentPage(1)}
            className="h-8 w-8 flex items-center justify-center border-none bg-transparent text-black cursor-pointer"
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">First page</span>
          </li>

          <li
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="h-8 w-8 flex items-center justify-center border-none bg-transparent cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </li>

          {[1, 2, 3, 4, 5].map((page) => (
            <li
              key={page}
              onClick={() => setCurrentPage(page)}
              className={cn(
                "h-8 w-8 flex items-center rounded-lg justify-center border-[2px] bg-white text-gray-600 border-[#E2E4E9] cursor-pointer",
                currentPage === page && "bg-[#F6F8FA]  text-black"
              )}
            >
              {page}
            </li>
          ))}

          <li
            onClick={() => setCurrentPage(currentPage + 1)}
            className="h-8 w-8 flex items-center justify-center border-none bg-transparent cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </li>

          <li
            onClick={() => setCurrentPage(5)}
            className="h-8 w-8 flex items-center justify-center border-none bg-transparent text-black cursor-pointer"
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Last page</span>
          </li>
        </ul>

        <div className="cursor-pointer">
          <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
            <SelectTrigger className="w-[130px] outline-none cursor-pointer bg-white font-inter text-[#0A0D14] text-[14px] border-gray-200">
              <SelectValue placeholder="7 Entries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="5"
                className="font-inter cursor-pointer text-[14px] font-normal"
              >
                5 Entries
              </SelectItem>
              <SelectItem
                value="7"
                className="font-inter cursor-pointer text-[14px] font-normal"
              >
                7 Entries
              </SelectItem>
              <SelectItem
                value="10"
                className="font-inter cursor-pointer text-[14px] font-normal"
              >
                10 Entries
              </SelectItem>
              <SelectItem
                value="20"
                className="font-inter cursor-pointer text-[14px] font-normal"
              >
                20 Entries
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-6 p-4 md:p-0 ">
        {/* Mapping through Candidates */}
        {candidates.map((candidate) => (
          <>
            <HostFamiliesCardV2 candidate={candidate} />
          </>
        ))}
      </div>
    </section>
  );
};

export default HostFamilies2;
