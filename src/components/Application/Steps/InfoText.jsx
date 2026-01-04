import React from "react";
import { InfoFilledIcon } from "@/components/shared/svgs";

const InfoText = ({ infoTitle, infoDescription }) => {
  return (
    <div className="p-4 md:p-6 rounded-[12px] bg-white toolTipShadow border-neutral-300 w-full md:max-w-[535px] max-w-[90vw]">
      <div className="flex items-center gap-2">
        <InfoFilledIcon />
        <span className="font-semibold text-lg md:text-xl text-[#171c1c] leading-[1.4em]">
          {infoTitle}
        </span>
      </div>
      <div className="mt-3 md:mt-4 px-4 py-3 md:px-5 md:py-4 bg-[#F6F8FA] rounded-2xl text-sm leading-normal tracking-[-0.006em] text-black">
        {typeof infoDescription === "string"
          ? infoDescription
          : React.isValidElement(infoDescription)
          ? infoDescription
          : null}
      </div>
    </div>
  );
};

export default InfoText;
