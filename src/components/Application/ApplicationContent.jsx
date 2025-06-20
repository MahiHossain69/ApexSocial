"use client"

import { Calendar, FileText } from "lucide-react"
import { useState } from "react"
import React from 'react'
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Textarea } from "../ui/textarea"
import { Switch } from "../ui/switch"
import { Button } from "../ui/button"
import { IoIosAlert } from "react-icons/io"
import { Link } from "react-router-dom"



const ApplicationContent = () => {
     const progressSteps = Array.from({ length: 12 }, (_, i) => i + 1)
       const [hasSecondParent, setHasSecondParent] = useState(true)
        const [citizenship, setCitizenship] = useState("yes")
        const [familyStatus, setFamilyStatus] = useState("dual")
         const [gender, setGender] = useState("male")
          const [sameHousehold, setSameHousehold] = useState("yes")
          const [secondParentGender, setSecondParentGender] = useState("female")
  return (
    <section>
        <div className="bg-[#F6F8FA] mt-4 md:mt-0 rounded-lg p-6 shadow-mds">
             <div className="">
        <h1 className="text-[18px] font-semibold text-[#0A0D14] mb-1">Most Family Application</h1>
        <p className=" text-[#525866] font-inter font-normal text-[12px]">Required to search for Candidates</p>
      </div>
        </div>
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Family Information & Parent</h2>
        <div className="mb-6">
          <p className="text-sm text-gray-700 mb-3">Steps to Complete</p>
          <div className="flex justify-center sm:mt-[-31px] sm:ml-[110px] xl:ml-0 items-center space-x-2">
            {/* Current step - highlighted */}
            <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">1</span>
            </div>
            {/* Remaining steps */}
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((step) => (
              <div key={step} className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Info Box - Only show when second parent is enabled */}
        {hasSecondParent && (
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 flex items-start space-x-3 mb-8">
            <div className="p-1 bg-teal-100 rounded flex-shrink-0">
              <FileText className="w-5 h-5 text-teal-600" />
            </div>
            <p className="text-sm text-teal-800">
              Tell us about your family. When you have completed the entire application, you can begin interviewing
              candidates.
            </p>
          </div>
        )}

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 space-y-6">
          {/* Basic Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="hostFamilyName" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                Host Family Name<span className="text-red-500 ml-[5px]">*</span> <span className="text-gray-500 text-xs font-inter font-normal">(e.g. Smith Family)</span>
              </Label>
              <Input id="hostFamilyName" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
            </div>
            <div>
              <Label htmlFor="email" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input id="email" type="email" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="housePhone" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                House Phone <span className="text-red-500">*</span>
              </Label>
              <Input id="housePhone" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
            </div>
            <div>
              <Label htmlFor="streetAddress" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                Street Address <span className="text-red-500">*</span>
              </Label>
              <Input id="streetAddress" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                City <span className="text-red-500">*</span>
              </Label>
              <Input id="city" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
            </div>
            <div>
              <Label htmlFor="state" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                State <span className="text-red-500">*</span>
              </Label>
              <Input id="state" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="zipCode" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                Zip / Postal Code <span className="text-red-500">*</span>
              </Label>
              <Input id="zipCode" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
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
              <Input id="website" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
            </div>
            <div>
              <Label htmlFor="linkedin" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                LinkedIn URL <span className="text-red-500">*</span>
              </Label>
              <Input id="linkedin" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
            </div>
          </div>

          {/* Citizenship Question */}
          <div className="space-y-3">
            <Label className="block text-sm font-medium text-gray-700">
              Are both parents fluent in English & both are US Citizens or Permanent Residence{" "}
              <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={citizenship}
              onValueChange={setCitizenship}
              className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" className="" id="citizenship-yes" />
                <Label htmlFor="citizenship-yes" className="text-sm">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="citizenship-no" />
                <Label htmlFor="citizenship-no" className="text-sm">
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Family Status */}
          <div className="space-y-3">
            <Label className="block text-sm font-medium text-gray-700">Family Status</Label>
            <RadioGroup value={familyStatus} onValueChange={setFamilyStatus} className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dual" id="dual-parent" />
                <Label htmlFor="dual-parent" className="text-sm">
                  Dual Parent Household
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="single" id="single-parent" />
                <Label htmlFor="single-parent" className="text-sm">
                  Single Parent Household (Divorced, Separated, Widowed etc)
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Number of Children */}
          <div className="space-y-2">
            <Label htmlFor="numChildren" className="block text-sm font-medium text-gray-700">
              Number of Children <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="sm:w-[458px] w-74 ">
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
            <p className="text-xs flex gap-[5px] items-center text-[#525866] font-inter font-medium">
              <IoIosAlert  className="text-[15px] text-[#525866]"/>

              Include those you are expecting, adopting or live with you part-time.
            </p>
          </div>

          {/* Additional Care Question */}
          <div className="space-y-2">
            <Label htmlFor="additionalCare" className="block text-sm font-medium text-gray-700">
              Are other adult involved in the care of your child(ren)? Please describe
            </Label>
            <Textarea id="additionalCare" placeholder="Type Here..." className="min-h-[80px] resize-none" />
          </div>

          {/* How did you find us */}
          <div className="space-y-2">
            <Label htmlFor="findUs" className="block text-sm font-medium text-gray-700">
              How did you find us if via search engine, what words did you search for?{" "}
              <span className="text-red-500">*</span>
              <span className="block text-xs text-gray-500 font-normal mt-1">
                (i.e. Google search for special needs childcare, If “other” please specify. If from a freind referral, please tell us their name, so we can thank them)
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
                  <Input id="firstName" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input id="lastName" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label className="block text-sm font-medium text-gray-700">
                    Gender <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup
                    value={gender}
                    onValueChange={setGender}
                    className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="gender-male" />
                      <Label htmlFor="gender-male" className="text-sm">
                        Male
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="gender-female" />
                      <Label htmlFor="gender-female" className="text-sm">
                        Female
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="linkedinParent" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                    LinkedIn URL <span className="text-red-500">*</span>
                  </Label>
                  <Input id="linkedinParent" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="altEmail" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                    Alternative Mail
                  </Label>
                  <Input id="altEmail" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                </div>
                <div>
                  <Label htmlFor="confirmAltEmail" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                    Confirm Alternative Mail
                  </Label>
                  <Input id="confirmAltEmail" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mobilePhone" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                    Mobile Phone <span className="text-red-500">*</span>
                  </Label>
                  <Input id="mobilePhone" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                </div>
                <div>
                  <Label htmlFor="workPhone" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                    Work Phone
                  </Label>
                  <Input id="workPhone" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="birthday" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                    Birthday <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input id="birthday" placeholder="Jan 01, 1998" className="w-full pl-10" />
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="occupation" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                    Occupation <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Here" />
                    </SelectTrigger >
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
                  <Input id="jobTitle" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
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
                  <Input id="employer" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                </div>
                <div>
                  <Label htmlFor="employerAddress" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                  <Input id="employerCity" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
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
                  <Input id="employerZip" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                </div>
                <div>
                  <Label htmlFor="employerCountry" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                <Label htmlFor="second-parent" className="text-sm">
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
                <Label className="block text-sm font-medium text-gray-700">
                  Are both parents living in the same household? <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={sameHousehold}
                  onValueChange={setSameHousehold}
                  className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="household-yes" />
                    <Label htmlFor="household-yes" className="text-sm">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="household-no" />
                    <Label htmlFor="household-no" className="text-sm">
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
                      <Label htmlFor="secondFirstName" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input id="secondFirstName" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                    </div>
                    <div>
                      <Label htmlFor="secondLastName" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input id="secondLastName" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <Label className="block text-sm font-medium text-gray-700">
                        Gender <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup
                        value={secondParentGender}
                        onValueChange={setSecondParentGender}
                        className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="second-gender-male" />
                          <Label htmlFor="second-gender-male" className="text-sm">
                            Male
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="second-gender-female" />
                          <Label htmlFor="second-gender-female" className="text-sm">
                            Female
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div>
                      <Label htmlFor="secondLinkedinParent" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        LinkedIn URL <span className="text-red-500">*</span>
                      </Label>
                      <Input id="secondLinkedinParent" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="secondAltEmail" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        Alternative Mail
                      </Label>
                      <Input id="secondAltEmail" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                    </div>
                    <div>
                      <Label htmlFor="secondConfirmAltEmail" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        Confirm Alternative Mail
                      </Label>
                      <Input id="secondConfirmAltEmail" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="secondMobilePhone" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        Mobile Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input id="secondMobilePhone" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                    </div>
                    <div>
                      <Label htmlFor="secondWorkPhone" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        Work Phone
                      </Label>
                      <Input id="secondWorkPhone" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="secondBirthday" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        Birthday <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input id="secondBirthday" placeholder="Jan 01, 1998" className="w-full pl-10" />
                        <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="secondOccupation" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        Occupation <span className="text-red-500">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Here" />
                        </SelectTrigger >
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
                      <Label htmlFor="secondJobTitle" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        Job Title / Profession <span className="text-red-500">*</span>
                      </Label>
                      <Input id="secondJobTitle" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                    </div>
                    <div>
                      <Label htmlFor="secondEducation" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                      <Label htmlFor="secondEmployer" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        Employer <span className="text-red-500">*</span>
                      </Label>
                      <Input id="secondEmployer" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                    </div>
                    <div>
                      <Label htmlFor="secondEmployerAddress" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                      <Label htmlFor="secondEmployerCity" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        Employer City <span className="text-red-500">*</span>
                      </Label>
                      <Input id="secondEmployerCity" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                    </div>
                    <div>
                      <Label htmlFor="secondEmployerState" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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
                      <Label htmlFor="secondEmployerZip" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
                        Employer Zip / Postal Code <span className="text-red-500">*</span>
                      </Label>
                      <Input id="secondEmployerZip" placeholder="Type Here..." className="w-full placeholder:text-[#868C98] placeholder:text-[14px] placeholder:font-inter placeholder:font-normal" />
                    </div>
                    <div>
                      <Label htmlFor="secondEmployerCountry" className="block text-[14px] font-inter font-medium text-gray-700 mb-1">
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

          {/* Save and Next Button */}
          <div className="flex justify-end pt-6 border-t">
            <Link to="#">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 sm:px-8">Save and Next</Button>
            </Link>
          </div>
        </div>
     
  

            
    </section>
  )
}

export default ApplicationContent
