import React from 'react'
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';



const MobPagination = ({ totalItems, itemsPerPage, currentPage, onPageChange, onItemsPerPageChange}) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);


  return (
    <div className="flex justify-between items-center bg-gray-50 rounded-lg py-3 px-4">
    {/* Left Arrows */}
    <div className="flex items-center ml-[-14px]">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 p-0 text-gray-500 hover:bg-transparent hover:text-gray-700"
        onClick={() => onPageChange(1)}
      >
        <ChevronsLeft className="h-4 w-4 text-[#0A0D14]" />
        <span className="sr-only">First page</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 p-0 text-gray-500 hover:bg-transparent hover:text-gray-700"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>
    </div>

    {/* Middle Info */}
    <div className="xs:text-[14px] font-inter font-medium cursor-pointer sm:text-sm  text-gray-600">
      {startItem} to {endItem} of {totalItems}
    </div>

    {/* Right Arrows and Select */}
    <div className="flex items-center ">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 p-0 text-gray-500 hover:bg-transparent hover:text-gray-700"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 p-0 text-gray-500 hover:bg-transparent hover:text-gray-700"
        onClick={() => onPageChange(totalPages)}
      >
        <ChevronsRight className="h-4 w-4 text-[#0A0D14]" />
        <span className="sr-only">Last page</span>
      </Button>

      <Select defaultValue={itemsPerPage.toString()} onValueChange={onItemsPerPageChange}>
        <SelectTrigger className="w-[110px] bg-white border-gray-200 h-9 text-sm font-inter text-[#0A0D14]">
          <SelectValue placeholder="7 Entries"  />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="5" className="font-inter font-normal text-[14px]">5 Entries</SelectItem>
          <SelectItem value="7" className="font-inter font-normal text-[14px]">7 Entries</SelectItem>
          <SelectItem value="10" className="font-inter font-normal text-[14px]">10 Entries</SelectItem>
          <SelectItem value="20" className="font-inter font-normal text-[14px]">20 Entries</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
  )
}

export default MobPagination
