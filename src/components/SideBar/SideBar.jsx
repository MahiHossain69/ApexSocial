import { navItems, secondNavItem } from "@/data/nav-items";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { NoteIcon, RightArrowIcon } from "../shared/svgs";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import { ChevronRight, Globe } from "lucide-react";
import { Button } from "../ui/button";

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const { pathname } = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
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
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <figure className="relative">
              <img
                src="/images/sidebar/profile-image.png"
                alt="Username"
                className={`object-cover shrink-0 duration-300 ${
                  isSidebarOpen
                    ? "w-20 h-20 rounded-[10px] "
                    : "rounded-[6px] w-12 h-12"
                }`}
              />
              {!isSidebarOpen && (
                <span className="bg-red-base w-2 h-2 rounded-full border-2 border-white absolute bottom-1 -right-px" />
              )}
            </figure>
            {isSidebarOpen && (
              <div className="flex flex-col gap-5">
                <p className="text-black font-semibold text-base leading-normal">
                  Hi, Joy!
                </p>
                <div className="text-black font-semibold text-base leading-normal flex items-center gap-2">
                  <span>Color Code:</span>
                  <span className="w-3 h-3 rounded-full bg-blue-base" />
                  <span className="w-3 h-3 rounded-full bg-red-base" />
                </div>
              </div>
            )}
          </div>
          {isSidebarOpen && (
            <div className="w-full bg-[#F4E2E7] p-2 flex items-center justify-center">
              <p className="text-xs font-semibold text-red-base max-w-36 text-center">
                Your Profile is Currently Offline
              </p>
            </div>
          )}
        </div>
        <div className="space-y-3 mt-1.5">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            // last index
            const isLastIndex = navItems[navItems.length - 1].href === href;
            return (
              <Link
                key={href}
                to={href}
                className={cn(
                  "flex items-center gap-3 p-3 border-y border-transparent text-neutral-primary font-medium font-inter text-base",
                  isActive &&
                    "bg-neutral-primary text-neutral-50 rounded-[12px]",
                  isLastIndex &&
                    !isActive &&
                    "border-y border-neutral-300 rounded-none"
                )}
              >
                {Icon && (
                  <span
                    className={cn(
                      "text-neutral-600",
                      isActive && "text-neutral-50"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                )}
                {isSidebarOpen && <span>{label}</span>}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col mt-1.5">
          <div className="flex gap-2 items-center">
            <figure>
              <img
                src="/images/sidebar/coach-image.webp"
                alt="coach"
                className={`rounded-sm object-cover duration-300 ${
                  isSidebarOpen ? "w-10 h-[88px]" : "w-12 h-12"
                } rounded-[10px]`}
              />
            </figure>
            {isSidebarOpen && (
              <div className="flex flex-col gap-2">
                <p className="text-neutral-800 font-semibold text-sm leading-normal">
                  Susi Apex Success Coach
                </p>
                <a
                  href="mailto:hello@apex-social.org"
                  className="text-neutral-800  text-xs leading-normal flex gap-2 items-center w-fit"
                >
                  <RiMailFill size={16} /> hello@apex-social.org
                </a>
                <a
                  href="tel:+4915735992102"
                  className="text-neutral-800  text-xs leading-normal flex gap-2 items-center w-fit"
                >
                  <RiPhoneFill size={16} /> +49-1573-599-2102
                </a>
              </div>
            )}
          </div>
          {isSidebarOpen && (
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-neutral-800 text-sm text-center">
                Do you still have questions?
              </p>
              <p className="text-neutral-800 text-xs text-center">
                Contact me or make an appointment directly with me in my
                calendar.
              </p>
              <a
                href="mailto:hello@apex-social.org"
                className="mx-auto text-blue-base text-xs leading-normal flex gap-0.5 items-center w-fit border-b border-blue-base"
              >
                Make an appointment now <ChevronRight size={16} />
              </a>
            </div>
          )}

          <div className="flex flex-col mt-2">
            <div className="border-y border-neutral-300 py-2">
              <Link
                to="#"
                className={cn(
                  "flex items-center gap-3 p-3 text-neutral-800 font-medium font-inter text-base h-12 bg-[#9CD5D0] rounded-sm justify-center"
                )}
              >
                {isSidebarOpen ? (
                  <span className="flex items-center gap-1">
                    Start Training <ChevronRight size={16} />
                  </span>
                ) : (
                  <NoteIcon className="text-primary-50" />
                )}
              </Link>
            </div>
            <div className="py-2">
              <Link
                to="#"
                className={cn(
                  "flex items-center gap-3 p-3 text-neutral-800 font-medium font-inter text-base h-12 bg-[#9CD5D0] rounded-sm justify-center"
                )}
              >
                {isSidebarOpen ? (
                  <span className="flex items-center gap-1">
                    Apex Community Portal
                  </span>
                ) : (
                  <Globe className="text-primary-50" />
                )}
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-1.5 mt-1.5 pt-1.5 border-t border-neutral-300">
          {secondNavItem.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                to={href}
                className={cn(
                  "flex items-center gap-3 p-3 border-y border-transparent text-neutral-primary font-medium font-inter text-base",
                  isActive &&
                    "bg-neutral-primary text-neutral-50 rounded-[12px]"
                )}
              >
                {Icon && (
                  <Icon
                    className={cn(
                      "w-5 h-5",
                      isActive ? "text-neutral-50" : "text-neutral-600"
                    )}
                  />
                )}
                {isSidebarOpen && <span>{label}</span>}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
