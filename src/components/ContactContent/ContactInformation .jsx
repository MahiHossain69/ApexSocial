import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

const ContactInformation = () => {
  return (
    <div>
      <div className=" overflow-hidden border rounded-lg font-inter shadow-md font-medium text-[14px] text-[#0A0D14]-0">
        {/* AccordionTrigger styled like the image header */}
        <div className="cursor-pointer bg-[#EFFAF6] px-2  hover:no-underline">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-800">
              <h1 className="font-inter px-2 py-2  font-medium text-[14px] text-[#0A0D14]">
                Contact Information
              </h1>
            </span>
          </div>
        </div>

        {/* AccordionContent styled like the image table */}
        <div className="bg-white pb-0  border-t">
          <div className="grid grid-cols-2">
            {/* Row 1 */}
            <div className="border-b font-inter font-medium text-[14px] text-[#0A0D14] border-r px-4 py-2 text-sm ">
              First & Last Name (Family Name)
            </div>
            <div className="border-b text-[14px] font-inter font-normalZX text-[#0A0D14] px-4 py-2 text-sm ">
              Dad Test (Dev Family)
            </div>

            {/* Row 2 */}
            <div className="border-b font-inter font-medium text-[14px] text-[#0A0D14] border-r px-4 py-2 text-sm ">
              Birthday
            </div>
            <div className="border-b text-[14px] font-inter font-normal text-[#0A0D14] px-4 py-2 text-sm ">
              02-02-1960 (DD-MM-YY)
            </div>

            {/* Row 3 */}
            <div className="border-b font-inter font-medium text-[14px] text-[#0A0D14] border-r px-4 py-2 text-sm ">
              Email
            </div>
            <div className="border-b font-inter font-normal text-[14px] text-[#0A0D14] px-4 py-2 text-sm ">
              jkdeb1328+family@gmail.com
            </div>

            {/* Row 4 */}
            <div className="border-b font-inter font-medium text-[14px] text-[#0A0D14] border-r px-4 py-2 text-sm ">
              Home Phone Number
            </div>
            <div className="border-b text-[14px] font-inter font-normal  px-4 py-2 text-sm ">
              123333
            </div>

            {/* Full-width final row */}
            <div className="border-r border-b font-inter font-medium text-[14px] text-[#0A0D14]  px-4 py-2  ">
              Mobile Phone Number
            </div>
            <div className="px-4 py-2 border-b text-[14px] font-inter font-normal text-[#0A0D14]">
              123213123
            </div>
            <div className="border-r border-b font-inter font-medium text-[14px] text-[#0A0D14]  px-4 py-2  ">
              Street Address
            </div>
            <div className="px-4 py-2 border-b text-[14px] font-inter font-normal text-[#0A0D14]">
              Mainstreet 1
            </div>
            <div className="border-r border-b font-inter font-medium text-[14px] text-[#0A0D14]  px-4 py-2  ">
              City, State/Province
            </div>
            <div className="px-4 py-2 border-b text-[14px] font-inter font-normal text-[#0A0D14]">
              Sometown, FL
            </div>
            <div className="border-r border-b font-inter font-medium text-[14px] text-[#0A0D14]  px-4 py-2  ">
              Postal/Zip Code
            </div>
            <div className="px-4 py-2 border-b text-[14px] font-inter font-normal text-[#0A0D14]">
              12345
            </div>
            <div className="border-r border-b font-inter font-medium text-[14px] text-[#0A0D14]  px-4 py-2  ">
              Country
            </div>
            <div className="px-4 py-2 border-b text-[14px] font-inter font-normal text-[#0A0D14]">
              United States
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
