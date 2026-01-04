"use client";

import { useEffect, useState, useRef } from "react";
import SideBar from "@/components/SideBar/SideBar";
import { cn } from "@/lib/utils";
import ApplicationSteps from "@/components/Application/ApplicationSteps";
import Progressbar from "@/components/Application/Steps/Progressbar";
import { stepData, AccountInformationComponent } from "@/data/StepData";

const Application = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [allFormData, setAllFormData] = useState([
    {
      // Account Information (Base Step)
      dob: "",
      "addressed-person": "",
      interestedWorkingCountry: "",
      "passport-country": "",
      howHearAboutUs: "",
      "start-date": "",
    },
    {
      // Step 1 (Bio - Emergency Contact - Placement information)
      "addressed-person": "",
      profession: "",
      "vocation-training-date": null,
      "street-address": "",
      city: "",
      "zip-code": "",
      state: "",
      country: "",
      "passport-country": "",
      "facebook-url": "",
      "instagram-url": "",
      "tiktok-url": "",
      "linkedin-url": "",
      "youtube-url": "",
      "blog-url": "",
      "website-url": "",
      "allergic-to-animals": "",
      "have-other-allergies": "",
      "have-dietary-restriction": "",
      "first-aid-certificate": "",
      "have-driver-certificate": "",
      "comfortable-with-children": "",
      "have-drive-in-snow": "",
      "enjoy-driving": "",
      "how-often-do-you-drive": "",
      "year-of-experience": "",
      "getting-license": "",
      "tell-about-your-skills": "",
      "t-shirt-size": "",
    },
    {
      // Step 2 (Program and Travel)
      "au-pair-before": "",
      idealStartDate: "",
      earliestStartDate: "",
      latestStartDate: "",
      desiredProgramLength: "",
      departureAirport: "",
      deniedUsVisa: "",
      interestedWorkingCountry: "",
      howHearAboutUs: "",
    },
    {
      // Step 3 (Pictures and Video)
      description: "",
    },
    {
      // Step 4 (Color Code)
      primaryColorCode: "",
      secondaryColorCode: "",
    },
    {
      // Step 5 (Educational and professional Experience)
      childcareExperiences: [
        {
          experienceType: "",
          experienceDuration: "",
          totalHours: "",
          children: "",
          duties: "",
          frequency: "",
          referenceName: "",
          referenceEmail: "",
        },
      ],
      educationPart: {
        otherDegreeCertification: "",
        highestDegree: "",
        schoolUniversityName: "",
        graduationDate: "",
        currentEmployer: "",
        employerNotice: "",
        howMuchNotice: "",
      },
      professionalExperience: {
        ageGroupExperience: "",
        workedWithChildrenZeroTo24Months: "",
        hasExperienceWorkingWithChildrenZeroTo24MonthsRadio: "",
        whereChildcareExperienceGained: "",
        yearsChildcareExperience: "",
        desiredAgeGroupToWorkWith: "",
        hasSpecialNeedsCaringExperience: "",
        describeSpecialNeedsExperience: "",
        specialNeedsCondition: "",
      },
    },
    {
      // Step 6 (More About You)
      whatProfessionYouChoose: "",
      interestToJoinApexSocial: "",
      motivatingToGoAbroad: "",
      strengthBringingHostFamily: "",
      hobbiesAndInterests: "",
      whatShouldKnowAboutYou: "",
      livedAwayFromHome: "",
    },
    {
      // Step 7 (Letter to Your Future Host Family)
      letterToHostFamily: "",
    },
    {
      // Step 8 (Emergency Contact and References)
      emergencyContact: { uploaded: false, file: null },
      personalReference: { uploaded: false, file: null },
      teacherReference: { uploaded: false, file: null },
      childcareReference1: { uploaded: false, file: null },
      childcareReference2: { uploaded: false, file: null },
      additionalReferences: [],
    },
    {
      // Step 9 (Priority Documents)
      validPassport: { uploaded: false, file: null },
      degreeCertificate: { uploaded: false, file: null },
      criminalRecord: { uploaded: false, file: null },
      driverLicense: { uploaded: false, file: null },
      physicianReport: { uploaded: false, file: null },
      childcareWorksheet: { uploaded: false, file: null },
    },
  ]);
  const [isProgressExpanded, setIsProgressExpanded] = useState(false);
  const currentStepValidateAndSubmitRef = useRef(null);

  // Check if we're on the completion page
  const isCompletionPage = currentStep >= stepData.length;

  const toggleProgressbar = () => {
    setIsProgressExpanded((prev) => !prev);
  };

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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container_fluid">
      <div className="flex lg:gap-6 h-full">
        <div className="flex ">
          {/* SideBar Section */}
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

          {/* Progressbar Section - Hidden on completion page and Account Information */}
          {!isCompletionPage && currentStep >= 0 && (
            <div
              className={cn(
                "transition-width duration-300",
                isProgressExpanded ? "w-64" : "w-[90px]"
              )}
            >
              <Progressbar
                steps={stepData}
                currentStep={currentStep}
                onStepChange={setCurrentStep}
                isExpanded={isProgressExpanded}
                onToggle={toggleProgressbar}
              />
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 pl-4 pr-4 w-full lg:pl-0">
          <div className=" w-full my-[30px] ">
            {currentStep === -1 ? (
              <AccountInformationComponent
                onSubmit={(data) => {
                  setAllFormData((prev) => {
                    const newData = [...prev];
                    newData[0] = data;
                    return newData;
                  });
                }}
                initialData={allFormData[0]}
                setValidateAndSubmitRef={(func) =>
                  (currentStepValidateAndSubmitRef.current = func)
                }
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                currentStepValidateAndSubmitRef={
                  currentStepValidateAndSubmitRef
                }
                setAllFormData={setAllFormData}
              />
            ) : (
              <ApplicationSteps
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                allFormData={allFormData}
                setAllFormData={setAllFormData}
                currentStepValidateAndSubmitRef={
                  currentStepValidateAndSubmitRef
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
