import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Info, Pencil, SaveIcon } from "lucide-react";
import { useState } from "react";
import ImageEditModal from "./ImageEditModal";

const AdditionalImagesSection = ({ images = [], currentIndex, rotation, onDescriptionChange, onRotate, onRemove, onMoveLeft, onMoveRight, onOpenModal, onSetCurrentIndex, onAddPhoto, onSave }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingImageIndex, setEditingImageIndex] = useState(null);
  const [imageDescriptions, setImageDescriptions] = useState({});

  // Create array of 10 slots, filling with uploaded images or placeholders
  const imageSlots = Array.from({ length: 10 }, (_, index) => {
    if (index < images.length) {
      return { type: "uploaded", src: images[index], index };
    }
    return { type: "placeholder", index };
  });

  const handleEditClick = (index) => {
    setEditingImageIndex(index);
    setIsEditModalOpen(true);
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
    setEditingImageIndex(null);
  };

  const handleDescriptionSave = (description) => {
    if (editingImageIndex !== null) {
      setImageDescriptions((prev) => ({
        ...prev,
        [editingImageIndex]: description,
      }));
      if (onDescriptionChange) {
        onDescriptionChange(editingImageIndex, description);
      }
    }
  };

  const handleImageDelete = () => {
    if (editingImageIndex !== null && onRemove) {
      onRemove(editingImageIndex);
      handleModalClose();
    }
  };

  const handleImageRotate = () => {
    if (onRotate && editingImageIndex !== null) {
      console.log(`Rotating image at index ${editingImageIndex}`); // Debug log
      onRotate(editingImageIndex);
    }
  };

  const handleSlotClick = (slot) => {
    if (slot.type === "placeholder") {
      // Trigger file upload for placeholder
      if (onAddPhoto) {
        onAddPhoto();
      }
    } else {
      // Set current index for uploaded image
      if (onSetCurrentIndex) {
        onSetCurrentIndex(slot.index);
      }
    }
  };

  const isCurrentImage = (slot) => slot.type === "uploaded" && slot.index === currentIndex;

  return (
    <>
      <Card className="p-8 mx-auto flex flex-col gap-[18px] bg-white rounded-lg border border-[#E2E4E9] shadow-none">
        <h2 className="text-[16px] text-[#0A0D14] font-semibold font-inter flex items-center gap-2">
          Upload Additional Pictures
          <span className="text-[#868C98] hover:text-gray-600 cursor-pointer" onClick={onOpenModal}>
            <Info className="w-4 h-4" />
          </span>
        </h2>
        <p className="text-sm font-inter flex gap-[4px] font-normal text-[#0A0D14]">
          <span className="font-bold text-[#0A0D14]">Optional:</span>
          Add up to 10 photos that show your life—like hobbies, travel, time with kids, or family and friends. Collages are welcome too.
        </p>

        {/* Image grid showing placeholders and uploaded images */}
        <div>
          <div className="w-full lg:px-16">
            <div className="flex gap-6 flex-wrap items-center justify-center">
              {imageSlots.map((slot, slotIndex) => (
                <div key={slotIndex} className={`relative w-[123px] h-[123px] shrink-0 cursor-pointer  transition-all duration-200 `} onClick={() => handleSlotClick(slot)}>
                  {slot.type === "placeholder" ? (
                    // Placeholder image slot
                    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-[10px] hover:bg-gray-100 transition-colors">
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <img src="/icons/placeholder-123.png" alt="placeholder" />
                      </div>
                    </div>
                  ) : (
                    // Uploaded image
                    <>
                      <img
                        src={slot.src}
                        alt={`Additional ${slot.index + 1}`}
                        className={`object-cover border-2 rounded-[10px] duration-300 ease-in-out ${
                          isCurrentImage(slot) ? "w-[123px] h-[123px] mx-auto border-soft-400" : "w-full h-full border-transparent"
                        }`}
                        style={{
                          transform: `rotate(${rotation && typeof rotation === "object" ? rotation[slot.index] || 0 : rotation || 0}deg)`,
                          transformOrigin: "center center",
                          transition: "transform 0.3s ease-in-out",
                        }}
                      />

                      {/* Control buttons only for uploaded images when selected */}
                      {isCurrentImage(slot) && (
                        <>
                          {/* Move left button */}
                          {slot.index > 0 && (
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute bottom-6 -left-0.5 rounded-full bg-white/50 text-[#1E1E1E] border border-white/25 hover:bg-gray-100 w-[37px] h-[37px] imgControlBtnShadow"
                              onClick={(e) => {
                                e.stopPropagation();
                                onMoveLeft(slot.index);
                              }}
                            >
                              <ChevronLeft size={16} />
                            </Button>
                          )}

                          {/* Move right button */}
                          {slot.index < images.length - 1 && (
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute bottom-6 -right-0.5 rounded-full bg-white/50 text-[#1E1E1E] border border-white/25 hover:bg-gray-100 w-[37px] h-[37px] imgControlBtnShadow"
                              onClick={(e) => {
                                e.stopPropagation();
                                onMoveRight(slot.index);
                              }}
                            >
                              <ChevronRight size={16} />
                            </Button>
                          )}

                          {/* Edit button at bottom center */}
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 rounded-full bg-white/50 border border-white/25 text-[#1E1E1E] hover:bg-gray-100 w-[37px] h-[37px] imgControlBtnShadow"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditClick(slot.index);
                            }}
                          >
                            <Pencil size={16} />
                          </Button>
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Add photo button - only show if less than 10 images */}
          {images.length < 10 && (
            <div className="text-center mt-3">
              <Button type="button" className="p-2.5 bg-white hover:bg-gray-100 duration-300 border border-[#E2E4E9] text-[#525866]" onClick={onAddPhoto}>
                Add Photo
              </Button>
            </div>
          )}

          {/* Save button - only show if there are uploaded images */}
            <div className="text-end mt-8">
              <Button type="button" className="p-2.5 bg-[#45B5AA] hover:bg-[#00897C] duration-300" onClick={onSave}>
                <SaveIcon /> Save
              </Button>
            </div>
          
        </div>
      </Card>

      {/* Image Edit Modal */}
      <ImageEditModal
        isOpen={isEditModalOpen}
        onClose={handleModalClose}
        image={editingImageIndex !== null ? images[editingImageIndex] : ""}
        description={editingImageIndex !== null ? imageDescriptions[editingImageIndex] || "" : ""}
        rotation={editingImageIndex !== null && rotation && typeof rotation === "object" ? rotation[editingImageIndex] || 0 : rotation || 0}
        onDescriptionChange={handleDescriptionSave}
        onDelete={handleImageDelete}
        onRotate={handleImageRotate}
        onSave={handleDescriptionSave}
      />
    </>
  );
};

export default AdditionalImagesSection;
