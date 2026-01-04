import { stepData } from "@/data/StepData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { MemoryIcon } from "../shared/svgs";
import { Button } from "../ui/button";

const ApplicationButtonGroup = ({ currentStep, setCurrentStep, currentStepValidateAndSubmitRef, setAllFormData }) => {
  const handlePrevious = () => {
    if (currentStep > -1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    // Simple next without validation for step 2
    setCurrentStep(currentStep + 1);
  };

  const handleSave = async () => {
    if (currentStepValidateAndSubmitRef.current) {
      const result = await currentStepValidateAndSubmitRef.current();
      if (result?.success) {
        setAllFormData((prev) => {
          const newData = [...prev];
          // Adjust index for Account Information (currentStep -1 maps to index 0)
          const dataIndex = currentStep === -1 ? 0 : currentStep + 1;
          newData[dataIndex] = result.data;
          localStorage.setItem("applicationFormData", JSON.stringify(newData));
          return newData;
        });
        toast.success("Progress saved!");
      }
    }
  };

  const handleSaveAndNext = async () => {
    if (currentStepValidateAndSubmitRef.current) {
      const result = await currentStepValidateAndSubmitRef.current();

      if (result?.success) {
        setAllFormData((prev) => {
          const newData = [...prev];
          // Adjust index for Account Information (currentStep -1 maps to index 0)
          const dataIndex = currentStep === -1 ? 0 : currentStep + 1;
          newData[dataIndex] = result.data;
          localStorage.setItem("applicationFormData", JSON.stringify(newData));

          return newData;
        });

        // If we're on the last step (Step9), navigate to completion page
        if (currentStep === stepData.length - 1) {
          setCurrentStep(stepData.length); // This will trigger YouAreAllSet component
          toast.success("Application submitted successfully!");
        } else {
          // Navigate to next regular step
          setCurrentStep(currentStep + 1);
        }
      }
    }
  };

  return (
    <div className="w-full flex gap-4 items-center justify-end mt-5">
      {currentStep > -1 && (
        <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white mr-auto" onClick={handlePrevious}>
          <ChevronLeft size={20} /> Previous
        </Button>
      )}
      {currentStep !== 2 && (
        <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white" onClick={handleSave}>
          <MemoryIcon className="w-3" /> Save
        </Button>
      )}
      <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white" onClick={currentStep === 2 ? handleNext : handleSaveAndNext}>
        {currentStep !== 2 ? <MemoryIcon className="w-3" /> : null} {currentStep === 2 ? "Next" : "Save and Next"} <ChevronRight size={20} />
      </Button>
    </div>
  );
};
export default ApplicationButtonGroup;
