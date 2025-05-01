import { useRef, useState } from "react";
import { Search, CalendarIcon, ChevronDown, ChevronUp, AlignCenter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CustomCalendar } from "../Celendar/CustomCalendar";
import { Mobcele } from "@/components/MobCeneldar/Mobcele";
import { CalendarDays } from 'lucide-react';
import Info from "@/assets/info.png"

export default function FilterSidebar() {
  const [startDate, setStartDate] = useState(new Date(2024, 5, 1)); // June 2024
  const [endDate, setEndDate] = useState(new Date(2027, 5, 1)); // June 2027
  const [desktopCalendarOpen, setDesktopCalendarOpen] = useState(false);
  const [mobileCalendarOpen, setMobileCalendarOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const professions = [
    "Education/Teachers",
    "Pediatric Nurses",
    "Occupational Therapists",
    "Physical Therapists",
    "Speech Therapists",
    "Other Special Needs Professionals",
  ];
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
      <div className="bg-[#F6F8FA] hidden md:block rounded-lg shadow-sm border border-gray-100 p-4">
        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search..." className="pl-10 bg-white font-inter text-[#525866] border-gray-200" />
        </div>

        {/* Filters */}
        <div className="space-y-6">
          {/* Qualified to Care For */}
          <div>
            <h3 className="font-semibold font-inter text-[14px] text-[#0A0D14] mb-3">Qualified to care for</h3>
            {["Children ages 0-23 Months", "Children ages 2+ years", "Children with special needs"].map((text, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox className="bg-white cursor-pointer" id={`qualified-${index}`} />
                <Label htmlFor={`qualified-${index}`} className="text-[14px] cursor-pointer font-medium font-inter text-[#525866]">{text}</Label>
              </div>
            ))}
          </div>

          {/* Profession */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold font-inter text-[14px] text-[#0A0D14]">Profession</h3>
              <div className="flex gap-[5px]">
                <Checkbox className="bg-white cursor-pointer"
                  checked={selectedProfessions.length === professions.length}
                  onCheckedChange={() => handleCheckAll(professions, selectedProfessions, setSelectedProfessions)}
                />
                <Label
                  onClick={() => handleCheckAll(professions, selectedProfessions, setSelectedProfessions)}
                  className="text-xs font-medium text-gray-800 cursor-pointer"
                >
                  {selectedProfessions.length === professions.length ? "Uncheck All" : "Check All"}
                </Label>
              </div>
            </div>
            {professions.map((profession, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox className="cursor-pointer bg-white"
                  id={`profession-${index}`}
                  checked={selectedProfessions.includes(profession)}
                  onCheckedChange={() => toggleSelection(profession, selectedProfessions, setSelectedProfessions)}
                />
                <Label htmlFor={`profession-${index}`} className="text-[14px] cursor-pointer font-medium font-inter text-[#525866]">{profession}</Label>
              </div>
            ))}
          </div>

          {/* Requirements */}
          <div>
            <h3 className="font-semibold font-inter text-[14px] text-[#0A0D14] mb-3">Requirements</h3>
            {["Has a driver license", "Swimmer"].map((text, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox className="bg-white cursor-pointer" id={`requirement-${index}`} />
                <Label htmlFor={`requirement-${index}`} className="text-[14px] font-medium cursor-pointer font-inter text-[#525866]">{text}</Label>
              </div>
            ))}
          </div>

          {/* Gender */}
          <div>
            <h3 className="font-semibold font-inter text-[14px] text-[#0A0D14] mb-3">Gender</h3>
            <Select defaultValue="any">
              <SelectTrigger className="w-full cursor-pointer bg-white font-inter text-[#525866] border-gray-200">
                <SelectValue placeholder="Any"  />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any" className="cursor-pointer">Any</SelectItem>
                <SelectItem value="male" className="cursor-pointer">Male</SelectItem>
                <SelectItem value="female" className="cursor-pointer">Female</SelectItem>
                <SelectItem value="other" className="cursor-pointer">Other</SelectItem>
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
                  {startDate && endDate ? (
                    `${format(startDate, "MMM yyyy")} - ${format(endDate, "MMM yyyy")}`
                  ) : (
                    <span>Pick a date range</span>
                  )}
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
                <Checkbox className="cursor-pointer bg-white"
                  checked={selectedCountries.length === countries.length}
                  onCheckedChange={() => handleCheckAll(countries, selectedCountries, setSelectedCountries)}
                />
                <Label
                  onClick={() => handleCheckAll(countries, selectedCountries, setSelectedCountries)}
                  className="text-xs font-medium text-gray-800 cursor-pointer"
                >
                  {selectedCountries.length === countries.length ? "Uncheck All" : "Check All"}
                </Label>

              </div>
            </div>
            {countries.map((country, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox className="bg-white cursor-pointer"
                  id={`country-${index}`}
                  checked={selectedCountries.includes(country)}
                  onCheckedChange={() => toggleSelection(country, selectedCountries, setSelectedCountries)}
                />
                <Label htmlFor={`country-${index}`} className="text-[14px] cursor-pointer font-medium font-inter text-[#525866]">{country}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search..." className="pl-10 bg-white font-inter text-[#868C98] text-[14px] font-normal border-gray-200" />
          </div>
          <Button
            className="bg-teal-500 cursor-pointer hover:bg-teal-600 flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filter {showFilters ? <ChevronUp className="h-4 w-4" /> : <AlignCenter className="h-4 w-4" />}
          </Button>
        </div>

        {showFilters && (
          <div className="bg-gray-50 rounded-lg p-4 mb-4 space-y-6">
            {/* Reuse the same structure from desktop */}
            {/* Qualified to Care For */}
            <div>
              <h3 className="font-semibold font-inter text-[#0A0D14] mb-3">Qualified to care for</h3>
              {["Children ages 0-23 Months", "Children ages 2+ years", "Children with special needs"].map((text, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <Checkbox className="bg-white cursor-pointer" id={`mobile-qualified-${index}`} />
                  <Label htmlFor={`mobile-qualified-${index}`} className="text-[14px] font-inter font-normal text-[#525866]">{text}</Label>
                </div>
              ))}
            </div>

            {/* Profession */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold font-inter text-[#0A0D14]">Profession</h3>
                <div className="flex gap-[5px]">
                <Checkbox className="bg-white cursor-pointer"
                  checked={selectedProfessions.length === professions.length}
                  onCheckedChange={() => handleCheckAll(professions, selectedProfessions, setSelectedProfessions)}
                />
                <Label
                  onClick={() => handleCheckAll(professions, selectedProfessions, setSelectedProfessions)}
                  className="text-[14px] font-inter font-normal cursor-pointer text-[#525866]"
                >
                  {selectedProfessions.length === professions.length ? "Uncheck All" : "Check All"}
                </Label>
              </div>
              </div>
              {professions.map((profession, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <Checkbox className="bg-white cursor-pointer"
                    id={`mobile-profession-${index}`}
                    checked={selectedProfessions.includes(profession)}
                    onCheckedChange={() => toggleSelection(profession, selectedProfessions, setSelectedProfessions)}
                  />
                  <Label htmlFor={`mobile-profession-${index}`} className="text-[14px] font-inter font-normal text-[#525866]">{profession}</Label>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div>
              <h3 className="font-semibold font-inter text-[#0A0D14] mb-3">Requirements</h3>
              {["Has a driver license", "Swimmer"].map((text, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <Checkbox className="bg-white cursor-pointer" id={`mobile-requirement-${index}`} />
                  <Label htmlFor={`mobile-requirement-${index}`} className="text-[14px] font-inter font-normal text-[#525866]">{text}</Label>
                </div>
              ))}
            </div>

            {/* Gender */}
            <div>
              <h3 className="font-semibold font-inter text-[#0A0D14] mb-3">Gender</h3>
              <Select defaultValue="any">
                <SelectTrigger className="w-full bg-white text-[#525866] font-inter font-normal text-[14px] border-gray-200">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any" className="font-inter">Any</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Available to Start */}
            <div>
              <h3 className="font-semibold font-inter text-[#0A0D14] mb-3">Available to start</h3>
              <Popover open={mobileCalendarOpen} onOpenChange={setMobileCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start font-inter text-left font-normal bg-white border-gray-200">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {startDate && endDate ? `${format(startDate, "MMM yyyy")} - ${format(endDate, "MMM yyyy")}` : <span>Pick a date range</span>}
                    <div className="  ">
                      <img src={Info} className="w-[20px] xs:ml-[80px] sm:ml-[365px] sm:w-[17px]" />
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 rounded-t-2xl overflow-hidden">
                  <div className="bg-white p-4">
                    <Mobcele
                      startDate={startDate}
                      endDate={endDate}
                      onStartDateChange={setStartDate}
                      onEndDateChange={setEndDate}
                      onCancel={() => setMobileCalendarOpen(false)}
                      onApply={() => setMobileCalendarOpen(false)}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Country */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold font-inter text-[#0A0D14]">Country</h3>
                <div className="flex gap-[5px]">
                <Checkbox className="cursor-pointer bg-white"
                  checked={selectedCountries.length === countries.length}
                  onCheckedChange={() => handleCheckAll(countries, selectedCountries, setSelectedCountries)}
                />
                <Label
                  onClick={() => handleCheckAll(countries, selectedCountries, setSelectedCountries)}
                  className="text-xs font-medium text-gray-800 cursor-pointer"
                >
                  {selectedCountries.length === countries.length ? "Uncheck All" : "Check All"}
                </Label>

              </div>
              </div>
              {countries.map((country, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <Checkbox className="bg-white cursor-pointer"
                    id={`mobile-country-${index}`}
                    checked={selectedCountries.includes(country)}
                    onCheckedChange={() => toggleSelection(country, selectedCountries, setSelectedCountries)}
                  />
                  <Label htmlFor={`mobile-country-${index}`} className="text-[14px] font-inter font-normal text-[#525866]">{country}</Label>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </>
  );
}
