import ApexAcademyContent from "@/components/ApexAcademy/ApexAcademyContent";
import SideBar from "@/components/SideBar/SideBar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const ApexAcademy = () => {
  const [isMainSidebarOpen, setIsMainSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMainSidebar = () => {
    setIsMainSidebarOpen(!isMainSidebarOpen);
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
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [academyFormData, setAcademyFormData] = useState({
    seminarDate: null,
    firstName: "",
    lastName: "",
    email: "",
    homePhone: "",
    profession: "",
  });
  const [errors, setErrors] = useState({});

  return (
    <div className="flex w-full ">
      <div className="flex w-full lg:gap-6">
        <div className="flex">
          {/* Main Sidebar */}
          <div
            className={cn(
              "w-full transition-width duration-300",
              isMainSidebarOpen ? "md:w-72 lg:w-80" : "w-18"
            )}
          >
            <SideBar
              isSidebarOpen={isMainSidebarOpen}
              toggleSidebar={toggleMainSidebar}
              isMobileSidebarOpen={isMobileSidebarOpen}
            />
          </div>
        </div>

        <div className="w-full mt-[30px] px-4">
          <ApexAcademyContent
            academyFormData={academyFormData}
            setAcademyFormData={setAcademyFormData}
            errors={errors}
            setErrors={setErrors}
          />
        </div>
      </div>
    </div>
  );
};

export default ApexAcademy;
