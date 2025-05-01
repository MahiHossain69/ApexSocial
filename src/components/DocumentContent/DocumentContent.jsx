import React from 'react'
import { BsFiletypePdf } from "react-icons/bs";


const DocumentContent = () => {
  return (
    <div>
        <div className=" overflow-hidden border rounded-lg font-inter shadow-md font-medium text-[14px] text-[#0A0D14]-0">
        {/* AccordionTrigger styled like the image header */}
        <div className="cursor-pointer bg-[#EFFAF6] px-2  hover:no-underline">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-800">
              <h1 className="font-inter px-2 py-2  font-medium text-[14px] text-[#0A0D14]">
              Documents for Annelie-Freyja (ID#404800)
              </h1>
            </span>
          </div>
        </div>

        {/* AccordionContent styled like the image table */}
        <div className="bg-white pb-0  border-t">
          <div className="grid grid-cols-2">
            {/* Row 1 */}
            <div className="border-b font-inter font-medium text-[14px] text-[#0A0D14] border-r px-4 py-2 text-sm ">
            English Proficiency Evaluation
            </div>
           <a href='#'> <div className="border-b pb-[28px] flex items-center gap-[5px] text-[14px] underline font-inter font-normalZX text-[#0A0D14] px-4 py-2 text-sm ">
            
           <BsFiletypePdf />Download File
            </div></a>

            {/* Row 2 */}
            <div className="border-b font-inter font-medium text-[14px] text-[#0A0D14] border-r px-4 py-2 text-sm ">
            Color Code Test Results
            </div>
            <div className="border-b text-[14px] font-inter font-normal text-[#0A0D14] px-4 py-2 text-sm ">
            No Files Available
            </div>

            {/* Row 3 */}
            <div className="border-b font-inter font-medium text-[14px] text-[#0A0D14] border-r px-4 py-2 text-sm ">
            Host Family Service Agreement
            </div>
            <div className="border-b font-inter font-normal text-[14px] text-[#0A0D14] px-4 py-2 text-sm ">
            No Files Available
            </div>

           
            
           
           
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentContent
