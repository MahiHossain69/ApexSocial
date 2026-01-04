import { Check, Cross, Heart, X } from "lucide-react";
import { Button } from "../ui/button";
import { FemaleIcon, MaleIcon } from "../shared/svgs";

const HostFamiliesCard = ({ candidate }) => {
  return (
    <div
      key={candidate.id}
      className={`p-4 sm:p-6 lg:p-[38.7px] rounded-[20px] border border-pink-lighter hostFamilyCardShadow relative before:content-[''] before:absolute
        before:inset-0 before:opacity-20 before:bg-[url("/images/familyCardBg.png")] before:z-0`}
    >
      <div className="relative z-10 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
        <div className="xl:max-w-[210px] w-full lg:w-fit xl:w-full flex flex-col items-center gap-3 shrink-0">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold font-inter text-BrandPrimary tracking-[-0.5px]">
            {candidate.name}
          </h2>
          <img
            src={candidate.image}
            alt={candidate.name}
            className="rounded-full w-32 sm:w-36 md:w-28 lg:w-36 xl:w-[185px] aspect-square object-cover"
          />
          <div className="flex flex-col text-lg md:text-xl text-BrandPrimary text-center">
            <p>Available to start</p>
            <p>{candidate.availableToStart}</p>
          </div>
          <p className="text-xl text-BrandPrimary mt-3">#ID {candidate.id}</p>
        </div>
        <div className="flex flex-col justify-between gap-4 lg:flex-1">
          <p className="text-textPrimary text-lg md:text-xl">
            {candidate.description}
          </p>

          <div className="p-3">
            <p className="text-lg md:text-xl text-BrandPrimary">
              {candidate.qualifications.children} Children
            </p>
            <p className="text-lg md:text-xl text-BrandPrimary">
              Located in {candidate.location}
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-col w-full lg:max-w-[310px] justify-between gap-4 lg:gap-0">
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 items-stretch sm:items-center lg:items-end w-full">
            <Button className="bg-BrandPrimary-50 hover:bg-BrandPrimary text-BrandPrimary hover:text-BrandPrimary-50 rounded-md h-12 lg:!h-11 w-full sm:w-1/2 lg:max-w-[310px] lg:w-full">
              <Heart /> Add to Favorites
            </Button>
            <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white hover:text-white rounded-md h-12 lg:h-[53px] w-full sm:w-1/2 lg:max-w-[310px] lg:w-full">
              View Profile
            </Button>
          </div>

          <div className="space-y-3 text-base sm:text-lg md:text-xl">
            <p className="flex items-center gap-4">
              Requires Infant Care:{" "}
              {candidate.qualifications.infantQualified ? <Check /> : <X />}
            </p>
            <p className="flex items-center gap-4">
              Requires Special Needs:{" "}
              {candidate.qualifications.specialNeedsQualified ? (
                <Check />
              ) : (
                <X />
              )}
            </p>
            <p className="flex items-center gap-4">
              Requires Drivers License:{" "}
              {candidate.qualifications.driversLicense ? <Check /> : <X />}
            </p>
            <p className="flex items-center gap-4">
              Preferred Gender:{" "}
              {candidate.qualifications.preferredGender === "Male" ? (
                <MaleIcon className="text-secondary-blue-400" />
              ) : (
                <FemaleIcon className="text-secondary-blue-400" />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostFamiliesCard;
