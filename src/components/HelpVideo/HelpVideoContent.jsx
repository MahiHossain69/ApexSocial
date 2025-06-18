import React from "react";
import { RiVideoFill } from "react-icons/ri";
import { Card, CardContent } from "../ui/card";

const HelpVideoContent = () => {
  return (
    <div className=" ">
      {/* Header */}
      <div className="mb-6 border-b-2 mt-[-24px] p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3 ml-0 sm:ml-[-15px] mt-[15px] sm:mt-0">
          <div className="bg-[#45B5AA] w-6 h-6 rounded-full flex items-center justify-center">
            <RiVideoFill className="w-4 h-4 text-white" />
          </div>
          <h1 className="font-inter font-semibold text-lg sm:text-xl">
            Helpful Videos
          </h1>
        </div>
      </div>

      {/* Card Content */}
      <Card className="shadow-sm border border-gray-200 overflow-hidden">
        <CardContent className="p-0">
          {/* Header Label */}
          <div className="bg-[#EFFAF6] px-4 py-3 rounded-lg w-fit ml-6 mt-4">
            <h1 className="text-[#176448] font-inter font-medium text-sm sm:text-base">
              Apex Social Group Childcare Solution
            </h1>
          </div>

          <div className="border-b-2 mx-6 mt-4 sm:mt-6"></div>

          <div className="p-4 sm:p-6 bg-white">
            {/* First Video */}
            <div className="mb-6 sm:mb-8">
              <div
                className="relative w-full bg-gray-100 rounded-lg overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/ZEcrERu_3p8?si=NEG7k8MePoC1ujpA"
                  title="Pediatric Developmental Live-in Care | Apex Social Group"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Divider Label */}
            <div className="bg-[#EFFAF6] px-4 py-3 rounded-lg w-fit mb-6">
              <h1 className="text-[#176448] font-inter font-medium text-sm sm:text-base">
                Most Families share their experiences.
              </h1>
            </div>

            <div className="border-b-2 mx-0 sm:mx-6 mb-6 sm:mb-8"></div>

            {/* Second Video */}
            <div className="mb-6 sm:mb-8">
              <div
                className="relative w-full bg-gray-100 rounded-lg overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/hH1NGwoAf-0?si=gQAmm-SnQ2ckKBOT"
                  title="Hayden's Story: A Family's Journey with Autism and Live-In Care"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Story Description */}
            <div className="bg-[#EFFAF6] px-4 py-4 rounded-lg text-sm sm:text-base font-inter text-[#0A0D14] leading-relaxed">
              <p>
                Dive into the heartwarming story of the Shape family, where
                Amanda, a dedicated mother and board-certified behaviour
                analyst, navigated the challenges of providing 24/7 care for
                their son diagnosed with Autism. With the support of Apex's
                exceptional Care Professionals, Amanda and her family found the
                balance, support, and freedom they longed for. This tale of
                growth, love, and newfound freedom highlights the profound
                impact of specialized care on Hayden and his family. Experience
                the difference that understanding, patience, and professional
                care can make. Join us in celebrating Hayden's journey and the
                incredible bond between him and his Apex Care Professionals.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpVideoContent;
