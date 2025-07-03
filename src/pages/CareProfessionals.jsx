import Candidate from "@/components/Candidate/Candidate";
import CareProfessionalsContent from "@/components/CareProfessionals/CareProfessionalsContent";
import MobPagination from "@/components/MobPagi/MobPagination";
import SideBar from "@/components/SideBar/SideBar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";

import { useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";

const CareProfessionals = () => {
  // on toggle the sidebar will be smaller and bigger state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // state for handling mobile sidebar
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMobileSidebarOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobileSidebarOpen(false);
    } else {
      setIsMobileSidebarOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="container_fluid">
        <div className="flex lg:gap-6">
          <div
            className={cn(
              "w-full transition-width duration-300",
              isSidebarOpen ? "md:w-72 lg:w-80" : "w-18"
            )}
          >
            <SideBar
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
              isMobileSidebarOpen={isMobileSidebarOpen}
            />
          </div>
          <div className="flex-1 px-4 py-6">
            <div className="flex md:hidden flex-col pl-[10px] pr-[10px] sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
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
            <div className="lg:hidden mb-6">
              <MobPagination
                totalItems={67}
                itemsPerPage={7}
                currentPage={1}
                onPageChange={() => {}}
                onItemsPerPageChange={() => {}}
              />
            </div>
            <CareProfessionalsContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareProfessionals;
