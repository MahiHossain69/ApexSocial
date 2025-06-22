"use client"

import { Calendar, FileText, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { IoIosAlert } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";


import { cn } from "@/lib/utils"

const ApplicationContent = () => {
  const totalSteps = 12
  const [currentStep, setCurrentStep] = useState(1)

  // Step 1 states
  const [hasSecondParent, setHasSecondParent] = useState(true)
  const [citizenship, setCitizenship] = useState("yes")
  const [familyStatus, setFamilyStatus] = useState("dual")
  const [gender, setGender] = useState("male")
  const [sameHousehold, setSameHousehold] = useState("yes")
  const [secondParentGender, setSecondParentGender] = useState("female")

  // Date picker states
  const [firstParentBirthday, setFirstParentBirthday] = useState(null)
  const [secondParentBirthday, setSecondParentBirthday] = useState(null)
  const [firstParentCalendarOpen, setFirstParentCalendarOpen] = useState(false)
  const [secondParentCalendarOpen, setSecondParentCalendarOpen] = useState(false)
  const [earliestStartDate, setEarliestStartDate] = useState(null)
  const [latestStartDate, setLatestStartDate] = useState(null)
  const [earliestStartCalendarOpen, setEarliestStartCalendarOpen] = useState(false)
  const [latestStartCalendarOpen, setLatestStartCalendarOpen] = useState(false)

  // Step 2 states
  const [candidateSearch, setCandidateSearch] = useState("international")
  const [idealGender, setIdealGender] = useState("male")
  const [needSwimmer, setNeedSwimmer] = useState("yes")
  const [acceptSmoker, setAcceptSmoker] = useState("yes")
  const [needDriver, setNeedDriver] = useState("yes")
  const [workSituation, setWorkSituation] = useState("both-outside")
  const [ageGroups, setAgeGroups] = useState({
    "0-6": false,
    "6-12": false,
    "1-2": false,
    "3-6": false,
    "7-10": false,
    "11-15": false,
    "16-18": false,
  })
  const [languages, setLanguages] = useState({
    "no-preference": false,
    english: false,
    german: false,
    hungarian: false,
    arabic: false,
    bengali: false,
  })

  const DatePicker = ({
    date,
    setDate,
    placeholder = "Select date",
    isOpen,
    setIsOpen,
  }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const formatDate = (date) => {
      if (!date) return placeholder
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    }

    const getDaysInMonth = (date) => {
      const year = date.getFullYear()
      const month = date.getMonth()
      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)
      const daysInMonth = lastDay.getDate()
      const startingDayOfWeek = firstDay.getDay()

      const days = []
      for (let i = 0; i < startingDayOfWeek; i++) {
        days.push(null)
      }
      for (let day = 1; day <= daysInMonth; day++) {
        days.push(new Date(year, month, day))
      }

      return days
    }

    const navigateMonth = (direction) => {
      setCurrentMonth((prev) => {
        const newMonth = new Date(prev)
        newMonth.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1))
        return newMonth
      })
    }

    const selectDate = (selectedDate) => {
      setDate(selectedDate)
      setIsOpen(false)
    }

    const isToday = (date) => {
      const today = new Date()
      return date.toDateString() === today.toDateString()
    }

    const isSelected = (checkDate) => {
      return date && checkDate.toDateString() === date.toDateString()
    }

    const days = getDaysInMonth(currentMonth)
    const monthYear = currentMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })

    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <Calendar className="mr-2 h-4 w-4" />
          {formatDate(date)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")} className="h-8 w-8 p-0">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h3 className="text-sm font-medium">{monthYear}</h3>
            <Button variant="outline" size="sm" onClick={() => navigateMonth("next")} className="h-8 w-8 p-0">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-muted-foreground p-2">
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
                      isSelected(day) && "bg-primary text-primary-foreground hover:bg-primary",
                      isToday(day) && !isSelected(day) && "bg-accent text-accent-foreground"
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
                setDate(new Date())
                setIsOpen(false)
              }}
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setDate(null)
                setIsOpen(false)
              }}
            >
              Clear
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
    )
  }

 const handleStepClick = (step) => {
  setCurrentStep(step)
}

const handleNext = () => {
  if (currentStep < totalSteps) {
    setCurrentStep(currentStep + 1)
  }
}

const handlePrevious = () => {
  if (currentStep > 1) {
    setCurrentStep(currentStep - 1)
  }
}

const handleAgeGroupChange = (group) => {
  setAgeGroups((prev) => ({
    ...prev,
    [group]: !prev[group],
  }))
}

const handleLanguageChange = (language) => {
  setLanguages((prev) => ({
    ...prev,
    [language]: !prev[language],
  }))
}

  const renderProgressSteps = () => (
    <div className="mb-6">
  <p className="text-sm font-inter text-gray-700 mb-3">Steps to Complete</p>
  <div className="flex justify-center sm:mt-[-31px] sm:ml-[110px] xl:ml-0 items-center space-x-2 overflow-x-auto pb-2">
    {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
      const isCurrent = step === currentStep
      const isCompleted = step < currentStep
      const isUpcoming = step > currentStep

      return (
        <div
          key={step}
          className={`min-w-[20px] w-5 h-5 rounded-full flex items-center justify-center cursor-pointer transition-colors border-2 border-[#E2E4E9] text-[#E2E4E9] bg-transparent ${
            isCurrent
              ? "border-2 border-[#45B5AA]! text-[#45B5AA]!"
              : isCompleted
              ? "bg-[#45B5AA]! text-[#fff]! border-none!"
              : ""
          }`}
          onClick={() => handleStepClick(step)}
        >
          <span className="text-sm font-inter font-medium">{step}</span>
        </div>
      )
    })}
  </div>
</div>

  )

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Family Information & Parent</h2>
        {renderProgressSteps()}
      </div>

      {hasSecondParent && (
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 flex items-start space-x-3 mb-8">
          <div className="p-1 bg-teal-100 rounded flex-shrink-0">
            <FileText className="w-5 h-5 text-teal-600" />
          </div>
          <p className="text-sm font-inter text-teal-800">
            Tell us about your family. When you have completed the entire application, you can begin interviewing
            candidates.
          </p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
        {/* Basic Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="hostFamilyName" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
              Host Family Name<span className="text-red-500 ml-[5px]">*</span>{" "}
              <span className="text-gray-500 text-xs font-inter font-normal">(e.g. Smith Family)</span>
            </Label>
            <Input
              id="hostFamilyName"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
          <div>
            <Label htmlFor="email" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
            <Label htmlFor="housePhone" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
              House Phone <span className="text-red-500">*</span>
            </Label>
            <Input
              id="housePhone"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
          <div>
            <Label htmlFor="streetAddress" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
            <Label htmlFor="city" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </Label>
            <Input
              id="city"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
          <div>
            <Label htmlFor="state" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
            <Label htmlFor="zipCode" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
              Zip / Postal Code <span className="text-red-500">*</span>
            </Label>
            <Input
              id="zipCode"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
          <div>
            <Label htmlFor="country" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
            <Label htmlFor="website" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
              Website / Family Blog <span className="text-red-500">*</span>
            </Label>
            <Input
              id="website"
              placeholder="Type Here..."
              className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
            />
          </div>
          <div>
            <Label htmlFor="linkedin" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
          <Label className="block text-sm font-inter font-medium text-gray-700">
            Are both parents fluent in English & both are US Citizens or Permanent Residence{" "}
            <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={citizenship}
            onValueChange={setCitizenship}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="citizenship-yes" />
              <Label htmlFor="citizenship-yes" className="text-sm font-inter">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="citizenship-no" />
              <Label htmlFor="citizenship-no" className="text-sm font-inter">
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Family Status */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-gray-700">Family Status</Label>
          <RadioGroup value={familyStatus} onValueChange={setFamilyStatus} className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dual" id="dual-parent" />
              <Label htmlFor="dual-parent" className="text-sm font-inter">
                Dual Parent Household
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="single" id="single-parent" />
              <Label htmlFor="single-parent" className="text-[11px] sm:text-sm font-inter w-full">
                Single Parent Household (Divorced, Separated, Widowed etc)
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Number of Children */}
        <div className="space-y-2">
          <Label htmlFor="numChildren" className="block text-sm font-inter font-medium text-gray-700">
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
            <span className="text-[18px] sm:text-[15px] text-[#525866]"><IoIosAlert />
</span>
            Include those you are expecting, adopting or live with you part-time.
          </p>
        </div>

        {/* Additional Care Question */}
        <div className="space-y-2">
          <Label htmlFor="additionalCare" className="block text-sm font-inter font-medium text-gray-700">
            Are other adult involved in the care of your child(ren)? Please describe
          </Label>
          <Textarea id="additionalCare" placeholder="Type Here..." className="min-h-[80px] resize-none" />
        </div>

        {/* How did you find us */}
        <div className="space-y-2">
          <Label htmlFor="findUs" className="block text-sm font-inter font-medium text-gray-700">
            How did you find us if via search engine, what words did you search for?{" "}
            <span className="text-red-500">*</span>
            <span className="block text-xs text-gray-500 font-normal mt-1">
              (i.e. Google search for special needs childcare, If "other" please specify. If from a freind referral,
              please tell us their name, so we can thank them)
            </span>
          </Label>
          <Textarea id="findUs" placeholder="Type Here..." className="min-h-[80px] resize-none" />
        </div>

        {/* Parent 1 Section */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Parent One</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                <Label className="block text-sm font-inter font-medium text-gray-700">
                  Gender <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={gender}
                  onValueChange={setGender}
                  className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="gender-male" />
                    <Label htmlFor="gender-male" className="text-sm font-inter">
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="gender-female" />
                    <Label htmlFor="gender-female" className="text-sm font-inter">
                      Female
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="linkedinParent" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                <Label htmlFor="altEmail" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                <Label htmlFor="mobilePhone" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                  Mobile Phone <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="mobilePhone"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
              <div>
                <Label htmlFor="workPhone" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                <Label htmlFor="birthday" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                <Label htmlFor="occupation" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                <Label htmlFor="jobTitle" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                  Job Title / Profession <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="jobTitle"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
              <div>
                <Label htmlFor="education" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                <Label htmlFor="employer" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                  Employer Street Address <span className="text-red-500">*</span>
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
                <Label htmlFor="employerCity" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                  Employer City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="employerCity"
                  placeholder="Type Here..."
                  className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
                />
              </div>
              <div>
                <Label htmlFor="employerState" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                <Label htmlFor="employerZip" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                  Employer Zip / Postal Code <span className="text-red-500">*</span>
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
            <h3 className="text-lg font-medium text-gray-900">Is there a Second Parent</h3>
            <div className="flex items-center space-x-2">
              <Label htmlFor="second-parent" className="text-sm font-inter">
                {hasSecondParent ? "Yes" : "No"}
              </Label>
              <Switch id="second-parent" checked={hasSecondParent} onCheckedChange={setHasSecondParent} />
            </div>
          </div>
        </div>

        {/* Second Parent Sections - Only show when toggle is enabled */}
        {hasSecondParent && (
          <div className="space-y-6 animate-in slide-in-from-top-4 duration-300">
            {/* Same Household Question */}
            <div className="space-y-3">
              <Label className="block text-sm font-inter font-medium text-gray-700">
                Are both parents living in the same household? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={sameHousehold}
                onValueChange={setSameHousehold}
                className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="household-yes" />
                  <Label htmlFor="household-yes" className="text-sm font-inter">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="household-no" />
                  <Label htmlFor="household-no" className="text-sm font-inter">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Second Parent Section */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Second Parent</h3>

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
                    <Label className="block text-sm font-inter font-medium text-gray-700">
                      Gender <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      value={secondParentGender}
                      onValueChange={setSecondParentGender}
                      className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="second-gender-male" />
                        <Label htmlFor="second-gender-male" className="text-sm font-inter">
                          Male
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="second-gender-female" />
                        <Label htmlFor="second-gender-female" className="text-sm font-inter">
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
                      htmlFor="secondJobTitle"
                      className="block text-[14px] font-inter font-medium text-gray-700 mb-1"
                    >
                      Job Title / Profession <span className="text-red-500">*</span>
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
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
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
              <h3 className="text-lg font-medium text-gray-900 mb-4">Second Parent Employer</h3>

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
                      Employer Street Address <span className="text-red-500">*</span>
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
                      Employer Zip / Postal Code <span className="text-red-500">*</span>
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
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Care Professional Preferences</h2>
        {renderProgressSteps()}
      </div>

      {/* Warning Message */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center space-x-3 mb-8">
        <div className="p-1  rounded flex-shrink-0">
          <BsFillInfoCircleFill
 className="w-5 h-5 text-orange-600" />
        </div>
        <p className="text-sm font-inter text-orange-800">
          Please complete all required fields (fields with an asterisk *) before saving this page.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
        {/* Candidate Search Type */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-gray-700">
            What type of candidate search are you interested in engaging in? <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={candidateSearch}
            onValueChange={setCandidateSearch}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="international" id="candidate-international" />
              <Label htmlFor="candidate-international" className="text-sm font-inter">
                International Care Professionals
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="american" id="candidate-american" />
              <Label htmlFor="candidate-american" className="text-sm font-inter">
                American Care Professionals
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="candidate-all" />
              <Label htmlFor="candidate-all" className="text-sm font-inter">
                I'm interested in all Care Professionals
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Date Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="earliest-start" className="block text-sm font-inter font-medium text-gray-700 mb-1">
              Earliest start date of your caregiver? <span className="text-red-500">*</span>
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
            <Label htmlFor="latest-start" className="block text-sm font-inter font-medium text-gray-700 mb-1">
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
          <Label className="block text-sm font-inter font-medium text-gray-700">
            What would be the gender of your ideal candidate? <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={idealGender}
            onValueChange={setIdealGender}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="ideal-male" />
              <Label htmlFor="ideal-male" className="text-sm font-inter">
                Male
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="ideal-female" />
              <Label htmlFor="ideal-female" className="text-sm font-inter">
                Female
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="open" id="ideal-open" />
              <Label htmlFor="ideal-open" className="text-sm font-inter">
                Open to any gender
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Age Groups */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-gray-700">
            What age group should your caregiver have experience with? <span className="text-red-500">*</span>
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
                <Checkbox
                  id={`age-${key}`}
                  checked={ageGroups[key]}
                  onCheckedChange={() => handleAgeGroupChange(key)}
                />
                <Label htmlFor={`age-${key}`} className="text-sm font-inter">
                  {label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Swimmer */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-gray-700">
            Do you need a swimmer <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={needSwimmer}
            onValueChange={setNeedSwimmer}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="swimmer-yes" />
              <Label htmlFor="swimmer-yes" className="text-sm font-inter">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="swimmer-no" />
              <Label htmlFor="swimmer-no" className="text-sm font-inter">
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Smoker */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-gray-700">
            Would you accept a smoker? <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={acceptSmoker}
            onValueChange={setAcceptSmoker}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="smoker-yes" />
              <Label htmlFor="smoker-yes" className="text-sm font-inter">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="smoker-no" />
              <Label htmlFor="smoker-no" className="text-sm font-inter">
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Languages */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-gray-700">
            What languages should your caregiver speak? <span className="text-red-500">*</span>
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
                <Checkbox
                  id={`lang-${key}`}
                  checked={languages[key]}
                  onCheckedChange={() => handleLanguageChange(key)}
                />
                <Label htmlFor={`lang-${key}`} className="text-sm font-inter">
                  {label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Driver */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-gray-700">
            Do you need a driver? <span className="text-red-500">*</span>
          </Label>
          <RadioGroup
            value={needDriver}
            onValueChange={setNeedDriver}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="driver-yes" />
              <Label htmlFor="driver-yes" className="text-sm font-inter">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="driver-no" />
              <Label htmlFor="driver-no" className="text-sm font-inter">
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Transportation */}
        <div className="space-y-2">
          <Label htmlFor="transportation" className="block text-sm font-inter font-medium text-gray-700">
            What kind of transportation options will be available to your caregiver?{" "}
            <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="transportation"
            placeholder="Type Here..."
            className="min-h-[100px] w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
          />
        </div>

        {/* Personality */}
        <div className="space-y-2">
          <Label htmlFor="personality" className="block text-sm font-inter font-medium text-gray-700">
            How would you describe your ideal caregiver's personality? <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="personality"
            placeholder="Type Here..."
            className="min-h-[100px] w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal"
          />
        </div>

        {/* Work Situation */}
        <div className="space-y-3">
          <Label className="block text-sm font-inter font-medium text-gray-700">
            Please describe your family's work situation. <span className="text-red-500">*</span>
          </Label>
          <RadioGroup value={workSituation} onValueChange={setWorkSituation} className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="both-outside" id="work-both-outside" />
              <Label htmlFor="work-both-outside" className="text-sm font-inter">
                Both Parents working outside the home
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="both-home" id="work-both-home" />
              <Label htmlFor="work-both-home" className="text-sm font-inter">
                Both Parents working from home
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-home" id="work-one-home" />
              <Label htmlFor="work-one-home" className="text-sm font-inter">
                One Parent working from home
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="stay-home" id="work-stay-home" />
              <Label htmlFor="work-stay-home" className="text-sm font-inter">
                Stay at home parent
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )

  return (
    <section className="">
      <div className="w-full">
        {/* Header */}
        <div className="bg-[#F6F8FA] mt-4 md:mt-0 rounded-lg p-6 shadow-sm">
          <div>
            <h1 className="text-[18px] font-semibold text-[#0A0D14] mb-1">Most Family Application</h1>
            <p className="text-[#525866] font-inter font-normal text-[12px]">Required to search for Candidates</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="mt-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6  mt-8">
          <Button
            variant="outline"
            className={`px-6 py-2 ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous Step
          </Button>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 sm:px-8" onClick={handleNext}>
            Save and Next
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ApplicationContent
