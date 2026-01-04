import { UploadCloudIcon } from "@/components/shared/svgs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Info, SaveIcon } from "lucide-react";
import { HiOutlineTrash } from "react-icons/hi";

const VideoSection = ({ videoPreview, description, onDescriptionChange, onVideoChange, onRemoveVideo, onOpenModal, dragHandlers }) => {
  return (
    <Card className="p-8 mx-auto flex flex-col gap-[18px] bg-white rounded-lg border border-[#E2E4E9] shadow-none relative">
      <div className="relative">
        <h2 className="text-[16px] text-[#0A0D14] font-semibold font-inter flex items-center gap-2">
          Upload Video Introduction
          <span className="text-[#868C98] hover:text-gray-600 cursor-pointer" onClick={onOpenModal}>
            <Info className="w-4 h-4" />
          </span>
        </h2>
      </div>

      <p className="text-sm font-inter flex gap-[4px] font-normal text-[#0A0D14]">
        <span className="font-bold text-[#0A0D14]">Optional:</span>
        Upload one short video introducing yourself—share who you are, your experience with kids, and why you're excited to become a Care Professional.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Video Preview */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="relative w-full h-[425px] overflow-hidden">
            {videoPreview ? (
              <video src={videoPreview} className="w-full h-full object-cover" controls />
            ) : (
              <div className="w-full h-full font-inter font-medium flex items-center justify-center text-gray-500">
                <img src="/icons/video-placeholder.png" className="w-full h-fit" alt="video-placeholder" />
              </div>
            )}

            {/* Show remove button only when video is uploaded */}
            {videoPreview && (
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/50 border border-white/25 text-red-500 hover:bg-red-100 w-8 h-8 imgControlBtnShadow"
                onClick={onRemoveVideo}
              >
                <HiOutlineTrash size={16} />
              </Button>
            )}
          </div>
        </div>

        {/* Right Section: Upload Box */}
        <div className="w-full md:w-2/3">
          <div
            className="border-2 border-dashed border-[#CDD0D5] rounded-lg p-10 text-center hover:border-[#9CA3AF] transition-colors duration-200"
            onDragOver={dragHandlers.handleDragOver}
            onDragEnter={dragHandlers.handleDragEnter}
            onDragLeave={dragHandlers.handleDragLeave}
            onDrop={dragHandlers.handleVideoDrop}
          >
            <UploadCloudIcon className="mx-auto mb-[28px] h-[24px] w-[24px]" />
            <p className="text-sm font-inter mb-[30px] font-medium text-[#0A0D14]">Choose a video file or drag and drop it here.</p>
            <p className="mb-[10px] text-sm font-medium font-inter text-[#0A0D14]">Upload a clear, engaging video introduction.</p>
            <div className="flex justify-center items-center text-xs font-medium font-inter text-[#868C98] gap-3">
              <span>Max file size: 150MB</span>
              <span>|</span>
              <span>Supported file types: mp4, mov, avi, wmv</span>
              <span>|</span>
              <span>Max dimensions: 1980 x 1200</span>
            </div>
            <label className="mt-6 inline-block cursor-pointer">
              <Button className="bg-white text-[#525866] border border-[#E2E4E9] font-inter font-medium text-[14px] hover:bg-gray-50" asChild>
                <span>Browse File</span>
              </Button>
              <Input type="file" className="hidden" onChange={onVideoChange} accept=".mp4,.mov,.avi,.wmv" />
            </label>
          </div>
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

export default VideoSection;
