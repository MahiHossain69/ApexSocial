import { useState } from "react";
import { Search, CalendarIcon, ChevronDown, ChevronUp, AlignCenter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";


export default function FilterSidebar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() + 3))
  );

  const [showFilters, setShowFilters] = useState(false)


  const professions = [
    "Education/Teachers",
    "Pediatric Nurses",
    "Occupational Therapists",
    "Physical Therapists",
    "Speech Therapists",
    "Other Special Needs Professionals",
  ];
  const [selectedProfessions, setSelectedProfessions] = useState([]);

  const toggleProfession = (profession) => {
    if (selectedProfessions.includes(profession)) {
      setSelectedProfessions(selectedProfessions.filter((item) => item !== profession));
    } else {
      setSelectedProfessions([...selectedProfessions, profession]);
    }
  };

  const handleProfessionCheckAll = () => {
    if (selectedProfessions.length === professions.length) {
      setSelectedProfessions([]);
    } else {
      setSelectedProfessions(professions);
    }
  };

  
  const countries = ["USA", "UK", "Germany", "Australia"];
  const [selectedCountries, setSelectedCountries] = useState([]);

  const toggleCountry = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((item) => item !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const handleCountryCheckAll = () => {
    if (selectedCountries.length === countries.length) {
      setSelectedCountries([]);
    } else {
      setSelectedCountries(countries);
    }
  };

  return (
    <>
    <div className="bg-[#F6F8FA] hidden md:block  rounded-lg shadow-sm border border-gray-100 p-4">
     
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search..." className="pl-10 bg-white border-gray-200" />
        </div>
      </div>

      <div className="space-y-6">
        
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Qualified to care for</h3>
          <div className="space-y-2">
            {["Children ages 0-23 Months", "Children ages 2+ years", "Children with special needs"].map((text, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox  id={`qualified-${index}`} />
                <Label htmlFor={`qualified-${index}`} className="text-sm text-gray-600">
                  {text}
                </Label>
              </div>
            ))}
          </div>
        </div>


        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-800">Profession</h3>
            <Label onClick={handleProfessionCheckAll} className="text-xs font-medium text-gray-800cursor-pointer ">
              {selectedProfessions.length === professions.length ? "Uncheck All" : "Check All"}
            </Label>
          </div>
          <div className="space-y-2">
            {professions.map((profession, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox
                  id={`profession-${index}`}
                  checked={selectedProfessions.includes(profession)}
                  onCheckedChange={() => toggleProfession(profession)}
                />
                <Label htmlFor={`profession-${index}`} className="text-sm text-gray-600">
                  {profession}
                </Label>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Requirements</h3>
          <div className="space-y-2">
            {["Has a driver license", "Swimmer"].map((text, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox id={`requirement-${index}`} />
                <Label htmlFor={`requirement-${index}`} className="text-sm text-gray-600">
                  {text}
                </Label>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Gender</h3>
          <Select defaultValue="any">
            <SelectTrigger className="w-full bg-white border-gray-200">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

       
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Available to start</h3>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal bg-white border-gray-200">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate && endDate ? (
                  <>
                    {format(startDate, "MMM yyyy")} - {format(endDate, "MMM yyyy")}
                  </>
                ) : (
                  <span>Pick a date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="flex flex-col space-y-2 p-2">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Start Date</h4>
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">End Date</h4>
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

      
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-800">Country</h3>
            <Label onClick={handleCountryCheckAll} className="text-xs font-medium text-gray-8000 cursor-pointer ">
              {selectedCountries.length === countries.length ? "Uncheck All" : "Check All"}
            </Label>
          </div>
          <div className="space-y-2">
            {countries.map((country, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox
                  id={`country-${index}`}
                  checked={selectedCountries.includes(country)}
                  onCheckedChange={() => toggleCountry(country)}
                />
                <Label htmlFor={`country-${index}`} className="text-sm text-gray-600">
                  {country}
                </Label>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

    <div className="md:hidden ">
        <div className="flex  gap-2 mb-4">
          <div className="relative  flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search..." className="pl-10 bg-white border-gray-200" />
          </div>
          <Button
            className="bg-teal-500 cursor-pointer hover:bg-teal-600 flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filter
            {showFilters ? <ChevronUp  className="h-4 w-4" /> : <AlignCenter className="h-4 w-4" />}
          </Button>
        </div>

        {showFilters && (
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
           <div className="space-y-6">
        
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Qualified to care for</h3>
          <div className="space-y-2">
            {["Children ages 0-23 Months", "Children ages 2+ years", "Children with special needs"].map((text, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox  id={`qualified-${index}`} />
                <Label htmlFor={`qualified-${index}`} className="text-sm text-gray-600">
                  {text}
                </Label>
              </div>
            ))}
          </div>
        </div>


        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-800">Profession</h3>
            <Label onClick={handleProfessionCheckAll} className="text-xs font-medium text-gray-800cursor-pointer ">
              {selectedProfessions.length === professions.length ? "Uncheck All" : "Check All"}
            </Label>
          </div>
          <div className="space-y-2">
            {professions.map((profession, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox
                  id={`profession-${index}`}
                  checked={selectedProfessions.includes(profession)}
                  onCheckedChange={() => toggleProfession(profession)}
                />
                <Label htmlFor={`profession-${index}`} className="text-sm text-gray-600">
                  {profession}
                </Label>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Requirements</h3>
          <div className="space-y-2">
            {["Has a driver license", "Swimmer"].map((text, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox id={`requirement-${index}`} />
                <Label htmlFor={`requirement-${index}`} className="text-sm text-gray-600">
                  {text}
                </Label>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Gender</h3>
          <Select defaultValue="any">
            <SelectTrigger className="w-full bg-white border-gray-200">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

       
        <div>
          <h3 className="font-medium text-gray-800 mb-3">Available to start</h3>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal bg-white border-gray-200">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate && endDate ? (
                  <>
                    {format(startDate, "MMM yyyy")} - {format(endDate, "MMM yyyy")}
                  </>
                ) : (
                  <span>Pick a date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="flex flex-col space-y-2 p-2">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Start Date</h4>
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">End Date</h4>
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

      
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-800">Country</h3>
            <Label onClick={handleCountryCheckAll} className="text-xs font-medium text-gray-8000 cursor-pointer ">
              {selectedCountries.length === countries.length ? "Uncheck All" : "Check All"}
            </Label>
          </div>
          <div className="space-y-2">
            {countries.map((country, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox
                  id={`country-${index}`}
                  checked={selectedCountries.includes(country)}
                  onCheckedChange={() => toggleCountry(country)}
                />
                <Label htmlFor={`country-${index}`} className="text-sm text-gray-600">
                  {country}
                </Label>
              </div>
            ))}
          </div>
        </div>

      </div>
          </div>
        )}
      </div>


   </>
    
  );
}
