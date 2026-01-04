import { LayoutDashboard } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { AiOutlineEdit } from "react-icons/ai";
import { PlaneIcon } from "../shared/svgs";

const MyTravelContent = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex  items-center justify-between">
        <p className="w-fit flex items-center gap-4  text-main-900 text-base md:text-lg leading-normal font-semibold">
          <span className="w-6 h-6 rounded-full bg-BrandPrimary flex items-center justify-center">
            <PlaneIcon className={"w-4 h-auto text-white"} />
          </span>
          My Travel
        </p>
        <div className="flex gap-3">
          <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white mr-auto">
            <LayoutDashboard /> Dashboard
          </Button>
          <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white mr-auto">
            <AiOutlineEdit /> Edit Application
          </Button>
        </div>
      </div>
      <div className="flex w-full cardShadow my-6 border border-soft-200 rounded-[12px] p-4 md:p-6 flex-col gap-4">
        <p className="text-main-900 text-sm leading-[1.7em]">
          <span className="font-semibold">
            Before traveling internationally from the U.S.,
          </span>{" "}
          ensure that you obtain a travel validation signature on your DS-2019
          form. This signature is essential for re-entering the United States
          during your program year. To request this signature, email the Apex
          Customer Care Team at{" "}
          <a
            href="mailto:customercare@apex-social.com"
            className="text-BrandPrimary"
          >
            customercare@apex-social.com
          </a>
          .
        </p>
        <p className="text-main-900 text-sm leading-[1.7em]">
          The travel validation signature is valid for one year and covers all
          international trips during your current program year.
        </p>
        <p className="text-main-900 text-sm leading-[1.7em]">
          <span className="font-semibold">Traveling to Canada?</span> If
          arriving by air, you must obtain a Canadian Electronic Travel
          Authorization (eTA) before your trip. Apply online at{" "}
          <a
            href="https://www.cic.gc.ca/english/visit/eta-start.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-BrandPrimary"
          >
            www.cic.gc.ca/english/visit/eta-start.asp
          </a>{" "}
          for a fee of about $7. Note that an eTA is not required if you are
          entering Canada by ground transportation (car, bus, train, etc.).
        </p>
        <p className="text-main-900 text-sm leading-[1.7em]">
          <span className="font-semibold">Traveling to Other Countries?</span>{" "}
          Check whether you need a tourist visa for your destination by visiting{" "}
          <a
            href="https://www.projectvisa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-BrandPrimary"
          >
            www.projectvisa.com
          </a>{" "}
          before your trip.
        </p>
        <p className="text-main-900 text-sm leading-[1.7em]">
          <span className="font-semibold">Change of Address:</span> Please send
          an email to{" "}
          <a
            href="mailto:customercare@apex-social.com"
            className="text-BrandPrimary"
          >
            customercare@apex-social.com
          </a>{" "}
          requesting an updated DS-2019 form if your host family moves. Please
          include your full name, host family name and new address in the email.
        </p>
      </div>
    </div>
  );
};

export default MyTravelContent;
