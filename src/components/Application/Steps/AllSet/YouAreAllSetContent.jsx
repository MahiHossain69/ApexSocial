import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AllSet from "@/assets/allset.svg";
import GradientOverlay from "@/assets/gradient.png";
import { CheckCircle } from "lucide-react";
import { AppCheck, PdfIcon } from "@/components/shared/svgs";
// Update this if it's a normal image or SVG import

// ✅ ADDED: StatusStep component
const StatusStep = ({ label, status }) => {
  const isCompleted = status === "completed";
  const isActive = status === "active";
  const IS_PENDING = status === "pending";

  return (
    <div className="relative flex-1 text-center">
      <div className="flex items-center justify-center">
        <span
          className={`mr-1 text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
            isCompleted
              ? "text-[#003D37] font-inter font-medium"
              : isActive
              ? "text-[#003D37]"
              : "text-[#3D4B49]"
          }`}
        >
          {label}
        </span>
        {isCompleted && (
          <AppCheck className="h-[16px] w-[16px] text-[#45B5AA]" />
        )}
      </div>

      <div
        className={`absolute -bottom-5 left-0 h-[8px] w-full rounded-full ${
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

const YouAreAllSetContent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center space-y-8">
      {/* Hero Section */}
      <Card className="w-full overflow-hidden rounded-xl shadow-lg">
        <CardContent className="relative p-0 h-[300px] md:h-[350px] lg:h-[400px]">
          <img
            src={AllSet}
            alt="A happy family walking in a park"
            className="h-full w-[1000px] -mr-[105px] float-right px-5"
          />
          <img
            src={GradientOverlay}
            alt="Gradient overlay"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 lg:p-12 text-gray-800">
            <h1 className="text-3xl text-[#4D6468] font-inter font-semibold md:text-4xl lg:text-5xl mb-2">
              You&apos;re All Set!
            </h1>
            <p className="text-lg font-inter font-semibold md:text-xl lg:text-2xl mt-4 mb-6 text-[#4D6468]">
              Your application is complete.
            </p>
            <p className="text-lg font-inter font-semibold md:text-xl lg:text-2xl mb-6 text-[#4D6468]">
              Let&apos;s find your Host Family.
            </p>

            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-[#45B5AA] hover:bg-teal-600 text-white px-6 py-3 rounded-lg text-base md:text-[14px] w-[280px] h-[40px] font-inter font-semibold"
            >
              Start Matching
            </Button>
          </div>
        </CardContent>
      </Card>

      

      {/* Status Steps */}
      <Card className="w-full cardShadow bg-white shadow-md rounded-lg">
        <div className="w-full px-4">
          <div className="bg-[#F9FBFB] rounded-lg mx-auto w-fit p-5">
            <div className="relative flex justify-between pb-5 w-full space-x-4">
              <StatusStep label="Application" status="completed" />
              <StatusStep label="Interview" status="active" />
              <StatusStep label="Match pending" status="pending" />
              <StatusStep label="Matched" status="pending" />
            </div>
          </div>

          <div className="mt-8 px-4 pt-8">
            <p className="text-xl leading-relaxed text-black font-inter font-semibold sm:text-[20px]">
              Now that your Care professional profile is complete, you&apos;ll
              start looking for potential Host Family matches. You&apos;ll be
              able to review their profiles, schedule interviews, and choose the
              family who feels like the best fit for you.
            </p>
            <p className="mt-6 text-base text-black font-inter font-normal">
              Want more details on the process? Check out the Care Professional
              Guide to learn what to expect every step of the way.
            </p>

            <div className="mt-6">
              <div className="flex items-start gap-3">
                <PdfIcon className="w-[40px] h-[40px]" />
                <div className="mt-[15px]">
                  <a
                    href="#"
                    className="text-lg underline text-[#45B5AA] font-inter font-medium hover:underline"
                  >
                    Care Professional Guide
                  </a>
                  <p className="mt-2 text-sm text-black font-inter font-normal">
                    This guide offers an overview of the Apex Social Program,
                    what to expect as a Care Professional, and how to prepare
                    for integrating into a Host Family&apos;s home. It includes
                    key policies, tips for a successful match, and support
                    resources throughout your experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default YouAreAllSetContent;
