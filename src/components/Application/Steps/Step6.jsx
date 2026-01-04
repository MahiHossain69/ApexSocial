import { stepData } from "@/data/StepData";
import StepTitle from "../StepTitle";
import FormField from "@/components/ui/formField";
import { useState, useEffect, useCallback } from "react";
import { z } from "zod";
import { step6Schema } from "@/lib/validationSchemas";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import ApplicationButtonGroup from "../ApplicationButtonGroup";

const Step6 = ({
  onSubmit,
  initialData,
  setValidateAndSubmitRef,
  currentStep,
  setCurrentStep,
  setAllFormData,
  currentStepValidateAndSubmitRef,
}) => {
  const [formData, setFormData] = useState(() => ({
    whatProfessionYouChoose: initialData.whatProfessionYouChoose || "",
    interestToJoinApexSocial: initialData.interestToJoinApexSocial || "",
    motivatingToGoAbroad: initialData.motivatingToGoAbroad || "",
    strengthBringingHostFamily: initialData.strengthBringingHostFamily || "",
    hobbiesAndInterests: initialData.hobbiesAndInterests || "",
    whatShouldKnowAboutYou: initialData.whatShouldKnowAboutYou || "",
    livedAwayFromHome: initialData.livedAwayFromHome || "",
  }));
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      whatProfessionYouChoose: initialData.whatProfessionYouChoose || "",
      interestToJoinApexSocial: initialData.interestToJoinApexSocial || "",
      motivatingToGoAbroad: initialData.motivatingToGoAbroad || "",
      strengthBringingHostFamily: initialData.strengthBringingHostFamily || "",
      hobbiesAndInterests: initialData.hobbiesAndInterests || "",
      whatShouldKnowAboutYou: initialData.whatShouldKnowAboutYou || "",
      livedAwayFromHome: initialData.livedAwayFromHome || "",
    });
  }, [initialData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleSelectChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const validateAndSubmit = useCallback(() => {
    try {
      const validatedData = step6Schema.parse(formData);
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
      <div className="mt-5">
        <div className="grid grid-cols-1 gap-5">
          <FormField
            id="whatProfessionYouChoose"
            label="What profession did you choose and why?"
            required
            error={errors["whatProfessionYouChoose"]}
          >
            <Textarea
              id="whatProfessionYouChoose"
              placeholder="Type Here..."
              className="resize-none h-[103px] placeholder:font-inter font-normal placeholder:text-[#868C98]"
              value={formData["whatProfessionYouChoose"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="interestToJoinApexSocial"
            label="What interests you most to joining Apex Social?"
            required
            error={errors["interestToJoinApexSocial"]}
          >
            <Textarea
              id="interestToJoinApexSocial"
              placeholder="Type Here..."
              className="resize-none h-[103px] placeholder:font-inter font-normal placeholder:text-[#868C98]"
              value={formData["interestToJoinApexSocial"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="motivatingToGoAbroad"
            label="What is motivating you to go abroad both personally and professionally?"
            required
            error={errors["motivatingToGoAbroad"]}
          >
            <Textarea
              id="motivatingToGoAbroad"
              placeholder="Type Here..."
              className="resize-none h-[103px] placeholder:font-inter font-normal placeholder:text-[#868C98]"
              value={formData["motivatingToGoAbroad"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="strengthBringingHostFamily"
            label="What strengths do you think you are bringing to the Host Family?"
            required
            error={errors["strengthBringingHostFamily"]}
          >
            <Textarea
              id="strengthBringingHostFamily"
              placeholder="Type Here..."
              className="resize-none h-[103px] placeholder:font-inter font-normal placeholder:text-[#868C98]"
              value={formData["strengthBringingHostFamily"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="hobbiesAndInterests"
            label="What are your hobbies and interests?"
            required
            error={errors["hobbiesAndInterests"]}
          >
            <Textarea
              id="hobbiesAndInterests"
              placeholder="Type Here..."
              className="resize-none h-[103px] placeholder:font-inter font-normal placeholder:text-[#868C98]"
              value={formData["hobbiesAndInterests"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="whatShouldKnowAboutYou"
            label="What else should a Host Family know about you? Include anything relevant to living with a Host Family. Do you have any special routines? Do you need any special accommodations?"
            required
            error={errors["whatShouldKnowAboutYou"]}
          >
            <Textarea
              id="whatShouldKnowAboutYou"
              placeholder="Type Here..."
              className="resize-none h-[103px] placeholder:font-inter font-normal placeholder:text-[#868C98]"
              value={formData["whatShouldKnowAboutYou"]}
              onChange={handleChange}
            />
          </FormField>

          <FormField
            id="livedAwayFromHome"
            label="Have you ever lived away from home?"
            required
            error={errors["livedAwayFromHome"]}
          >
            <RadioGroup
              onValueChange={(value) =>
                handleSelectChange("livedAwayFromHome", value)
              }
              value={formData["livedAwayFromHome"]}
              className="flex h-10"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="yes"
                  id="yes-livedAwayFromHome"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="yes-livedAwayFromHome"
                  className="cursor-pointer font-inter text-[#0A0D14] font-medium"
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="no"
                  id="no-livedAwayFromHome"
                  className="border border-gray-300 data-[state=checked]:bg-BrandPrimary data-[state=checked]:[&_*_svg]:fill-white data-[state=checked]:[&_*_svg]:stroke-white"
                />
                <Label
                  htmlFor="no-livedAwayFromHome"
                  className="cursor-pointer font-inter text-[#0A0D14] font-medium"
                >
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
  );
};
export default Step6;
