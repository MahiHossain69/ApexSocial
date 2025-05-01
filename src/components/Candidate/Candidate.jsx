import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Heart, User } from 'lucide-react'
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
      text:"San Francisco Suburbs-Energetic, Friendly Family of 6; Excited to Have a Care Professional with Special Needs Experience Join our Family to Help Us Enjoy Life Even More!",
      description:
        "San Francisco Suburbs-Energetic, Friendly Family of 6; Excited to Have a Care Professional with Special Needs Experience Join our Family to Help Us Enjoy Life Even More!San Francisco Suburbs-Energetic, Friendly Family of 6; Excited to Have a Care Professional with Special Needs Experience Join our Family to Help Us Enjoy Life Even More!",
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
      text:"San Francisco Suburbs-Energetic, Friendly Family of 6; Excited to Have a Care Professional with Special Needs Experience Join our Family to Help Us Enjoy Life Even More!",
      description:
        "San Francisco Suburbs-Energetic, Friendly Family of 6; Excited to Have a Care Professional with Special Needs Experience Join our Family to Help Us Enjoy Life Even More!San Francisco Suburbs-Energetic, Friendly Family of 6; Excited to Have a Care Professional with Special Needs Experience Join our Family to Help Us Enjoy Life Even More!",
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
      <div className="md:hidden xs:hidden h-[56px] pl-[10px] pr-[10px] rounded-lg bg-[#F6F8FA] lg:flex md:justify-between items-center">
        <div className="xl:text-[14px] lg:text-[12px] md:text-[0px] font-inter font-normal text-[#525866]">1 to 10 of 67 candidates</div>

        <div className="flex cursor-pointer items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 p-0 cursor-pointer border-none bg-transparent shadow-none text-[black] "
            onClick={() => setCurrentPage(1)}
          >
            <ChevronsLeft className="h-4 w-4 cursor-pointer" />
            <span className="sr-only">First page</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 p-0 cursor-pointer border-none bg-transparent shadow-none "
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            <ChevronLeft className="h-4 w-4  " />
            <span className="sr-only">Previous page</span>
          </Button>

          {[1, 2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              className={cn(
                "h-8 w-8 p-0 border-[2px] cursor-pointer border-[#E2E4E9]",
                currentPage === page && "bg-[#F6F8FA] hover:bg-gray-300 text-gray-800",
              )}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 cursor-pointer p-0 border-none bg-transparent shadow-none"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 cursor-pointer p-0 border-none bg-transparent shadow-none text-[black]"
            onClick={() => setCurrentPage(5)}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Last page</span>
          </Button>
        </div>

        <div className="cursor-pointer">
          <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
            <SelectTrigger className="w-[130px] outline-none cursor-pointer bg-white font-inter text-[#0A0D14] text-[14px] border-gray-200">
              <SelectValue placeholder="7 Entries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5" className="font-inter cursor-pointer text-[14px] font-normal">5 Entries</SelectItem>
              <SelectItem value="7" className="font-inter cursor-pointer text-[14px] font-normal">7 Entries</SelectItem>
              <SelectItem value="10" className="font-inter cursor-pointer text-[14px] font-normal">10 Entries</SelectItem>
              <SelectItem value="20" className="font-inter cursor-pointer text-[14px] font-normal">20 Entries</SelectItem>
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
                    <div className="text-sm text-[#525866] font-semibold font-inter bg-[#F6F8FA] w-[88px] h-[36px] text-center rounded-lg pt-[8px]">ID {candidate.id}</div>
                    <div className="flex gap-2">
                      {/* Favorite Button */}
                      <Button variant="fev" size="icon" className="text-teal-500  hover:bg-teal-500 hover:text-white h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                      {/* View Button */}
                      <Button variant="fev" size="sm" className="text-teal-500  hover:bg-teal-500 hover:text-white px-3">
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
                          className="w-[120px] h-[120px] object-cover"
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-[20px] font-semibold font-inter text-[#0A0D14]">{candidate.name}</h2>
                      <p className="text-[14px] font-inter font-normal text-[#525866]">{candidate.title}</p>

                      {/* Availability Status */}
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[14px] font-inter font-normal text-[#525866]">Available to start:</span>
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
                <div className="px-4 py-3 border-t-2 border-gray-100">
                  <p className="text-[#525866] leading-[20px] font-inter text-[16px] font-normal">{candidate.description}</p>
                </div>
                <div className="px-4 py-3">
                  <p className='text-[#525866] font-inter font-normal text-[14px] text-sm'>{candidate.text}</p>
                </div>
                

                {/* Candidate Qualifications */}
                <div className="border-t-2 border-gray-100">
                  <div className="p-4">
                    <div className="space-y-3">
                      {/* Childcare Hours */}
                      <div className="bg-[#F6F8FA] p-3 mb-3 h-[80px] mt-[3px] rounded-md ">
                        <div className="text-[14px] font-inter font-medium text-[#525866] mb-1">Total Childcare Hours</div>
                        <div className="font-semibold font-inter text-[#0A0D14] text-[20px] mb-4">{candidate.qualifications.hours}</div>
                      </div>
                    </div>

                    {/* Qualification Badges */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-[#F6F8FA] h-[80px] p-3 rounded-md">
                        <span className="text-[14px] font-inter font-medium text-[#525866]">Infant Qualified</span>
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100">
                          <img src={Right}/>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-[#F6F8FA] h-[80px] p-3 rounded-md">
                        <span className="text-[14px] font-inter font-medium text-[#525866]">Special Needs Qualified</span>
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100">
                          <img src={Right}/>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-[#F6F8FA] h-[80px] p-3 rounded-md">
                        <span className="text-[14px] font-inter font-medium text-[#525866]">Driver's License</span>
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
                      <Button variant="fev" size="sm" className="text-teal-500 cursor-pointer hover:bg-teal-500 hover:text-white">
                        <Heart className="h-4 w-4 mr-1" />
                        Add Favorites
                      </Button>
                      {/* View Profile Button */}
                      <Button variant="fev" size="sm" className="text-teal-500 cursor-pointer hover:bg-teal-500 hover:text-white">
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
                  <p className="text-[#525866] text-[16px] font-inter font-normal">{candidate.description}</p>
                </div>
                <div className="px-6 py-4">
                  <p className='text-[#525866] font-inter font-normal text-[14px] text-sm'>{candidate.text}</p>
                </div>

                {/* Qualification Grid - Updated for better responsiveness */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6">
                  {/* Childcare Hours - Made responsive */}
                  <div className="w-full">
                    <div className="xl:text-[14px] md:text-[13px] md:pt-[15px] lg:text-[9px] font-inter font-medium bg-[#F6F8FA] px-5 rounded-lg h-[80px] w-full lg:pt-[22px] xl:pt-[17px] text-[#525866]">
                      Total Childcare Hours
                      <div className="font-semibold font-inter lg:text-[14px] md:text-[17px] xl:text-[20px] text-[#0A0D14]">{candidate.qualifications.hours}</div>
                    </div>
                  </div>

                  {/* Infant Qualified - Made responsive */}
                  <div className="w-full">
                    <div className="xl:text-[14px] lg:text-[9px] font-inter bg-[#F6F8FA] text-[#525866] w-full rounded-lg flex items-center justify-between h-[80px] px-5">
                      <span>Infant Qualified</span>
                      <img className="w-[24px] h-[24px]  md:w-[32px] md:h-[32px] lg:ml-[10px] xl:ml-0" src={Right} alt="Qualified" />
                    </div>
                  </div>

                  {/* Special Needs Qualified - Made responsive */}
                  <div className="w-full">
                    <div className="xl:text-[14px] lg:text-[9px]  font-inter bg-[#F6F8FA] text-[#525866] w-full rounded-lg flex items-center justify-between h-[80px] px-5">
                      <span>Special Needs Qualified</span>
                      <img className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:ml-[10px] xl:ml-0" src={Right} alt="Qualified" />
                    </div>
                  </div>

                  {/* Driver's License - Made responsive */}
                  <div className="w-full">
                    <div className="xl:text-[14px] lg:text-[9px]  font-inter bg-[#F6F8FA] text-[#525866] w-full rounded-lg flex items-center justify-between h-[80px] px-5">
                      <span>Driver's License</span>
                      <img className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:ml-[10px] xl:ml-0" src={Right} alt="Qualified" />
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