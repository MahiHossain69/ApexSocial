import Info from "@/assets/info.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { navItems } from "@/data/nav-items";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CustomCalendar } from "../Celendar/CustomCalendar";
import { RightArrowIcon } from "../shared/svgs";

export default function Sidebar({ isSidebarOpen, toggleSidebar, isMobileSidebarOpen }) {
  // active path name
  const { pathname } = useLocation();

  const [startDate, setStartDate] = useState(new Date(2024, 5, 1)); // June 2024
  const [endDate, setEndDate] = useState(new Date(2027, 5, 1)); // June 2027
  const [desktopCalendarOpen, setDesktopCalendarOpen] = useState(false);

  const professions = ["Education/Teachers", "Pediatric Nurses", "Occupational Therapists", "Physical Therapists", "Speech Therapists", "Other Special Needs Professionals"];
  const [selectedProfessions, setSelectedProfessions] = useState([]);

  const countries = ["USA", "UK", "Germany", "Australia"];
  const [selectedCountries, setSelectedCountries] = useState([]);

  const toggleSelection = (item, selectedItems, setSelectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleCheckAll = (items, selectedItems, setSelectedItems) => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className=" bg-[#F4F6F6] h-full border-r border-[#E3E8E8] px-3">
        <div className="text-end mb-2">
          <button onClick={toggleSidebar} className="w-10 h-10 inline-flex items-center justify-center">
            <RightArrowIcon className={!isSidebarOpen ? "rotate-180 transition-transform duration-300" : ""} />
          </button>
        </div>
        <div className="space-y-3 mb-6">
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
                  isActive && "bg-neutral-primary text-neutral-50 rounded-[12px]",
                  isLastIndex && !isActive && "border-y border-neutral-300 rounded-none"
                )}
              >
                {Icon && (
                  <span className={cn("text-neutral-600", isActive && "text-neutral-50")}>
                    <Icon className="w-5 h-5" />
                  </span>
                )}
                {isSidebarOpen && <span>{label}</span>}
              </Link>
            );
          })}
        </div>
        {isSidebarOpen && !isMobileSidebarOpen && (
          <div>
            {/* Filters */}
            <div className="space-y-6">
              {/* Qualified to Care For */}
              <div>
                <h3 className="font-semibold font-inter text-[14px] text-[#0A0D14] mb-3">Qualified to care for</h3>
                {["Children ages 0-23 Months", "Children ages 2+ years", "Children with special needs"].map((text, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <Checkbox className="bg-white cursor-pointer" id={`qualified-${index}`} />
                    <Label htmlFor={`qualified-${index}`} className="text-[14px] cursor-pointer font-medium font-inter text-[#525866]">
                      {text}
                    </Label>
                  </div>
                ))}
              </div>

              {/* Profession */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold font-inter text-[14px] text-[#0A0D14]">Profession</h3>
                  <div className="flex gap-[5px]">
                    <Checkbox
                      className="bg-white cursor-pointer"
                      checked={selectedProfessions.length === professions.length}
                      onCheckedChange={() => handleCheckAll(professions, selectedProfessions, setSelectedProfessions)}
                    />
                    <Label onClick={() => handleCheckAll(professions, selectedProfessions, setSelectedProfessions)} className="text-xs font-medium text-gray-800 cursor-pointer">
                      {selectedProfessions.length === professions.length ? "Uncheck All" : "Check All"}
                    </Label>
                  </div>
                </div>
                {professions.map((profession, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <Checkbox
                      className="cursor-pointer bg-white"
                      id={`profession-${index}`}
                      checked={selectedProfessions.includes(profession)}
                      onCheckedChange={() => toggleSelection(profession, selectedProfessions, setSelectedProfessions)}
                    />
                    <Label htmlFor={`profession-${index}`} className="text-[14px] cursor-pointer font-medium font-inter text-[#525866]">
                      {profession}
                    </Label>
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <div>
                <h3 className="font-semibold font-inter text-[14px] text-[#0A0D14] mb-3">Requirements</h3>
                {["Has a driver license", "Swimmer"].map((text, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <Checkbox className="bg-white cursor-pointer" id={`requirement-${index}`} />
                    <Label htmlFor={`requirement-${index}`} className="text-[14px] font-medium cursor-pointer font-inter text-[#525866]">
                      {text}
                    </Label>
                  </div>
                ))}
              </div>

              {/* Gender */}
              <div>
                <h3 className="font-semibold font-inter text-[14px] text-[#0A0D14] mb-3">Gender</h3>
                <Select defaultValue="any">
                  <SelectTrigger className="w-full cursor-pointer bg-white font-inter text-[#525866] border-gray-200">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any" className="cursor-pointer">
                      Any
                    </SelectItem>
                    <SelectItem value="male" className="cursor-pointer">
                      Male
                    </SelectItem>
                    <SelectItem value="female" className="cursor-pointer">
                      Female
                    </SelectItem>
                    <SelectItem value="other" className="cursor-pointer">
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Available to Start */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-semibold font-inter text-[14px] text-[#0A0D14] mb-3">Available to start</h3>
                <Popover open={desktopCalendarOpen} onOpenChange={setDesktopCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full cursor-pointer justify-start text-left font-inter font-normal text-[#0A0D14] bg-white border-gray-200 relative"
                      onClick={() => setDesktopCalendarOpen(true)}
                    >
                      <CalendarDays className="mr-2 h-4 w-4  text-[#525866]" />
                      {startDate && endDate ? `${format(startDate, "MMM yyyy")} - ${format(endDate, "MMM yyyy")}` : <span>Pick a date range</span>}
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <img src={Info} className="h-4 w-4 text-gray-400" />
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CustomCalendar
                      startDate={startDate}
                      endDate={endDate}
                      onStartDateChange={setStartDate}
                      onEndDateChange={setEndDate}
                      onCancel={() => setDesktopCalendarOpen(false)}
                      onApply={() => setDesktopCalendarOpen(false)}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Country */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold font-inter text-[14px] text-[#0A0D14]">Country</h3>
                  <div className="flex gap-[5px]">
                    <Checkbox
                      className="cursor-pointer bg-white"
                      checked={selectedCountries.length === countries.length}
                      onCheckedChange={() => handleCheckAll(countries, selectedCountries, setSelectedCountries)}
                    />
                    <Label onClick={() => handleCheckAll(countries, selectedCountries, setSelectedCountries)} className="text-xs font-medium text-gray-800 cursor-pointer">
                      {selectedCountries.length === countries.length ? "Uncheck All" : "Check All"}
                    </Label>
                  </div>
                </div>
                {countries.map((country, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <Checkbox
                      className="bg-white cursor-pointer"
                      id={`country-${index}`}
                      checked={selectedCountries.includes(country)}
                      onCheckedChange={() => toggleSelection(country, selectedCountries, setSelectedCountries)}
                    />
                    <Label htmlFor={`country-${index}`} className="text-[14px] cursor-pointer font-medium font-inter text-[#525866]">
                      {country}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
