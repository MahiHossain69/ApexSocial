import { useState } from "react";
import { toast } from "sonner";

export const useVideoHandlers = () => {
  const [videoPreview, setVideoPreview] = useState(null);

  const handleVideoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = [
      "video/mp4",
      "video/quicktime",
      "video/x-msvideo",
      "video/x-ms-wmv",
    ];
    const maxSize = 150 * 1024 * 1024; // 150MB

    if (!validTypes.includes(file.type)) {
      toast.error(
        "Unsupported file type. Please upload mp4, mov, avi, or wmv files."
      );
      return;
    }

    if (file.size > maxSize) {
      toast.error("File is too large. Max size is 150MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setVideoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveVideo = () => setVideoPreview(null);

  const handleVideoDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files);
    if (files.length === 0) return;

    // Create a mock event object for handleVideoChange
    const mockEvent = {
      target: {
        files: [files[0]],
      },
    };

    handleVideoChange(mockEvent);
  };

  return {
    videoPreview,
    setVideoPreview,
    handleVideoChange,
    handleRemoveVideo,
    handleVideoDrop,
  };
};