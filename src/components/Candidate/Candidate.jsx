import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { Badge, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Heart, User } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import Jenny from "../../assets/jenny.png"
import Robert from "../../assets/fox.png"
import Floyd from "../../assets/floyd.png"
import Now from "../../assets/now.png"  
import Right from "../../assets/right.png"

const Candidate = () => {

  // Candidates Data
  const candidates = [
    {
      id: "#4526",
      name: "Jenny Wilson",
      title: "Infant care and special needs qualified physical therapist from United States",
      available: Now, 
      text:"San Francisco Suburbs-Energetic, Friendly Family of 6; Excited to Have a Care Professional with Special Needs Experience Join our Family to Help Us Enjoy Life Even More!", 
      description:
        "San Francisco Suburbs-Energetic, Friendly Family of 6; Excited to Have a Care Professional with Special Needs Experience Join our Family to Help Us Enjoy Life Even More!San Francisco Suburbs-Energetic, Friendly Family of 6; Excited to Have a Care Professional with Special Needs Experience Join our Family to Help Us Enjoy Life Even More!",
      
        qualifications: {
        hours: "Over 1500 hrs.",
        infantQualified: true,
        specialNeedsQualified: true,
        driversLicense: true,
      },
      image: Jenny,
    },
    {
      id: "#4554",
      name: "Robert Fox",
      title: "Infant care and special needs qualified physical therapist from United States",
      available: Now,
      description:
        "San Francisco Suburbs-Energetic, Friendly Family of 6; Excited to Have a Care Professional with Special Needs Experience Join our Family to Help Us Enjoy Life Even More!",
      qualifications: {
        hours: "Over 1500 hrs.",
        infantQualified: true,
        specialNeedsQualified: true,
        driversLicense: true,
      },
      image: Robert,
    },
    {
      id: "#4582",
      name: "Floyd Miles",
      title: "Infant care and special needs qualified physical therapist from United States",
      available: Now,
      description:
        "San Francisco Suburbs-Energetic, Friendly Family of 6; Excited to Have a Care Professional with Special Needs Experience Join our Family to Help Us Enjoy Life Even More!",
      qualifications: {
        hours: "Over 1500 hrs.",
        infantQualified: true,
        specialNeedsQualified: true,
        driversLicense: true,
      },
      image: Floyd,
    },
  ]

  // State: Current page for pagination
  const [currentPage, setCurrentPage] = useState(1)
  // State: Entries per page dropdown
  const [entriesPerPage, setEntriesPerPage] = useState("7")

  return (
    <div className="space-y-6">
      
      {/* Pagination Top Bar (Desktop Only) */}
      <div className="flex xs:hidden md:flex justify-between bg-[#F6F8FA] rounded-lg h-[55px] pl-5 items-center">
        
        {/* Display current entries info */}
        <div className="text-sm text-gray-600">1 to 10 of 67 candidates</div>

        {/* Pagination Buttons */}
        <div className="flex items-center gap-2">
          {/* First Page Button */}
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 p-0 border-gray-200"
            onClick={() => setCurrentPage(1)}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">First page</span>
          </Button>

          {/* Previous Page Button */}
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 p-0 border-gray-200"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>

          {/* Page Numbers */}
          {[1, 2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              className={cn(
                "h-8 w-8 p-0 border-gray-200",
                currentPage === page && "bg-gray-200 hover:bg-gray-300 text-gray-800",
              )}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}

          {/* Next Page Button */}
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 p-0 border-gray-200"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>

          {/* Last Page Button */}
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 p-0 border-gray-200"
            onClick={() => setCurrentPage(5)}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Last page</span>
          </Button>
        </div>

        {/* Entries Per Page Dropdown */}
        <div className="flex bg-red-200 items-center gap-2">
          <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
            <SelectTrigger className="w-[130px] bg-white border-gray-200">
              <SelectValue placeholder="7 Entries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 Entries</SelectItem>
              <SelectItem value="7">7 Entries</SelectItem>
              <SelectItem value="10">10 Entries</SelectItem>
              <SelectItem value="20">20 Entries</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Candidates Listing Section */}
      <div className="space-y-6">
        
        {/* Mapping through Candidates */}
        {candidates.map((candidate) => (
          <Card key={candidate.id} className="overflow-hidden border-gray-200">
            <CardContent className="p-0">

              {/* Mobile View */}
              <div className="md:hidden">
                {/* Candidate Basic Info */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-sm text-[#525866] font-semibold bg-[#F6F8FA] w-[88px] h-[36px] text-center rounded-lg pt-[6px]">ID {candidate.id}</div>
                    <div className="flex gap-2">
                      {/* Favorite Button */}
                      <Button variant="ghost" size="icon" className="text-teal-500 h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                      {/* View Button */}
                      <Button size="sm" className="bg-teal-500 hover:bg-teal-600 px-3">
                        View
                      </Button>
                    </div>
                  </div>

                  {/* Profile Image and Name */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-purple-100 rounded-md overflow-hidden">
                        <img
                          src={candidate.image || "/placeholder.svg"}
                          alt={candidate.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover"
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">{candidate.name}</h2>
                      <p className="text-sm text-gray-600">{candidate.title}</p>

                      {/* Availability Status */}
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-600">Available to start:</span>
                        <img
                          src={candidate.available}
                          alt="Available"
                          className="w-[42px] h-[20px] cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Candidate Description */}
                <div className="px-4 py-3 border-t border-gray-100">
                  <p className="text-[#525866] leading-[20px] font-inter text-[11px] font-normal">{candidate.description}</p>
                </div>
                <div className="">
                  <p>{candidate.text}</p>
                </div>

                {/* Candidate Qualifications */}
                <div className="border-t border-gray-100">
                  <div className="p-4">
                    <div className="space-y-3">
                      {/* Childcare Hours */}
                      <div className="bg-[#F6F8FA] p-3 mb-3 h-[80px] mt-[3px] rounded-md ">
                        <div className="text-sm text-gray-500 mb-1">Total Childcare Hours</div>
                        <div className="font-medium text-gray-800 mb-4">{candidate.qualifications.hours}</div>
                      </div>
                    </div>

                    {/* Qualification Badges */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-[#F6F8FA] h-[80px] p-3 rounded-md">
                        <span className="text-sm text-gray-600">Infant Qualified</span>
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100">
                          <img src={Right}/>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-[#F6F8FA] h-[80px] p-3 rounded-md">
                        <span className="text-sm text-gray-600">Special Needs Qualified</span>
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100">
                          <img src={Right}/>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-[#F6F8FA] h-[80px] p-3 rounded-md">
                        <span className="text-sm text-gray-600">Driver's License</span>
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100">
                          <img src={Right}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden md:block">
                {/* Candidate Information */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-sm text-[#525866] font-semibold bg-[#F6F8FA] w-[88px] h-[36px] text-center rounded-lg pt-[6px]">ID {candidate.id}</div>
                    <div className="flex gap-2">
                      {/* Add to Favorites Button */}
                      <Button variant="fev" size="sm" className="text-teal-500  hover:bg-teal-500 hover:text-white">
                        <Heart className="h-4 w-4 mr-1" />
                        Add Favorites
                      </Button>
                      {/* View Profile Button */}
                      <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                        <User className="h-4 w-4 mr-1" />
                        View Profile
                      </Button>
                    </div>
                  </div>

                  {/* Profile and Availability */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={candidate.image || "/placeholder.svg"}
                        alt={candidate.name}
                        width={100}
                        height={100}
                        className="rounded-md"
                      />
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold text-gray-800">{candidate.name}</h2>
                      <p className="text-gray-600">{candidate.title}</p>

                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Available to start:</span>
                        <img
                          src={candidate.available}
                          alt="Available"
                          className="w-[42px] h-[20px] cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Candidate Detailed Description */}
                <div className="px-6 py-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm">{candidate.description}</p>
                </div>

                {/* Qualification Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-[10px] p-6">
                  <div>
                    <div className="text-sm font-medium bg-[#F6F8FA] pl-5 rounded-lg h-[80px] w-[202px] pt-[20px] text-[#F6F8FA]0">
                      Total Childcare Hours
                      <div className="font-bold text-black">{candidate.qualifications.hours}</div>
                    </div>
                  </div>

                  {/* Infant Qualified */}
                  <div className="flex items-center gap-2">
                    <div className="text-sm bg-[#F6F8FA] text-[#F6F8FA]0 w-full text-center font-medium rounded-lg flex h-[80px] pt-[28px] pl-[32px] gap-[23px]">
                      Infant Qualified
                      <img className="items-center w-[40px] h-[40px] mt-[-10px]" src={Right}/>
                    </div>
                  </div>

                  {/* Special Needs Qualified */}
                  <div className="flex items-center gap-2">
                    <div className="text-sm bg-[#F6F8FA] text-[#F6F8FA]0 w-full text-left font-medium rounded-lg flex h-[80px] pt-[18px] pl-[12px] text-[14px]">
                      Special Needs Qualified
                      <img className="items-center w-[40px] h-[40px] mr-[20px]" src={Right}/>
                    </div>
                  </div>

                  {/* Driver's License */}
                  <div className="flex items-center gap-2">
                    <div className="text-sm bg-[#F6F8FA] text-[#F6F8FA]0 w-full text-center font-medium rounded-lg flex h-[80px] pt-[28px] pl-[26px] gap-[31px]">
                      Driver's License
                      <img className="items-center w-[40px] h-[40px] mt-[-10px]" src={Right}/>
                    </div>
                  </div>

                </div>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Candidate
