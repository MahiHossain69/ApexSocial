import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import NextStepReminder from "./NextStepReminder";
import FamilyCards from "./FamilyCards";

const HomeContent = () => {
  return (
    <div className=" w-full px-4">
      <div className="flex justify-between items-center w-full">
        <p className="text-main-900 font-inter font-semibold text-lg">Home</p>
        <Link
          to={"/my-application"}
          className="text-xs md:text-sm font-inter bg-BrandPrimary hover:bg-BrandPrimary text-white flex gap-2 items-center p-2 md:p-2.5 pr-3.5 rounded-[10px] "
        >
          <AiOutlineEdit size={20} /> Edit Application
        </Link>
      </div>

      <NextStepReminder />
      <FamilyCards />
    </div>
  );
};
export default HomeContent;
