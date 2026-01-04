import { stepData } from "@/data/StepData";
import StepTitle from "../StepTitle";
import FormField from "@/components/ui/formField";
import { useState, useEffect, useCallback } from "react";
import { z } from "zod";
import { step7Schema } from "@/lib/validationSchemas";
import { Textarea } from "@/components/ui/textarea";
import ApplicationButtonGroup from "../ApplicationButtonGroup";

const Step7 = ({
  onSubmit,
  initialData,
  setValidateAndSubmitRef,
  currentStep,
  setCurrentStep,
  setAllFormData,
  currentStepValidateAndSubmitRef,
}) => {
  const [formData, setFormData] = useState(() => ({
    letterToHostFamily: initialData.letterToHostFamily || "",
  }));
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      letterToHostFamily: initialData.letterToHostFamily || "",
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

  const validateAndSubmit = useCallback(() => {
    try {
      const validatedData = step7Schema.parse(formData);
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
            id="letterToHostFamily"
            label="Please write a letter (2-3 short paragraphs) to your host family and give a summary about you, your skills and experiences in your life."
            required
            error={errors["letterToHostFamily"]}
          >
            <Textarea
              id="letterToHostFamily"
              placeholder="Type Here..."
              className="resize-none h-[200px] sm:h-[600px] md:h-[900px] placeholder:font-inter font-normal placeholder:text-[#868C98]"
              value={formData["letterToHostFamily"]}
              onChange={handleChange}
            />
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
export default Step7;
