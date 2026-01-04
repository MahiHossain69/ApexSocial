import React, { useEffect } from "react";
import { stepData } from "@/data/StepData";
import YouAreAllSet from "./Steps/YouAreAllSet";

const ApplicationSteps = ({
  currentStep,
  setCurrentStep,
  allFormData,
  setAllFormData,
  currentStepValidateAndSubmitRef,
}) => {
  // Check if we're on the completion page (beyond regular steps)
  const isCompletionPage = currentStep >= stepData.length;
  const CurrentComponent = isCompletionPage ? YouAreAllSet : stepData[currentStep].component;

  const handleStepSubmit = (data) => {
    setAllFormData((prev) => {
      const newData = [...prev];
      newData[currentStep] = data;
      return newData;
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentStep]);

  return (
    <div>
      <div>
        {isCompletionPage ? (
          <CurrentComponent />
        ) : (
          <CurrentComponent
            onSubmit={handleStepSubmit}
            initialData={allFormData[currentStep]}
            setValidateAndSubmitRef={(func) =>
              (currentStepValidateAndSubmitRef.current = func)
            }
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            currentStepValidateAndSubmitRef={currentStepValidateAndSubmitRef}
            setAllFormData={setAllFormData}
          />
        )}
      </div>
    </div>
  );
};

export default ApplicationSteps;
