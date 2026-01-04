"use client"

import StepTitle from "../StepTitle"
import { stepData } from "@/data/StepData"
import FormField from "@/components/ui/formField"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GoInfo } from "react-icons/go"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { RiCalendar2Line } from "react-icons/ri"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import { step2Schema } from "@/lib/validationSchemas"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

import { useState, useEffect, useCallback } from "react"
import { X } from "lucide-react"
import ApplicationButtonGroup from "../ApplicationButtonGroup"
import { MdInfo } from "react-icons/md"

const ReminderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#122523C2]/75 p-4" onClick={onClose}>
      <div className="relative w-full max-w-lg rounded-xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <h2 className="flex items-center text-xl text-neutral-900 font-inter font-semibold">
            <MdInfo className="mr-3 h-6 w-6 text-BrandPrimary" />
            Important Reminder
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 pt-0">
          <div className="rounded-lg bg-[#F6F8FA] p-4">
            <p className="text-sm font-inter font-medium text-black">
              Please use the term "Care Professional" instead of "au pair" when describing yourself throughout the
              application.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Step2 = ({
  onSubmit,
  initialData,
  setValidateAndSubmitRef,
  currentStep,
  setCurrentStep,
  setAllFormData,
  currentStepValidateAndSubmitRef,
}) => {
  const [formData, setFormData] = useState(() => ({
    dob: initialData.dob || "",
    "addressed-person": initialData["addressed-person"] || "",
    profession: initialData.profession || "",
    "vocation-training-date": initialData["vocation-training-date"] || "",
    "street-address": initialData["street-address"] || "",
    city: initialData.city || "",
    "zip-code": initialData["zip-code"] || "",
    state: initialData.state || "",
    country: initialData.country || "",
    "passport-country": initialData["passport-country"] || "",
    "facebook-url": initialData["facebook-url"] || "",
    "instagram-url": initialData["instagram-url"] || "",
    "tiktok-url": initialData["tiktok-url"] || "",
    "linkedin-url": initialData["linkedin-url"] || "",
    "youtube-url": initialData["youtube-url"] || "",
    "blog-url": initialData["blog-url"] || "",
    "website-url": initialData["website-url"] || "",
    "allergic-to-animals": initialData["allergic-to-animals"] || "",
    "have-other-allergies": initialData["have-other-allergies"] || "",
    "have-dietary-restriction": initialData["have-dietary-restriction"] || "",
    "first-aid-certificate": initialData["first-aid-certificate"] || "",
    "have-driver-certificate": initialData["have-driver-certificate"] || "",
    "comfortable-with-children": initialData["comfortable-with-children"] || "",
    "have-drive-in-snow": initialData["have-drive-in-snow"] || "",
    "enjoy-driving": initialData["enjoy-driving"] || "",
    "how-often-do-you-drive": initialData["how-often-do-you-drive"] || "",
    "year-of-experience": initialData["year-of-experience"] || "",
    "getting-license": initialData["getting-license"] || "",
    "tell-about-your-skills": initialData["tell-about-your-skills"] || "",
    "t-shirt-size": initialData["t-shirt-size"] || "",
    // Emergency Contact
    firstNamee: initialData.firstNamee || "",
    lastNamee: initialData.lastNamee || "",
    email: initialData.email || "",
    mobilePhonee: initialData.mobilePhonee || "",
    homePhone: initialData.homePhone || "",
    language: initialData.language || "",
    // Placement Information
    "afraid-of-animals": initialData["afraid-of-animals"] || "",
    "dogs-allergy": initialData["dogs-allergy"] || "",
    "cats-allergy": initialData["cats-allergy"] || "",
    "birds-allergy": initialData["birds-allergy"] || "",
    "fish-allergy": initialData["fish-allergy"] || "",
    "rodents-allergy": initialData["rodents-allergy"] || "",
    "reptiles-allergy": initialData["reptiles-allergy"] || "",
    "farm-animals-allergy": initialData["farm-animals-allergy"] || "",
    "other-allergy": initialData["other-allergy"] || "",
    "other-allergy-text": initialData["other-allergy-text"] || "",
    "other-allergies-text": initialData["other-allergies-text"] || "",
    "dietary-restrictions": initialData["dietary-restrictions"] || "",
    "no-dietary": initialData["no-dietary"] || false,
    vegan: initialData["vegan"] || false,
    vegetarian: initialData["vegetarian"] || false,
    kosher: initialData["kosher"] || false,
    pescatarian: initialData["pescatarian"] || false,
    "gluten-free": initialData["gluten-free"] || false,
    "other-dietary": initialData["other-dietary"] || false,
    "other-dietary-text": initialData["other-dietary-text"] || "",
    "dietary-importance": initialData["dietary-importance"] || "",
    "comfortable-driving-children": initialData["comfortable-driving-children"] || "",
    "enjoy-driving-question": initialData["enjoy-driving-question"] || "",
    "snow-driving-experience": initialData["snow-driving-experience"] || "",
    "driving-frequency": initialData["driving-frequency"] || "",
    "years-driving": initialData["years-driving"] || "",
    "driving-skills-experience": initialData["driving-skills-experience"] || "",
    "open-to-getting-license": initialData["open-to-getting-license"] || "",
    "dogs-fear": initialData["dogs-fear"] || "",
    "cats-fear": initialData["cats-fear"] || "",
    "birds-fear": initialData["birds-fear"] || "",
    "fish-fear": initialData["fish-fear"] || "",
    "rodents-fear": initialData["rodents-fear"] || "",
    "reptiles-fear": initialData["reptiles-fear"] || "",
    "farm-animals-fear": initialData["farm-animals-fear"] || "",
    "other-fear": initialData["other-fear"] || "",
    "other-fear-text": initialData["other-fear-text"] || "",
  }))
  const [errors, setErrors] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Update form when initialData changes
  useEffect(() => {
    setFormData({
      dob: initialData.dob || "",
      "addressed-person": initialData["addressed-person"] || "",
      profession: initialData.profession || "",
      "vocation-training-date": initialData["vocation-training-date"] || "",
      "street-address": initialData["street-address"] || "",
      city: initialData.city || "",
      "zip-code": initialData["zip-code"] || "",
      state: initialData.state || "",
      country: initialData.country || "",
      "passport-country": initialData["passport-country"] || "",
      "facebook-url": initialData["facebook-url"] || "",
      "instagram-url": initialData["instagram-url"] || "",
      "tiktok-url": initialData["tiktok-url"] || "",
      "linkedin-url": initialData["linkedin-url"] || "",
      "youtube-url": initialData["youtube-url"] || "",
      "blog-url": initialData["blog-url"] || "",
      "website-url": initialData["website-url"] || "",
      "allergic-to-animals": initialData["allergic-to-animals"] || "",
      "have-other-allergies": initialData["have-other-allergies"] || "",
      "have-dietary-restriction": initialData["have-dietary-restriction"] || "",
      "first-aid-certificate": initialData["first-aid-certificate"] || "",
      "have-driver-certificate": initialData["have-driver-certificate"] || "",
      "comfortable-with-children": initialData["comfortable-with-children"] || "",
      "have-drive-in-snow": initialData["have-drive-in-snow"] || "",
      "enjoy-driving": initialData["enjoy-driving"] || "",
      "how-often-do-you-drive": initialData["how-often-do-you-drive"] || "",
      "year-of-experience": initialData["year-of-experience"] || "",
      "getting-license": initialData["getting-license"] || "",
      "tell-about-your-skills": initialData["tell-about-your-skills"] || "",
      "t-shirt-size": initialData["t-shirt-size"] || "",
      // Emergency Contact
      firstNamee: initialData.firstNamee || "",
      lastNamee: initialData.lastNamee || "",
      email: initialData.email || "",
      mobilePhonee: initialData.mobilePhonee || "",
      homePhone: initialData.homePhone || "",
      language: initialData.language || "",
      // Placement Information
      "afraid-of-animals": initialData["afraid-of-animals"] || "",
      "dogs-allergy": initialData["dogs-allergy"] || "",
      "cats-allergy": initialData["cats-allergy"] || "",
      "birds-allergy": initialData["birds-allergy"] || "",
      "fish-allergy": initialData["fish-allergy"] || "",
      "rodents-allergy": initialData["rodents-allergy"] || "",
      "reptiles-allergy": initialData["reptiles-allergy"] || "",
      "farm-animals-allergy": initialData["farm-animals-allergy"] || "",
      "other-allergy": initialData["other-allergy"] || "",
      "other-allergy-text": initialData["other-allergy-text"] || "",
      "other-allergies-text": initialData["other-allergies-text"] || "",
      "dietary-restrictions": initialData["dietary-restrictions"] || "",
      "no-dietary": initialData["no-dietary"] || false,
      vegan: initialData["vegan"] || false,
      vegetarian: initialData["vegetarian"] || false,
      kosher: initialData["kosher"] || false,
      pescatarian: initialData["pescatarian"] || false,
      "gluten-free": initialData["gluten-free"] || false,
      "other-dietary": initialData["other-dietary"] || false,
      "other-dietary-text": initialData["other-dietary-text"] || "",
      "dietary-importance": initialData["dietary-importance"] || "",
      "comfortable-driving-children": initialData["comfortable-driving-children"] || "",
      "enjoy-driving-question": initialData["enjoy-driving-question"] || "",
      "snow-driving-experience": initialData["snow-driving-experience"] || "",
      "driving-frequency": initialData["driving-frequency"] || "",
      "years-driving": initialData["years-driving"] || "",
      "driving-skills-experience": initialData["driving-skills-experience"] || "",
      "open-to-getting-license": initialData["open-to-getting-license"] || "",
      "dogs-fear": initialData["dogs-fear"] || "",
      "cats-fear": initialData["cats-fear"] || "",
      "birds-fear": initialData["birds-fear"] || "",
      "fish-fear": initialData["fish-fear"] || "",
      "rodents-fear": initialData["rodents-fear"] || "",
      "reptiles-fear": initialData["reptiles-fear"] || "",
      "farm-animals-fear": initialData["farm-animals-fear"] || "",
      "other-fear": initialData["other-fear"] || "",
      "other-fear-text": initialData["other-fear-text"] || "",
    })
  }, [initialData])

  const handlePhoneChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
    setErrors((prev) => ({ ...prev, [id]: undefined }))
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
    setErrors((prev) => ({ ...prev, [id]: undefined }))
  }

  const handleSelectChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
    setErrors((prev) => ({ ...prev, [id]: undefined }))
  }

  const handleDateChange = (id, date) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: date,
    }))
    setErrors((prev) => ({ ...prev, [id]: undefined }))
  }

  const validateAndSubmit = useCallback(() => {
    try {
      const dataToValidate = {
        ...formData,
        dob: formData.dob || undefined,
        "vocation-training-date": formData["vocation-training-date"] || undefined,
      }

      const validatedData = step2Schema.parse(dataToValidate)
      setErrors({})

      // Call the onSubmit prop with validated data
      onSubmit(validatedData)

      return { success: true, data: validatedData }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {}
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message
        })
        setErrors(newErrors)
      }
      return { success: false }
    }
  }, [formData, onSubmit])

  // Expose validation function to parent
  useEffect(() => {
    setValidateAndSubmitRef(validateAndSubmit)
  }, [setValidateAndSubmitRef, validateAndSubmit])

  return (
    <div className="space-y-4">
      <div className="cardShadow p-4 md:p-6  border border-soft-200 rounded-[12px]">
        <StepTitle
  className="!font-inter !text-[20px] !font-semibold"
  title={`${currentStep + 1}. ${stepData[currentStep].title}`}
/>
        <div className="mt-5">
          {/* Form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              id="firstName"
              label="First Name"
              required
              error={errors.firstName}
              className="font-inter font-medium text-[14px]"
            >
              <Input
                id="firstName"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["firstName"]}
                onChange={handleChange}
              />
            </FormField>
            <FormField id="lastName" label="Last Name" required error={errors.lastName}>
              <Input
                id="lastName"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["lastName"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="dob" label="Date of Birth" required error={errors.dob}>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="dob"
                    className={cn(
                      "w-full font-inter text-[14px] justify-start text-left font-normal flex items-center gap-2",
                      !formData.dob && "text-muted-foreground",
                    )}
                  >
                    <RiCalendar2Line size={20} />
                    {formData.dob ? format(formData.dob, "MMM dd, yyyy") : "Select Here"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.dob}
                    onSelect={(date) => handleDateChange("dob", date)}
                    initialFocus
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </FormField>

            <FormField
              id="addressed-person"
              label="How would you like to be addressed?"
              required
              error={errors["addressed-person"]}
            >
              <Select
                value={formData["addressed-person"]}
                onValueChange={(value) => handleSelectChange("addressed-person", value)}
              >
                <SelectTrigger
                  id="addressed-person"
                  className="w-full ! h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                >
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr.">Mr.</SelectItem>
                  <SelectItem value="mrs.">Mrs.</SelectItem>
                  <SelectItem value="ms.">Ms.</SelectItem>
                  <SelectItem value="mss.">Mss.</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField id="profession" label="Profession" required error={errors.profession}>
              <Select value={formData.profession} onValueChange={(value) => handleSelectChange("profession", value)}>
                <SelectTrigger
                  id="profession"
                  className="w-full ! h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                >
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="businessman">Businessman</SelectItem>
                  <SelectItem value="salesman">Salesman</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              id="vocation-training-date"
              label="When did you complete or will complete your vocational studies?"
              required
              error={errors["vocation-training-date"]}
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="vocation-training-date"
                    className={cn(
                      "w-full font-inter text-[14px] justify-start text-left font-normal flex items-center gap-2",
                      !formData["vocation-training-date"] && "text-muted-foreground",
                    )}
                  >
                    <RiCalendar2Line size={20} />
                    {formData["vocation-training-date"]
                      ? format(formData["vocation-training-date"], "MMM dd, yyyy")
                      : "Select Here"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData["vocation-training-date"]}
                    onSelect={(date) => handleDateChange("vocation-training-date", date)}
                    initialFocus
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </FormField>

            <FormField id="street-address" label="Street Address" required error={errors["street-address"]}>
              <Input
                id="street-address"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["street-address"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="city" label="City" required error={errors.city}>
              <Input
                id="city"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData.city}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="zip-code" label="Postal Code/ Zip Code" required error={errors["zip-code"]}>
              <Input
                id="zip-code"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["zip-code"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="state" label="State" required error={errors.state}>
              <Input
                id="state"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData.state}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="mobilePhone" label="Mobile Phone" required error={errors.mobilePhone}>
              <PhoneInput
                country={"de"}
                value={formData.mobilePhone || ""}
                onChange={(value) => handlePhoneChange("mobilePhone", value)}
                enableSearch={true}
                placeholder="Type Here..."
                inputProps={{ required: true, id: "mobilePhone" }}
                inputClass="!w-full !h-10 !placeholder:text-[#868C98] !text-[14px] !font-inter !font-normal !rounded-md !border !border-gray-300 focus:!border-gray-400 focus:!shadow-sm"
                buttonClass="!border !border-r-0 !bg-white !rounded-l-md"
                dropdownClass="!text-gray-700 !bg-white"
              />
            </FormField>

            <FormField id="country" label="Country" required error={errors.country}>
              <Input
                id="country"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData.country}
                onChange={handleChange}
              />
            </FormField>

            <FormField
              id="passport-country"
              label="What country is your passport from?"
              required
              error={errors["passport-country"]}
            >
              <Select
                value={formData["passport-country"]}
                onValueChange={(value) => handleSelectChange("passport-country", value)}
              >
                <SelectTrigger
                  id="passport-country"
                  className="w-full  h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                >
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent className="font-inter font-normal">
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="bd">Bangladesh</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField id="facebook-url" label="Facebook" error={errors["facebook-url"]}>
              <Input
                id="facebook-url"
                placeholder="Enter your Facebook URL"
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["facebook-url"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="tiktok-url" label="TikTok" error={errors["tiktok-url"]}>
              <Input
                id="tiktok-url"
                placeholder="Enter your TikTok URL"
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["tiktok-url"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="instagram-url" label="Instagram" error={errors["instagram-url"]}>
              <Input
                id="instagram-url"
                placeholder="Enter your Instagram URL"
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["instagram-url"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="youtube-url" label="YouTube" error={errors["youtube-url"]}>
              <Input
                id="youtube-url"
                placeholder="Enter your YouTube URL"
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["youtube-url"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="linkedin-url" label="Linkedin" error={errors["linkedin-url"]}>
              <Input
                id="linkedin-url"
                placeholder="Enter your LinkedIn URL"
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["linkedin-url"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="blog-url" label="Blog" error={errors["blog-url"]}>
              <Input
                id="blog-url"
                placeholder="Enter your Blog URL"
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["blog-url"]}
                onChange={handleChange}
              />
            </FormField>
            <FormField id="website-url" label="Website" error={errors["website-url"]}>
              <Input
                id="website-url"
                placeholder="Enter your website URL"
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["website-url"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField
              className="w-full"
              id="first-aid-certificate"
              label="Do you have a first AID certificate?"
              required
              error={errors["first-aid-certificate"]}
            >
              <Select
                value={formData["first-aid-certificate"]}
                onValueChange={(value) => handleSelectChange("first-aid-certificate", value)}
              >
                <SelectTrigger
                  id="first-aid-certificate"
                  className="w-full  h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                >
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              className="w-full "
              id="t-shirt-size"
              label="What's your size for your Apex Social t-shirt?"
              required
              error={errors["t-shirt-size"]}
            >
              <Select
                value={formData["t-shirt-size"]}
                onValueChange={(value) => handleSelectChange("t-shirt-size", value)}
              >
                <SelectTrigger
                  id="t-shirt-size"
                  className="w-full ! h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                >
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="extra-small">Extra Small</SelectItem>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                  <SelectItem value="extra-large">Extra Large</SelectItem>
                </SelectContent>
              </Select>
            </FormField>
            <span className="hidden md:flex aria-hidden"></span>
            <div className="flex gap-1 items-center cursor-pointer mt-4">
              <GoInfo className="w-4 h-4 text-gray-600" />
              <h1
                onClick={() => setIsModalOpen(true)}
                className="underline text-soft-400 font-inter font-medium text-sm"
              >
                For additional info click here to see sizing chart
              </h1>
            </div>
          </div>
        </div>
        <ReminderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

      <div className="cardShadow p-4 md:p-6  border border-soft-200 rounded-[12px] bg-white">
        <div className="font-inter font-semibold text-[16px] text-main-900">
          <h1>Emergency Contact</h1>
        </div>
        <div className="w-[99%] h-[1px] mt-5 bg-soft-200"></div>

        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              id="firstNamee"
              label="First Name"
              required
              error={errors.firstNamee}
              className="font-inter font-medium text-[14px]"
            >
              <Input
                id="firstNamee"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["firstNamee"]}
                onChange={handleChange}
              />
            </FormField>
            <FormField id="lastNamee" label="Last Name" required error={errors.lastNamee}>
              <Input
                id="lastNamee"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["lastNamee"]}
                onChange={handleChange}
              />
            </FormField>
            <FormField
              id="email"
              label="Email"
              required
              error={errors.email}
              className="font-inter font-medium text-[14px]"
            >
              <Input
                id="email"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["email"]}
                onChange={handleChange}
              />
            </FormField>
            <FormField
              id="profession"
              label="Profession"
              required
              error={errors.profession}
              className="font-inter font-medium text-[14px]"
            >
              <Input
                id="profession"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["profession"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="street-addresss" label="Street Address" required error={errors["street-addresss"]}>
              <Input
                id="street-addresss"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["street-addresss"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="cityy" label="City" required error={errors.cityy}>
              <Input
                id="cityy"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData.cityy}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="zip-codee" label="Postal Code/ Zip Code" required error={errors["zip-codee"]}>
              <Input
                id="zip-codee"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["zip-codee"]}
                onChange={handleChange}
              />
            </FormField>

            <FormField id="statee" label="State" required error={errors.statee}>
              <Input
                id="statee"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData.statee}
                onChange={handleChange}
              />
            </FormField>
            <FormField id="countryy" label="Country" required error={errors.countryy}>
              <Input
                id="countryy"
                placeholder="Type Here..."
                required
                className=" h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData.countryy}
                onChange={handleChange}
              />
            </FormField>
            <FormField id="mobilePhonee" label="Mobile Phone" required error={errors.mobilePhonee}>
              <PhoneInput
                country={"de"}
                value={formData.mobilePhonee || ""}
                onChange={(value) => handlePhoneChange("mobilePhonee", value)}
                enableSearch={true}
                placeholder="Type Here..."
                inputProps={{ required: true, id: "mobilePhonee" }}
                inputClass="!w-full !h-10 !placeholder:text-[#868C98] !text-[14px] !font-inter !font-normal !rounded-md !border !border-gray-300 focus:!border-gray-400 focus:!shadow-sm"
                buttonClass="!border !border-r-0 !bg-white !rounded-l-md"
                dropdownClass="!text-gray-700 !bg-white"
              />
            </FormField>
            <FormField id="homePhone" label="Home Phone " required error={errors.homePhone}>
              <PhoneInput
                country={"de"}
                value={formData.homePhone || ""}
                onChange={(value) => handlePhoneChange("homePhone", value)}
                enableSearch={true}
                placeholder="Type Here..."
                inputProps={{ required: true, id: "homePhone" }}
                inputClass="!w-full !h-10 !placeholder:text-[#868C98] !text-[14px] !font-inter !font-normal !rounded-md !border !border-gray-300 focus:!border-gray-400 focus:!shadow-sm"
                buttonClass="!border !border-r-0 !bg-white !rounded-l-md"
                dropdownClass="!text-gray-700 !bg-white"
              />
            </FormField>
            <FormField className="w-full" id="language" label="Language " required error={errors["language"]}>
              <Select value={formData["language"]} onValueChange={(value) => handleSelectChange("language", value)}>
                <SelectTrigger
                  id="language"
                  className="w-full !h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                >
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                  <SelectItem value="arabic">Arabic</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </FormField>
          </div>
        </div>
      </div>

      <div className="cardShadow p-4 md:p-6  border border-soft-200 rounded-[12px] bg-white">
        <div className="font-inter font-semibold text-[16px] text-main-900">
          <h1>Placement Information</h1>
        </div>
        

        <div className="mt-5 space-y-6">
          {/* Animal Allergies and Fear Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="allergic-to-animals"
              label="Are you allergic to any animals?"
              required
              error={errors["allergic-to-animals"]}
            >
              <RadioGroup
                value={formData["allergic-to-animals"]}
                onValueChange={(value) => handleSelectChange("allergic-to-animals", value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="allergic-yes" className="text-[#45b5aa] border-[#45b5aa]" />
                  <Label htmlFor="allergic-yes" className="font-inter text-sm">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="allergic-no" />
                  <Label htmlFor="allergic-no" className="font-inter text-sm">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </FormField>

            <FormField
              id="afraid-of-animals"
              label="Are you afraid of any animals?"
              required
              error={errors["afraid-of-animals"]}
            >
              <RadioGroup
                value={formData["afraid-of-animals"]}
                onValueChange={(value) => handleSelectChange("afraid-of-animals", value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="afraid-yes" className="text-[#45b5aa] border-[#45b5aa]" />
                  <Label htmlFor="afraid-yes" className="font-inter text-sm">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="afraid-no" />
                  <Label htmlFor="afraid-no" className="font-inter text-sm">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </FormField>
          </div>

          {/* Animal Allergy Rating Scale */}
          <div className="space-y-4">
            <div className="text-sm font-inter text-gray-700">
              If you have animal allergies, how allergic are you to the following? (0 = Non-existent 1 = Minimal to 5 =
              Severe) <span className="text-red-500">*</span>
            </div>

            {[
              { id: "dogs-allergy", label: "Dogs" },
              { id: "cats-allergy", label: "Cats" },
              { id: "birds-allergy", label: "Birds" },
              { id: "fish-allergy", label: "Fish" },
              { id: "rodents-allergy", label: "Rodents (ie. Hamsters, Guinea Pigs, Rats, Rabbits)" },
              { id: "reptiles-allergy", label: "Reptiles (ie. Turtles, Lizards, Snakes)" },
              { id: "farm-animals-allergy", label: "Farm Animals (ie. Horses, Goats, Chickens)" },
            ].map((animal) => (
              <div key={animal.id} className="flex items-center justify-between">
                <span className="text-sm font-inter text-gray-700 flex-1">{animal.label}</span>
                <div className="flex border border-neutral-300 p-3 rounded-xl gap-2">
                  {[0, 1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleSelectChange(animal.id, rating.toString())}
                      className={`w-8 h-8 rounded-full border-2 text-sm font-medium transition-colors ${
                        formData[animal.id] === rating.toString()
                          ? "bg-[#45b5aa] border-[#45b5aa] text-white"
                          : "bg-neutral-300 border-none text-white shadow-md shadow-black/25"
                      }`}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between">
              <div className="flex gap-10 items-center">
                <span className="text-sm font-inter text-gray-700  ">Other</span>
              <Input
                  placeholder="Type Here..."
                  className="mr-auto h-5 w-64 text-xs"
                  value={formData["other-allergy-text"] || ""}
                  onChange={(e) => handleSelectChange("other-allergy-text", e.target.value)}
                />
              </div>
              <div className="flex gap-2 border border-neutral-300 p-3 rounded-xl items-center">
                {[0, 1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => handleSelectChange("other-allergy", rating.toString())}
                    className={`w-8 h-8 rounded-full border-2 text-sm font-medium transition-colors ${
                      formData["other-allergy"] === rating.toString()
                        ? "bg-[#45b5aa] border-[#45b5aa] text-white"
                        : "bg-neutral-300 border-none text-white shadow-md shadow-black/25"
                    }`}
                  >
                    {rating}
                  </button>
                ))}
                
              </div>
            </div>
          </div>

          {/* Animal Fear Rating Scale */}
          <div className="space-y-4">
            <div className="text-sm font-inter text-gray-700">
              If you are afraid of any animals, how severe is your fear to the following? (0 = Non-existent 1 = Minimal
              to 5 = Severe) <span className="text-red-500">*</span>
            </div>

            {[
              { id: "dogs-fear", label: "Dogs" },
              { id: "cats-fear", label: "Cats" },
              { id: "birds-fear", label: "Birds" },
              { id: "fish-fear", label: "Fish" },
              { id: "rodents-fear", label: "Rodents (ie. Hamsters, Guinea Pigs, Rats, Rabbits)" },
              { id: "reptiles-fear", label: "Reptiles (ie. Turtles, Lizards, Snakes)" },
              { id: "farm-animals-fear", label: "Farm Animals (ie. Horses, Goats, Chickens)" },
            ].map((animal) => (
              <div key={animal.id} className="flex items-center justify-between">
                <span className="text-sm font-inter text-gray-700 flex-1">{animal.label}</span>
                <div className="flex border border-neutral-300 p-3 rounded-xl gap-2">
                  {[0, 1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleSelectChange(animal.id, rating.toString())}
                      className={`w-8 h-8 rounded-full border-2 text-sm font-medium transition-colors ${
                        formData[animal.id] === rating.toString()
                          ? "bg-[#45b5aa] border-[#45b5aa] text-white"
                          : "bg-neutral-300 border-none text-white shadow-md shadow-black/25"
                      }`}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between">
              <div className="flex gap-10 items-center">
                <span className="text-sm font-inter text-gray-700 flex-1">Other</span>
               <Input
                  placeholder="Type Here..."
                  className="mr-auto h-5 w-64 text-xs"
                  value={formData["other-fear-text"] || ""}
                  onChange={(e) => handleSelectChange("other-fear-text", e.target.value)}
                />
              </div>
              <div className="flex border border-neutral-300 p-3 rounded-xl gap-2 items-center">
                {[0, 1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => handleSelectChange("other-fear", rating.toString())}
                    className={`w-8 h-8 rounded-full border-2 text-sm font-medium transition-colors ${
                      formData["other-fear"] === rating.toString()
                        ? "bg-[#45b5aa] border-[#45b5aa] text-white"
                        : "bg-neutral-300 border-none text-white shadow-md shadow-black/25"
                    }`}
                  >
                    {rating}
                  </button>
                ))}
               
              </div>
            </div>
          </div>

          {/* Other Allergies */}
          <FormField
            id="other-allergies-text"
            label="Do you have any other allergies? If yes, please specify."
            error={errors["other-allergies-text"]}
          >
            <Textarea
              id="other-allergies-text"
              placeholder="Type Here..."
              className="min-h-[100px] resize-none placeholder:text-[#868C98] text-[14px] font-inter font-normal"
              value={formData["other-allergies-text"] || ""}
              onChange={handleChange}
            />
          </FormField>

          {/* Dietary Restrictions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <FormField
                id="dietary-restrictions"
                label="Do you have any dietary restrictions? If yes, please specify."
                required
                error={errors["dietary-restrictions"]}
              >
                <div className="space-y-3">
                  {[
                    { id: "no-dietary", label: "No" },
                    { id: "vegan", label: "Vegan" },
                    { id: "vegetarian", label: "Vegetarian" },
                    { id: "kosher", label: "Kosher" },
                    { id: "pescatarian", label: "Pescatarian" },
                    { id: "gluten-free", label: "Gluten-free" },
                  ].map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={option.id}
                        checked={formData[option.id] || false}
                        onChange={(e) => handleSelectChange(option.id, e.target.checked)}
                        className="w-4 h-4 text-[#45b5aa] border-gray-300 rounded focus:ring-[#45b5aa]"
                      />
                      <Label htmlFor={option.id} className="font-inter text-sm">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="other-dietary"
                      checked={formData["other-dietary"] || false}
                      onChange={(e) => handleSelectChange("other-dietary", e.target.checked)}
                      className="w-4 h-4 text-[#45b5aa] border-gray-300 rounded shadow-md shadow-[#1B1C1D1F]/12"
                    />
                    <Label htmlFor="other-dietary" className="font-inter text-sm">
                      Other
                    </Label>
                    <Input
                      placeholder="Type Here..."
                      className="ml-2 h-5 w-95  text-xs"
                      value={formData["other-dietary-text"] || ""}
                      onChange={(e) => handleSelectChange("other-dietary-text", e.target.value)}
                    />
                  </div>
                </div>
              </FormField>
            </div>

            <FormField
              id="dietary-importance"
              label="How important is it to you that the host family shares or respects your dietary restrictions?"
              required
              error={errors["dietary-importance"]}
            >
              <RadioGroup
                value={formData["dietary-importance"]}
                onValueChange={(value) => handleSelectChange("dietary-importance", value)}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-important" id="not-important" />
                  <Label htmlFor="not-important" className="font-inter text-sm">
                    Not important – I'm flexible
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="somewhat-important" id="somewhat-important" />
                  <Label htmlFor="somewhat-important" className="font-inter text-sm">
                    Somewhat important – I'd prefer it, but I can adapt
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-important" id="very-important" />
                  <Label htmlFor="very-important" className="font-inter text-sm">
                    Very important – I'd like to be placed with a family whose household diet aligns with mine
                  </Label>
                </div>
              </RadioGroup>
            </FormField>
          </div>

          {/* Driving Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="have-driver-license"
              label="Do you have a drivers license?"
              required
              error={errors["have-driver-license"]}
            >
              <RadioGroup
                value={formData["have-driver-license"]}
                onValueChange={(value) => handleSelectChange("have-driver-license", value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="license-yes" className="text-[#45b5aa] border-[#45b5aa]" />
                  <Label htmlFor="license-yes" className="font-inter text-sm">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="license-no" />
                  <Label htmlFor="license-no" className="font-inter text-sm">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </FormField>

            <FormField
              id="comfortable-driving-children"
              label="Are you comfortable driving with children in your car?"
              required
              error={errors["comfortable-driving-children"]}
            >
              <RadioGroup
                value={formData["comfortable-driving-children"]}
                onValueChange={(value) => handleSelectChange("comfortable-driving-children", value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="comfortable-yes" className="text-[#45b5aa] border-[#45b5aa]" />
                  <Label htmlFor="comfortable-yes" className="font-inter text-sm">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="comfortable-no" />
                  <Label htmlFor="comfortable-no" className="font-inter text-sm">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </FormField>

            <FormField
              id="enjoy-driving-question"
              label="Do you enjoy driving?"
              required
              error={errors["enjoy-driving-question"]}
            >
              <RadioGroup
                value={formData["enjoy-driving-question"]}
                onValueChange={(value) => handleSelectChange("enjoy-driving-question", value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="enjoy-yes" className="text-[#45b5aa] border-[#45b5aa]" />
                  <Label htmlFor="enjoy-yes" className="font-inter text-sm">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="enjoy-no" />
                  <Label htmlFor="enjoy-no" className="font-inter text-sm">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </FormField>

            <FormField
              id="snow-driving-experience"
              label="Do you have experience driving in the snow?"
              required
              error={errors["snow-driving-experience"]}
            >
              <RadioGroup
                value={formData["snow-driving-experience"]}
                onValueChange={(value) => handleSelectChange("snow-driving-experience", value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="snow-yes" className="text-[#45b5aa] border-[#45b5aa]" />
                  <Label htmlFor="snow-yes" className="font-inter text-sm">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="snow-no" />
                  <Label htmlFor="snow-no" className="font-inter text-sm">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </FormField>

            <FormField
              id="driving-frequency"
              label="How often do you drive?"
              required
              error={errors["driving-frequency"]}
            >
              <Select
                value={formData["driving-frequency"]}
                onValueChange={(value) => handleSelectChange("driving-frequency", value)}
              >
                <SelectTrigger className="w-full h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="rarely">Rarely</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              id="years-driving"
              label="How many years have you been driving?"
              required
              error={errors["years-driving"]}
            >
              <Input
                id="years-driving"
                placeholder="Type Here..."
                className="h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal"
                value={formData["years-driving"] || ""}
                onChange={handleChange}
              />
            </FormField>
          </div>

          {/* Driving Skills and License Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="driving-skills-experience"
              label="Please tell us about your driving skills and experience"
              required
              error={errors["driving-skills-experience"]}
            >
              <Select
                value={formData["driving-skills-experience"]}
                onValueChange={(value) => handleSelectChange("driving-skills-experience", value)}
              >
                <SelectTrigger className="w-full h-10 placeholder:text-[#868C98] text-[14px] font-inter font-normal">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="average">Average</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              id="open-to-getting-license"
              label="If you don't have a license are you open to getting one?"
              required
              error={errors["open-to-getting-license"]}
            >
              <RadioGroup
                value={formData["open-to-getting-license"]}
                onValueChange={(value) => handleSelectChange("open-to-getting-license", value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="open-yes" className="text-[#45b5aa] border-[#45b5aa]" />
                  <Label htmlFor="open-yes" className="font-inter text-sm">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="open-no" />
                  <Label htmlFor="open-no" className="font-inter text-sm">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </FormField>
          </div>
        </div>
      <ApplicationButtonGroup
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        currentStepValidateAndSubmitRef={currentStepValidateAndSubmitRef}
        setAllFormData={setAllFormData}
      />
      </div>

    </div>
  )
}
export default Step2
