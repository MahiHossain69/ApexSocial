import { Button } from "@/components/ui/button";
import { RotateCw, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";

const ImageEditModal = ({ isOpen, onClose, image, description, onDelete, onRotate, onSave, rotation = 0 }) => {
  const [localDescription, setLocalDescription] = useState(description || "");

  // Update local description when description prop changes (different image selected)
  useEffect(() => {
    setLocalDescription(description || "");
  }, [description]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(localDescription);
    onClose();
  };

  const handleCancel = () => {
    setLocalDescription(description || "");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#122523C2] bg-opacity-50 flex items-center h-screen justify-center z-50">
      <div className="relative bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - Image with controls */}
          <div className="lg:max-w-[312px] w-full">
            <div className="relative">
              <img 
                src={image} 
                alt="Selected image" 
                className="w-full h-[312px] object-cover rounded-lg" 
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.3s ease-in-out'
                }}
              />

              {/* Delete button - bottom center */}
              <Button
            unded-riant="outline"
                size="icon"
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/90 text-red-600 border border-red-200 hover:bg-red-50 w-8 h-8"
                onClick={onDelete}
              >
                <Trash2 size={12} />
              </Button>

              {/* Rotate button - bottom center, above delete */}
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded-full bg-white/90 text-black border border-blue-200 hover:bg-blue-50 w-8 h-8"
                onClick={() => {
                  console.log("Rotate button clicked in modal"); // Debug log
                  if (onRotate) {
                    onRotate();
                  }
                }}
              >
                <RotateCw size={12} />
              </Button>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="flex-1">
            <div className="space-y-4">
              {/* Header with close button */}
              <div className="flex justify-between items-center ">
                <h2 className="text-base font-semibold text-gray-900">Describe your photo here!</h2>
                <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700">
                  <X size={20} />
                </button>
              </div>
              <textarea
                value={localDescription}
                onChange={(e) => setLocalDescription(e.target.value)}
                placeholder="Type Here..."
                className="w-full px-3 pt-2 h-10 text-sm border border-gray-300 rounded-[6px] resize-none focus:border-transparent lg:max-w-[94%]"
              />
            </div>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="flex items-center justify-end lg:absolute bottom-6 right-6 gap-3 mt-6">
          <Button variant="outline" onClick={handleCancel} className="px-6 text-[#44B5AA] border-0 bg-[#375DFB14] hover:text-[#44B5AA] h-10 rounded-[10px]">
            Cancel
          </Button>
          <Button onClick={handleSave} className="px-6 h-10 bg-[#44B5AA] hover:bg-teal-700 text-white rounded-[10px]">
            Done Editing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditModal;
