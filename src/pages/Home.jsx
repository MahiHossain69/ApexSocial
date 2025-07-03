import Candidate from "@/components/Candidate/Candidate";
import MobPagination from "@/components/MobPagi/MobPagination";
import SideBar from "@/components/SideBar/SideBar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Home = () => {
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
          <div className={cn("w-full transition-width duration-300", isSidebarOpen ? "md:w-72 lg:w-80" : "w-18")}>
            <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isMobileSidebarOpen={isMobileSidebarOpen} />
          </div>
          <div className="flex-1 px-4 py-6">
            <div className="lg:hidden mb-6">
              <MobPagination totalItems={67} itemsPerPage={7} currentPage={1} onPageChange={() => {}} onItemsPerPageChange={() => {}} />
            </div>
            <Candidate />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
