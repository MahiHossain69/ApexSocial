import { stepData } from "@/data/StepData";
import StepTitle from "../StepTitle";
import FormField from "@/components/ui/formField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect, useCallback } from "react";
import { z } from "zod";
import { step4Schema } from "@/lib/validationSchemas";
import { ColorPlate } from "@/components/shared/svgs";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ApplicationButtonGroup from "../ApplicationButtonGroup";

const Step4 = ({
  onSubmit,
  initialData,
  setValidateAndSubmitRef,
  currentStep,
  setCurrentStep,
  setAllFormData,
  currentStepValidateAndSubmitRef,
}) => {
  const [formData, setFormData] = useState(() => ({
    primaryColorCode: initialData.primaryColorCode || "",
    secondaryColorCode: initialData.secondaryColorCode || "",
  }));
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      primaryColorCode: initialData.primaryColorCode || "",
      secondaryColorCode: initialData.secondaryColorCode || "",
    });
  }, [initialData]);

  const handleSelectChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const validateAndSubmit = useCallback(() => {
    try {
      const validatedData = step4Schema.parse(formData);
      setErrors({});
      onSubmit(validatedData); // Call onSubmit with validated data
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

  useEffect(() => {
    setValidateAndSubmitRef(validateAndSubmit);
  }, [setValidateAndSubmitRef, validateAndSubmit]);

  return (
    <div className="cardShadow p-4 md:p-6  border border-soft-200 rounded-[12px] bg-white">
      <StepTitle title={`${currentStep + 1}. ${stepData[currentStep].title}`} />
      <div className="px-4 md:px-5 py-3 md:py-4 rounded-2xl bg-[#f6f8fa] mt-5">
        <div>
          <div className="flex gap-3 text-main-900">
            <ColorPlate />{" "}
            <span className="font-inter font-medium text-[16px]">
              The Color Code
            </span>
          </div>

          <div className="mt-2">
            <Link
              to={"#"}
              className="w-fit inline gap-2 items-center text-BrandPrimary font-medium text-sm leading-relaxed"
            >
              <span className="underline font-medium font-inter text-[14px]">
                Start your Color Code Test with your apex-social.org email
              </span>
              <ChevronRight className="inline" size={16} />
            </Link>
          </div>

          <div className="mt-2">
            <span className="inline font-medium font-inter text-sm leading-relaxed">
              Note that the Color Code Test is in English. We have developed
              &nbsp;
              <Link
                to={"#"}
                className="mt-2 w-fit inline gap-2 items-center text-BrandPrimary "
              >
                <span className="underline font-inter">
                  a German translation as an aid for you.
                </span>
                <ChevronRight className="inline" size={16} />
              </Link>
            </span>
          </div>

          <span className="mt-8 flex font-medium font-inter text-sm md:text-base ">
            Please enter the result of your color code test:
          </span>

          <div className="flex flex-col gap-5 mt-2">
            <FormField
              id="primaryColorCode"
              label="Primary Color"
              required
              error={errors.primaryColorCode}
              description={
                <span className="font-inter font-medium italic text-[#0A0D14] text-[12px]">
                  You will receive your secondary color after you have paid the
                  registration fee. Please leave blank if you don't know
                  secondary color yet.
                </span>
              }
            >
              <Select
                value={formData.primaryColorCode}
                onValueChange={(value) =>
                  handleSelectChange("primaryColorCode", value)
                }
              >
                <SelectTrigger
                  id="primaryColorCode"
                  className="w-full md:w-1/2 !h-10 bg-white"
                >
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="yellow">Yellow</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              id="secondaryColorCode"
              label="Secondary Color"
              required
              error={errors.secondaryColorCode}
            >
              <Select
                value={formData.secondaryColorCode}
                onValueChange={(value) =>
                  handleSelectChange("secondaryColorCode", value)
                }
              >
                <SelectTrigger
                  id="secondaryColorCode"
                  className="w-full md:w-1/2 !h-10 bg-white"
                >
                  <SelectValue placeholder="Select Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="yellow">Yellow</SelectItem>
                </SelectContent>
              </Select>
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
  );
};
export default Step4;
