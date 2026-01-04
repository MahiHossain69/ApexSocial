import { useState, useEffect, useCallback } from "react";
import { z } from "zod";
import { step1Schema } from "@/lib/validationSchemas";
import ApplicationButtonGroup from "../ApplicationButtonGroup";
import BioBlock from "./step1/BioBlock";
import EmergencyContactBlock from "./step1/EmergencyContactBlock";
import PlacementInformation from "./step1/PlacementInformation";

const Step1 = ({
  onSubmit,
  initialData,
  setValidateAndSubmitRef,
  currentStep,
  setCurrentStep,
  setAllFormData,
  currentStepValidateAndSubmitRef,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(() => ({
    // Basic info fields
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    dob: initialData.dob || null,
    mobilePhone: initialData.mobilePhone || "",
    // Emergency contact fields
    ECfirstName: initialData.ECfirstName || "",
    EClastName: initialData.EClastName || "",
    ECemail: initialData.ECemail || "",
    ECmobilePhone: initialData.ECmobilePhone || "",
    EChomePhone: initialData.EChomePhone || "",
    ECprofession: initialData.ECprofession || "",
    ECrelationship: initialData.ECrelationship || "",
    ECstreetAddress: initialData.ECstreetAddress || "",
    ECcity: initialData.ECcity || "",
    ECpostalCode: initialData.ECpostalCode || "",
    ECstate: initialData.ECstate || "",
    ECcountry: initialData.ECcountry || "",
    EClanguage: initialData.EClanguage || "",
    // Other fields
    "addressed-person": initialData["addressed-person"] || undefined,
    profession: initialData.profession || "",
    "vocation-training-date": initialData["vocation-training-date"] || null,
    "street-address": initialData["street-address"] || "",
    city: initialData.city || "",
    "zip-code": initialData["zip-code"] || "",
    state: initialData.state || "",
    country: initialData.country || "",
    "passport-country": initialData["passport-country"] || undefined,
    "facebook-url": initialData["facebook-url"] || "",
    "instagram-url": initialData["instagram-url"] || "",
    "tiktok-url": initialData["tiktok-url"] || "",
    "linkedin-url": initialData["linkedin-url"] || "",
    "youtube-url": initialData["youtube-url"] || "",
    "blog-url": initialData["blog-url"] || "",
    "website-url": initialData["website-url"] || "",
    "allergic-to-animals": initialData["allergic-to-animals"] || undefined,
    "afraid-of-animals": initialData["afraid-of-animals"] || undefined,

    // Animal allergy selections and levels
    "allergy-selections": initialData["allergy-selections"] || {},
    "allergy-levels": initialData["allergy-levels"] || {},
    "other-allergy-name": initialData["other-allergy-name"] || "",
    "other-allergy-checked": initialData["other-allergy-checked"] || false,

    // Animal fear selections and levels
    "fear-selections": initialData["fear-selections"] || {},
    "fear-levels": initialData["fear-levels"] || {},
    "other-fear-name": initialData["other-fear-name"] || "",
    "other-fear-checked": initialData["other-fear-checked"] || false,

    // Dietary restriction fields
    "dietary-restrictions": initialData["dietary-restrictions"] || {},
    "other-dietary-restriction-name":
      initialData["other-dietary-restriction-name"] || "",
    "other-dietary-restriction-checked":
      initialData["other-dietary-restriction-checked"] || false,
    "dietary-restrictions-importance":
      initialData["dietary-restrictions-importance"] || undefined,

    "have-other-allergies": initialData["have-other-allergies"] || "",
    "have-dietary-restriction": initialData["have-dietary-restriction"] || "",
    "first-aid-certificate": initialData["first-aid-certificate"] || undefined,
    "have-driver-certificate":
      initialData["have-driver-certificate"] || undefined,
    "comfortable-with-children":
      initialData["comfortable-with-children"] || undefined,
    "have-drive-in-snow": initialData["have-drive-in-snow"] || undefined,
    "enjoy-driving": initialData["enjoy-driving"] || undefined,
    "how-often-do-you-drive":
      initialData["how-often-do-you-drive"] || undefined,
    "year-of-experience": initialData["year-of-experience"] || undefined,
    "getting-license": initialData["getting-license"] || undefined,
    "tell-about-your-skills": initialData["tell-about-your-skills"] || "",
    "t-shirt-size": initialData["t-shirt-size"] || undefined,
  }));
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      // Basic info fields
      firstName: initialData.firstName || "",
      lastName: initialData.lastName || "",
      email: initialData.email || "",
      dob: initialData.dob || null,
      mobilePhone: initialData.mobilePhone || "",
      // Emergency contact fields
      ECfirstName: initialData.ECfirstName || "",
      EClastName: initialData.EClastName || "",
      ECemail: initialData.ECemail || "",
      ECmobilePhone: initialData.ECmobilePhone || "",
      EChomePhone: initialData.EChomePhone || "",
      ECprofession: initialData.ECprofession || "",
      ECrelationship: initialData.ECrelationship || "",
      ECstreetAddress: initialData.ECstreetAddress || "",
      ECcity: initialData.ECcity || "",
      ECpostalCode: initialData.ECpostalCode || "",
      ECstate: initialData.ECstate || "",
      ECcountry: initialData.ECcountry || "",
      EClanguage: initialData.EClanguage || "",
      // Other fields
      "addressed-person": initialData["addressed-person"] || undefined,
      profession: initialData.profession || "",
      "vocation-training-date": initialData["vocation-training-date"] || null,
      "street-address": initialData["street-address"] || "",
      city: initialData.city || "",
      "zip-code": initialData["zip-code"] || "",
      state: initialData.state || "",
      country: initialData.country || "",
      "passport-country": initialData["passport-country"] || undefined,
      "facebook-url": initialData["facebook-url"] || "",
      "instagram-url": initialData["instagram-url"] || "",
      "tiktok-url": initialData["tiktok-url"] || "",
      "linkedin-url": initialData["linkedin-url"] || "",
      "youtube-url": initialData["youtube-url"] || "",
      "blog-url": initialData["blog-url"] || "",
      "website-url": initialData["website-url"] || "",
      "allergic-to-animals": initialData["allergic-to-animals"] || undefined,
      "afraid-of-animals": initialData["afraid-of-animals"] || undefined,

      // Animal allergy selections and levels
      "allergy-selections": initialData["allergy-selections"] || {},
      "allergy-levels": initialData["allergy-levels"] || {},
      "other-allergy-name": initialData["other-allergy-name"] || "",
      "other-allergy-checked": initialData["other-allergy-checked"] || false,

      // Animal fear selections and levels
      "fear-selections": initialData["fear-selections"] || {},
      "fear-levels": initialData["fear-levels"] || {},
      "other-fear-name": initialData["other-fear-name"] || "",
      "other-fear-checked": initialData["other-fear-checked"] || false,

      // Dietary restriction fields
      "dietary-restrictions": initialData["dietary-restrictions"] || {},
      "other-dietary-restriction-name":
        initialData["other-dietary-restriction-name"] || "",
      "other-dietary-restriction-checked":
        initialData["other-dietary-restriction-checked"] || false,
      "dietary-restrictions-importance":
        initialData["dietary-restrictions-importance"] || undefined,

      "have-other-allergies": initialData["have-other-allergies"] || "",
      "have-dietary-restriction": initialData["have-dietary-restriction"] || "",
      "first-aid-certificate":
        initialData["first-aid-certificate"] || undefined,
      "have-driver-certificate":
        initialData["have-driver-certificate"] || undefined,
      "comfortable-with-children":
        initialData["comfortable-with-children"] || undefined,
      "have-drive-in-snow": initialData["have-drive-in-snow"] || undefined,
      "enjoy-driving": initialData["enjoy-driving"] || undefined,
      "how-often-do-you-drive":
        initialData["how-often-do-you-drive"] || undefined,
      "year-of-experience": initialData["year-of-experience"] || "",
      "getting-license": initialData["getting-license"] || undefined,
      "tell-about-your-skills": initialData["tell-about-your-skills"] || "",
      "t-shirt-size": initialData["t-shirt-size"] || undefined,
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

  const handlePhoneChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleDateChange = (id, date) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: date,
    }));
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const handleAnimalSelectionChange = (type, animal, checked) => {
    const selectionKey = `${type}-selections`;
    const levelKey = `${type}-levels`;

    setFormData((prevData) => ({
      ...prevData,
      [selectionKey]: {
        ...prevData[selectionKey],
        [animal]: checked,
      },
      // Remove level if unchecked
      [levelKey]: checked
        ? prevData[levelKey]
        : {
            ...prevData[levelKey],
            [animal]: undefined,
          },
    }));
    setErrors((prev) => ({
      ...prev,
      [selectionKey]: undefined,
      [levelKey]: undefined,
    }));
  };

  const handleAnimalLevelChange = (type, animal, level) => {
    const levelKey = `${type}-levels`;

    setFormData((prevData) => ({
      ...prevData,
      [levelKey]: {
        ...prevData[levelKey],
        [animal]: level,
      },
    }));
    setErrors((prev) => ({ ...prev, [levelKey]: undefined }));
  };

  const handleOtherAnimalChange = (type, field, value) => {
    const fieldKey = `other-${type}-${field}`;

    setFormData((prevData) => ({
      ...prevData,
      [fieldKey]: value,
    }));
    setErrors((prev) => ({ ...prev, [fieldKey]: undefined }));
  };

  const handleDietaryRestrictionChange = (restriction, checked) => {
    setFormData((prevData) => ({
      ...prevData,
      "dietary-restrictions": {
        ...prevData["dietary-restrictions"],
        [restriction]: checked,
      },
    }));
    setErrors((prev) => ({ ...prev, "dietary-restrictions": undefined }));
  };

  const validateAndSubmit = useCallback(() => {
    setIsSubmitting(true);

    try {
      const dataToValidate = {
        ...formData,
        "vocation-training-date":
          formData["vocation-training-date"] || undefined,
      };

      const validatedData = step1Schema.parse(dataToValidate);
      setErrors({});
      onSubmit(validatedData);

      // Reset isSubmitting after a short delay
      setTimeout(() => setIsSubmitting(false), 100);

      return { success: true, data: validatedData };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }

      // Reset isSubmitting after a short delay
      setTimeout(() => setIsSubmitting(false), 100);

      return { success: false };
    }
  }, [formData, onSubmit]);

  useEffect(() => {
    setValidateAndSubmitRef(validateAndSubmit);
  }, [setValidateAndSubmitRef, validateAndSubmit]);

  return (
    <div className="flex flex-col gap-6">
      <BioBlock
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handlePhoneChange={handlePhoneChange}
        handleDateChange={handleDateChange}
        currentStep={currentStep}
      />
      <EmergencyContactBlock
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handlePhoneChange={handlePhoneChange}
      />
      <PlacementInformation
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handleAnimalSelectionChange={handleAnimalSelectionChange}
        handleAnimalLevelChange={handleAnimalLevelChange}
        handleOtherAnimalChange={handleOtherAnimalChange}
        handleDietaryRestrictionChange={handleDietaryRestrictionChange}
        isSubmitting={isSubmitting}
      />
      <ApplicationButtonGroup
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        currentStepValidateAndSubmitRef={currentStepValidateAndSubmitRef}
        setAllFormData={setAllFormData}
      />
    </div>
  );
};

export default Step1;
