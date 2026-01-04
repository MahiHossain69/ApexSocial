import FormField from "@/components/ui/formField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import PhoneInput from "@/components/ui/phoneInput";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback } from "react";
import { RiCalendar2Line } from "react-icons/ri";
import { z } from "zod";
import { baseStepSchema } from "@/lib/validationSchemas";
import ApplicationButtonGroup from "../ApplicationButtonGroup";
import FamilyCards from "@/components/Home/FamilyCards";

const BaseStep = ({
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
    interestedWorkingCountry: initialData.interestedWorkingCountry || "",
    "passport-country": initialData["passport-country"] || "",
    howHearAboutUs: initialData.howHearAboutUs || "",
    "start-date": initialData["start-date"] || "",
  }));

  // Update form when initialData changes
  useEffect(() => {
    setFormData({
      dob: initialData.dob || "",
      "addressed-person": initialData["addressed-person"] || "",
      interestedWorkingCountry: initialData.interestedWorkingCountry || "",
      "passport-country": initialData["passport-country"] || "",
      howHearAboutUs: initialData.howHearAboutUs || "",
      "start-date": initialData["start-date"] || "",
    });
  }, [initialData]);
  const [errors, setErrors] = useState({});

  const handleSelectChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: undefined })); // Clear error for this field
  };

  const handleDateChange = (id, date) => {
    setFormData((prev) => ({ ...prev, [id]: date }));
    setErrors((prev) => ({ ...prev, [id]: undefined })); // Clear error for this field
  };

  const validateAndSubmit = useCallback(() => {
    try {
      const dataToValidate = {
        ...formData,
        dob: formData.dob || undefined,
        "start-date": formData["start-date"] || undefined,
      };

      const validatedData = baseStepSchema.parse(dataToValidate);
      setErrors({});
      // Call the onSubmit prop with validated data
      onSubmit(validatedData);

      return { success: true, data: validatedData };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
      return { success: false };
    }
  }, [formData, onSubmit]);

  // Expose validation function to parent
  useEffect(() => {
    setValidateAndSubmitRef(validateAndSubmit);
  }, [setValidateAndSubmitRef, validateAndSubmit]);

  return (
    <div className="">
      <div className="cardShadow p-4 md:p-6  border border-soft-200 rounded-[12px] bg-white">
        <div className="flex gap-4 items-center pb-5 border-b border-soft-200">
          <div className="flex max-w-[220px] h-[180px] w-full rounded-[10px] overflow-hidden">
            <img
              src="/images/application-steps/job-opening-image.webp"
              alt="Job Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 text-sm md:text-base font-inter font-normal leading-normal text-main-900">
            <p>
              🚀 Ready to Explore Job Opportunities?
              <br />
              <br />
              To view available positions tailored to your skills and interests,
              please take a moment to answer a few quick questions. <br />
              <br />
              It only takes a minute—and it helps us connect you with the right
              opportunities, faster.
            </p>
            <span>Susan & your Apex Social Team</span>
          </div>
        </div>

        {/* Form fields */}

        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              id="dob"
              label="Date of Birth"
              required
              error={errors.dob}
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="dob"
                    className={cn(
                      "w-full justify-start text-left font-inter font-normal flex items-center gap-2",
                      !formData.dob && "text-muted-foreground"
                    )}
                  >
                    <RiCalendar2Line size={20} />
                    {formData.dob
                      ? format(formData.dob, "MMM dd, yyyy")
                      : "Select Here"}
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
                onValueChange={(value) =>
                  handleSelectChange("addressed-person", value)
                }
              >
                <SelectTrigger id="addressed-person" className="w-full !h-10">
                  <SelectValue
                    placeholder="Select Here"
                    className="font-inter"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr.">Mr.</SelectItem>
                  <SelectItem value="mrs.">Mrs.</SelectItem>
                  <SelectItem value="ms.">Ms.</SelectItem>
                  <SelectItem value="mss.">Mss.</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              id="interestedWorkingCountry"
              label="What countries you are interested in working in?"
              required
              error={errors["interestedWorkingCountry"]}
            >
              <Select
                value={formData["interestedWorkingCountry"]}
                onValueChange={(value) =>
                  handleSelectChange("interestedWorkingCountry", value)
                }
              >
                <SelectTrigger
                  id="interestedWorkingCountry"
                  className="w-full !h-10"
                >
                  <SelectValue
                    placeholder="Select Here"
                    className="font-inter"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="china">China</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              id="passport-country"
              label="What country is your passport from?"
              required
              error={errors["passport-country"]}
            >
              <Select
                value={formData["passport-country"]}
                onValueChange={(value) =>
                  handleSelectChange("passport-country", value)
                }
              >
                <SelectTrigger id="passport-country" className="w-full !h-10">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="bd">Bangladesh</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              id="howHearAboutUs"
              label="How did you hear about us?"
              required
              error={errors.howHearAboutUs}
            >
              <Select
                value={formData.howHearAboutUs}
                onValueChange={(value) =>
                  handleSelectChange("howHearAboutUs", value)
                }
              >
                <SelectTrigger id="howHearAboutUs" className="w-full !h-10">
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="social-media">Social-media</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              id="start-date"
              label="What is your ideal start date?"
              required
              error={errors["start-date"]}
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="start-date"
                    className={cn(
                      "w-full justify-start text-left font-normal flex items-center gap-2 h-10",
                      !formData["start-date"] && "text-muted-foreground"
                    )}
                  >
                    <RiCalendar2Line size={20} />
                    {formData["start-date"]
                      ? format(formData["start-date"], "MMM dd, yyyy")
                      : "Select Here"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData["start-date"]}
                    onSelect={(date) => handleDateChange("start-date", date)}
                    initialFocus
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
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
      <FamilyCards />
    </div>
  );
};
export default BaseStep;
