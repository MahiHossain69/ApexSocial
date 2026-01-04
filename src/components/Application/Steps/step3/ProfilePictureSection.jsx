import DefaultImg from "@/assets/profile-placeholder.png"; // Adjust the path as necessary
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Info, SaveIcon } from "lucide-react";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { IoRefresh } from "react-icons/io5";
import UploadBox from "./UploadBox";

// Define your default image URL here
const defaultImageUrl = DefaultImg; // Adjust the path as necessary

const ProfilePictureSection = ({ image, rotation, description, onDescriptionChange, onImageChange, onRotate, onRemove, onOpenModal, dragHandlers }) => {
  // Track if we should show default image (initially true, false after deletion)
  const [showDefaultImage, setShowDefaultImage] = React.useState(true);

  // Use the provided image prop, if no image show placeholder
  const currentImage = image;

  // Show controls when there's an uploaded image OR when showing default image
  const showControls = currentImage || showDefaultImage;

  // Handle remove function - if it's default image, hide it; if uploaded, call onRemove
  const handleRemove = () => {
    if (currentImage) {
      // There's an uploaded image, remove it
      onRemove();
    } else if (showDefaultImage) {
      // It's showing default image, hide it
      setShowDefaultImage(false);
    }
  };

  return (
    <Card className="p-8 mx-auto flex flex-col gap-[18px] bg-white rounded-lg border border-[#E2E4E9] shadow-none">
      <h2 className="text-[16px] text-[#0A0D14] font-semibold font-inter flex items-center gap-2">
        Upload Profile Picture
        <span className="text-[#868C98] hover:text-gray-600 cursor-pointer" onClick={onOpenModal}>
          <Info className="w-4 h-4" />
        </span>
      </h2>
      <p className="text-sm font-inter font-normal text-[#0A0D14]">
        Choose a clear, friendly photo. It can be a casual shot, like spending time with a child. Avoid filters, hats, or busy backgrounds.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Profile Picture */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="relative w-full h-[425px] overflow-hidden border border-gray-300">
            {currentImage || showDefaultImage ? (
              <img src={currentImage || defaultImageUrl} alt="Profile" className="w-full h-full object-cover transition-transform duration-500" style={{ transform: `rotate(${rotation}deg)` }} />
            ) : (
              <div className="w-full h-full font-inter font-medium bg-gray-200 flex items-center justify-center text-gray-500">
                <span>No Image</span>
              </div>
            )}

            {/* Show control buttons only when an image is present */}
            {showControls && currentImage && (
              <div className="absolute inset-0">
                {/* Rotate button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute bottom-[50px] left-1/2 -translate-x-1/2 rounded-full bg-white/50 text-[#1E1E1E] border border-white/25 hover:bg-gray-100 w-8 h-8 transition-transform duration-500 imgControlBtnShadow"
                  onClick={onRotate}
                >
                  <IoRefresh size={16} />
                </Button>

                {/* Delete button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/50 border border-white/25 text-red-500 hover:bg-red-100 w-8 h-8 imgControlBtnShadow"
                  onClick={handleRemove}
                >
                  <HiOutlineTrash size={16} />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Upload Box */}
        <div className="w-full md:w-2/3">
          <UploadBox
            onFileChange={onImageChange}
            onDragOver={dragHandlers.handleDragOver}
            onDragEnter={dragHandlers.handleDragEnter}
            onDragLeave={dragHandlers.handleDragLeave}
            onDrop={dragHandlers.handleDrop}
          />

          {/* Description Box */}
          <div className="mt-8">
            <h3 className="text-lg font-inter font-medium text-[#0A0D14]">Description</h3>
            <Textarea
              className="mt-2 w-full placeholder:text-[#868C98] border rounded-lg resize-none"
              placeholder="Type Here..."
              rows={4}
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
            />
          </div>

          <div className="text-end mt-8">
            <Button type="button" className="p-2.5 bg-[#45B5AA] hover:bg-[#00897C] duration-300">
              <SaveIcon /> Save
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfilePictureSection;
