import React, { useState, useEffect, useCallback } from "react";
import StepTitle from "../StepTitle";
import { stepData } from "@/data/StepData";
import ApplicationButtonGroup from "../ApplicationButtonGroup";
import PhotoRequirementModal from "./PhotoRequirementModal";
import VideoRequirementModal from "./VideoRequirement";
import { step3Schema } from "@/lib/validationSchemas";

// Import step4 components
import { useImageHandlers } from "./step3/useImageHandlers";
import { useVideoHandlers } from "./step3/useVideoHandlers";
import { useDragAndDrop } from "./step3/useDragAndDrop";
import ProfilePictureSection from "./step3/ProfilePictureSection";
import HeadshotSection from "./step3/HeadshotSection";
import AdditionalImagesSection from "./step3/AdditionalImagesSection";
import VideoSection from "./step3/VideoSection";

// Import default images for additional photos
/* import pro1 from "/images/application-steps/additional-photos/additional-1.webp";
import pro2 from "/images/application-steps/additional-photos/additional-2.webp";
import pro3 from "/images/application-steps/additional-photos/additional-3.webp";
import pro4 from "/images/application-steps/additional-photos/additional-4.webp";
import pro5 from "/images/application-steps/additional-photos/additional-5.webp";
import pro6 from "/images/application-steps/additional-photos/additional-6.webp";
import pro7 from "/images/application-steps/additional-photos/additional-7.webp";
import pro8 from "/images/application-steps/additional-photos/additional-8.webp";
import pro9 from "/images/application-steps/additional-photos/additional-9.webp";
import pro10 from "/images/application-steps/additional-photos/additional-10.webp"; */

// Default images array for additional photos
const defaultAdditionalImages = [
];

const Step3 = ({
  onSubmit,
  initialData,
  setValidateAndSubmitRef,
  currentStep,
  setCurrentStep,
  setAllFormData,
  currentStepValidateAndSubmitRef,
}) => {
  // Modal states
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // State for additional images with default images and active index
  const [additionalImages, setAdditionalImages] = useState(
    defaultAdditionalImages
  );
  const [activeImageIndex, setActiveImageIndex] = useState(1);

  // Description states
  const [profileDescription, setProfileDescription] = useState(
    initialData?.profileDescription || ""
  );
  const [headshotDescription, setHeadshotDescription] = useState(
    initialData?.headshotDescription || ""
  );
  const [additionalDescriptions, setAdditionalDescriptions] = useState(
    initialData?.additionalDescriptions || {}
  );
  const [videoDescription, setVideoDescription] = useState(
    initialData?.videoDescription || ""
  );

  // Update description states when initialData changes
  useEffect(() => {
    setProfileDescription(initialData?.profileDescription || "");
    setHeadshotDescription(initialData?.headshotDescription || "");
    setAdditionalDescriptions(initialData?.additionalDescriptions || {});
    setVideoDescription(initialData?.videoDescription || "");
  }, [initialData]);

  // Custom hooks
  const imageHandlers = useImageHandlers();
  const videoHandlers = useVideoHandlers();
  const dragHandlers = useDragAndDrop();

  // Validate and submit function
  const validateAndSubmit = useCallback(() => {
    try {
      const formData = {
        mainProfileImage: imageHandlers.mainProfileImage,
        mainRotation: imageHandlers.mainRotation,
        headshotImage: imageHandlers.headshotImage,
        headshotRotation: imageHandlers.headshotRotation,
        additionalImages: additionalImages,
        activeImageIndex: activeImageIndex,
        additionalRotation: imageHandlers.additionalRotation,
        videoPreview: videoHandlers.videoPreview,
        profileDescription: profileDescription,
        headshotDescription: headshotDescription,
        additionalDescriptions: additionalDescriptions,
        videoDescription: videoDescription,
      };

      const validatedData = step3Schema.parse(formData);
      onSubmit(validatedData);
      return { success: true, data: validatedData };
    } catch (error) {
      console.error("Step3 validation error:", error);
      return { success: false };
    }
  }, [
    imageHandlers.mainProfileImage,
    imageHandlers.mainRotation,
    imageHandlers.headshotImage,
    imageHandlers.headshotRotation,
    additionalImages,
    activeImageIndex,
    imageHandlers.additionalRotation,
    videoHandlers.videoPreview,
    profileDescription,
    headshotDescription,
    additionalDescriptions,
    videoDescription,
    onSubmit,
  ]);

  // Expose validation function to parent
  useEffect(() => {
    setValidateAndSubmitRef(validateAndSubmit);
  }, [setValidateAndSubmitRef, validateAndSubmit]);

  // Create specific drag handlers for each section
  const createDragHandlers = (
    setImageState,
    setRotationState,
    multiple = false,
    addImagesState = null
  ) => ({
    handleDragOver: dragHandlers.handleDragOver,
    handleDragEnter: dragHandlers.handleDragEnter,
    handleDragLeave: dragHandlers.handleDragLeave,
    handleDrop: (e) =>
      dragHandlers.handleDrop(
        e,
        setImageState,
        setRotationState,
        multiple,
        addImagesState,
        imageHandlers.handleImageChange
      ),
  });

  // Custom handlers for additional images
  const handleAdditionalImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const supportedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/bmp",
    ];

    const remainingSlots = 10 - additionalImages.length;
    if (remainingSlots <= 0) {
      alert("Maximum 10 images allowed. Please remove some images first.");
      return;
    }

    const filesToProcess = files.slice(0, remainingSlots);
    const validImages = [];

    filesToProcess.forEach((file) => {
      if (file.size > 10 * 1024 * 1024) {
        alert(`File "${file.name}" exceeds 10MB and will be skipped.`);
        return;
      }
      if (!supportedTypes.includes(file.type)) {
        alert(`Unsupported file type: ${file.name}`);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        validImages.push(reader.result);
        if (validImages.length === filesToProcess.length) {
          const currentLength = additionalImages.length;
          setAdditionalImages((prev) => [...prev, ...validImages]);
          setActiveImageIndex(currentLength);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveAdditionalImage = () => {
    if (additionalImages.length === 0) return;
    const newImages = [...additionalImages];
    newImages.splice(activeImageIndex, 1);
    setAdditionalImages(newImages);

    // Also remove the description for this index and shift remaining descriptions
    const newDescriptions = { ...additionalDescriptions };
    delete newDescriptions[activeImageIndex];

    // Shift descriptions down for indices greater than the removed index
    const shiftedDescriptions = {};
    Object.keys(newDescriptions).forEach((key) => {
      const index = parseInt(key);
      if (index > activeImageIndex) {
        shiftedDescriptions[index - 1] = newDescriptions[key];
      } else {
        shiftedDescriptions[key] = newDescriptions[key];
      }
    });
    setAdditionalDescriptions(shiftedDescriptions);

    if (newImages.length === 0) {
      setActiveImageIndex(0);
      return;
    }

    if (activeImageIndex >= newImages.length) {
      setActiveImageIndex(newImages.length - 1);
    }
  };

  const handleMoveAdditionalImageLeft = () => {
    if (activeImageIndex > 0) {
      const newImages = [...additionalImages];
      const temp = newImages[activeImageIndex];
      newImages[activeImageIndex] = newImages[activeImageIndex - 1];
      newImages[activeImageIndex - 1] = temp;
      setAdditionalImages(newImages);

      // Also swap the descriptions
      const newDescriptions = { ...additionalDescriptions };
      const tempDesc = newDescriptions[activeImageIndex];
      newDescriptions[activeImageIndex] = newDescriptions[activeImageIndex - 1];
      newDescriptions[activeImageIndex - 1] = tempDesc;
      setAdditionalDescriptions(newDescriptions);

      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  const handleMoveAdditionalImageRight = () => {
    if (activeImageIndex < additionalImages.length - 1) {
      const newImages = [...additionalImages];
      const temp = newImages[activeImageIndex];
      newImages[activeImageIndex] = newImages[activeImageIndex + 1];
      newImages[activeImageIndex + 1] = temp;
      setAdditionalImages(newImages);

      // Also swap the descriptions
      const newDescriptions = { ...additionalDescriptions };
      const tempDesc = newDescriptions[activeImageIndex];
      newDescriptions[activeImageIndex] = newDescriptions[activeImageIndex + 1];
      newDescriptions[activeImageIndex + 1] = tempDesc;
      setAdditionalDescriptions(newDescriptions);

      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  // Handler for additional image description
  const handleAdditionalDescriptionChange = (description) => {
    setAdditionalDescriptions((prev) => ({
      ...prev,
      [activeImageIndex]: description,
    }));
  };

  const createVideoDragHandlers = () => ({
    handleDragOver: dragHandlers.handleDragOver,
    handleDragEnter: dragHandlers.handleDragEnter,
    handleDragLeave: dragHandlers.handleDragLeave,
    handleVideoDrop: videoHandlers.handleVideoDrop,
  });

  return (
    <div>
      <div className="cardShadow p-4 md:p-6 border border-soft-200 rounded-[12px] space-y-5 bg-white">
        <StepTitle
          title={`${currentStep + 1}. ${stepData[currentStep].title}`}
        />

        {/* Profile Picture Section */}
        <ProfilePictureSection
          image={imageHandlers.mainProfileImage}
          rotation={imageHandlers.mainRotation}
          description={profileDescription}
          onDescriptionChange={setProfileDescription}
          onImageChange={(e) =>
            imageHandlers.handleImageChange(
              e,
              imageHandlers.setMainProfileImage,
              imageHandlers.setMainRotation
            )
          }
          onRotate={imageHandlers.handleRotateMainProfileImage}
          onRemove={imageHandlers.handleRemoveMainProfileImage}
          onOpenModal={() => setIsPhotoModalOpen(true)}
          dragHandlers={createDragHandlers(
            imageHandlers.setMainProfileImage,
            imageHandlers.setMainRotation
          )}
        />

        {/* Headshot Section */}
        <HeadshotSection
          image={imageHandlers.headshotImage}
          rotation={imageHandlers.headshotRotation}
          description={headshotDescription}
          onDescriptionChange={setHeadshotDescription}
          onImageChange={(e) =>
            imageHandlers.handleImageChange(
              e,
              imageHandlers.setHeadshotImage,
              imageHandlers.setHeadshotRotation
            )
          }
          onRotate={imageHandlers.handleRotateHeadshotImage}
          onRemove={imageHandlers.handleRemoveHeadshotImage}
          onOpenModal={() => setIsPhotoModalOpen(true)}
          dragHandlers={createDragHandlers(
            imageHandlers.setHeadshotImage,
            imageHandlers.setHeadshotRotation
          )}
        />

        {/* Additional Images Section */}
        <AdditionalImagesSection
          images={additionalImages}
          currentIndex={activeImageIndex}
          rotation={imageHandlers.additionalRotation}
          description={additionalDescriptions[activeImageIndex] || ""}
          onDescriptionChange={handleAdditionalDescriptionChange}
          onImageChange={handleAdditionalImageChange}
          onAddPhoto={() => {
            const input = document.createElement('input');
            input.type = 'file';
            input.multiple = true;
            input.accept = 'image/*';
            input.onchange = handleAdditionalImageChange;
            input.click();
          }}
          onSave={() => {
            console.log('Saving additional images:', additionalImages);
            console.log('Additional descriptions:', additionalDescriptions);
            alert('Additional images saved successfully!');
          }}
          onRemove={handleRemoveAdditionalImage}
          onRotate={(imageIndex) => {
            console.log(`Step3: Rotating image at index ${imageIndex}`); // Debug log
            imageHandlers.handleRotateAdditionalImage(imageIndex);
          }}
          onMoveLeft={handleMoveAdditionalImageLeft}
          onMoveRight={handleMoveAdditionalImageRight}
          onSetCurrentIndex={setActiveImageIndex}
          onOpenModal={() => setIsPhotoModalOpen(true)}
          dragHandlers={createDragHandlers(
            setAdditionalImages,
            imageHandlers.setAdditionalRotation,
            true,
            additionalImages
          )}
        />

        {/* Video Section */}
        <VideoSection
          videoPreview={videoHandlers.videoPreview}
          description={videoDescription}
          onDescriptionChange={setVideoDescription}
          onVideoChange={videoHandlers.handleVideoChange}
          onRemoveVideo={videoHandlers.handleRemoveVideo}
          onOpenModal={() => setIsVideoModalOpen(true)}
          dragHandlers={createVideoDragHandlers()}
        />

        {/* Application Button Group */}
        <ApplicationButtonGroup
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          currentStepValidateAndSubmitRef={currentStepValidateAndSubmitRef}
          setAllFormData={setAllFormData}
        />
      </div>

      {/* Photo Requirements Modal */}
      <PhotoRequirementModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      />

      {/* Video Requirements Modal */}
      <VideoRequirementModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
};

export default Step3;
