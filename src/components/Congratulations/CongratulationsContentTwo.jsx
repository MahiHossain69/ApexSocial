import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AllSet from "@/assets/allset1.svg";
import Traning from "@/assets/traningfamily.svg";
import GradientOverlay from "@/assets/gradient.png";
import GradientOverlayRight from "@/assets/gradientright.png";
import { CheckCircle, X } from "lucide-react";
import { AppCheck, PdfIcon } from "@/components/shared/svgs";
import FamilyCards from "../Home/FamilyCards";
import { IoMdCheckmark } from "react-icons/io";
// Update this if it's a normal image or SVG import




const StatusStep = ({ label, status }) => {
  const isCompleted = status === "completed";
  const isActive = status === "active";
  const IS_PENDING = status === "pending";

  return (
   <div className="relative w-24 flex flex-col items-center flex-1">
      {/* Label + Check */}
      <div className="flex items-center space-x-1">
        <span
          className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
            isCompleted
              ? "text-[#003D37] font-inter font-medium"
              : isActive
              ? "text-[#003D37]"
              : "text-[#3D4B49]"
          }`}
        >
          {label}
        </span>
        {isCompleted && <AppCheck className="h-4 w-4 text-[#45B5AA]" />}
      </div>

      {/* Progress bar */}
      <div
        className={`mt-2 h-2 w-26 rounded-full transition-colors duration-200 ${
          isCompleted
            ? "bg-[#35978E]"
            : isActive
            ? "bg-[#B3E5E0]"
            : "bg-[#E3E8E8]"
        }`}
      />
    </div>
  );
};

const CongratulationsContentTwo = () => {
   const [open, setOpen] = useState(false);
  return (
     <div className="min-h-screen flex flex-col items-center space-y-8">
         <Card className="w-full overflow-hidden rounded-xl shadow-lg">
        <CardContent className="relative p-0 h-[300px] md:h-[350px] lg:h-[400px]">
          <img
            src={AllSet}
            alt="A happy family walking in a park"
            className="h-full float-right px-5"
          />
          <img
            src={GradientOverlay}
            alt="Gradient overlay"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 lg:p-12 text-gray-800">
            <h1 className="text-3xl text-[#4D6468] font-inter font-semibold md:text-4xl lg:text-5xl mb-2">
             Congratulations!
            </h1>
            <p className="text-lg font-inter font-semibold md:text-xl lg:text-2xl mt-4 mb-6 text-[#4D6468]">
             Welcome to Apexsocial
            </p>
            <p className="text-lg font-inter font-semibold md:text-xl lg:text-2xl mb-6 text-[#4D6468]">
              Lets get you started!
            </p>

            <Button
              onClick={() => (window.location.href = "/my-application")}
              className="bg-[#45B5AA] hover:bg-teal-600 text-white px-6 py-3 rounded-lg text-base md:text-[14px] w-[280px] h-[40px] font-inter font-semibold"
            >
              Start Application
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full cardShadow bg-white shadow-md mb-6 rounded-lg">
              <div className="w-full px-4">
                <div className="bg-[#F9FBFB] rounded-lg mx-auto w-fit p-5">
                  <div className="relative flex justify-between  w-full space-x-4">
                    <StatusStep label="Application" status="completed" />
                    <StatusStep label="Interview" status="pending" />
                    <StatusStep label="Match pending" status="pending" />
                    <StatusStep label="Matched" status="pending" />
                  </div>
                </div>
      
                <div className="mt-8 px-4 pt-8">
                  <p className="text-xl leading-relaxed text-black font-inter font-semibold sm:text-[20px]">
                    The first step toward completing your Care Professional profile is filling out your Care Professional Application. Once you’ve finished the application, you’ll be able to review Host Family profiles and choose the family who feels like the best fit for you.
                  </p>
                  <p className="mt-6 text-base text-black font-inter font-normal">
                    Want more details on the process? Check out the Care Professional
                    Guide to learn what to expect every step of the way.
                  </p>
      
                  <div className="mt-6">
                    <div className="flex items-start gap-3">
                      <PdfIcon className="lg:w-[40px] w-[80px] h-[80px] -mt-2 lg:mt-3 lg:h-[40px]" />
                      <div className="mt-[15px]">
                                         {/* Trigger link */}
                                         <a
                                           href="#"
                                           onClick={(e) => {
                                             e.preventDefault();
                                             setOpen(true);
                                           }}
                                           className="text-lg underline text-[#45B5AA] font-inter font-medium hover:underline"
                                         >
                                           Care Professional Guide
                                         </a>
                     
                                         {/* Modal */}
                                         {open && (
                                           <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#122523C2]/75">
                                             <div className="bg-white rounded-lg shadow-lg border border-neutral-200 w-134 h-43 relative">
                                               {/* Header */}
                                               <div className="flex items-center gap-2 p-4 ">
                                                 <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#45B5AA]/10 flex items-center justify-center">
                                                   <div className="w-6 h-6 rounded-full bg-[#43B4A9] flex items-center justify-center">
                                                     <IoMdCheckmark className="h-4 w-4 text-white" />
                                                   </div>
                                                 </div>
                                                 <h3 className="text-xl font-semibold font-inter text-neutral-900">
                                                   PDF Downloaded Successfully
                                                 </h3>
                                                 <button
                                                   onClick={() => setOpen(false)}
                                                   className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
                                                 >
                                                   <X className="h-6 w-6 text-neutral-600" />
                                                 </button>
                                               </div>
                                               {/* Body */}
                                               <div className="bg-[#F6F8FA] mt-4 rounded-lg mx-4">
                                                 <div className=" px-4 py-4 text-sm text-black font-inter font-medium">
                                                   Your form has been downloaded. Please complete the
                                                   document and upload it to continue with your
                                                   application.
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         )}
                     
                                         <p className="mt-2 text-sm text-black font-inter font-normal">
                                           This guide offers an overview of the Apex Social Program,
                                           what to expect as a Care Professional, and how to prepare
                                           for integrating into a Host Family&apos;s home. It
                                           includes key policies, tips for a successful match, and
                                           support resources throughout your experience.
                                         </p>
                                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <FamilyCards/>
        </div>
  )
}

export default CongratulationsContentTwo
