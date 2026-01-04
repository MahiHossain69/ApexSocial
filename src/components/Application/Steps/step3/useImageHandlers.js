import { useState } from "react";
import { toast } from "sonner";

export const useImageHandlers = () => {
  // Separate image states
  const [mainProfileImage, setMainProfileImage] = useState(null);
  const [mainRotation, setMainRotation] = useState(0);

  const [headshotImage, setHeadshotImage] = useState(null);
  const [headshotRotation, setHeadshotRotation] = useState(0);

  const [additionalImages, setAdditionalImages] = useState([]);
  const [additionalCurrentIndex, setAdditionalCurrentIndex] = useState(0);
  const [additionalRotation, setAdditionalRotation] = useState({});

  // Generic image change handler
  const handleImageChange = (
    e,
    setImageState,
    setRotationState,
    multiple = false,
    addImagesState
  ) => {
    const files = multiple
      ? Array.from(e.target.files)
      : e.target.files?.[0]
      ? [e.target.files[0]]
      : [];
    const supportedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/bmp",
    ];

    if (files.length === 0) return;

    if (!multiple) {
      // Single file upload
      const file = files[0];
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File exceeds 10MB.");
        return;
      }
      if (!supportedTypes.includes(file.type)) {
        toast.error("Unsupported image type.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageState(reader.result);
        setRotationState(0);
      };
      reader.readAsDataURL(file);
    } else {
      // Multiple files for additional images (max 10)
      const currentCount = additionalImages.length;
      const remainingSlots = 10 - currentCount;

      if (remainingSlots <= 0) {
        toast.error(
          "Maximum 10 images allowed. Please remove some images first."
        );
        return;
      }

      const filesToProcess = files.slice(0, remainingSlots);
      if (files.length > remainingSlots) {
        toast.error(
          `Only ${remainingSlots} more images can be added. Maximum 10 images allowed.`
        );
        return;
      }

      const validImages = [];
      let processedCount = 0;

      filesToProcess.forEach((file) => {
        if (file.size > 10 * 1024 * 1024) {
          toast.error(`File "${file.name}" exceeds 10MB and will be skipped.`);
          processedCount++;
          if (
            processedCount === filesToProcess.length &&
            validImages.length > 0
          ) {
            addImagesState((prev) => {
              const newImages = [...prev, ...validImages];
              setAdditionalCurrentIndex(prev.length);
              setAdditionalRotation(0);
              return newImages;
            });
          }
          return;
        }
        if (!supportedTypes.includes(file.type)) {
          toast.error(`Unsupported file type: ${file.name}`);
          processedCount++;
          if (
            processedCount === filesToProcess.length &&
            validImages.length > 0
          ) {
            addImagesState((prev) => {
              const newImages = [...prev, ...validImages];
              setAdditionalCurrentIndex(prev.length);
              setAdditionalRotation(0);
              return newImages;
            });
          }
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          validImages.push(reader.result);
          processedCount++;
          if (
            processedCount === filesToProcess.length &&
            validImages.length > 0
          ) {
            addImagesState((prev) => {
              const newImages = [...prev, ...validImages];
              setAdditionalCurrentIndex(prev.length);
              setAdditionalRotation(0);
              return newImages;
            });
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Main profile image handlers
  const handleRemoveMainProfileImage = () => {
    setMainProfileImage(null);
    setMainRotation(0);
  };

  const handleRotateMainProfileImage = () => {
    setMainRotation((prev) => prev + 90);
  };

  // Headshot image handlers
  const handleRemoveHeadshotImage = () => {
    setHeadshotImage(null);
    setHeadshotRotation(0);
  };

  const handleRotateHeadshotImage = () => {
    setHeadshotRotation((prev) => prev + 90);
  };

  // Additional images handlers
  const handleRemoveAdditionalImage = () => {
    if (additionalImages.length === 0) return;
    const newImages = [...additionalImages];
    newImages.splice(additionalCurrentIndex, 1);
    setAdditionalImages(newImages);
    
    // Remove rotation for this image and adjust indices
    setAdditionalRotation(prev => {
      const newRotations = { ...prev };
      delete newRotations[additionalCurrentIndex];
      
      // Shift rotation indices down for images after the removed one
      const shiftedRotations = {};
      Object.keys(newRotations).forEach(key => {
        const index = parseInt(key);
        if (index > additionalCurrentIndex) {
          shiftedRotations[index - 1] = newRotations[key];
        } else {
          shiftedRotations[index] = newRotations[key];
        }
      });
      
      return shiftedRotations;
    });

    if (newImages.length === 0) {
      setAdditionalCurrentIndex(0);
      return;
    }

    if (additionalCurrentIndex >= newImages.length) {
      setAdditionalCurrentIndex(newImages.length - 1);
    }
  };

  const handleRotateAdditionalImage = (imageIndex = null) => {
    const targetIndex = imageIndex !== null ? imageIndex : additionalCurrentIndex;
    setAdditionalRotation(prev => {
      const newRotation = (prev[targetIndex] || 0) + 90;
      console.log(`Rotating image ${targetIndex} to ${newRotation} degrees`); // Debug log
      return {
        ...prev,
        [targetIndex]: newRotation
      };
    });
  };

  const nextAdditionalImage = () => {
    if (additionalImages.length > 0) {
      setAdditionalCurrentIndex((prevIndex) =>
        prevIndex === additionalImages.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevAdditionalImage = () => {
    if (additionalImages.length > 0) {
      setAdditionalCurrentIndex((prevIndex) =>
        prevIndex === 0 ? additionalImages.length - 1 : prevIndex - 1
      );
    }
  };

  const moveAdditionalImageLeft = () => {
    if (additionalCurrentIndex > 0) {
      const newImages = [...additionalImages];
      const temp = newImages[additionalCurrentIndex];
      newImages[additionalCurrentIndex] = newImages[additionalCurrentIndex - 1];
      newImages[additionalCurrentIndex - 1] = temp;
      setAdditionalImages(newImages);
      setAdditionalCurrentIndex(additionalCurrentIndex - 1);
    }
  };

  const moveAdditionalImageRight = () => {
    if (additionalCurrentIndex < additionalImages.length - 1) {
      const newImages = [...additionalImages];
      const temp = newImages[additionalCurrentIndex];
      newImages[additionalCurrentIndex] = newImages[additionalCurrentIndex + 1];
      newImages[additionalCurrentIndex + 1] = temp;
      setAdditionalImages(newImages);
      setAdditionalCurrentIndex(additionalCurrentIndex + 1);
    }
  };

  return {
    // States
    mainProfileImage,
    setMainProfileImage,
    mainRotation,
    setMainRotation,
    headshotImage,
    setHeadshotImage,
    headshotRotation,
    setHeadshotRotation,
    additionalImages,
    setAdditionalImages,
    additionalCurrentIndex,
    setAdditionalCurrentIndex,
    additionalRotation,
    setAdditionalRotation,
    
    // Handlers
    handleImageChange,
    handleRemoveMainProfileImage,
    handleRotateMainProfileImage,
    handleRemoveHeadshotImage,
    handleRotateHeadshotImage,
    handleRemoveAdditionalImage,
    handleRotateAdditionalImage,
    nextAdditionalImage,
    prevAdditionalImage,
    moveAdditionalImageLeft,
    moveAdditionalImageRight,
  };
};