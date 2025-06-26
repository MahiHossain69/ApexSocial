"use client";

import {
  Calendar,
  FileText,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosAlert } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import MasterCard from "../../assets/mastercard.png"
import VisaCard from "../../assets/visacard.png";
import Pdf from "../../assets/pdf.png";


import { cn } from "@/lib/utils";

const ApplicationContent = () => {
  const totalSteps = 12;
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1 states
  const [hasSecondParent, setHasSecondParent] = useState(true);
  const [citizenship, setCitizenship] = useState("yes");
  const [familyStatus, setFamilyStatus] = useState("dual");
  const [gender, setGender] = useState("male");
  const [sameHousehold, setSameHousehold] = useState("yes");
  const [secondParentGender, setSecondParentGender] = useState("female");

  // Date picker states
  const [firstParentBirthday, setFirstParentBirthday] = useState(null);
  const [secondParentBirthday, setSecondParentBirthday] = useState(null);
  const [firstParentCalendarOpen, setFirstParentCalendarOpen] = useState(false);
  const [secondParentCalendarOpen, setSecondParentCalendarOpen] =
    useState(false);
  const [earliestStartDate, setEarliestStartDate] = useState(null);
  const [latestStartDate, setLatestStartDate] = useState(null);
  const [earliestStartCalendarOpen, setEarliestStartCalendarOpen] =
    useState(false);
  const [latestStartCalendarOpen, setLatestStartCalendarOpen] = useState(false);

  // Step 2 states
  const [candidateSearch, setCandidateSearch] = useState("international");
  const [idealGender, setIdealGender] = useState("male");
  const [needSwimmer, setNeedSwimmer] = useState("yes");
  const [acceptSmoker, setAcceptSmoker] = useState("yes");
  const [needDriver, setNeedDriver] = useState("yes");
  const [workSituation, setWorkSituation] = useState("both-outside");
  const [ageGroups, setAgeGroups] = useState({
    "0-6": false,
    "6-12": false,
    "1-2": false,
    "3-6": false,
    "7-10": false,
    "11-15": false,
    "16-18": false,
  });
  const [languages, setLanguages] = useState({
    "no-preference": false,
    english: false,
    german: false,
    hungarian: false,
    arabic: false,
    bengali: false,
  });

  // Step 3 states - Children
  const [childName, setChildName] = useState("");
  const [childGender, setChildGender] = useState("");
  const [childBirthday, setChildBirthday] = useState(null);
  const [childBirthdayCalendarOpen, setChildBirthdayCalendarOpen] =
    useState(false);
  const [requireChildCare, setRequireChildCare] = useState("");
  const [hasSpecialNeeds, setHasSpecialNeeds] = useState("");
  const [anySpecialNeeds, setAnySpecialNeeds] = useState(false);
  const [children, setChildren] = useState([]);

  // Step 3 states - Additional Child Form
  const [showAddChildForm, setShowAddChildForm] = useState(false);
  const [additionalChildName, setAdditionalChildName] = useState("");
  const [additionalChildGender, setAdditionalChildGender] = useState("");
  const [additionalChildBirthday, setAdditionalChildBirthday] = useState(null);
  const [
    additionalChildBirthdayCalendarOpen,
    setAdditionalChildBirthdayCalendarOpen,
  ] = useState(false);
  const [additionalRequireChildCare, setAdditionalRequireChildCare] =
    useState("");
  const [additionalHasSpecialNeeds, setAdditionalHasSpecialNeeds] =
    useState("");
  const [additionalAnySpecialNeeds, setAdditionalAnySpecialNeeds] =
    useState(false);

  // Step 4 states - Lifestyle
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [otherLanguages, setOtherLanguages] = useState("");
  const [otherHobbies, setOtherHobbies] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [previousAgency, setPreviousAgency] = useState("");
  const [culturalConsiderations, setCulturalConsiderations] = useState("");
  const [pets, setPets] = useState("");
  const [familyLanguages, setFamilyLanguages] = useState([]);
  const [familyFun, setFamilyFun] = useState([]);
  const [childCareArrangements, setChildCareArrangements] = useState([]);

  // Step 5 states - Picture & Videos
  const [profilePicture, setProfilePicture] = useState(null);
  const [profileDescription, setProfileDescription] = useState("");
  const [additionalPictures, setAdditionalPictures] = useState([]);
  const [video, setVideo] = useState(null);
  const [videoDescription, setVideoDescription] = useState("");

  // Step 6 states - Dear Care Professional Letter
  const [profileHeadline, setProfileHeadline] = useState("");
  const [careProfessionalLetter, setCareProfessionalLetter] = useState("");

  // Step 7 states - Family Information
  const [businessTrips, setBusinessTrips] = useState("");
  const [homeType, setHomeType] = useState("");
  const [communityType, setCommunityType] = useState("");
  const [homeDescription, setHomeDescription] = useState("");
  const [careProfessionalCriteria, setCareProfessionalCriteria] = useState("");
  const [caregiverQualities, setCaregiverQualities] = useState("");
  const [caregiverResponsibilities, setCaregiverResponsibilities] =
    useState("");
  const [homeRules, setHomeRules] = useState("");
  const [safetyConcerns, setSafetyConcerns] = useState("");
  const [educationalOpportunities, setEducationalOpportunities] = useState("");
  const [privateBedroomDescription, setPrivateBedroomDescription] =
    useState("");
  const [additionalComments, setAdditionalComments] = useState("");

  // Step 8 states - Color Code Test

  // Step 9 states - Personal Reference
  const [referenceFirstName, setReferenceFirstName] = useState("");
  const [referenceLastName, setReferenceLastName] = useState("");
  const [referenceRelationship, setReferenceRelationship] = useState("");
  const [referenceEmail, setReferenceEmail] = useState("");
  const [referencePhone, setReferencePhone] = useState("");
  const [referenceMobilePhone, setReferenceMobilePhone] = useState("");
  const [referenceJob, setReferenceJob] = useState("");
  const [referenceOccupation, setReferenceOccupation] = useState("");
  const [referenceCountry, setReferenceCountry] = useState("");
  const [referenceStreetAddress, setReferenceStreetAddress] = useState("");
  const [referenceCity, setReferenceCity] = useState("");
  const [referenceState, setReferenceState] = useState("");
  const [referencePostalCode, setReferencePostalCode] = useState("");
  const [referenceBestTimeToCall, setReferenceBestTimeToCall] = useState("");
  const [referenceNote, setReferenceNote] = useState("");

  // Enhanced DatePicker component
  const DatePicker = ({
    date,
    setDate,
    placeholder = "Select date",
    isOpen,
    setIsOpen,
  }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const formatDate = (date) => {
      if (!date) return placeholder;
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
    };

    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startingDayOfWeek = firstDay.getDay();

      const days = [];
      for (let i = 0; i < startingDayOfWeek; i++) {
        days.push(null);
      }
      for (let day = 1; day <= daysInMonth; day++) {
        days.push(new Date(year, month, day));
      }

      return days;
    };

    const navigateMonth = (direction) => {
      setCurrentMonth((prev) => {
        const newMonth = new Date(prev);
        newMonth.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1));
        return newMonth;
      });
    };

    const selectDate = (selectedDate) => {
      setDate(selectedDate);
      setIsOpen(false);
    };

    const isToday = (date) => {
      const today = new Date();
      return date.toDateString() === today.toDateString();
    };

    const isSelected = (checkDate) => {
      return date && checkDate.toDateString() === date.toDateString();
    };

    const days = getDaysInMonth(currentMonth);
    const monthYear = currentMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <Calendar className="mr-2 h-4 w-4" />
            {formatDate(date)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-4">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setCurrentMonth((prev) => {
                      const newMonth = new Date(prev);
                      newMonth.setFullYear(prev.getFullYear() - 1);
                      return newMonth;
                    });
                  }}
                  className="h-8 w-8 p-0"
                  title="Previous Year"
                >
                  <span className="text-xs">‹‹</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("prev")}
                  className="h-8 w-8 p-0"
                  title="Previous Month"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-sm font-medium">{monthYear}</h3>
              </div>

              <div className="flex items-center space-x-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("next")}
                  className="h-8 w-8 p-0"
                  title="Next Month"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setCurrentMonth((prev) => {
                      const newMonth = new Date(prev);
                      newMonth.setFullYear(prev.getFullYear() + 1);
                      return newMonth;
                    });
                  }}
                  className="h-8 w-8 p-0"
                  title="Next Year"
                >
                  <span className="text-xs">››</span>
                </Button>
              </div>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-muted-foreground p-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((day, index) => (
                <div key={index} className="aspect-square">
                  {day && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => selectDate(day)}
                      className={cn(
                        "h-8 w-8 p-0 font-normal hover:bg-accent",
                        isSelected(day) &&
                          "bg-[#45B5AA] text-primary-foreground hover:bg-primary",
                        isToday(day) &&
                          !isSelected(day) &&
                          "bg-accent text-accent-foreground"
                      )}
                    >
                      {day.getDate()}
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="flex justify-between mt-4 pt-4 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setDate(new Date());
                  setIsOpen(false);
                }}
              >
                Today
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setDate(null);
                  setIsOpen(false);
                }}
              >
                Clear
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAgeGroupChange = (group) => {
    setAgeGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  const handleLanguageChange = (language) => {
    setLanguages((prev) => ({
      ...prev,
      [language]: !prev[language],
    }));
  };

  const renderProgressSteps = () => (
    <div className="mb-6">
      <p className="text-sm font-inter text-gray-700 mb-3">Steps to Complete</p>
      <div className="flex justify-center sm:mt-[-31px] sm:ml-[110px] xl:ml-0 items-center space-x-2 overflow-x-auto pb-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isCurrent = step === currentStep;
          const isCompleted = step < currentStep;

          return (
            <div
              key={step}
              className={`min-w-[20px] w-5 h-5 rounded-full flex items-center justify-center cursor-pointer transition-colors border-2 ${
                isCurrent
                  ? "border-[#45B5AA] text-[#45B5AA] bg-transparent"
                  : isCompleted
                  ? "bg-[#45B5AA] text-white border-[#45B5AA]"
                  : "border-[#E2E4E9] text-[#E2E4E9] bg-transparent"
              }`}
              onClick={() => handleStepClick(step)}
            >
              <ul>
                <li className="text-sm font-inter font-medium">{step}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Family Information & Parent
        </h2>
        {renderProgressSteps()}
      </div>

      {hasSecondParent && (
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 flex items-start sm:items-center space-x-3 mb-8">
          <div className="p-1 bg-teal-100 rounded flex-shrink-0">
            <FileText className="w-5 h-5 text-teal-600" />
          </div>
          <p className="text-sm font-inter text-teal-800">
            Tell us about your family. When you have completed the entire
            application, you can begin interviewing candidates.
          </p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
        {/* Basic Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="hostFamilyName"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              Host Family Name<span className="text-red-500 ml-[5px]">*</span>{" "}
              <span className="text-gray-500 text-xs font-inter font-normal">
                (e.g. Smith Family)
              </span>
            </Label>
            <Input
              id="hostFamilyName"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="housePhone"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              House Phone <span className="text-red-500">*</span>
            </Label>
            <Input
              id="housePhone"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
          <div>
            <Label
              htmlFor="streetAddress"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              Street Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="streetAddress"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="city"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              City <span className="text-red-500">*</span>
            </Label>
            <Input
              id="city"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
          <div>
            <Label
              htmlFor="state"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              State <span className="text-red-500">*</span>
            </Label>
            <Input
              id="state"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="zipCode"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              Zip / Postal Code <span className="text-red-500">*</span>
            </Label>
            <Input
              id="zipCode"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
          <div>
            <Label
              htmlFor="country"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              Country <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="United States" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="website"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              Website / Family Blog <span className="text-red-500">*</span>
            </Label>
            <Input
              id="website"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
          <div>
            <Label
              htmlFor="linkedin"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              LinkedIn URL <span className="text-red-500">*</span>
            </Label>
            <Input
              id="linkedin"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
        </div>

        {/* Citizenship Question */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
            Are both parents fluent in English & both are US Citizens or
            Permanent Residence <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={citizenship}
            onValueChange={setCitizenship}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="citizenship-yes" />
              <Label
                htmlFor="citizenship-yes"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="citizenship-no" />
              <Label
                htmlFor="citizenship-no"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Family Status */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
            Family Status
          </Label>
          <RadioGroup
            value={familyStatus}
            onValueChange={setFamilyStatus}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dual" id="dual-parent" />
              <Label
                htmlFor="dual-parent"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                Dual Parent Household
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="single" id="single-parent" />
              <Label
                htmlFor="single-parent"
                className="text-[11px] sm:text-sm font-inter w-full"
              >
                Single Parent Household (Divorced, Separated, Widowed etc)
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Number of Children */}
        <div className="space-y-2">
          <Label
            htmlFor="numChildren"
            className="block text-sm font-inter font-medium text-[#0A0D14]"
          >
            Number of Children <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="sm:w-[458px] w-74">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs flex gap-[5px] sm:items-center text-[#525866] font-inter font-medium">
            <span className="text-[18px] sm:text-[15px] text-[#525866]">
              <IoIosAlert />
            </span>
            Include those you are expecting, adopting or live with you
            part-time.
          </p>
        </div>

        {/* Additional Care Question */}
        <div className="space-y-2">
          <Label
            htmlFor="additionalCare"
            className="block text-sm font-inter font-medium text-[#0A0D14]"
          >
            Are other adult involved in the care of your child(ren)? Please
            describe
          </Label>
          <textarea
            id="additionalCare"
            placeholder="Type Here..."
            className="min-h-[80px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA]"
          />
        </div>

        {/* How did you find us */}
        <div className="space-y-2">
          <Label
            htmlFor="findUs"
            className="block text-sm font-inter font-medium text-[#0A0D14]"
          >
            How did you find us if via search engine, what words did you search
            for? <span className="text-red-500">*</span>
            <span className="block text-xs text-gray-500 font-normal mt-1">
              (i.e. Google search for special needs childcare, If "other" please
              specify. If from a freind referral, please tell us their name, so
              we can thank them)
            </span>
          </Label>
          <textarea
            id="findUs"
            placeholder="Type Here..."
            className="min-h-[80px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA]"
          />
        </div>

        {/* Parent 1 Section */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Parent One</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="firstName"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
              <div>
                <Label
                  htmlFor="lastName"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                  Gender <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={gender}
                  onValueChange={setGender}
                  className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="gender-male" />
                    <Label
                      htmlFor="gender-male"
                      className="text-sm font-inter font-normal text-[#0A0D14]"
                    >
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="gender-female" />
                    <Label
                      htmlFor="gender-female"
                      className="text-sm font-inter font-normal text-[#0A0D14]"
                    >
                      Female
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label
                  htmlFor="linkedinParent"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  LinkedIn URL <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="linkedinParent"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="altEmail"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Alternative Mail
                </Label>
                <Input
                  id="altEmail"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
              <div>
                <Label
                  htmlFor="confirmAltEmail"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Confirm Alternative Mail
                </Label>
                <Input
                  id="confirmAltEmail"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="mobilePhone"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Mobile Phone <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="mobilePhone"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
              <div>
                <Label
                  htmlFor="workPhone"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Work Phone
                </Label>
                <Input
                  id="workPhone"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="birthday"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Birthday <span className="text-red-500">*</span>
                </Label>
                <DatePicker
                  date={firstParentBirthday}
                  setDate={setFirstParentBirthday}
                  placeholder="Select birthday"
                  isOpen={firstParentCalendarOpen}
                  setIsOpen={setFirstParentCalendarOpen}
                />
              </div>
              <div>
                <Label
                  htmlFor="occupation"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Occupation <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Here" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="jobTitle"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Job Title / Profession <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="jobTitle"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
              <div>
                <Label
                  htmlFor="education"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Level of Education <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Here" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="highschool">High School</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="doctorate">Doctorate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Employer Section */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Employer</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="employer"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Employer <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="employer"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
              <div>
                <Label
                  htmlFor="employerAddress"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Employer Street Address{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Here" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="address1">123 Business Ave</SelectItem>
                    <SelectItem value="address2">456 Corporate Blvd</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="employerCity"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Employer City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="employerCity"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
              <div>
                <Label
                  htmlFor="employerState"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Employer State <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Here" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="tx">Texas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="employerZip"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Employer Zip / Postal Code{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="employerZip"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
              <div>
                <Label
                  htmlFor="employerCountry"
                  className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                >
                  Employer Country <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Here" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Second Parent Toggle */}
        <div className="border-t pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <h3 className="text-lg font-medium text-gray-900">
              Is there a Second Parent
            </h3>
            <div className="flex items-center space-x-2">
              <Label
                htmlFor="second-parent"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                {hasSecondParent ? "Yes" : "No"}
              </Label>
              <Switch
                id="second-parent"
                checked={hasSecondParent}
                onCheckedChange={setHasSecondParent}
              />
            </div>
          </div>
        </div>

        {/* Second Parent Sections - Only show when toggle is enabled */}
        {hasSecondParent && (
          <div className="space-y-6 animate-in slide-in-from-top-4 duration-300">
            {/* Same Household Question */}
            <div className="space-y-3">
              <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                Are both parents living in the same household?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={sameHousehold}
                onValueChange={setSameHousehold}
                className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="household-yes" />
                  <Label
                    htmlFor="household-yes"
                    className="text-sm font-inter font-normal text-[#0A0D14]"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="household-no" />
                  <Label
                    htmlFor="household-no"
                    className="text-sm font-inter font-normal text-[#0A0D14]"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Second Parent Section */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Second Parent
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="secondFirstName"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="secondFirstName"
                      placeholder="Type Here..."
                      className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="secondLastName"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="secondLastName"
                      placeholder="Type Here..."
                      className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                      Gender <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      value={secondParentGender}
                      onValueChange={setSecondParentGender}
                      className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="second-gender-male" />
                        <Label
                          htmlFor="second-gender-male"
                          className="text-sm font-inter font-normal text-[#0A0D14]"
                        >
                          Male
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="female"
                          id="second-gender-female"
                        />
                        <Label
                          htmlFor="second-gender-female"
                          className="text-sm font-inter font-normal text-[#0A0D14]"
                        >
                          Female
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label
                      htmlFor="secondLinkedinParent"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      LinkedIn URL <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="secondLinkedinParent"
                      placeholder="Type Here..."
                      className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="secondAltEmail"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Alternative Mail
                    </Label>
                    <Input
                      id="secondAltEmail"
                      placeholder="Type Here..."
                      className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="secondConfirmAltEmail"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Confirm Alternative Mail
                    </Label>
                    <Input
                      id="secondConfirmAltEmail"
                      placeholder="Type Here..."
                      className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="secondMobilePhone"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Mobile Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="secondMobilePhone"
                      placeholder="Type Here..."
                      className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="secondWorkPhone"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Work Phone
                    </Label>
                    <Input
                      id="secondWorkPhone"
                      placeholder="Type Here..."
                      className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="secondBirthday"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Birthday <span className="text-red-500">*</span>
                    </Label>
                    <DatePicker
                      date={secondParentBirthday}
                      setDate={setSecondParentBirthday}
                      placeholder="Select birthday"
                      isOpen={secondParentCalendarOpen}
                      setIsOpen={setSecondParentCalendarOpen}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="secondOccupation"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Occupation <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Here" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">
                          Professional
                        </SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="secondJobTitle"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Job Title / Profession{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="secondJobTitle"
                      placeholder="Type Here..."
                      className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="secondEducation"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Level of Education <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Here" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="highschool">High School</SelectItem>
                        <SelectItem value="bachelors">
                          Bachelor's Degree
                        </SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="doctorate">Doctorate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Parent Employer Section */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Second Parent Employer
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="secondEmployer"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Employer <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="secondEmployer"
                      placeholder="Type Here..."
                      className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="secondEmployerAddress"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Employer Street Address{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Here" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="address1">
                          123 Business Ave
                        </SelectItem>
                        <SelectItem value="address2">
                          456 Corporate Blvd
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="secondEmployerCity"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Employer City <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="secondEmployerCity"
                      placeholder="Type Here..."
                      className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="secondEmployerState"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Employer State <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Here" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="secondEmployerZip"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Employer Zip / Postal Code{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="secondEmployerZip"
                      placeholder="Type Here..."
                      className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="secondEmployerCountry"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Employer Country <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Here" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Care Professional Preferences
        </h2>
        {renderProgressSteps()}
      </div>

      {/* Warning Message */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8">
        <div className="p-1 rounded flex-shrink-0">
          <BsFillInfoCircleFill className="w-5 h-5 text-orange-600" />
        </div>
        <p className="text-base font-normal font-inter text-[#6E330C]">
          Please complete all required fields (fields with an asterisk{" "}
          <span className="text-red-500">*</span>) before saving this page.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
        {/* Candidate Search Type */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
            What type of candidate search are you interested in engaging in?{" "}
            <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={candidateSearch}
            onValueChange={setCandidateSearch}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="international"
                id="candidate-international"
              />
              <Label
                htmlFor="candidate-international"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                International Care Professionals
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="american" id="candidate-american" />
              <Label
                htmlFor="candidate-american"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                American Care Professionals
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="candidate-all" />
              <Label
                htmlFor="candidate-all"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                I'm interested in all Care Professionals
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Date Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="earliest-start"
              className="block text-sm font-inter font-medium text-[#0A0D14] mb-1"
            >
              Earliest start date of your caregiver?{" "}
              <span className="text-red-500">*</span>
            </Label>
            <DatePicker
              date={earliestStartDate}
              setDate={setEarliestStartDate}
              placeholder="Select earliest start date"
              isOpen={earliestStartCalendarOpen}
              setIsOpen={setEarliestStartCalendarOpen}
            />
          </div>
          <div>
            <Label
              htmlFor="latest-start"
              className="block text-sm font-inter font-medium text-[#0A0D14] mb-1"
            >
              What is the latest start <span className="text-red-500">*</span>
            </Label>
            <DatePicker
              date={latestStartDate}
              setDate={setLatestStartDate}
              placeholder="Select latest start date"
              isOpen={latestStartCalendarOpen}
              setIsOpen={setLatestStartCalendarOpen}
            />
          </div>
        </div>

        {/* Ideal Gender */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
            What would be the gender of your ideal candidate?{" "}
            <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={idealGender}
            onValueChange={setIdealGender}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="ideal-male" />
              <Label
                htmlFor="ideal-male"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                Male
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="ideal-female" />
              <Label
                htmlFor="ideal-female"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                Female
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="open" id="ideal-open" />
              <Label
                htmlFor="ideal-open"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                Open to any gender
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Age Groups */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
            What age group should your caregiver have experience with?{" "}
            <span className="text-red-500">*</span>
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { key: "0-6", label: "0-6 months" },
              { key: "6-12", label: "6-12 months" },
              { key: "1-2", label: "1-2 years" },
              { key: "3-6", label: "3-6 years" },
              { key: "7-10", label: "7-10 years" },
              { key: "11-15", label: "11-15 years" },
              { key: "16-18", label: "16-18 years" },
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`age-${key}`}
                  checked={ageGroups[key]}
                  onChange={() => handleAgeGroupChange(key)}
                  className="rounded border-gray-300 text-[#45B5AA] focus:ring-[#45B5AA]"
                />
                <Label
                  htmlFor={`age-${key}`}
                  className="text-sm font-inter font-normal text-[#0A0D14]"
                >
                  {label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Swimmer */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
            Do you need a swimmer <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={needSwimmer}
            onValueChange={setNeedSwimmer}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="swimmer-yes" />
              <Label
                htmlFor="swimmer-yes"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="swimmer-no" />
              <Label
                htmlFor="swimmer-no"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Smoker */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
            Would you accept a smoker? <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={acceptSmoker}
            onValueChange={setAcceptSmoker}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="smoker-yes" />
              <Label
                htmlFor="smoker-yes"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="smoker-no" />
              <Label
                htmlFor="smoker-no"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Languages */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
            What languages should your caregiver speak?{" "}
            <span className="text-red-500">*</span>
          </Label>
          <div className="border border-gray-300 rounded-md p-3 space-y-2 max-h-40 overflow-y-auto">
            {[
              { key: "no-preference", label: "No Preference" },
              { key: "english", label: "English" },
              { key: "german", label: "German" },
              { key: "hungarian", label: "Hungarian" },
              { key: "arabic", label: "Arabic" },
              { key: "bengali", label: "Bengali" },
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`lang-${key}`}
                  checked={languages[key]}
                  onChange={() => handleLanguageChange(key)}
                  className="rounded border-gray-300 text-[#45B5AA] focus:ring-[#45B5AA]"
                />
                <Label
                  htmlFor={`lang-${key}`}
                  className="text-sm font-inter font-normal text-[#0A0D14]"
                >
                  {label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Driver */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
            Do you need a driver? <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={needDriver}
            onValueChange={setNeedDriver}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="driver-yes" />
              <Label
                htmlFor="driver-yes"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="driver-no" />
              <Label
                htmlFor="driver-no"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Transportation */}
        <div className="space-y-2">
          <Label
            htmlFor="transportation"
            className="block text-sm font-inter font-medium text-[#0A0D14]"
          >
            What kind of transportation options will be available to your
            caregiver? <span className="text-red-500">*</span>
          </Label>
          <textarea
            id="transportation"
            placeholder="Type Here..."
            className="min-h-[100px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
          />
        </div>

        {/* Personality */}
        <div className="space-y-2">
          <Label
            htmlFor="personality"
            className="block text-sm font-inter font-medium text-[#0A0D14]"
          >
            How would you describe your ideal caregiver's personality?{" "}
            <span className="text-red-500">*</span>
          </Label>
          <textarea
            id="personality"
            placeholder="Type Here..."
            className="min-h-[100px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
          />
        </div>

        {/* Work Situation */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
            Please describe your family's work situation.{" "}
            <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={workSituation}
            onValueChange={setWorkSituation}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="both-outside" id="work-both-outside" />
              <Label
                htmlFor="work-both-outside"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                Both Parents working outside the home
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="both-home" id="work-both-home" />
              <Label
                htmlFor="work-both-home"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                Both Parents working from home
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-home" id="work-one-home" />
              <Label
                htmlFor="work-one-home"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                One Parent working from home
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="stay-home" id="work-stay-home" />
              <Label
                htmlFor="work-stay-home"
                className="text-sm font-inter font-normal text-[#0A0D14]"
              >
                Stay at home parent
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Children</h2>
        {renderProgressSteps()}
      </div>

      {/* Warning Message */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8">
        <div className="p-1 rounded flex-shrink-0">
          <BsFillInfoCircleFill className="w-5 h-5 text-orange-600" />
        </div>
        <p className="text-base font-normal font-inter text-[#6E330C]">
          Please complete all required fields (fields with an asterisk{" "}
          <span className="text-red-500">*</span>) before saving this page.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          About Your Children
        </h3>

        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <Label
              htmlFor="childName"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="childName"
              placeholder="Type your name..."
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>

          {/* Gender Field */}
          <div className="space-y-3">
            <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
              Gender <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={childGender}
              onValueChange={setChildGender}
              className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="child-male" />
                <Label
                  htmlFor="child-male"
                  className="text-sm font-inter font-normal text-[#0A0D14]"
                >
                  Male
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="child-female" />
                <Label
                  htmlFor="child-female"
                  className="text-sm font-inter font-normal text-[#0A0D14]"
                >
                  Female
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Birthday Field */}
          <div>
            <Label
              htmlFor="childBirthday"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              Birthday <span className="text-red-500">*</span>
            </Label>
            <DatePicker
              date={childBirthday}
              setDate={setChildBirthday}
              placeholder="-- -- ----"
              isOpen={childBirthdayCalendarOpen}
              setIsOpen={setChildBirthdayCalendarOpen}
            />
          </div>

          {/* Child Care Question */}
          <div className="space-y-3">
            <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
              Do you require child care for a child under the age of two{" "}
              <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={requireChildCare}
              onValueChange={setRequireChildCare}
              className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="childcare-yes" />
                <Label
                  htmlFor="childcare-yes"
                  className="text-sm font-inter font-normal text-[#0A0D14]"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="childcare-no" />
                <Label
                  htmlFor="childcare-no"
                  className="text-sm font-inter font-normal text-[#0A0D14]"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Special Needs Question */}
          <div className="space-y-3">
            <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
              Do you have a child with special needs{" "}
              <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={hasSpecialNeeds}
              onValueChange={setHasSpecialNeeds}
              className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="special-yes" />
                <Label
                  htmlFor="special-yes"
                  className="text-sm font-inter font-normal text-[#0A0D14]"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="special-no" />
                <Label
                  htmlFor="special-no"
                  className="text-sm font-inter font-normal text-[#0A0D14]"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Any Special Needs Toggle */}
          <div className="flex items-center justify-between">
            <Label className="text-sm font-inter font-medium text-[#0A0D14]">
              Any Special Needs
            </Label>
            <div className="flex items-center gap-2">
              <Switch
                checked={anySpecialNeeds}
                onCheckedChange={setAnySpecialNeeds}
              />
              <span className="text-sm font-inter font-normal text-[#0A0D14]">
                Yes
              </span>
            </div>
          </div>

          {/* Special Needs Details - Show when toggle is enabled */}
          {anySpecialNeeds && (
            <div className="space-y-6 animate-in slide-in-from-top-4 duration-300 border-t pt-6">
              {/* Special Need Type Dropdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                    What type of special need do you children have?
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Here" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-preference">
                        No Preference
                      </SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="hungarian">Hungarian</SelectItem>
                      <SelectItem value="arabic">Arabic</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* G-tube Feeding Question */}
                <div className="space-y-3">
                  <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                    Does your child require G-tube feeding as part of their care
                    routine?
                  </Label>
                  <RadioGroup className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="gtube-yes" />
                      <Label
                        htmlFor="gtube-yes"
                        className="text-sm font-inter font-normal text-[#0A0D14]"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="gtube-no" />
                      <Label
                        htmlFor="gtube-no"
                        className="text-sm font-inter font-normal text-[#0A0D14]"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* If yes, please describe */}
              <div className="space-y-2">
                <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                  If yes, please describe{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <textarea
                  placeholder="Type here..."
                  className="min-h-[80px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>

              {/* Therapy/School Question */}
              <div className="space-y-2">
                <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                  Would your caregiver need to be able to observe/accompany them
                  to these therapies or to school?{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <textarea
                  placeholder="Type here..."
                  className="min-h-[80px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>

              {/* Specific Care Description */}
              <div className="space-y-2">
                <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                  Describe the specific care required for your children and what
                  your caregiver needs to be aware of.
                </Label>
                <textarea
                  placeholder="Type here..."
                  className="min-h-[80px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>

              {/* Day-to-day Life Impact */}
              <div className="space-y-2">
                <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                  How does your children special needs affect the day-to-day
                  life of the family (if at all)?{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <textarea
                  placeholder="Type here..."
                  className="min-h-[80px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
            </div>
          )}

          {/* Add Children Button */}
          <Button
            variant="outline"
            className="bg-white text-[#45B5AA] border-[#45B5AA] hover:bg-[#cbf5e5] mt-6"
            onClick={() => {
              // Only add current child to children array if form is filled
              if (childName && childGender && childBirthday) {
                const newChild = {
                  id: Date.now(),
                  name: childName,
                  gender: childGender,
                  birthday: childBirthday,
                  requireChildCare,
                  hasSpecialNeeds,
                  anySpecialNeeds,
                };
                setChildren([...children, newChild]);
                // Reset main form
                setChildName("");
                setChildGender("");
                setChildBirthday(null);
                setRequireChildCare("");
                setHasSpecialNeeds("");
                setAnySpecialNeeds(false);
              }
              // Always show additional child form when clicked
              setShowAddChildForm(true);
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Children
          </Button>

          {/* Display Added Children */}
          {children.length > 0 && (
            <div className="mt-6 space-y-4">
              <h4 className="text-md font-medium text-gray-900">
                Added Children:
              </h4>
              {children.map((child) => (
                <div
                  key={child.id}
                  className="bg-gray-50 p-4 rounded-lg border"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{child.name}</p>
                      <p className="text-sm text-gray-600">
                        {child.gender} • Born:{" "}
                        {child.birthday?.toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-600">
                        Child care needed:{" "}
                        {child.requireChildCare || "Not specified"} • Special
                        needs: {child.hasSpecialNeeds || "Not specified"}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setChildren(children.filter((c) => c.id !== child.id));
                      }}
                      className="text-red-500 border-red-500 hover:bg-red-50"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Additional Child Form */}
          {showAddChildForm && (
            <div className="mt-8 bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6 animate-in slide-in-from-top-4 duration-300">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Add Children
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setShowAddChildForm(false);
                    // Reset additional form
                    setAdditionalChildName("");
                    setAdditionalChildGender("");
                    setAdditionalChildBirthday(null);
                    setAdditionalRequireChildCare("");
                    setAdditionalHasSpecialNeeds("");
                    setAdditionalAnySpecialNeeds(false);
                  }}
                  className="text-red-500 border-red-500 hover:bg-red-50"
                >
                  Cancel
                </Button>
              </div>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <Label
                    htmlFor="additionalChildName"
                    className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                  >
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="additionalChildName"
                    placeholder="Type your name..."
                    value={additionalChildName}
                    onChange={(e) => setAdditionalChildName(e.target.value)}
                    className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                  />
                </div>

                {/* Gender Field */}
                <div className="space-y-3">
                  <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                    Gender <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup
                    value={additionalChildGender}
                    onValueChange={setAdditionalChildGender}
                    className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="additional-child-male" />
                      <Label
                        htmlFor="additional-child-male"
                        className="text-sm font-inter font-normal text-[#0A0D14]"
                      >
                        Male
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="female"
                        id="additional-child-female"
                      />
                      <Label
                        htmlFor="additional-child-female"
                        className="text-sm font-inter font-normal text-[#0A0D14]"
                      >
                        Female
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Birthday Field */}
                <div>
                  <Label
                    htmlFor="additionalChildBirthday"
                    className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                  >
                    Birthday <span className="text-red-500">*</span>
                  </Label>
                  <DatePicker
                    date={additionalChildBirthday}
                    setDate={setAdditionalChildBirthday}
                    placeholder="-- -- ----"
                    isOpen={additionalChildBirthdayCalendarOpen}
                    setIsOpen={setAdditionalChildBirthdayCalendarOpen}
                  />
                </div>

                {/* Child Care Question */}
                <div className="space-y-3">
                  <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                    Do you require child care for a child under the age of two{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup
                    value={additionalRequireChildCare}
                    onValueChange={setAdditionalRequireChildCare}
                    className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="yes"
                        id="additional-childcare-yes"
                      />
                      <Label
                        htmlFor="additional-childcare-yes"
                        className="text-sm font-inter font-normal text-[#0A0D14]"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="additional-childcare-no" />
                      <Label
                        htmlFor="additional-childcare-no"
                        className="text-sm font-inter font-normal text-[#0A0D14]"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Special Needs Question */}
                <div className="space-y-3">
                  <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                    Do you have a child with special needs{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup
                    value={additionalHasSpecialNeeds}
                    onValueChange={setAdditionalHasSpecialNeeds}
                    className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="additional-special-yes" />
                      <Label
                        htmlFor="additional-special-yes"
                        className="text-sm font-inter font-normal text-[#0A0D14]"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="additional-special-no" />
                      <Label
                        htmlFor="additional-special-no"
                        className="text-sm font-inter font-normal text-[#0A0D14]"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Any Special Needs Toggle */}
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-inter font-medium text-[#0A0D14]">
                    Any Specific Needs
                  </Label>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={additionalAnySpecialNeeds}
                      onCheckedChange={setAdditionalAnySpecialNeeds}
                    />
                    <span className="text-sm font-inter font-normal text-[#0A0D14]">
                      Yes
                    </span>
                  </div>
                </div>

                {/* Special Needs Details for Additional Child */}
                {additionalAnySpecialNeeds && (
                  <div className="space-y-6 animate-in slide-in-from-top-4 duration-300 border-t pt-6">
                    {/* When was diagnosed */}
                    <div className="space-y-2">
                      <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                        When was your children diagnosed with this special need?
                      </Label>
                      <textarea
                        placeholder="Type here..."
                        className="min-h-[80px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                      />
                    </div>

                    {/* Treatment/Medication */}
                    <div className="space-y-2">
                      <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                        Is your children currently recieving any treatment or
                        taking medication? If yes, please describe{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <textarea
                        placeholder="Type here..."
                        className="min-h-[80px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                      />
                    </div>

                    {/* Therapies */}
                    <div className="space-y-2">
                      <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                        Describe any therapies your children recieve and if your
                        caregiver would be able to observe/accompany them to
                        these therapies or to school?
                      </Label>
                      <textarea
                        placeholder="Type here..."
                        className="min-h-[80px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                      />
                    </div>

                    {/* Specific Care */}
                    <div className="space-y-2">
                      <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                        Describe the specific care required for your children
                        and what your caregiver needs to be aware of.
                      </Label>
                      <textarea
                        placeholder="Type here..."
                        className="min-h-[80px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                      />
                    </div>

                    {/* Day-to-day Impact */}
                    <div className="space-y-2">
                      <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                        How does your children special needs affect the
                        day-to-day life of the family (if at all)?{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <textarea
                        placeholder="Type here..."
                        className="min-h-[80px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                      />
                    </div>
                  </div>
                )}

                {/* Add More Button */}
                <Button
                  variant="outline"
                  className="bg-white text-[#45B5AA] border-[#45B5AA] hover:bg-[#cbf5e5] mt-6 mr-4"
                  onClick={() => {
                    // Add additional child to children array
                    if (
                      additionalChildName &&
                      additionalChildGender &&
                      additionalChildBirthday
                    ) {
                      const newChild = {
                        id: Date.now(),
                        name: additionalChildName,
                        gender: additionalChildGender,
                        birthday: additionalChildBirthday,
                        requireChildCare: additionalRequireChildCare,
                        hasSpecialNeeds: additionalHasSpecialNeeds,
                        anySpecialNeeds: additionalAnySpecialNeeds,
                      };
                      setChildren([...children, newChild]);
                      // Reset additional form but keep the form open
                      setAdditionalChildName("");
                      setAdditionalChildGender("");
                      setAdditionalChildBirthday(null);
                      setAdditionalRequireChildCare("");
                      setAdditionalHasSpecialNeeds("");
                      setAdditionalAnySpecialNeeds(false);
                    } else {
                      alert(
                        "Please fill in all required fields (Name, Gender, Birthday)"
                      );
                    }
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add More
                </Button>

                {/* Done Adding Children Button */}
                <Button
                  className="bg-teal-500 hover:bg-teal-600 text-white mt-6"
                  onClick={() => {
                    // Add current additional child if form is filled
                    if (
                      additionalChildName &&
                      additionalChildGender &&
                      additionalChildBirthday
                    ) {
                      const newChild = {
                        id: Date.now(),
                        name: additionalChildName,
                        gender: additionalChildGender,
                        birthday: additionalChildBirthday,
                        requireChildCare: additionalRequireChildCare,
                        hasSpecialNeeds: additionalHasSpecialNeeds,
                        anySpecialNeeds: additionalAnySpecialNeeds,
                      };
                      setChildren([...children, newChild]);
                    }
                    // Close the additional form
                    setShowAddChildForm(false);
                    // Reset additional form
                    setAdditionalChildName("");
                    setAdditionalChildGender("");
                    setAdditionalChildBirthday(null);
                    setAdditionalRequireChildCare("");
                    setAdditionalHasSpecialNeeds("");
                    setAdditionalAnySpecialNeeds(false);
                  }}
                >
                  Done Adding Children
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => {
    const handleFamilyLanguageChange = (language) => {
      setFamilyLanguages((prev) => {
        if (prev.includes(language)) {
          return prev.filter((item) => item !== language);
        } else {
          return [...prev, language];
        }
      });
    };

    const handleFamilyFunChange = (activity) => {
      setFamilyFun((prev) => {
        if (prev.includes(activity)) {
          return prev.filter((item) => item !== activity);
        } else {
          return [...prev, activity];
        }
      });
    };

    const handleChildCareChange = (arrangement) => {
      setChildCareArrangements((prev) => {
        if (prev.includes(arrangement)) {
          return prev.filter((item) => item !== arrangement);
        } else {
          return [...prev, arrangement];
        }
      });
    };

    const removeFamilyLanguage = (language) => {
      setFamilyLanguages((prev) => prev.filter((item) => item !== language));
    };

    const removeFamilyFun = (activity) => {
      setFamilyFun((prev) => prev.filter((item) => item !== activity));
    };

    const removeChildCare = (arrangement) => {
      setChildCareArrangements((prev) =>
        prev.filter((item) => item !== arrangement)
      );
    };

    return (
      <div className="space-y-6">
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Lifestyle</h2>
          {renderProgressSteps()}
        </div>

        {/* Warning Message */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8">
          <div className="p-1 rounded flex-shrink-0">
            <BsFillInfoCircleFill className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-base font-normal font-inter text-[#6E330C]">
            Please complete all required fields (fields with an asterisk{" "}
            <span className="text-red-500">*</span>) before saving this page.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
          {/* Native Language and Other Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="nativeLanguage"
                className="block text-sm font-inter font-medium text-[#0A0D14] mb-1"
              >
                What is your native language{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Select value={nativeLanguage} onValueChange={setNativeLanguage}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="otherLanguages"
                className="block text-sm font-inter font-medium text-[#0A0D14] mb-1"
              >
                Other Languages?
              </Label>
              <Input
                id="otherLanguages"
                placeholder="Type Here..."
                value={otherLanguages}
                onChange={(e) => setOtherLanguages(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Other Hobbies and Dietary Restrictions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="otherHobbies"
                className="block text-sm font-inter font-medium text-[#0A0D14] mb-1"
              >
                Other Hobbies?
              </Label>
              <Input
                id="otherHobbies"
                placeholder="Type Here..."
                value={otherHobbies}
                onChange={(e) => setOtherHobbies(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
            <div>
              <Label
                htmlFor="dietaryRestrictions"
                className="block text-sm font-inter font-medium text-[#0A0D14] mb-1"
              >
                Does your family have any dietary restrictions?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Select
                value={dietaryRestrictions}
                onValueChange={setDietaryRestrictions}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="gluten-free">Gluten Free</SelectItem>
                  <SelectItem value="kosher">Kosher</SelectItem>
                  <SelectItem value="halal">Halal</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Previous Agency and Cultural Considerations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="previousAgency"
                className="block text-sm font-inter font-medium text-[#0A0D14] mb-1"
              >
                Previous Agency?
              </Label>
              <Input
                id="previousAgency"
                placeholder="Type Here..."
                value={previousAgency}
                onChange={(e) => setPreviousAgency(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
            <div>
              <Label
                htmlFor="culturalConsiderations"
                className="block text-sm font-inter font-medium text-[#0A0D14] mb-1"
              >
                Please describe Cultural Consideration unique to your family?
              </Label>
              <Input
                id="culturalConsiderations"
                placeholder="Type Here..."
                value={culturalConsiderations}
                onChange={(e) => setCulturalConsiderations(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Pets */}
          <div className="space-y-2">
            <Label
              htmlFor="pets"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              Do you have pets? If yes, please describe?{" "}
              <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="pets"
              placeholder="Type Here..."
              value={pets}
              onChange={(e) => setPets(e.target.value)}
              className="min-h-[100px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>

          {/* Family Languages - Multi-select */}
          <div className=" xl:flex xl:justify-between">
            <div className="space-y-3">
              <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                What other languages do you or member of your family speak?{" "}
                <span className="text-red-500">*</span>
              </Label>

              {/* Selected Languages Tags */}
              {familyLanguages.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {familyLanguages.slice(0, 3).map((language) => (
                    <span
                      key={language}
                      className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-[#45B5AA] text-white"
                    >
                      {language.toUpperCase()}
                      <button
                        type="button"
                        onClick={() => removeFamilyLanguage(language)}
                        className="ml-2 text-white hover:text-gray-200"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  {familyLanguages.length > 3 && (
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-[#45B5AA] text-white">
                      + {familyLanguages.length - 3} OTHERS
                      <button
                        type="button"
                        onClick={() => setFamilyLanguages([])}
                        className="ml-2 text-white hover:text-gray-200"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              )}

              <div className="relative">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Here" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className="p-2 space-y-2">
                      {[
                        { key: "no-preference", label: "No Preference" },
                        { key: "english", label: "English" },
                        { key: "german", label: "German" },
                        { key: "hungarian", label: "Hungarian" },
                        { key: "arabic", label: "Arabic" },
                        { key: "bengali", label: "Bengali" },
                        { key: "spanish", label: "Spanish" },
                        { key: "french", label: "French" },
                        { key: "chinese", label: "Chinese" },
                        { key: "japanese", label: "Japanese" },
                        { key: "korean", label: "Korean" },
                        { key: "italian", label: "Italian" },
                        { key: "portuguese", label: "Portuguese" },
                        { key: "russian", label: "Russian" },
                      ].map(({ key, label }) => (
                        <div key={key} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`family-lang-${key}`}
                            checked={familyLanguages.includes(key)}
                            onChange={() => handleFamilyLanguageChange(key)}
                            className="rounded border-gray-300 text-[#45B5AA] focus:ring-[#45B5AA]"
                          />
                          <Label
                            htmlFor={`family-lang-${key}`}
                            className="text-sm font-inter font-normal text-[#0A0D14]"
                          >
                            {label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Family Fun - Multi-select */}
            <div className="space-y-3">
              <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
                What does your family(or individuals) like to do for fun?{" "}
                <span className="text-red-500">*</span>
              </Label>

              {/* Selected Activities Tags */}
              {familyFun.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {familyFun.map((activity) => (
                    <span
                      key={activity}
                      className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-[#45B5AA] text-white"
                    >
                      {activity.toUpperCase()}
                      <button
                        type="button"
                        onClick={() => removeFamilyFun(activity)}
                        className="ml-2 text-white hover:text-gray-200"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}

              <div className="relative">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Here" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className="p-2 space-y-2">
                      {[
                        { key: "animals", label: "Animals" },
                        { key: "artwork", label: "Artwork" },
                        { key: "bicycling", label: "Bicycling" },
                        { key: "boating", label: "Boating" },
                        { key: "chorus", label: "Chorus" },
                        {
                          key: "community-service",
                          label: "Community Service",
                        },
                        { key: "cooking", label: "Cooking" },
                        { key: "dancing", label: "Dancing" },
                        { key: "fishing", label: "Fishing" },
                        { key: "gardening", label: "Gardening" },
                        { key: "hiking", label: "Hiking" },
                        { key: "movies", label: "Movies" },
                        { key: "music", label: "Music" },
                        { key: "reading", label: "Reading" },
                        { key: "sports", label: "Sports" },
                        { key: "swimming", label: "Swimming" },
                        { key: "travel", label: "Travel" },
                        { key: "volunteering", label: "Volunteering" },
                      ].map(({ key, label }) => (
                        <div key={key} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`family-fun-${key}`}
                            checked={familyFun.includes(key)}
                            onChange={() => handleFamilyFunChange(key)}
                            className="rounded border-gray-300 text-[#45B5AA] focus:ring-[#45B5AA]"
                          />
                          <Label
                            htmlFor={`family-fun-${key}`}
                            className="text-sm font-inter font-normal text-[#0A0D14]"
                          >
                            {label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Child Care Arrangements - Multi-select */}
          <div className="space-y-3 xl:w-[400px]">
            <Label className="block text-sm font-inter font-medium text-[#0A0D14]">
              What are your current/past child care arrangements?{" "}
              <span className="text-red-500">*</span>
            </Label>

            {/* Selected Arrangements Tags */}
            {childCareArrangements.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {childCareArrangements.map((arrangement) => (
                  <span
                    key={arrangement}
                    className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-[#45B5AA] text-white"
                  >
                    {arrangement.toUpperCase()}
                    <button
                      type="button"
                      onClick={() => removeChildCare(arrangement)}
                      className="ml-2 text-white hover:text-gray-200"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div className="relative">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <div className="p-2 space-y-2">
                    {[
                      { key: "pregnant", label: "Pregnant" },
                      { key: "sahm-sahd", label: "SAHM/SAHD" },
                      { key: "grandparents", label: "Grandparents" },
                      { key: "day-care-center", label: "Day Care Center" },
                      { key: "in-home-daycare", label: "In-home Daycare" },
                      { key: "pre-school", label: "Pre-School or School" },
                      { key: "nanny", label: "Nanny" },
                      { key: "au-pair", label: "Au Pair" },
                      { key: "babysitter", label: "Babysitter" },
                      { key: "family-member", label: "Family Member" },
                      { key: "no-previous", label: "No Previous Childcare" },
                    ].map(({ key, label }) => (
                      <div key={key} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`childcare-${key}`}
                          checked={childCareArrangements.includes(key)}
                          onChange={() => handleChildCareChange(key)}
                          className="rounded border-gray-300 text-[#45B5AA] focus:ring-[#45B5AA]"
                        />
                        <Label
                          htmlFor={`childcare-${key}`}
                          className="text-sm font-inter font-normal text-[#0A0D14]"
                        >
                          {label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderStep5 = () => {
    const handleFileUpload = (file, type) => {
      if (type === "profile") {
        setProfilePicture(file);
      } else if (type === "additional") {
        setAdditionalPictures([...additionalPictures, file]);
      } else if (type === "video") {
        setVideo(file);
      }
    };

    const FileUploadArea = ({
      onFileSelect,
      acceptedTypes = "image/*",
      title,
      subtitle,
    }) => (
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 text-gray-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M7 18a4.6 4.4 0 0 1 0-9 5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12z" />
              <path d="M9 15l3-3 3 3" />
              <path d="M12 12v9" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">
              {title || "Choose a file or drag & drop it here."}
            </p>
            {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          </div>
          <Button
            variant="outline"
            className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            onClick={() => {
              const input = document.createElement("input");
              input.type = "file";
              input.accept = acceptedTypes;
              input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) onFileSelect(file);
              };
              input.click();
            }}
          >
            Browse File
          </Button>
        </div>
      </div>
    );

    return (
      <div className="space-y-6">
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Picture & Videos
          </h2>
          {renderProgressSteps()}
        </div>

        {/* Warning Message */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start sm:items-center space-x-3 mb-8">
          <div className="p-1 rounded flex-shrink-0 mt-0.5">
            <BsFillInfoCircleFill className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-sm font-inter font-medium text-[#6E330C]">
            Please do upload photos that are max 10MB size
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-8">
          <div className="mb-6">
            <p className="text-sm font-inter font-normal text-gray-700">
              Candidates love to see photos of their prospective American host
              family.
            </p>
          </div>

          {/* Profile Picture Section */}
          <div className="space-y-4">
            <h3 className="text-base font-medium text-gray-900">
              Profile Picture
            </h3>

            <FileUploadArea
              onFileSelect={(file) => handleFileUpload(file, "profile")}
              acceptedTypes="image/*"
              title="Choose a file or drag & drop it here."
            />

            {profilePicture && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">
                  Selected: {profilePicture.name}
                </p>
                <p className="text-xs text-gray-500">
                  Size: {(profilePicture.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label
                htmlFor="profileDescription"
                className="block text-sm font-inter font-medium text-gray-700"
              >
                Description
              </Label>
              <textarea
                id="profileDescription"
                placeholder="Type Here..."
                value={profileDescription}
                onChange={(e) => setProfileDescription(e.target.value)}
                className="min-h-[100px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Additional Pictures Section */}
          <div className="space-y-4">
            <h3 className="text-base font-medium text-gray-900">
              Additional Picture (Upto 10) (Optional)
            </h3>

            <FileUploadArea
              onFileSelect={(file) => handleFileUpload(file, "additional")}
              acceptedTypes="image/*"
              title="Choose a file or drag & drop it here."
            />

            {additionalPictures.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-gray-900">
                  Additional Pictures ({additionalPictures.length}/10):
                </p>
                <div className="space-y-2">
                  {additionalPictures.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Size: {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setAdditionalPictures(
                            additionalPictures.filter((_, i) => i !== index)
                          );
                        }}
                        className="text-red-500 border-red-500 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Video Section */}
          <div className="space-y-4">
            <h3 className="text-base font-medium text-gray-900">Video</h3>

            <FileUploadArea
              onFileSelect={(file) => handleFileUpload(file, "video")}
              acceptedTypes="video/*"
              title="Choose a file or drag & drop it here."
            />

            {video && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">
                  Selected: {video.name}
                </p>
                <p className="text-xs text-gray-500">
                  Size: {(video.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label
                htmlFor="videoDescription"
                className="block text-sm font-inter font-medium text-gray-700"
              >
                Description
              </Label>
              <textarea
                id="videoDescription"
                placeholder="Type Here..."
                value={videoDescription}
                onChange={(e) => setVideoDescription(e.target.value)}
                className="min-h-[100px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderStep6 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Dear Care Professional Letter
        </h2>
        {renderProgressSteps()}
      </div>

      {/* Warning Message */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8">
        <div className="p-1 rounded flex-shrink-0">
          <BsFillInfoCircleFill className="w-5 h-5 text-orange-600" />
        </div>
        <p className="text-base font-normal font-inter text-[#6E330C]">
          Please complete all required fields (fields with an asterisk{" "}
          <span className="text-red-500">*</span>) before saving this page.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
        <div className="mb-6">
          <p className="text-sm font-inter font-normal text-gray-700">
            Help candidates get to know your family better by creating e profile
            and letter
          </p>
        </div>

        {/* Profile Headline */}
        <div className="space-y-2">
          <Label
            htmlFor="profileHeadline"
            className="block text-sm font-inter font-medium text-[#0A0D14]"
          >
            Profile Headline <span className="text-red-500">*</span>
          </Label>
          <Input
            id="profileHeadline"
            placeholder="Type Here..."
            value={profileHeadline}
            onChange={(e) => setProfileHeadline(e.target.value)}
            className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
          />
          <p className="text-xs flex gap-[5px] items-center text-[#525866] font-inter font-medium">
            <span className="text-[15px] text-[#525866]">
              <BsFillInfoCircleFill />
            </span>
            Write a one sentence headline about your family. (Example "New York
            City:Fun Family of 5 seeking Occupational Therapist or teacher to
            join our Team")
          </p>
        </div>

        {/* Dear Care Professional Letter */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label
              htmlFor="careProfessionalLetter"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              Dear Care Professional Letter{" "}
              <span className="text-red-500">*</span>
            </Label>
            <button
              type="button"
              className="text-[#45B5AA] text-sm font-inter font-medium hover:underline"
              onClick={() => {
                // You can implement sample letter functionality here
                console.log("Show sample letter");
              }}
            >
              Click Here for Sample Letter
            </button>
          </div>
          <textarea
            id="careProfessionalLetter"
            placeholder="Type Here..."
            value={careProfessionalLetter}
            onChange={(e) => setCareProfessionalLetter(e.target.value)}
            className="min-h-[200px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
          />
          <p className="text-xs flex gap-[5px] items-start text-[#525866] font-inter font-medium">
            <span className="text-[15px] text-[#525866] mt-0.5">
              <BsFillInfoCircleFill />
            </span>
            Please write a letter describing your family, home and lifestyle and
            caregiver responsibilities and general schedule so that candidates
            will have an understanding of your family and children needs. Please
            do not include your last name or Your contact information in this
            letter.
          </p>
        </div>
      </div>
    </div>
  );

  const renderStep7 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Family Information
        </h2>
        {renderProgressSteps()}
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-8">
        {/* Business Trips */}
        <div className="space-y-2">
          <Label
            htmlFor="businessTrips"
            className="block text-sm font-inter font-medium text-[#0A0D14]"
          >
            How often and how long do you go on business trips?{" "}
            <span className="text-red-500">*</span>
          </Label>
          <textarea
            id="businessTrips"
            placeholder="Type Here..."
            value={businessTrips}
            onChange={(e) => setBusinessTrips(e.target.value)}
            className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
          />
        </div>

        {/* Home and Community Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">
            Home and Community
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="homeType"
                className="block text-sm font-inter font-medium text-[#0A0D14] mb-1"
              >
                Is your home a... <span className="text-red-500">*</span>
              </Label>
              <Select value={homeType} onValueChange={setHomeType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single-family">
                    Single Family House
                  </SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="condo">Condominium</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="duplex">Duplex</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="communityType"
                className="block text-sm font-inter font-medium text-[#0A0D14] mb-1"
              >
                Community Type <span className="text-red-500">*</span>
              </Label>
              <Select value={communityType} onValueChange={setCommunityType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urban">Urban</SelectItem>
                  <SelectItem value="suburban">Suburban</SelectItem>
                  <SelectItem value="rural">Rural</SelectItem>
                  <SelectItem value="small-town">Small Town</SelectItem>
                  <SelectItem value="city-center">City Center</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="homeDescription"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              Describe your home <span className="text-red-500">*</span>
              <span className="text-gray-500 text-xs font-normal ml-1">
                (Size of building, number of rooms)
              </span>
            </Label>
            <textarea
              id="homeDescription"
              placeholder="Type Here..."
              value={homeDescription}
              onChange={(e) => setHomeDescription(e.target.value)}
              className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
        </div>

        {/* Your Future Care Professional Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">
            Your Future Care Professional
          </h3>

          <div className="space-y-2">
            <Label
              htmlFor="careProfessionalCriteria"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              What's most important to you when selecting a care professional to
              care for your children? <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="careProfessionalCriteria"
              placeholder="Type Here..."
              value={careProfessionalCriteria}
              onChange={(e) => setCareProfessionalCriteria(e.target.value)}
              className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
            <p className="text-xs flex gap-[5px] items-center text-[#525866] font-inter font-medium">
              <span className="text-[15px] text-[#525866]">
                <BsFillInfoCircleFill />
              </span>
              Please list 3-5 criteria starting with the most important one.
            </p>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="caregiverQualities"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              What qualities and skills do you need your caregiver to have?{" "}
              <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="caregiverQualities"
              placeholder="Type Here..."
              value={caregiverQualities}
              onChange={(e) => setCaregiverQualities(e.target.value)}
              className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="caregiverResponsibilities"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              List your caregiver's responsibilities?{" "}
              <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="caregiverResponsibilities"
              placeholder="Type Here..."
              value={caregiverResponsibilities}
              onChange={(e) => setCaregiverResponsibilities(e.target.value)}
              className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="homeRules"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              What are the most important rules in your home?{" "}
              <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="homeRules"
              placeholder="Type Here..."
              value={homeRules}
              onChange={(e) => setHomeRules(e.target.value)}
              className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="safetyConcerns"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              State any safety concerns such as-children are to wear sunscreen
              outdoors at all times or while in direct sun only, seat belts
              fastened in the car, children to be buckled in their designated
              car seats, pool rules, etc?{" "}
              <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="safetyConcerns"
              placeholder="Type Here..."
              value={safetyConcerns}
              onChange={(e) => setSafetyConcerns(e.target.value)}
              className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="educationalOpportunities"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              Describe the post-secondary accredited educational opportunities
              in your community?? <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="educationalOpportunities"
              placeholder="Type Here..."
              value={educationalOpportunities}
              onChange={(e) => setEducationalOpportunities(e.target.value)}
              className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
            <p className="text-xs flex gap-[5px] items-center text-[#525866] font-inter font-medium">
              <span className="text-[15px] text-[#525866]">
                <BsFillInfoCircleFill />
              </span>
              Please add a link to the school
            </p>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="privateBedroomDescription"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              Describe your caregiver's private bedroom?{" "}
              <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="privateBedroomDescription"
              placeholder="Type Here..."
              value={privateBedroomDescription}
              onChange={(e) => setPrivateBedroomDescription(e.target.value)}
              className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
        </div>

        {/* Additional Comments Section */}
        <div className="space-y-2">
          <Label
            htmlFor="additionalComments"
            className="block text-sm font-inter font-medium text-[#0A0D14]"
          >
            Additional Comments / requests
          </Label>
          <textarea
            id="additionalComments"
            placeholder="Type Here..."
            value={additionalComments}
            onChange={(e) => setAdditionalComments(e.target.value)}
            className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
          />
        </div>
      </div>
    </div>
  );

  const renderStep8 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-[#0A0D14] mb-4">
          Color Code Test
        </h2>
        {renderProgressSteps()}
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
        {/* Introduction Text */}
        <div className="space-y-4">
          <p className="text-base font-inter text-[#0A0D14] leading-relaxed">
            Apex Social uses Dr. Hartman's "The Color Code" test as a helpful
            tool for matching families and Care Professional. By taking just 10
            minutes to complete the test, you will:
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 p-4 bg-gray-50 rounded-lg md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm font-inter text-[#0A0D14]">
                  Learn about your "color" and personality traits
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm font-inter text-[#0A0D14]">
                  Be able to do better identify a candidate who meets your needs
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm font-inter text-[#0A0D14]">
                  Avoid candidates whom you would not be compatible with
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-sm font-inter text-[#0A0D14]">
                  <p className="mb-2">
                    Avoid candidates whom you would not be compatible with
                  </p>
                  <p className="text-xs text-[#0A0D14]">
                    Your color code profile will be upgraded, Compliments of
                    Apex Social, after you speak with a-Matching Specialists and
                    are ready to interview candidates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="-mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-inter text-[#0A0D14]">
              Every Care Professionals completes the Color Code test as part of
              our application process, and you have access to the caregiver's
              color results.
            </p>
          </div>

          {/* Link to Test */}
          <div className="mt-6">
            <a
              href="#"
              className="text-[#45B5AA] font-inter text-base hover:underline"
              onClick={(e) => {
                e.preventDefault();
                // Handle link click - could open in new tab or modal
                window.open("#", "_blank");
              }}
            >
              Take your "Color Code" Personality Analysis by Dr. Hartman text
              here
            </a>
          </div>

          {/* Color Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-2">
              <Label
                htmlFor="primaryColor"
                className="block text-sm font-inter font-medium text-[#0A0D14]"
              >
                Primary Color <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="red">Red - Power</SelectItem>
                  <SelectItem value="blue">Blue - Intimacy</SelectItem>
                  <SelectItem value="white">White - Peace</SelectItem>
                  <SelectItem value="yellow">Yellow - Fun</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="secondaryColor"
                className="block text-sm font-inter font-medium text-[#0A0D14]"
              >
                Secondary Color <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="red">Red - Power</SelectItem>
                  <SelectItem value="blue">Blue - Intimacy</SelectItem>
                  <SelectItem value="white">White - Peace</SelectItem>
                  <SelectItem value="yellow">Yellow - Fun</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep9 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Personal Reference
        </h2>
        {renderProgressSteps()}
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
        {/* Introduction Text */}
        <div className="space-y-4">
          <p className="text-base font-inter text-[#0A0D14] leading-relaxed">
            Apex Social requires that each host provides at least two
            references. Please provide your first reference on this page and the
            second reference on the next step
          </p>

          <p className="text-sm font-inter text-gray-600 leading-relaxed">
            Your references should be people who know your family well such as
            freinds or co-workers. References must be from non-relatives. Apex
            Social will email a short form to be completed by your reference.
          </p>
        </div>

        {/* Reference Information Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">
            Reference Information
          </h3>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referenceFirstName"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceFirstName"
                placeholder="Type Here..."
                value={referenceFirstName}
                onChange={(e) => setReferenceFirstName(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
            <div>
              <Label
                htmlFor="referenceLastName"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceLastName"
                placeholder="Type Here..."
                value={referenceLastName}
                onChange={(e) => setReferenceLastName(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Relationship and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referenceRelationship"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                Relationship <span className="text-red-500">*</span>
                <span className="text-gray-500 text-xs font-normal ml-1">
                  (Friend,Neighbor)
                </span>
              </Label>
              <Input
                id="referenceRelationship"
                placeholder="Type Here..."
                value={referenceRelationship}
                onChange={(e) => setReferenceRelationship(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
            <div>
              <Label
                htmlFor="referenceEmail"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceEmail"
                type="email"
                placeholder="Type Here..."
                value={referenceEmail}
                onChange={(e) => setReferenceEmail(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Phone and Mobile Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referencePhone"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                Phone <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referencePhone"
                placeholder="Type Here..."
                value={referencePhone}
                onChange={(e) => setReferencePhone(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
            <div>
              <Label
                htmlFor="referenceMobilePhone"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                Mobile Phone
              </Label>
              <Input
                id="referenceMobilePhone"
                placeholder="Type Here..."
                value={referenceMobilePhone}
                onChange={(e) => setReferenceMobilePhone(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Occupation and Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referenceOccupation"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                Occupation <span className="text-red-500">*</span>
              </Label>
              <Select
                value={referenceOccupation}
                onValueChange={setReferenceOccupation}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="business-owner">Business Owner</SelectItem>
                  <SelectItem value="consultant">Consultant</SelectItem>
                  <SelectItem value="engineer">Engineer</SelectItem>
                  <SelectItem value="lawyer">Lawyer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="referenceCountry"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                Country <span className="text-red-500">*</span>
              </Label>
              <Select
                value={referenceCountry}
                onValueChange={setReferenceCountry}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="United States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Street Address and City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referenceStreetAddress"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                Street Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceStreetAddress"
                placeholder="Type Here..."
                value={referenceStreetAddress}
                onChange={(e) => setReferenceStreetAddress(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
            <div>
              <Label
                htmlFor="referenceCity"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                City <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceCity"
                placeholder="Type Here..."
                value={referenceCity}
                onChange={(e) => setReferenceCity(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* State and Postal Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referenceState"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                State <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceState"
                placeholder="Type Here..."
                value={referenceState}
                onChange={(e) => setReferenceState(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
            <div>
              <Label
                htmlFor="referencePostalCode"
                className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
              >
                Postal Code <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referencePostalCode"
                placeholder="Type Here..."
                value={referencePostalCode}
                onChange={(e) => setReferencePostalCode(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Best time to call */}
          <div>
            <Label
              htmlFor="referenceBestTimeToCall"
              className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
            >
              Best time to call?
            </Label>
            <Input
              id="referenceBestTimeToCall"
              placeholder="Type Here..."
              value={referenceBestTimeToCall}
              onChange={(e) => setReferenceBestTimeToCall(e.target.value)}
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>

          {/* Reference Note */}
          <div className="space-y-2">
            <Label
              htmlFor="referenceNote"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              Write a brief note below for Apex Social to include in our email
              to your reference. <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="referenceNote"
              placeholder="Type Here..."
              value={referenceNote}
              onChange={(e) => setReferenceNote(e.target.value)}
              className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
            <div className="flex items-center gap-2 mt-2">
              <BsFillInfoCircleFill className="w-4 h-4 text-[#525866] mt-0.5 flex-shrink-0" />
              <p className="text-xs text-[#525866] font-inter font-medium">
                You may choose to overwrite the text with a personalized
                message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep10 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Business / Employer Reference
        </h2>
        {renderProgressSteps()}
      </div>
      {/* Warning Message */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8">
        <div className="p-1 rounded flex-shrink-0">
          <BsFillInfoCircleFill className="w-5 h-5 text-orange-600" />
        </div>
        <p className="text-base font-normal font-inter text-[#6E330C]">
          I am self employed or i am not working.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
        {/* Introduction Text */}
        <div className="space-y-4">
          <p className="text-base font-inter text-[#0A0D14] leading-relaxed">
            Please provide one professional/employment reference from a
            supervisor or co-worker.
          </p>

          <p className="text-sm font-inter text-gray-600 leading-relaxed">
            If you are self-employed or not working, Please provide a second
            personal reference. We will contact your references via your phone
            or email.
          </p>
        </div>

        {/* Reference Information Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900">
            Reference Information
          </h3>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referenceFirstName"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Reference First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceFirstName"
                placeholder="Type Here..."
                value={referenceFirstName}
                onChange={(e) => setReferenceFirstName(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
            <div>
              <Label
                htmlFor="referenceLastName"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Reference Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceLastName"
                placeholder="Type Here..."
                value={referenceLastName}
                onChange={(e) => setReferenceLastName(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Relationship and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referenceRelationship"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Relationship <span className="text-red-500">*</span>
                <span className="text-gray-500 text-xs font-normal ml-1">
                  (Friend,Neighbor)
                </span>
              </Label>
              <Input
                id="referenceRelationship"
                placeholder="Type Here..."
                value={referenceRelationship}
                onChange={(e) => setReferenceRelationship(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
            <div>
              <Label
                htmlFor="referenceEmail"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceEmail"
                type="email"
                placeholder="Type Here..."
                value={referenceEmail}
                onChange={(e) => setReferenceEmail(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Phone and Mobile Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referencePhone"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Phone <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referencePhone"
                placeholder="Type Here..."
                value={referencePhone}
                onChange={(e) => setReferencePhone(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
            <div>
              <Label
                htmlFor="referenceMobilePhone"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Company
              </Label>
              <Input
                id="referenceMobilePhone"
                placeholder="Type Here..."
                value={referenceMobilePhone}
                onChange={(e) => setReferenceMobilePhone(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Occupation and Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referenceOccupation"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Occupation <span className="text-red-500">*</span>
              </Label>
              <Select
                value={referenceOccupation}
                onValueChange={setReferenceOccupation}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="business-owner">Business Owner</SelectItem>
                  <SelectItem value="consultant">Consultant</SelectItem>
                  <SelectItem value="engineer">Engineer</SelectItem>
                  <SelectItem value="lawyer">Lawyer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="referenceCountry"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Job Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceMobilePhone"
                placeholder="Type Here..."
                value={referenceJob}
                onChange={(e) => setReferenceJob(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Street Address and City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referenceStreetAddress"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Street Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceStreetAddress"
                placeholder="Type Here..."
                value={referenceStreetAddress}
                onChange={(e) => setReferenceStreetAddress(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
            <div>
              <Label
                htmlFor="referenceCity"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                City <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceCity"
                placeholder="Type Here..."
                value={referenceCity}
                onChange={(e) => setReferenceCity(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* State and Postal Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referenceState"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                State <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referenceState"
                placeholder="Type Here..."
                value={referenceState}
                onChange={(e) => setReferenceState(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>

            <div>
              <Label
                htmlFor="referencePostalCode"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Postal Code <span className="text-red-500">*</span>
              </Label>
              <Input
                id="referencePostalCode"
                placeholder="Type Here..."
                value={referencePostalCode}
                onChange={(e) => setReferencePostalCode(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Best time to call */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="referenceCountry"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Country <span className="text-red-500">*</span>
              </Label>
              <Select
                value={referenceCountry}
                onValueChange={setReferenceCountry}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="United States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="referenceBestTimeToCall"
                className="block text-[14px] font-inter font-medium text-[#0A0D14] mb-1"
              >
                Best time to call?
              </Label>
              <Input
                id="referenceBestTimeToCall"
                placeholder="Type Here..."
                value={referenceBestTimeToCall}
                onChange={(e) => setReferenceBestTimeToCall(e.target.value)}
                className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
              />
            </div>
          </div>

          {/* Reference Note */}
          <div className="space-y-2">
            <Label
              htmlFor="referenceNote"
              className="block text-sm font-inter font-medium text-[#0A0D14]"
            >
              Write a brief note below for Apex Social to include in our email
              to your reference. <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="referenceNote"
              placeholder="Type Here..."
              value={referenceNote}
              onChange={(e) => setReferenceNote(e.target.value)}
              className="min-h-[120px] resize-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B5AA] focus:border-[#45B5AA] placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
            <div className="flex items-center gap-2 mt-2">
              <BsFillInfoCircleFill className="text-[12px] text-[#868C98] mt-0.5 flex-shrink-0" />
              <p className="text-xs text-[#525866] font-inter font-medium">
                You may choose to overwrite the text with a personalized
                message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep11 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Application Fee
        </h2>
        {renderProgressSteps()}
      </div>
      {/* Warning Message */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex flex-row items-start gap-3 sm:gap-4 mb-8">
        <div className="p-1 rounded flex-shrink-0">
          <BsFillInfoCircleFill className="w-5 h-5 text-orange-600" />
        </div>
        <p className="text-base font-normal font-inter text-[#6E330C]">
          Please note that you may read and sign the Host Family Service
          Agreement prior to paying the application fee. This step will be
          completed in the sidebar only after Apex Social staff processes your
          payment.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
        {/* Introduction Text */}
        <div className="space-y-4">
          <p className="text-[18px] font-inter text-[#45B5AA] leading-relaxed">
            Apex Social Charges a $450 application fee that covers:
          </p>
        </div>

        {/* Reference Information Section */}
        <div className="grid grid-cols-1 p-4 bg-gray-50 rounded-lg md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-5 h-5 text-[#45B5AA]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm font-inter text-[#0A0D14]">
                Personal assistance from an Apex Social Matching Specialists
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-5 h-5 text-[#45B5AA]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm font-inter text-[#0A0D14]">
                Avoid candidates whom you woulld not be compatible with
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-5 h-5 text-[#45B5AA]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm font-inter text-[#0A0D14]">
                Acess to interviewing selected candidate
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-5 h-5 text-[#45B5AA]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-sm font-inter text-[#0A0D14]">
                <p className="mb-2">
                  Upgrade of your Dr. Hartman Personality assessment “The Color
                  Code” test
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-5 h-5 text-[#45B5AA]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm font-inter text-[#0A0D14]">
                In-home interview with an Apex Social representative
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="">
              <FaAngleRight className="text-[#45B5AA]" />
            </div>
            <p className="text-[16px] font-semibold font-inter text-[#0A0D14]">
              Pay using credit cards
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[16px] font-normal font-inter text-[#525866]">
            The application is payable by credit card and is non-refundable.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src={VisaCard} alt="Visa" className="w-[60px] h-[38px]" />
            <img src={MasterCard} alt="MasterCard" className="w-[60px] h-[38px]" />
          </div>
          
        </div>
        <div className="space-y-4">
          <Button className="bg-[#1F87AD] cursor-pointer hover:bg-[#1F87AD]/90 text-white  py-2 ">
           Pay Your Application Fee Now
          </Button>
        </div>
        
      </div>
    </div>
  );

   const renderStep12 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Host Family Service Agreement
        </h2>
        {renderProgressSteps()}
      </div>
      {/* Warning Message */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex flex-row items-start gap-3 sm:gap-4 mb-8">
        <div className="p-1 rounded flex-shrink-0">
          <BsFillInfoCircleFill className="w-5 h-5 text-orange-600" />
        </div>
        <p className="text-base font-normal font-inter text-[#6E330C]">
          This step will be completed in the sidebar only after a staff member processes your signed Agreement. We recommend
using Google Chrome on your Mac or PC.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
        {/* Introduction Text */}
        <div className="space-y-4">
          <p className="text-[16px] font-normal font-inter text-[#0A0D14] leading-relaxed">
           Your Family Care Agreement will be personalized after consulting with an Apex Family Advisor to make sure we understand your unique needs and discuss options.
          </p>
        </div>

       
       
        <div className="space-y-4">
          <img src={Pdf} alt="PDF Icon" className="w-[100px] h-[100px] " />
          

         
          
        </div>
        
        
      </div>
      <div className="space-y-4 border-b pb-5">
        <p className="text-[18px] font-medium font-inter text-[#45B5AA] hover:underline cursor-pointer">
          The Exchange Program Brochure
        </p>
      </div>
    </div>
  );
  return (
    <section className="">
      <div className="w-full">
        {/* Header */}
        <div className="bg-[#F6F8FA] mt-4 md:mt-0 rounded-lg p-6 shadow-sm">
          <div>
            <h1 className="text-[18px] font-semibold text-[#0A0D14] mb-1">
              Most Family Application
            </h1>
            <p className="text-[#525866] font-inter font-normal text-[12px]">
              Required to search for Candidates
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="mt-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
          {currentStep === 6 && renderStep6()}
          {currentStep === 7 && renderStep7()}
          {currentStep === 8 && renderStep8()}
          {currentStep === 9 && renderStep9()}
          {currentStep === 10 && renderStep10()}
          {currentStep === 11 && renderStep11()}
          {currentStep === 12 && renderStep12()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 mt-8">
          <Button
            variant="outline"
            className={`px-6 py-2 ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            } border-[#45B5AA] bg-transparent text-[#45B5AA] hover:bg-[#45B5AA]/10`}
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous Step
          </Button>
          <Button
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 sm:px-8"
            onClick={handleNext}
          >
            Save and Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationContent;
