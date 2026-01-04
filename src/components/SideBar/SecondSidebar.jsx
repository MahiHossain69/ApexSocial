import { secondNavItem } from "@/data/nav-items";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { RightArrowIcon } from "../shared/svgs";

const SecondSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { pathname } = useLocation();

  return (
    <aside className=" bg-[#F4F6F6] h-full border-r border-[#E3E8E8] px-3">
      <div className="text-end mb-2">
        <button
          onClick={toggleSidebar}
          className="w-10 h-10 inline-flex items-center justify-center"
        >
          <RightArrowIcon
            className={
              !isSidebarOpen
                ? "rotate-180 transition-transform duration-300"
                : ""
            }
          />
        </button>
      </div>
      <div className="space-y-1.5 mb-6 mt-2">
        {secondNavItem.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              to={href}
              className={cn(
                "flex items-center gap-3 p-3 border-y border-transparent text-neutral-primary font-medium font-inter text-base",
                isActive && "bg-neutral-primary text-neutral-50 rounded-[12px]"
              )}
            >
              {Icon && (
                <Icon
                  className={cn(
                    "w-5 h-5",
                    isActive ? "text-neutral-50" : "text-neutral-700"
                  )}
                />
              )}
              {isSidebarOpen && <span>{label}</span>}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default SecondSidebar;
