import React from "react";
import Pro1 from "../../assets/pro1.png";
import Pro2 from "../../assets/pro2.png";
import Pro3 from "../../assets/pro3.png";
import Pro4 from "../../assets/pro4.png";
import Pro5 from "../../assets/pro5.png";
import { InfoIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoVideo } from "react-icons/go";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineFace6 } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";


const ProfileContent = () => {
  const [selectedImage, setSelectedImage] = useState(Pro1);
  const thumbnails = [Pro1, Pro2, Pro3, Pro4, Pro5];
  return (
    <div className="">
      <Card className="border rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-[#525866] xs:w-full sm:text-left sm:text-[14px] sm:pl-[15px] sm:pt-[7px] xs:text-[8px] xs:pt-[12px] xs:text-center  font-inter font-medium bg-[#F6F8FA] md:pl-[17px] md:pt-[8px] rounded-lg md:w-[413px] h-[36px] md:text-[14px] mb-4">
            Dad's Family from Sometown, FL, United States (ID #345010)
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-6 mt-[-25px] mb-8">
      {/* Left Side - Image & Thumbnails */}
      <div className="w-full md:w-[200px]">
        <img
          src={selectedImage}
          alt="Profile"
          className="w-full h-auto md:max-w-[180px] rounded-lg object-cover"
        />

        <div className="flex xs:justify-between md:justify-normal gap-2 mt-4">
          {thumbnails.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer md:w-9 md:h-9 xs:w-full xs:h-full rounded-md overflow-hidden border hover:ring-2 ring-teal-500"
            >
              <img
                src={img}
                alt={`Thumbnail ${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="flex-1 sm:ml-0 md:mx-auto mx-auto">
        <h2 className="text-[18px] sm:text-[20px] font-inter font-bold text-[#0A0D14] mb-4">
          Dr. Hartman Personality Analysis{" "}
          <span className="font-normal font-inter text-[20px]">
            (The Color Code)
          </span>
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex flex-col sm:flex-row md:items-center gap-2 sm:gap-4">
            <span className="min-w-[110px] text-[#0A0D14] font-inter text-[14px] font-medium">
              Primary Color :
            </span>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-600"></span>
              <span className="font-inter font-normal text-[14px] text-[#0A0D14]">
                Blue
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:items-center gap-2 sm:gap-4">
            <span className="min-w-[110px] text-[#0A0D14] font-inter text-[14px] font-medium">
              Secondary Color :
            </span>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
              <span className="font-inter font-normal text-[14px] text-[#0A0D14]">
                Yellow (Motivated by Fun)
              </span>
            </div>
          </div>
        </div>

        <Button className="bg-teal-500 cursor-pointer hover:bg-teal-600 font-inter font-medium text-[14px] text-white px-4 py-2 rounded-md">
          <GoVideo className="h-4 text-white w-4 mr-2" />
          View Video
        </Button>
      </div>
    </div>

        <div className="grid mt-[-15px] grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <InfoIcon className="h-5 w-5 text-teal-500" />
              <h3 className="text-[20px] font-inter text-[#0A0D14] font-semibold">
                Family Information
              </h3>
            </div>

            <div className="bg-gray-50 w-[222px] h-[34px] p-3 rounded-md mb-4">
              <div className="flex gap-[5px] mt-[-5px]">
                <span className="text-[14px] text-[#525866] font-inter font-normal ">
                  Start:
                </span>
                <span className="text-[14px] font-medium font-inter text-[#0A0D14]">
                  Mar 2025
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-[#525866] font-inter font-normal text-[16px] list-disc pl-6">
              <li>From FL, United States</li>
              <li>Married</li>
              <li>Speaks English and German</li>
              <li>3 Children</li>
              <li>Age of kids: 23 years</li>
              <li>Both parents working from home</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <InfoIcon className="h-5 w-5   text-teal-500" />
              <h3 className="text-[20px] font-inter text-[#0A0D14] font-semibold">
                Care Professional Criteria
              </h3>
            </div>

            <ul className="space-y-2 text-[#525866] font-inter font-normal text-[16px] list-disc pl-6">
              <li>Female or Male candidates</li>
              <li>Desired languages English</li>
              <li>Swimming skills required</li>
              <li>Smokers accepted</li>
              <li>Driving license not needed</li>
            </ul>
          </div>
        </div>

        <div className="">
          <Accordion type="single" collapsible className="mt-8 ">
            <AccordionItem
              value="family-letters"
              className="overflow-hidden border-b-0 font-inter font-medium text-[14px] text-[#0A0D14]"
            >
              <AccordionTrigger className="rounded-md data-[state=open]:bg-[#CBF5E5] cursor-pointer border mb-[10px]  px-2 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <div className="bg-teal-100 rounded-lg w-[24px] h-[24px] p-1">
                    <IoFileTrayFullOutline className="mx-auto text-[#176448]" />
                  </div>
                  <h1 className="font-inter font-medium text-[16px] text-[#0A0D14]">
                    {" "}
                    Family Letters
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className="border  rounded-md mt-[0px] mb-[10px] border-t">
                <h1 className="px-4 pt-[15px] font-inter  font-normal text-[14px]">
                  Family letters content goes here
                </h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="parents-info"
              className="overflow-hidden border-b-0 font-inter font-medium text-[14px] text-[#0A0D14]-0"
            >
              <AccordionTrigger className="rounded-md data-[state=open]:bg-[#CBF5E5] cursor-pointer border mb-[10px]  px-2 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <div className="bg-teal-100 rounded-full w-[24px] h-[24px] p-1">
                    <FaRegUser className="mx-auto text-[#176448]" />
                  </div>
                  <h1 className="font-inter font-medium text-[16px] text-[#0A0D14]">
                    Parents Information
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className="border  rounded-md mt-[0px] mb-[10px] border-t">
                <h1 className="px-4 pt-[15px] font-inter  font-normal text-[14px]">
                  Parents information content goes here
                </h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="children-info"
              className="overflow-hidden border-b-0 font-inter font-medium text-[14px] text-[#0A0D14]-0"
            >
              <AccordionTrigger className="rounded-md data-[state=open]:bg-[#CBF5E5] cursor-pointer border mb-[10px]  px-2 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <div className="bg-teal-100 rounded-full w-[24px] h-[24px] p-1">
                    <MdOutlineFace6 className="mx-auto text-[#176448]" />
                  </div>
                  <h1 className="font-inter font-medium text-[16px] text-[#0A0D14]">
                    Children Information
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className="border  rounded-md mt-[0px] mb-[10px] border-t">
                <h1 className="px-4 pt-[15px] font-inter  font-normal text-[14px]">
                  Children information content goes here
                </h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="host-family"
              className=" overflow-hidden border-b-0 font-inter font-medium text-[14px] text-[#0A0D14]-0"
            >
              {/* AccordionTrigger styled like the image header */}
              <AccordionTrigger className="data-[state=open]:bg-[#CBF5E5] cursor-pointer  rounded-md border mb-[10px]  px-2 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <div className="bg-teal-100 rounded-full p-1">
                    <IoInformationCircleOutline className="mx-auto  text-[#176448]" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    <h1 className="font-inter font-medium text-[16px] text-[#0A0D14]">
                      Host Family Background
                    </h1>
                  </span>
                </div>
              </AccordionTrigger>

              {/* AccordionContent styled like the image table */}
              <AccordionContent className="bg-white pb-0 border  rounded-md mt-[0px] mb-[10px] border-t">
                <div className="grid grid-cols-2">
                  {/* Row 1 */}
                  <div className="border-b font-inter font-medium text-[14px] text-[#0A0D14] border-r px-4 py-2 text-sm ">
                    Languages
                  </div>
                  <div className="border-b text-[14px] font-inter font-normalZX text-[#0A0D14] px-4 py-2 text-sm ">
                    English and German
                  </div>

                  {/* Row 2 */}
                  <div className="border-b font-inter font-medium text-[14px] text-[#0A0D14] border-r px-4 py-2 text-sm ">
                    Hobbies
                  </div>
                  <div className="border-b text-[14px] font-inter font-normal text-[#0A0D14] px-4 py-2 text-sm ">
                    Animals
                  </div>

                  {/* Row 3 */}
                  <div className="border-b font-inter font-medium text-[14px] text-[#0A0D14] border-r px-4 py-2 text-sm ">
                    Dietary Restrictions
                  </div>
                  <div className="border-b font-inter font-normal text-[14px] text-[#0A0D14] px-4 py-2 text-sm ">
                    None
                  </div>

                  {/* Row 4 */}
                  <div className="border-b font-inter font-medium text-[14px] text-[#0A0D14] border-r px-4 py-2 text-sm ">
                    Kind of Pets
                  </div>
                  <div className="border-b text-[14px] font-inter font-normal  px-4 py-2 text-sm ">
                    Cats
                  </div>

                  {/* Full-width final row */}
                  <div className="border-r font-inter font-medium text-[14px] text-[#0A0D14]  px-4 py-2  ">
                    Current/Past Childcare arrangements
                  </div>
                  <div className="px-4 py-2 text-[14px] font-inter font-normal text-[#0A0D14]">
                    Pregnant, Grandparents
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="childcare-needs"
              className="overflow-hidden border-b-0 font-inter font-medium text-[14px] text-[#0A0D14]-0"
            >
              <AccordionTrigger className="rounded-md data-[state=open]:bg-[#CBF5E5] cursor-pointer border mb-[10px]  px-2 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <div className="bg-teal-100 rounded-full w-[24px] h-[24px] p-1">
                    <IoInformationCircleOutline className="mx-auto text-[#176448]" />
                  </div>
                  <h1 className="font-inter font-medium text-[16px] text-[#0A0D14]">
                    {" "}
                    Childcare Needs
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className="border  rounded-md mt-[0px] mb-[10px] border-t">
                <h1 className="px-4 pt-[15px] font-inter  font-normal text-[14px]">
                  Childcare needs content goes here
                </h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="selection-criteria"
              className="overflow-hidden border-b-0 font-inter font-medium text-[14px] text-[#0A0D14]-0"
            >
              <AccordionTrigger className="rounded-md data-[state=open]:bg-[#CBF5E5] cursor-pointer border mb-[10px]  px-2 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <div className="bg-teal-100 rounded-full w-[24px] h-[24px] p-1">
                    <IoInformationCircleOutline className="mx-auto text-[#176448]" />
                  </div>
                  <h1 className="font-inter font-medium text-[16px] text-[#0A0D14]">
                    Care Professional Selection Criteria
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className="border  rounded-md mt-[0px] mb-[10px] border-t">
                <h1 className="px-4 pt-[15px] font-inter  font-normal text-[14px]">
                  Selection criteria content goes here
                </h1>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="future-care"
              className="overflow-hidden border-b-0 font-inter font-medium text-[14px] text-[#0A0D14]-0"
            >
              <AccordionTrigger className="rounded-md data-[state=open]:bg-[#CBF5E5] cursor-pointer border mb-[10px]  px-2 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <div className="bg-teal-100 rounded-full w-[24px] h-[24px] p-1">
                    <MdOutlineQuestionMark className="mx-auto text-[#176448]" />
                  </div>
                  <h1 className="font-inter font-medium text-[16px] text-[#0A0D14]">
                    About the Future Care Professional
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className="border  rounded-md mt-[0px] mb-[10px] border-t">
                <h1 className="px-4 pt-[15px] font-inter  font-normal text-[14px]">
                  Future care professional content goes here
                </h1>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Card>
    </div>
  );
};

export default ProfileContent;
