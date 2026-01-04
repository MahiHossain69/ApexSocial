"use client";
import { DocumentIcon } from "@/components/shared/svgs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { stepData } from "@/data/StepData";
import { cn } from "@/lib/utils";
import { step9Schema } from "@/lib/validationSchemas";
import { Info } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { IoAlertCircle, IoCheckmarkCircle } from "react-icons/io5";
import { z } from "zod";
import ApplicationButtonGroup from "../ApplicationButtonGroup";
import StepTitle from "../StepTitle";
import DocumentUploadModal from "./DocumentUploadModal";
import TipsForUploadingDocumentModal from "./TipsForUploadingDocumentModal";

function DocumentItem({ name = "", status = "not_uploaded", showDownload = false, showInfoIcon = true, onUpload, error, existingFile = null }) {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isTipsModalOpen, setIsTipsModalOpen] = useState(false);
  const isUploaded = status === "uploaded";
  const iconColorClass = isUploaded ? "text-[#20B2AA]" : "text-soft-400";

  const handleUploadClick = () => {
    setIsUploadModalOpen(true);
  };

  const handleUploadSave = (file) => {
    if (file && typeof onUpload === "function") {
      onUpload(file);
    }
  };

  const handleUploadDelete = () => {
    if (typeof onUpload === "function") {
      onUpload(null); // Pass null to indicate deletion
    }
  };

  return (
    <div>
      <Card className={cn("w-full cardShadow rounded-xl")}>
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <DocumentIcon className="h-5 w-5 " />
            <span className=" text-[#0A0D14] font-inter font-semibold text-[16px]">{name}</span>
            {isUploaded ? (
              <IoCheckmarkCircle className="h-[21px] w-[21px] text-[#43B4A9]" />
            ) : (
              <IoAlertCircle className={cn("h-[21px] w-[21px] !text-soft-400", error && "!text-negative", iconColorClass)} />
            )}
            {showInfoIcon && <Info className="h-3.5 w-3.5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" onClick={() => setIsTipsModalOpen(true)} />}
          </div>
          <div className="flex gap-2">
            {showDownload && (
              <Button variant="ghost" className="text-[#20B2AA] bg-[#EDF8F7] hover:text-white font-inter font-semibold text-[14px] hover:bg-[#20B2AA]">
                Download PDF
              </Button>
            )}
            <Button onClick={handleUploadClick} className="bg-[#20B2AA] hover:bg-[#1A9B93] font-inter  font-semibold text-[14px] text-white">
              Upload
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upload Modal */}
      <DocumentUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        documentName={name}
        existingFile={existingFile}
        onSave={handleUploadSave}
        onDelete={handleUploadDelete}
      />

      {/* Tips Modal */}
      <TipsForUploadingDocumentModal isOpen={isTipsModalOpen} onClose={() => setIsTipsModalOpen(false)} />
    </div>
  );
}

const Step9 = ({ onSubmit, initialData = {}, setValidateAndSubmitRef, currentStep, setCurrentStep, setAllFormData, currentStepValidateAndSubmitRef }) => {
  const [formData, setFormData] = useState(() => ({
    validPassport: initialData?.validPassport || {
      uploaded: false,
      file: null,
    },
    degreeCertificate: initialData?.degreeCertificate || {
      uploaded: false,
      file: null,
    },
    criminalRecord: initialData?.criminalRecord || {
      uploaded: false,
      file: null,
    },
    driverLicense: initialData?.driverLicense || {
      uploaded: false,
      file: null,
    },
    physicianReport: initialData?.physicianReport || {
      uploaded: false,
      file: null,
    },
    childcareWorksheet: initialData?.childcareWorksheet || {
      uploaded: false,
      file: null,
    },
  }));

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update form when initialData changes
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData((prev) => ({
        validPassport: initialData?.validPassport || prev.validPassport,
        degreeCertificate: initialData?.degreeCertificate || prev.degreeCertificate,
        criminalRecord: initialData?.criminalRecord || prev.criminalRecord,
        driverLicense: initialData?.driverLicense || prev.driverLicense,
        physicianReport: initialData?.physicianReport || prev.physicianReport,
        childcareWorksheet: initialData?.childcareWorksheet || prev.childcareWorksheet,
      }));
    }
  }, [initialData]);

  const handleDocumentUpload = (documentType, file) => {
    if (file === null) {
      // Handle deletion
      setFormData((prev) => ({
        ...prev,
        [documentType]: { uploaded: false, file: null },
      }));
    } else {
      // Handle upload
      setFormData((prev) => ({
        ...prev,
        [documentType]: { uploaded: true, file: file },
      }));
    }
    setErrors((prev) => ({ ...prev, [documentType]: undefined }));
  };

  const validateAndSubmit = useCallback(() => {
    try {
      const validatedData = step9Schema.parse(formData);
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
    <div className="">
      <div className="min-h-screen flex justify-center items-start">
        <div className="w-full   rounded-2xl  space-y-6">
          <Card className="p-8 cardShadow">
            <div className="space-y-4">
              <StepTitle className="font-inter text-[#0A0D14] text-[16px] font-semibold" title={`${currentStep + 1}. ${stepData[currentStep]?.title || ""}`} />

              <Alert className="bg-[#F6F8FA]  border-none ">
                <AlertDescription className="mb-5 text-[#0A0D14] font-inter font-normal text-[14px] leading-[24px]">
                  {" "}
                  Congratulations, the most important steps of your application have been completed and you can now interview with Host Families as soon as you have taken part in the matching call.
                  Your coach will help you to find a date. Please also start collecting the documents listed below, so that you have all the necessary documents ready when match with your Host Family.
                </AlertDescription>

                <AlertDescription className="text-[12px] cursor-pointer flex text-[#868C98] items-center gap-2 font-normal w-fit" onClick={() => setIsModalOpen(true)}>
                  <Info className="h-4 w-4 text-[#868C98]" />
                  TIPS FOR UPLOADING DOCUMENTS
                </AlertDescription>
              </Alert>
            </div>
          </Card>

          <div className="space-y-4">
            <DocumentItem
              name="Valid Passport"
              status={formData.validPassport.uploaded ? "uploaded" : "missing"}
              onUpload={(file) => handleDocumentUpload("validPassport", file)}
              error={errors.validPassport}
              showInfoIcon={true}
              existingFile={formData.validPassport.file}
            />
            <DocumentItem
              name="Secondary and/or college degree conclusion certificate(s)"
              status={formData.degreeCertificate.uploaded ? "uploaded" : "missing"}
              onUpload={(file) => handleDocumentUpload("degreeCertificate", file)}
              error={errors.degreeCertificate}
              showInfoIcon={true}
              existingFile={formData.degreeCertificate.file}
            />
            <DocumentItem
              name="Criminal Record Transcript"
              status={formData.criminalRecord.uploaded ? "uploaded" : "missing"}
              onUpload={(file) => handleDocumentUpload("criminalRecord", file)}
              error={errors.criminalRecord}
              showInfoIcon={true}
              existingFile={formData.criminalRecord.file}
            />
            <DocumentItem
              name="Driver License or International Driver License"
              status={formData.driverLicense.uploaded ? "uploaded" : "missing"}
              onUpload={(file) => handleDocumentUpload("driverLicense", file)}
              showInfoIcon={true}
              error={errors.driverLicense}
              existingFile={formData.driverLicense.file}
            />
            <DocumentItem
              name="Physician's Report"
              status={formData.physicianReport.uploaded ? "uploaded" : "missing"}
              showDownload
              onUpload={(file) => handleDocumentUpload("physicianReport", file)}
              error={errors.physicianReport}
              showInfoIcon={true}
              existingFile={formData.physicianReport.file}
            />
            <DocumentItem
              name="Childcare Experience Worksheet"
              status={formData.childcareWorksheet.uploaded ? "uploaded" : "missing"}
              showDownload
              onUpload={(file) => handleDocumentUpload("childcareWorksheet", file)}
              error={errors.childcareWorksheet}
              showInfoIcon={true}
              existingFile={formData.childcareWorksheet.file}
            />
          </div>

          {/* file upload modal here */}
        </div>
      </div>
      <ApplicationButtonGroup setCurrentStep={setCurrentStep} currentStep={currentStep} currentStepValidateAndSubmitRef={currentStepValidateAndSubmitRef} setAllFormData={setAllFormData} />

      {/* Tips Modal */}
      <TipsForUploadingDocumentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
export default Step9;
