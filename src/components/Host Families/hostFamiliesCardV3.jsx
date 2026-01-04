import { Check, Heart, Mars, User, Venus, X } from "lucide-react";
import { Button } from "../ui/button";

const HostFamiliesCardV3 = ({ candidate }) => {
  return (
    <div
      key={candidate.id}
      className={`p-4 md:p-6 rounded-[12px] border border-soft-200 hostFamilyCardShadow relative after:content-[''] after:absolute
        after:inset-0 after:opacity-20 after:bg-[url("/images/familyCardBg.png")]`}
    >
      <div className="relative z-10 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="shrink-0 self-center md:self-start">
            <img
              src={candidate.image}
              alt={candidate.name}
              className="w-[200px] md:w-[280px] aspect-square rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <p className="text-xl md:text-2xl font-semibold text-main-900 tracking-[-0.5px] leading-snug">
                    {candidate.name}{" "}
                  </p>
                  <span className="px-4 py-2 text-sm font-medium text-neutral-500 tracking-[-0.084px] bg-cardFill rounded-md w-fit">
                    ID #{candidate.id}
                  </span>
                </div>
                <p className="text-sm leading-normal mt-3">
                  In {candidate.location}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center mt-3">
                  <p className="text-sm leading-normal">Available to start:</p>
                  <span className="px-2 py-0.5 rounded-full bg-BrandPrimary/10 text-BrandPrimary text-xs font-medium w-fit">
                    {candidate.availableToStart}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 shrink-0 md:max-w-[215px] w-full">
                <Button className="bg-BrandPrimary-50 hover:bg-BrandPrimary text-BrandPrimary hover:text-BrandPrimary-50 rounded-md h-9 w-full ">
                  <Heart /> Add to Favorites
                </Button>
                <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white hover:text-white rounded-md h-9 w-full ">
                  <User /> View Profile
                </Button>
              </div>
            </div>

            <p className="text-base text-neutral-500 leading-normal py-5 border-y border-soft-200">
              {candidate.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="px-3 md:px-5 py-4 rounded-2xl bg-cardFill">
            <p className="text-sm font-medium text-neutral-500">Children</p>
            <p className="text-xl font-semibold text-textPrimary">
              {candidate.qualifications.children}
            </p>
          </div>
          <div className="px-3 md:px-5 py-4 rounded-2xl bg-cardFill flex justify-between items-center">
            <p className="text-sm font-medium text-neutral-500">Infant Care</p>
            <div className="text-xl font-semibold text-textPrimary">
              {candidate.qualifications.infantQualified ? (
                <div className="w-10 aspect-square flex items-center justify-center bg-green-lighter text-green-dark rounded-full">
                  <Check />
                </div>
              ) : (
                <div className="w-10 aspect-square flex items-center justify-center bg-red-lighter text-red-base rounded-full">
                  <X />
                </div>
              )}
            </div>
          </div>
          <div className="px-3 md:px-5 py-4 rounded-2xl bg-cardFill flex justify-between items-center">
            <p className="text-sm font-medium text-neutral-500">Special Need</p>
            <div className="text-xl font-semibold text-textPrimary">
              {candidate.qualifications.specialNeedsQualified ? (
                <div className="w-10 aspect-square flex items-center justify-center bg-green-lighter text-green-dark rounded-full">
                  <Check />
                </div>
              ) : (
                <div className="w-10 aspect-square flex items-center justify-center bg-red-lighter text-red-base rounded-full">
                  <X />
                </div>
              )}
            </div>
          </div>
          <div className="px-3 md:px-5 py-4 rounded-2xl bg-cardFill flex justify-between items-center">
            <p className="text-sm font-medium text-neutral-500">
              Preferred Gender
            </p>
            <div className="text-xl font-semibold text-textPrimary">
              {candidate.qualifications.preferredGender === "Male" ? (
                <div className="w-10 aspect-square flex items-center justify-center bg-green-lighter text-green-dark rounded-full">
                  <Mars />
                </div>
              ) : (
                <div className="w-10 aspect-square flex items-center justify-center bg-red-lighter text-red-base rounded-full">
                  <Venus />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostFamiliesCardV3;
