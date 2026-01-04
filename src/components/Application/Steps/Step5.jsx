import { useState, useEffect, useCallback } from "react";
import { step5Schema } from "@/lib/validationSchemas";
import ApplicationButtonGroup from "../ApplicationButtonGroup";
import EducationPart from "./Step5/EducationPart";
import ProfessionalExperience from "./Step5/ProfessionalExperience";

const Step5 = ({
  onSubmit,
  initialData,
  setValidateAndSubmitRef,
  currentStep,
  setCurrentStep,
  setAllFormData,
  currentStepValidateAndSubmitRef,
}) => {
  const [formData, setFormData] = useState(() => ({
    ...initialData,
    childcareExperiences:
      initialData.childcareExperiences &&
      initialData.childcareExperiences.length > 0
        ? initialData.childcareExperiences
        : [
            {
              experienceType: "",
              experienceDuration: "",
              totalHours: "",
              children: "",
              duties: "",
              frequency: "",
              referenceName: "",
              referenceEmail: "",
            },
          ],
    educationPart:
      initialData.educationPart &&
      Object.keys(initialData.educationPart).length > 0
        ? initialData.educationPart
        : {
            otherDegreeCertification: "",
            highestDegree: "",
            schoolUniversityName: "",
            graduationDate: "",
            currentEmployer: "",
            employerNotice: "",
            howMuchNotice: "",
          },
    professionalExperience:
      initialData.professionalExperience &&
      Object.keys(initialData.professionalExperience).length > 0
        ? initialData.professionalExperience
        : {
            ageGroupExperience: "",
            workedWithChildrenZeroTo24Months: "",
            howManyHoursWithZeroTo24Months: "",
            hasExperienceWorkingWithChildrenZeroTo24MonthsRadio: "",
            whereChildcareExperienceGained: "",
            yearsChildcareExperience: "",
            desiredAgeGroupToWorkWith: "",
            hasSpecialNeedsCaringExperience: "",
            describeSpecialNeedsExperience: "",
            specialNeedsCondition: "",
          },
  }));
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(() => ({
      ...initialData,
      childcareExperiences:
        initialData.childcareExperiences &&
        initialData.childcareExperiences.length > 0
          ? initialData.childcareExperiences
          : [
              {
                experienceType: "",
                experienceDuration: "",
                totalHours: "",
                children: "",
                duties: "",
                frequency: "",
                referenceName: "",
                referenceEmail: "",
              },
            ],
      educationPart:
        initialData.educationPart &&
        Object.keys(initialData.educationPart).length > 0
          ? initialData.educationPart
          : {
              otherDegreeCertification: "",
              highestDegree: "",
              schoolUniversityName: "",
              graduationDate: "",
              currentEmployer: "",
              employerNotice: "",
              howMuchNotice: "",
            },
      professionalExperience:
        initialData.professionalExperience &&
        Object.keys(initialData.professionalExperience).length > 0
          ? initialData.professionalExperience
          : {
              ageGroupExperience: "",
              workedWithChildrenZeroTo24Months: "",
              hasExperienceWorkingWithChildrenZeroTo24MonthsRadio: "",

              whereChildcareExperienceGained: "",
              yearsChildcareExperience: "",
              desiredAgeGroupToWorkWith: "",
              hasSpecialNeedsCaringExperience: "",
              describeSpecialNeedsExperience: "",
              specialNeedsCondition: "",
            },
    }));
  }, [initialData]);

  // Update form when initialData changes

  const updateFormData = useCallback((path, value) => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      let current = newData;
      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) {
          current[path[i]] = {};
        }
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return newData;
    });
    setErrors((prev) => {
      const newErrors = { ...prev };
      let current = newErrors;
      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) {
          current[path[i]] = {};
        }
        current = current[path[i]];
      }
      delete current[path[path.length - 1]];
      return newErrors;
    });
  }, []);

  const handleChange = (e, pathPrefix = []) => {
    const { id, value } = e.target;
    updateFormData([...pathPrefix, id], value);
  };

  const handleSelectChange = (id, value, pathPrefix = []) => {
    updateFormData([...pathPrefix, id], value);
  };

  const validateAndSubmit = useCallback(() => {
    const dataToValidate = {
      ...formData,
      educationPart: {
        ...formData.educationPart,
        graduationDate: formData.educationPart?.graduationDate || undefined,
      },
    };

    const validationResult = step5Schema.safeParse(dataToValidate);

    if (!validationResult.success) {
      const newErrors = {};
      validationResult.error.errors.forEach((err) => {
        let current = newErrors;
        err.path.forEach((segment, index) => {
          if (index === err.path.length - 1) {
            current[segment] = err.message;
          } else {
            const nextSegment = err.path[index + 1];
            if (!current[segment]) {
              if (typeof nextSegment === "number") {
                current[segment] = [];
              } else {
                current[segment] = {};
              }
            }
            current = current[segment];
          }
        });
      });
      setErrors(newErrors);
      return { success: false };
    } else {
      setErrors({});
      onSubmit(validationResult.data);
      return { success: true, data: validationResult.data };
    }
  }, [formData, onSubmit]);

  useEffect(() => {
    setValidateAndSubmitRef(validateAndSubmit);
  }, [setValidateAndSubmitRef, validateAndSubmit]);

  return (
    <div>
      <div>
        <div className="cardShadow p-4 md:p-6  border border-soft-200 rounded-[12px] bg-white">
          <EducationPart
            formData={formData.educationPart}
            setFormData={setFormData}
            handleChange={(e) => handleChange(e, ["educationPart"])}
            handleSelectChange={(id, value) =>
              handleSelectChange(id, value, ["educationPart"])
            }
            errors={errors.educationPart || {}}
            setErrors={setErrors}
            currentStep={currentStep}
          />
        </div>
        <div className="cardShadow p-4 md:p-6  border border-soft-200 rounded-[12px] bg-white mt-6">
          <ProfessionalExperience
            formData={formData.professionalExperience}
            setFormData={setFormData}
            handleChange={(e) => handleChange(e, ["professionalExperience"])}
            handleSelectChange={(id, value) =>
              handleSelectChange(id, value, ["professionalExperience"])
            }
            errors={errors.professionalExperience || {}}
            setErrors={setErrors}
            currentStep={currentStep}
          />
          {/* <ChildcareExperience
            childcareExperiences={formData.childcareExperiences}
            setChildcareExperiences={(newExperiences) =>
              updateFormData(["childcareExperiences"], newExperiences)
            }
            errors={errors.childcareExperiences || []}
            setErrors={setChildcareExperienceErrors}
            currentStep={currentStep}
          /> */}
          <ApplicationButtonGroup
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            currentStepValidateAndSubmitRef={currentStepValidateAndSubmitRef}
            setAllFormData={setAllFormData}
          />
        </div>
      </div>
    </div>
  );
};
export default Step5;
