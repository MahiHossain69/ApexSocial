import {
  CalendarIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Sarah from "@/assets/sarah.svg";
import { InBookIcon, InTrashIcon } from "../shared/svgs";

const actionButtons = [
  {
    text: "Start",
    variant: "default",
    className: "bg-[#45b5aa] hover:bg-[#3a9d94] text-white w-full",
  },
  {
    text: "Edit / Reschedule",
    variant: "secondary",
    className: "bg-[#edf8f7] hover:bg-[#e0f2f0] text-[#44b5aa] w-full",
  },
  {
    text: "Cancel",
    variant: "secondary",
    className: "bg-[#edf8f7] hover:bg-[#e0f2f0] text-[#44b5aa] w-full",
  },
];

const InterviewCardItem = ({ id, onCancel }) => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <Card className="w-full overflow-x-hidden bg-white rounded-xl border border-[#e2e4e9] shadow-toggle-shadow-switch-toggle-active">
      <CardContent className="p-6 space-y-6">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row items-center justify-between w-full">
          <div className="flex flex-col xl:flex-row items-center gap-4 sm:gap-8 lg:gap-[20px] xl:gap-[221px]">
            <time className="font-inter font-semibold text-[16px] text-[#171C1C] sm:text-sm md:text-base lg:text-[16px]">
              05:00 PM - 06:00 PM
            </time>

            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="flex items-center gap-4 p-2 bg-shades-0 rounded-[100px] w-full sm:w-auto">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={Sarah} alt="Profile picture" />
                  <AvatarFallback>SF</AvatarFallback>
                </Avatar>

                <h1 className="font-inter text-[20px] font-semibold text-center sm:text-left sm:text-base md:text-lg lg:text-[20px] whitespace-nowrap">
                  Sarah&apos;s Family
                </h1>
              </div>

              <p className="font-inter font-normal text-[16px] text-[#171C1C] sm:text-sm md:text-base lg:text-[16px]">
                Interview 1
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            className="flex items-center justify-center p-3 rounded-[100px] h-auto w-full sm:w-auto mt-4 sm:mt-0"
            onClick={() => setShowDetails(!showDetails)}
          >
            <ChevronUpIcon
              className={`w-6 h-6 text-[#43B4AA] transition-transform duration-300 ${
                showDetails ? "rotate-0" : "rotate-180"
              }`}
            />
            <span className="px-2 font-inter font-medium text-[16px] text-[#005C53] sm:text-sm md:text-base lg:text-[16px]">
              {showDetails ? "Hide details" : "Show details"}
            </span>
          </Button>
        </header>

        {/* Main Content Section */}
        {showDetails && (
          <main className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[50px] xl:gap-[85px] pt-0 pb-4">
            {/* Action Buttons Aside */}
            <aside className="flex flex-col w-full lg:w-[300px] items-start gap-4">
              {actionButtons.map((button, index) => {
                if (button.text === "Cancel") {
                  return (
                    <Button
                      key={index}
                      variant={button.variant}
                      className={`${button.className} h-auto p-[12.9px] w-full font-inter font-semibold text-[20px] sm:text-base md:text-lg lg:text-[20px]`}
                      onClick={() => onCancel(id)}
                    >
                      {button.text}
                    </Button>
                  );
                }

                return (
                  <Button
                    key={index}
                    variant={button.variant}
                    className={`${button.className} h-auto p-[12.9px] w-full font-inter font-semibold text-[20px] sm:text-base md:text-lg lg:text-[20px]`}
                  >
                    {button.text}
                  </Button>
                );
              })}

              <Button
                variant="ghost"
                className="flex items-center justify-center p-[12.9px] w-full rounded-[100px] h-auto"
              >
                <InTrashIcon className="w-6 h-6 text-[#43B4AA]" />
                <span className="px-2 font-inter text-[16px] text-[#005C53] sm:text-sm md:text-base lg:text-[16px]">
                  Add to calendar
                </span>
              </Button>
            </aside>

            {/* Details Section */}
            <section className="flex flex-col items-start gap-6 w-full lg:w-auto">
              {/* Location */}
              <div className="flex flex-col items-start gap-2 w-full">
                <h2 className="font-inter font-semibold text-[16px] text-[#171C1C] sm:text-sm md:text-base lg:text-[16px]">
                  Location
                </h2>

                <p className="flex flex-col sm:flex-row gap-2 sm:gap-[40px] font-paragraph-medium-regular text-[16px] sm:text-sm md:text-base lg:text-[16px]">
                  <span className="text-[#161c1b]">
                    This is a Zoom web conference.
                  </span>
                  <span className="text-[#43b4aa] cursor-pointer">Edit</span>
                </p>

                <Button
                  variant="ghost"
                  className="flex items-center justify-start px-0 py-3 rounded-[100px] h-auto w-full"
                >
                  <span className="pr-2 text-[#005C53] font-medium text-[10px] sm:text-[16px] sm:text-sm md:text-base lg:text-[16px] text-left">
                    Additional details to join this interview
                  </span>
                  <ChevronRightIcon className="w-6 text-[#43B4AA] h-6" />
                </Button>
              </div>

              {/* Timezone */}
              <div className="flex flex-col items-start gap-2 w-full">
                <h2 className="font-inter font-semibold text-[16px] text-[#171C1C] sm:text-sm md:text-base lg:text-[16px]">
                  Invitee time zone
                </h2>

                <p className="font-inter flex flex-col sm:flex-row gap-2 sm:gap-[40px] text-[16px] font-normal text-[#171C1C] sm:text-sm md:text-base lg:text-[16px]">
                  <span className="text-[#171C1C]">Eastern Standard Time</span>
                  <span className="text-[#43b4aa] cursor-pointer">Edit</span>
                </p>
              </div>

              {/* Meeting Notes */}
              <div className="flex flex-col items-start gap-2 w-full">
                <Button
                  variant="ghost"
                  className="flex items-center justify-start px-0 py-3 rounded-[100px] h-auto w-full"
                >
                  <InBookIcon className="w-6 text-[#43B4AA] h-6" />
                  <span className="px-2 font-inter font-medium text-[16px] text-[#005C53] sm:text-sm md:text-base lg:text-[16px] text-left">
                    Add meeting notes
                  </span>
                </Button>

                <p className="font-inter font-normal text-[16px] text-[#697271] sm:text-sm md:text-base lg:text-[16px]">
                  (Only you will see these)
                </p>
              </div>

              {/* Creation Date */}
              <p className="font-inter font-normal text-[16px] text-[#697271] sm:text-sm md:text-base lg:text-[16px]">
                Meeting created February 1, 2025
              </p>
            </section>
          </main>
        )}
      </CardContent>
    </Card>
  );
};

export const InterviewsCard = () => {
  const [cards, setCards] = useState([1, 2]); // card IDs

  const handleCancel = (id) => {
    setCards((prev) => prev.filter((c) => c !== id));
  };

  return (
    <section className="space-y-6">
      {cards.length === 0 ? (
        <p className="text-center text-[20px] sm:text-base md:text-lg lg:text-2xl font-semibold font-inter text-[#697271]">
          No Interview Requests
        </p>
      ) : (
        cards.map((id) => <InterviewCardItem key={id} id={id} onCancel={handleCancel} />)
      )}
    </section>
  );
};