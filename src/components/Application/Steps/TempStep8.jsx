import React, { useState, useEffect, useCallback } from "react";
import StepTitle from "../StepTitle";
import { stepData } from "@/data/StepData";
import { z } from "zod";
import { step8Schema } from "@/lib/validationSchemas";

import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import { ReferenceItem } from "./Step8/ReferenceItem";
import ApplicationButtonGroup from "../ApplicationButtonGroup";

const Step9 = ({
  onSubmit,
  initialData = {},
  setValidateAndSubmitRef,
  currentStep,
  setCurrentStep,
  setAllFormData,
  currentStepValidateAndSubmitRef,
}) => {
  const [formData, setFormData] = useState(() => ({
    emergencyContact: initialData?.emergencyContact || {
      uploaded: false,
      file: null,
    },
    personalReference: initialData?.personalReference || {
      uploaded: false,
      file: null,
    },
    teacherReference: initialData?.teacherReference || {
      uploaded: false,
      file: null,
    },
    childcareReference1: initialData?.childcareReference1 || {
      uploaded: false,
      file: null,
    },
    childcareReference2: initialData?.childcareReference2 || {
      uploaded: false,
      file: null,
    },
  }));

  const [errors, setErrors] = useState({});

  // Update form when initialData changes
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData((prev) => ({
        emergencyContact:
          initialData?.emergencyContact || prev.emergencyContact,
        personalReference:
          initialData?.personalReference || prev.personalReference,
        teacherReference:
          initialData?.teacherReference || prev.teacherReference,
        childcareReference1:
          initialData?.childcareReference1 || prev.childcareReference1,
        childcareReference2:
          initialData?.childcareReference2 || prev.childcareReference2,
      }));
    }
  }, [initialData]);

  const handleReferenceUpload = (referenceType, file) => {
    setFormData((prev) => ({
      ...prev,
      [referenceType]: { uploaded: true, file: file },
    }));
    setErrors((prev) => ({ ...prev, [referenceType]: undefined }));
  };

  const validateAndSubmit = useCallback(() => {
    try {
      const validatedData = step8Schema.parse(formData);
      setErrors({});
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
    <div className="  ">
      <div className="min-h-screen  flex flex-col">
        <main className="flex-grow mx-auto w-full space-y-6 pb-20">
          {" "}
          {/* Added pb-20 for footer space */}
          <Card className="rounded-xl cardShadow p-6">
            <CardHeader className="p-0 mb-4">
              <StepTitle
                className="font-inter text-[#0A0D14] text-[16px] font-semibold"
                title={`${currentStep + 1}. ${
                  stepData[currentStep]?.title || ""
                }`}
              />
              <CardDescription className="text-[#525866] font-normal font-inter text-[16px] mt-2">
                Your references should be people who know you well such as
                friends, teachers, employers, or co-workers. References must be
                from non-relatives.
                <br />
                <br />
                Apex Social will contact your references to verify the
                reference; please notify them know that they will be contacted.
              </CardDescription>
            </CardHeader>
          </Card>
          <ReferenceItem
            title="Emergency Contact"
            required
            uploaded={formData.emergencyContact.uploaded}
            onUpload={(file) => handleReferenceUpload("emergencyContact", file)}
            error={errors.emergencyContact}
          />
          <ReferenceItem
            title="Personal Reference"
            required
            uploaded={formData.personalReference.uploaded}
            showDownload
            onUpload={(file) =>
              handleReferenceUpload("personalReference", file)
            }
            error={errors.personalReference}
          />
          <ReferenceItem
            title="Teacher Reference"
            required
            uploaded={formData.teacherReference.uploaded}
            showDownload
            onUpload={(file) => handleReferenceUpload("teacherReference", file)}
            error={errors.teacherReference}
          />
          <ReferenceItem
            title="Childcare Reference 1"
            required
            uploaded={formData.childcareReference1.uploaded}
            showDownload
            onUpload={(file) =>
              handleReferenceUpload("childcareReference1", file)
            }
            error={errors.childcareReference1}
          />
          <ReferenceItem
            title="Childcare Reference 2"
            required
            uploaded={formData.childcareReference2.uploaded}
            showDownload
            onUpload={(file) =>
              handleReferenceUpload("childcareReference2", file)
            }
            error={errors.childcareReference2}
          />
        </main>

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

export default Step9;
