
import React, { useState } from "react"
import { Button } from '../ui/button'
import { MdOutlineDashboard } from 'react-icons/md'
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Pencil } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { InterviewsCard } from "./InterviewsCard"

const InterviewsContent = () => {
     const [currentPage, setCurrentPage] = useState(1)
      const [entriesPerPage, setEntriesPerPage] = useState("7")
  return (
    <section className='space-y-6 p-4 md:p-6 w-full max-w-full overflow-hidden'>
         {/* Top Bar: Title + Buttons */}
      <div className="md:flex hidden flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 px-[10px]">
        <h1 className="text-xl sm:text-[18px] font-inter font-semibold text-black">
          Interview Requests
        </h1>

        <div className="flex gap-3">
          <Button className="bg-[#45B5AA] hover:bg-teal-500 text-white rounded-xl shadow-md px-5 py-2 font-inter text-sm font-semibold">
            <MdOutlineDashboard className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
          <Button className="bg-[#45B5AA] hover:bg-teal-500 text-white rounded-xl shadow-md px-5 py-2 font-inter text-sm font-semibold">
            <Pencil className="w-4 h-4 mr-2" />
            Edit Application
          </Button>
        </div>
      </div>

      {/* Pagination Top Bar */}
      <div className="hidden lg:flex h-[56px] px-[10px] rounded-lg bg-[#F6F8FA] justify-between items-center">
        {/* Showing info */}
        <div className="xl:text-[14px] lg:text-[12px] font-inter font-normal text-[#525866]">
          1 of 2 interviews
        </div>

        {/* Pagination Controls */}
        <ul className="flex items-center gap-2 list-none m-0 p-0">
          <li
            onClick={() => setCurrentPage(1)}
            className="h-8 w-8 flex items-center justify-center cursor-pointer"
          >
            <ChevronsLeft className="h-4 w-4" />
          </li>

          <li
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="h-8 w-8 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </li>

          <li
            onClick={() => setCurrentPage(1)}
            className={cn(
              "h-8 w-8 flex items-center justify-center rounded-lg border-[2px] bg-white text-[#525866] border-[#E2E4E9] cursor-pointer",
              currentPage === 1 && "bg-[#45B5AA]/10 text-black"
            )}
          >
            1
          </li>
          

          <li
            onClick={() => setCurrentPage(currentPage + 1)}
            className="h-8 w-8 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </li>

          <li
            onClick={() => setCurrentPage(2)}
            className="h-8 w-8 flex items-center justify-center cursor-pointer"
          >
            <ChevronsRight className="h-4 w-4" />
          </li>
        </ul>

        {/* Entries Dropdown */}
        <div>
          <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
            <SelectTrigger className="w-[130px] bg-white font-inter text-[#0A0D14] text-[14px] border-gray-200">
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
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 w-full max-w-full">

      <InterviewsCard/>
      </div>
    </section>
  )
}

export default InterviewsContent
