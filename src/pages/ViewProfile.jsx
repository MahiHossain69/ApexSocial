"use client";

import { useEffect, useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckProfileIcon,
  ChildcareExperienceIcon,
  CrossIcon,
  DearFamilyLetterIcon,
  DrivingExperienceIcon,
  EducationIcon,
  LanguageIcon,
  LeftSideIcon,
  LifestyleIcon,
  MaleIcon,
  RightSideIcon,
  StarProfileIcon,
  WrongProfileIcon,
} from "@/components/shared/svgs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Kavin1 from "@/assets/kevin1.png";
import Kavin2 from "@/assets/kevin2.png";
import Kavin3 from "@/assets/kevin3.png";
import Kavin4 from "@/assets/kevin4.png";
import Kavin5 from "@/assets/kevin5.png";
import Kavin6 from "@/assets/kevin6.png";
import Kavin7 from "@/assets/kevin7.png";

const ViewProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMobileSidebarOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobileSidebarOpen(false);
    } else {
      setIsMobileSidebarOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [sectionsOpen, setSectionsOpen] = useState({
    dearCareProfessional: true,
    childcareInformation: true,
    jobInformation: true,
  });

  const toggleSection = (key) => {
    setSectionsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const demoImages = [Kavin1, Kavin2, Kavin3, Kavin4, Kavin5, Kavin6, Kavin7];
  const [activeImage, setActiveImage] = useState(0);
  const handlePrev = () =>
    setActiveImage((i) => (i - 1 + demoImages.length) % demoImages.length);
  const handleNext = () => setActiveImage((i) => (i + 1) % demoImages.length);

  return (
    <div className="flex w-full">
      <div className="flex w-full lg:gap-6">
        <div
          className={cn(
            "w-full transition-width duration-300",
            isSidebarOpen ? "md:w-72 lg:w-80" : "w-18"
          )}
        >
          <SideBar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            isMobileSidebarOpen={isMobileSidebarOpen}
          />
        </div>

        <section className="px-2 sm:px-4 w-full">
          <div className="max-w-257 mx-auto mt-[30px] flex flex-col gap-4 sm:gap-6">
            <Card
              className={`w-full mt-6 p-4 md:p-6 rounded-[12px] bg-white border border-soft-200 cardShadow mb-8`}
            >
              <CardContent className="p-0">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-full flex sm:flex-row flex-col  gap-[15px] items-start">
                      <div className="w-full sm:w-[330px] max-w-[330px] mx-auto sm:mx-0 flex flex-col gap-2">
                        <img
                          src={demoImages[activeImage]}
                          alt="Profile"
                          className="w-full sm:w-[276px] h-[250px] sm:h-[315px] mx-auto object-cover"
                        />

                        <div className="flex items-center justify-center sm:justify-start border border-soft-200 gap-2 w-full">
                         
                          <Button
                            type="button"
                            onClick={handlePrev}
                            className="w-8 h-10 sm:h-25 rounded-none hover:bg-soft-200 bg-soft-200 "
                            aria-label="Previous"
                          >
                            <LeftSideIcon className="text-neutral-400" />
                          </Button>

                          
                          <div className="flex overflow-x-auto sm:overflow-x-hidden gap-2 scrollbar-hide px-1">
                            {demoImages.map((src, idx) => (
                              <img
                                key={src}
                                src={src}
                                alt={`Thumb ${idx + 1}`}
                                onClick={() => setActiveImage(idx)}
                                className={cn(
                                  "w-[50px] h-[40px] sm:w-[60px] sm:h-[45px] object-cover cursor-pointer ",
                                  idx === activeImage &&
                                    "ring-2 ring-BrandPrimary"
                                )}
                              />
                            ))}
                          </div>

                         
                          <Button
                            type="button"
                            onClick={handleNext}
                            className="w-8 h-10 sm:h-25 rounded-none hover:bg-soft-200 bg-soft-200 "
                            aria-label="Next"
                          >
                            <RightSideIcon className="text-neutral-400" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex-1 mx-auto sm:mx-0 flex flex-col gap-8 sm:gap-12">
                        <div className="flex flex-col gap-2">
                          <div className="text-xs sm:text-sm font-semibold text-main-900">
                            ID # 498974
                          </div>
                          <div className="text-2xl sm:text-[32px] leading-tight font-semibold text-BrandPrimary">
                            TestKevin
                          </div>
                          <div className="text-sm sm:text-base text-main-900">
                            Erzieherln from Germany
                          </div>
                          <div className="text-sm sm:text-base text-main-900">
                            there is text here
                          </div>
                        </div>

                        <div className="grid grid-cols-1  lg:grid-cols-2 gap-3">
                          <Card className="mx-auto py-5 sm:py-4 xl:py-1.5 gap-0 w-full xl:min-w-80 h-20 border shadow-none border-[#EAEEEE] rounded-md">
                            <CardHeader className="">
                              <h3 className="text-main-900 text-xs sm:text-sm xl:text-xl font-semibold text-center">
                                Total Childcare Hours
                              </h3>
                            </CardHeader>
                            <CardContent className="">
                              <span className="block text-center text-xs sm:text-base xl:text-2xl text-BrandPrimary font-semibold">
                                Unknown
                              </span>
                            </CardContent>
                          </Card>
                          <Card className="mx-auto py-3 sm:py-4 xl:py-1.5 gap-0 w-full xl:min-w-80 h-20 border shadow-none border-[#EAEEEE] rounded-md">
                            <CardContent className="mx-auto my-5 xl:my-5 text-xs sm:text-base flex items-center gap-2 text-main-900 font-semibold">
                              <CrossIcon className="text-red-base" />
                              Infant Qualified
                            </CardContent>
                          </Card>
                          <Card className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg border border-[#EAEEEE] shadow-none rounded-md p-4">
                            <div className="bg-[#4C6468] rounded-xl p-3 sm:p-2 mx-auto max-w-46 text-center">
                              <h1 className="text-white text-xs sm:text-sm mt-1 font-semibold tracking-wide">
                                AVAILABLE TO START
                              </h1>

                              <div className="bg-white rounded-xl px-1.5 max-w-42 mt-1 py-2 sm:py-3 md:py-4">
                                <h1 className="text-BrandPrimary  font-semibold text-sm sm:text-lg md:text-xl">
                                  Now - Mar 2026
                                </h1>
                              </div>
                            </div>
                          </Card>

                          <Card className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg border border-[#EAEEEE] shadow-none rounded-md p-4">
                            <CardContent className="flex items-center justify-center text-xs  sm:text-base gap-2 text-main-900 font-semibold my-4 lg:my-10">
                              <CrossIcon className="text-red-base" />
                              Special Needs Qualified
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 sm:gap-9 mt-5 items-center">
                    <div className="text-sm sm:text-base font-semibold text-main-900">
                      Additional Information
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-12 w-full">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <MaleIcon className="w-6 h-6 text-BrandPrimary" />
                          <span className="text-sm">Male</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckProfileIcon className="w-6 h-6 text-BrandPrimary" />
                          <span className="text-sm">
                            Speaks English, German
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckProfileIcon className="w-6 h-6 text-BrandPrimary" />
                          <span className="text-sm">Swimmer</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <CheckProfileIcon className="w-6 h-6 text-BrandPrimary" />
                          <span className="text-sm">
                            Pets (Allergies or fears): Yes
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckProfileIcon className="w-6 h-6 text-BrandPrimary" />
                          <span className="text-sm">
                            2 years of English Study
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <CheckProfileIcon className="w-6 h-6 text-BrandPrimary" />
                          <span className="text-sm">
                            First Aid/CPR Qualified
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <WrongProfileIcon className="text-red-base w-6 h-6" />
                          <span className="text-sm">Driving License</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckProfileIcon className="w-6 h-6 text-BrandPrimary" />
                          <span className="text-sm max-w-60.5">
                            Color Code Personality Assessment:RED - Motivated by
                            Power
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-[18px]">
              <div className="flex flex-col gap-4">
                <Card className={`p-0 border border-neutral-100 cardShadow`}>
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex items-center gap-2 py-2">
                        <DearFamilyLetterIcon className="w-6 h-6 text-BrandPrimary rounded-sm" />
                        <span className="text-base font-semibold text-main-900">
                          Dear Family Letter
                        </span>
                      </div>
                      <div className="border border-[#EAEEEE] rounded-[12px] mt-2">
                        <Textarea
                          className="w-full px-2 py-4 text-sm text-main-900 resize-none rounded-[12px] focus:outline-none focus:ring-0 focus:ring-offset-0 border-0 "
                          placeholder=""
                          rows={3}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`p-0 border border-neutral-100 cardShadow`}>
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex items-center gap-2 py-2">
                        <LifestyleIcon className="w-6 h-6 text-BrandPrimary rounded-sm" />
                        <span className="text-base font-semibold text-main-900">
                          Lifestyle, Interests & Abilities
                        </span>
                      </div>
                      <div className="border border-[#EAEEEE] rounded-[12px] mt-2 divide-y">
                        <div className="flex items-center justify-between px-2 py-4">
                          <span className="text-sm font-semibold">
                            Siblings:
                          </span>
                          <span className="text-sm">No</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-4 bg-[#EAEEEE]">
                          <span className="text-sm font-semibold">
                            First Aid/CPR:
                          </span>
                          <span className="text-sm">Yes</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-4">
                          <span className="text-sm font-semibold">
                            Swimmer:
                          </span>
                          <span className="text-sm">Yes</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-4 bg-[#EAEEEE]">
                          <span className="text-sm font-semibold">
                            Dietary Consideration:
                          </span>
                          <span className="text-sm">Vegetarian</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-4">
                          <span className="text-sm font-semibold">
                            Lived away from parents home?
                          </span>
                          <span className="text-sm">No</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-4 bg-[#EAEEEE] rounded-b-[12px]">
                          <span className="text-sm font-semibold">
                            Pets (Allergies or fears):
                          </span>
                          <span className="text-sm">Dogs</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`p-0 border border-neutral-100 cardShadow`}>
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex items-center gap-2 py-2">
                        <LanguageIcon className="w-6 h-6 text-BrandPrimary rounded-sm" />
                        <span className="text-base font-semibold text-main-900">
                          Languages
                        </span>
                      </div>
                      <div className="border border-[#EAEEEE] rounded-[12px] mt-2 divide-y">
                        <div className="flex items-center justify-between px-2 py-4">
                          <span className="text-sm font-semibold">
                            Languages:
                          </span>
                          <span className="text-sm">English, German</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-4 bg-[#EAEEEE] rounded-b-[12px]">
                          <span className="text-sm font-semibold">
                            Years of English study:
                          </span>
                          <span className="text-sm">2 years</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col gap-4">
                <Card className={`p-0 border border-neutral-100 cardShadow`}>
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex items-center gap-2 py-2">
                        <ChildcareExperienceIcon className="w-6 h-6 text-BrandPrimary rounded-sm" />
                        <span className="text-base font-semibold text-main-900">
                          Childcare Experience Overview
                        </span>
                      </div>
                      <div className="border border-[#EAEEEE] rounded-[12px] mt-2">
                        <div className="flex items-center justify-between px-2 py-4">
                          <span className="text-sm font-semibold">
                            Experience with Ages:
                          </span>
                          <span className="text-sm flex items-center gap-1">
                            <CheckProfileIcon className="text-BrandPrimary w-6 h-6" />
                            6-12 months
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={`p-0 border border-neutral-100 sm:h-96 cardShadow`}
                >
                  <CardContent className="p-0">
                    <div className="p-4 grid grid-cols-1 gap-4">
                      <div className="flex items-center gap-2 py-2">
                        <DrivingExperienceIcon className="w-6 h-6 text-BrandPrimary rounded-sm" />
                        <span className="text-base font-semibold text-main-900">
                          Driving Expereince
                        </span>
                      </div>
                      <div className="border border-[#EAEEEE] rounded-[12px]  divide-y">
                        <div className="flex items-center justify-between px-2 py-4">
                          <span className="text-sm font-semibold">
                            Driving License:
                          </span>
                          <span className="text-sm">Yes, for 6 years</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-4 bg-[#EAEEEE]">
                          <span className="text-sm font-semibold">
                            Driving Frequency:
                          </span>
                          <span className="text-sm">3-5 days per week</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-4">
                          <span className="text-sm font-semibold">
                            Comfortable driving in snow:
                          </span>
                          <span className="text-sm">Yes</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`p-0 border border-neutral-100 cardShadow`}>
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex items-center gap-2 py-2">
                        <EducationIcon className="w-6 h-6 text-BrandPrimary rounded-sm" />
                        <span className="text-base font-semibold text-main-900">
                          Education & Current Occupation
                        </span>
                      </div>
                      <div className="border border-[#EAEEEE] rounded-[12px] mt-2 divide-y">
                        <div className="flex items-center justify-between px-2 py-4">
                          <span className="text-sm font-semibold">
                            Profession:
                          </span>
                          <span className="text-sm">Erzieherln</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-4 bg-[#EAEEEE]">
                          <span className="text-sm font-semibold">
                            Highest Degree
                          </span>
                          <span className="text-sm">College Degree</span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-4">
                          <span className="text-sm font-semibold">
                            Employment Notice:
                          </span>
                          <span className="text-sm">Does not apply</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className={`p-2 sm:p-2 border border-neutral-100 mb-5 cardShadow`}>
              <Accordion
                type="single"
                collapsible
                defaultValue="dearCareProfessional"
                className="flex flex-col gap-2 sm:gap-4"
              >
                <AccordionItem value="dearCareProfessional">
                  <AccordionTrigger
                    icon={
                      <DearFamilyLetterIcon className="w-6 h-6 text-BrandPrimary" />
                    }
                  >
                    Dear Care Professional
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#FCF1CC] p-2 sm:p-4">
                    <div className="flex flex-col gap-4 sm:gap-6 text-xs sm:text-sm text-black">
                      <p>Dear [Host Family],</p>
                      <p>
                        My name is [Your Name], and I am very excited about the
                        opportunity to connect with you through the Apex Social
                        program. I have always been passionate about caring for
                        children and supporting families, and I look forward to
                        the possibility of sharing my skills, energy, and
                        cultural background with you.
                      </p>
                      <p>
                        I bring experience in [childcare, teaching, nursing, or
                        other relevant experience], and I enjoy creating a safe,
                        engaging, and nurturing environment for children. Beyond
                        professional experience, I also value open communication
                        and teamwork, and I believe these qualities are
                        essential in building a strong and positive relationship
                        with a host family.
                      </p>
                      <p>
                        I am eager to learn more about your family, your
                        routines, and the hopes you have for welcoming a Care
                        Professional into your home. Thank you for considering
                        me as part of your family’s journey—I look forward to
                        the chance to get to know you better.
                      </p>
                      <div className="flex flex-col gap-1 mt-2">
                        <p>Warm regards,</p>
                        <p>[Your Name]</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="childcareInformation">
                  <AccordionTrigger
                    icon={
                      <StarProfileIcon className="w-6 h-6 text-BrandPrimary" />
                    }
                  >
                    Childcare Information
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#FCF1CC]">
                    <div className="bg-white px-2 sm:px-4 py-4 overflow-x-auto">
                      <div className="min-w-[600px] sm:min-w-0 border-nones overflow-hidden">
                        <div className="grid grid-cols-4 gap-2 bg-[#D7DDDD] p-2 text-sm sm:text-base font-semibold text-main-900">
                          <div>Name</div>
                          <div>Gender</div>
                          <div>Age</div>
                          <div>Special Needs</div>
                        </div>
                        <div className="grid grid-cols-4 h-19 gap-2 px-2 py-6 text-xs sm:text-sm">
                          <div>Soren</div>
                          <div>Female</div>
                          <div>17</div>
                          <div>None</div>
                        </div>
                        <div className="grid grid-cols-4  gap-2 px-2.5 py-2.5 items-center bg-[#F8F9F9] text-xs sm:text-sm">
                          <div>Kai</div>
                          <div>Male</div>
                          <div>15</div>
                          <div>
                            Attention Deficit Hyperactive Disorder (ADHD),
                            Autism, Developmental Delay, Epilepsy
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 sm:space-y-4 mt-6 sm:mt-8">
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="jobInformation">
                  <AccordionTrigger
                    icon={
                      <StarProfileIcon className="w-6 h-6 text-BrandPrimary" />
                    }
                  >
                    Job Information
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#FCF1CC] p-2 sm:p-4">
                    <div className="space-y-3 sm:space-y-4 mt-4">
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                      <div className="space-y-2 sm:space-y-4">
                        <div className="text-sm sm:text-base font-semibold">Children</div>
                        <div className="text-xs sm:text-sm">4-5 months after birth</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewProfile;
