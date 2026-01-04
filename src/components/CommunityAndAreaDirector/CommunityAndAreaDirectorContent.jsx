import React from "react";
import { MailIcon, PhoneIcon, SmallBuilding } from "../shared/svgs";
import { Button } from "../ui/button";
import { LayoutDashboard } from "lucide-react";
import { AiOutlineEdit } from "react-icons/ai";

const CommunityAndAreaDirectorContent = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex  items-center justify-between">
        <p className="w-fit flex items-center gap-4  text-main-900 text-base md:text-lg leading-normal font-semibold">
          <span className="w-6 h-6 rounded-full bg-BrandPrimary flex items-center justify-center shrink-0">
            <SmallBuilding className="w-3 h-auto text-white" />
          </span>
          My Community and My Area Director
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
      <div className="flex w-full cardShadow my-6 border border-soft-200 rounded-[12px] p-4 md:p-6 ">
        <div className="w-full">
          <span className="text-sm font-medium leading-normal text-neutral-500 p-2 rounded-sm bg-[#f6f8fa]">
            Dad's Family from Sometown, FL, United States (ID #345010)
          </span>
          <div className="py-5 border-b border-soft-200 flex flex-col sm:flex-row sm:items-center w-full gap-6">
            <figure>
              <img
                src="/images/communityAndAreaDirector/nichole-scweda.jpg"
                alt=""
                className="object-cover object-center h-[180px]  w-[180px] rounded-md"
              />
            </figure>
            <div>
              <p className="font-semibold text-main-900 text-lg md:text-xl leading-normal">
                Nichole Scweda Huls
              </p>
              <a
                href="mailto:hello@apex-social.org"
                className="font-normal text-sm leading-normal text-main-900 flex items-center gap-3.5 mt-3"
              >
                <span>
                  <MailIcon className="text-neutral-500" />
                </span>{" "}
                hello@apex-social.org
              </a>
              <a
                href="tel:+4915735992102"
                className="font-normal text-sm leading-normal text-main-900 flex items-center gap-3.5 mt-4"
              >
                <span>
                  <PhoneIcon className="text-neutral-500" />
                </span>{" "}
                +49-1573-599-2102
              </a>
            </div>
          </div>
          <p className="text-base font-medium leading-normal text-main-900 mt-5">
            Description of Host Community
          </p>
          <div className="py-3 border-b border-soft-200">
            <p className="text-base font-medium leading-normal text-main-900">
              Social Security and Department of Motor Vehicle Locations
            </p>
          </div>
          <div className="py-3 border-b border-soft-200">
            <p className="text-base font-medium leading-normal text-main-900">
              Education Opportunities
            </p>
          </div>
          <div className="py-3 border-b border-soft-200">
            <p className="text-base font-medium leading-normal text-main-900">
              About Me
            </p>
          </div>
          <p className="text-sm leading-relaxed mt-3 text-main-900">
            Hi, my name is Nicole. I am originally from Stuttgart, Germany, but
            my family heritage is from Poland. In 2023, I moved to San Diego,
            California, and have since fallen in love with the area's
            breathtaking beaches, vibrant culture, and diverse community.
            <br /> <br />
            I have a passion for working with families and care professionals
            and supporting them throughout their journeys. Whether it's through
            offering advice or providing resources, I find great fulfillment in
            helping others.
            <br />
            <br />
            When I'm not working, I love to cook and explore new recipes. I also
            enjoy getting out and exploring new places, whether it's by mountain
            biking, swimming, or simply taking a walk in nature. I believe in
            living an active and healthy lifestyle, and I try to incorporate
            this philosophy into my daily routine.
            <br />
            <br />
            Overall, I feel incredibly blessed to live in such a wonderful place
            and to be able to work in a field that brings me joy and
            fulfillment. I look forward to continuing to grow and learn, both
            personally and professionally, in the years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityAndAreaDirectorContent;
