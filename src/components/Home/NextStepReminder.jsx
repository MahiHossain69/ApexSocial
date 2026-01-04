import { ChevronRightIcon } from "lucide-react";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const NextStepReminder = () => {
  return (
    <div className="w-full mt-6 border border-soft-200 bg-white cardShadow p-4 md:p-6 rounded-[12px] space-y-3 md:space-y-5">
      <div className="space-y-2 md:space-y-2.5">
        <p className="text-main-900 font-inter text-base md:text-xl font-semibold leading-normal">
          Only 1 Steps to Go, Joy!
        </p>
        <p className="text-main-900 font-inter text-sm md:text-base font-normal leading-normal">
          Your Next Step:
        </p>
      </div>
      
      <div className="space-y-2 md:space-y-3">
        <p className="text-BrandPrimary font-inter text-sm md:text-base font-semibold leading-normal">
          Step 9: Priority Documents
        </p>
        <p className="text-neutral-500 font-inter text-sm md:text-base font-normal leading-normal">
          Follow the instructions to upload important documents needed to
          complete your application.
        </p>
      </div>
      <Link
        role="button"
        className="text-xs md:text-sm font-inter bg-BrandPrimary hover:bg-BrandPrimary text-white flex gap-2 items-center p-2 md:p-2.5 pr-3.5 rounded-[10px] w-fit"
      >
        <AiOutlineEdit size={20} /> Complete the Next Step
        <ChevronRightIcon size={20} />
      </Link>
    </div>
  );
};
export default NextStepReminder;
