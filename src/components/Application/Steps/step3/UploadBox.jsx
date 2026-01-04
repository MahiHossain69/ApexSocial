import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UploadCloudIcon } from "@/components/shared/svgs";

const UploadBox = ({
  onFileChange,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop,
  accept = ".jpg,.jpeg,.png,.gif,.bmp",
  maxSize = "10MB",
  supportedTypes = "jpg, jpeg, png, gif, bmp",
  maxDimensions = "1980 x 1200",
  multiple = false,
  title = "Choose a file or drag and drop it here.",
  subtitle = "Use a clear, high-resolution image.",
}) => {
  return (
    <div
      className="border-2 border-dashed border-[#CDD0D5] rounded-lg p-10 text-center hover:border-[#9CA3AF] transition-colors duration-200"
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <UploadCloudIcon className="mx-auto mb-[28px] h-[24px] w-[24px]" />
      <p className="text-sm font-inter mb-[30px] font-medium text-[#0A0D14]">
        {title}
      </p>
      <p className="mb-[10px] text-sm font-medium font-inter text-[#0A0D14]">
        {subtitle}
      </p>
      <div className="flex justify-center items-center text-xs font-medium font-inter text-[#868C98] gap-3">
        <span>Max file size: {maxSize}</span>
        <span>|</span>
        <span>Supported file types: {supportedTypes}</span>
        <span>|</span>
        <span>Max dimensions: {maxDimensions}</span>
      </div>
      <label className="mt-6 inline-block cursor-pointer">
        <Button
          className="bg-white text-[#525866] border border-[#E2E4E9] font-inter font-medium text-[14px] hover:bg-gray-50"
          asChild
        >
          <span>Browse File</span>
        </Button>
        <Input
          type="file"
          className="hidden"
          onChange={onFileChange}
          accept={accept}
          multiple={multiple}
        />
      </label>
    </div>
  );
};

export default UploadBox;
