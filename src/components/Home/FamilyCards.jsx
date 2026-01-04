import { FamilyInfo } from "@/data/FamilyInfo";
import { ChevronRight, UsersRound } from "lucide-react";
import { EyeIcon, FemaleIcon, HeartIcon, MaleIcon } from "../shared/svgs";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const FamilyCards = () => {
  // const getCareLevelClass = (level) => {
  //   switch (level.toLowerCase()) {
  //     case "low":
  //       return "bg-warning-200 text-warning-900";
  //     case "medium":
  //       return "bg-secondary-blue-200 text-warning-900";
  //     case "high":
  //       return "bg-primary-200 text-warning-900";
  //   }
  // };

  return (
    <div className="w-full mt-6 p-4 md:-6 rounded-[12px] bg-white border border-soft-200 cardShadow mb-8">
      <div className="flex gap-2 items-center">
        <UsersRound size={20} />
        <p className="text-main-900 font-inter text-base md:text-xl font-semibold leading-normal">
          Check out these families
        </p>
      </div>

      <div className="mt-5 grid gap-x-4 gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4">
        {FamilyInfo.map((family, index) => (
          <div key={index} className="bg-cardFill p-2 md:p-3 rounded-[8px]">
            <div className="flex justify-between items-center">
              <p className="text-sm font-inter text-main-900 leading-5">
                {family.familyName}
              </p>
              <span className="flex gap-2">
                <Link
                  role="button"
                  className=" bg-BrandPrimary/10 text-BrandPrimary w-6 aspect-square flex items-center justify-center rounded-full"
                >
                  <EyeIcon />
                </Link>
                <Link
                  role="button"
                  className=" bg-BrandPrimary/10 text-BrandPrimary w-6 aspect-square flex items-center justify-center rounded-full"
                >
                  <HeartIcon />
                </Link>
              </span>
            </div>
            <div className="h-40 rounded-lg overflow-hidden mt-3">
              <img
                src={family.image}
                alt={family.familyName}
                className="h-full w-full object-top object-cover"
              />
            </div>
            <div>
              <div className="grid grid-cols-2 px-5 h-7 items-center mt-2">
                <span className="text-xs font-inter text-textPrimary tracking-tighter leading-5">
                  Children
                </span>
                <span className="flex ml-2">
                  {family.children.map((child, idx) => (
                    <span key={`${child.gender}-${idx}`} className="flex">
                      {child.gender === "male" &&
                        child.count > 0 &&
                        Array.from({ length: child.count }).map(
                          (_, iconIdx) => (
                            <span key={`male-${iconIdx}`}>
                              <MaleIcon className="text-secondary-blue-400" />
                            </span>
                          )
                        )}
                      {child.gender === "female" &&
                        child.count > 0 &&
                        Array.from({ length: child.count }).map(
                          (_, iconIdx) => (
                            <span key={`female-${iconIdx}`}>
                              <FemaleIcon className="text-secondary-pink-500" />
                            </span>
                          )
                        )}
                    </span>
                  ))}
                </span>
              </div>

              <div className="grid grid-cols-2 px-5 min-h-7 items-center mt-2">
                <span className="text-xs font-inter text-textPrimary tracking-tighter leading-5">
                  Location
                </span>
                <span
                  className={` px-2 py-1 rounded-full font-inter select-none cursor-pointer w-fit text-sm leading-5`}
                >
                  {family.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button className="w-fit ml-auto mt-5 text-xs font-inter md:text-sm font-semibold tracking-tighter bg-BrandPrimary hover:bg-BrandPrimary text-white flex gap-2 items-center p-2 md:p-2.5 pr-3.5 rounded-[10px] ">
        <UsersRound size={20} /> More Families <ChevronRight size={20} />
      </Button>
    </div>
  );
};

export default FamilyCards;
