"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IoCheckmarkCircle } from "react-icons/io5";
import { DocumentIcon } from "@/components/shared/svgs"
import { cn } from "@/lib/utils"

export function ReferenceItem({ 
  title = "", 
  required = false, 
  uploaded = false, 
  showDownload = false,
  onUpload,
  error
}) {
  const fileInputRef = useRef(null)

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file && typeof onUpload === 'function') {
      onUpload(file)
    }
  }

  return (
    <div>
      <Card className={cn("w-full rounded-xl cardShadow", error && "border-red-500")}>
        <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4">
          <div className="flex items-center gap-3 flex-grow">
            <DocumentIcon className="w-5 h-5 text-black" />
            <span className="text-[16px]  text-black font-inter font-semibold ">
              {title} {required && <span className="text-red-500">*</span>}
            </span>
            {uploaded && <IoCheckmarkCircle className="h-[21px] w-[21px] text-[#43B4A9]" />}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            {showDownload && (
              <Button
                variant="my"
                className="bg-[#EDF8F7]/100 text-[#44B5AA] font-inter font-semibold text-[14px] opacity-100 hover hover:bg-[#43B4A9] hover:text-white w-full sm:w-auto"
              >
                Download PDF
              </Button>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <Button 
              onClick={handleUploadClick}
              className="bg-[#43B4A9] font-inter font-semibold hover:bg-[#43B4A9] text-primary-foreground  w-full sm:w-auto"
            >
              Upload
            </Button>
          </div>
        </CardContent>
      </Card>
      {error && (
        <p className="text-red-500 text-sm mt-1 ml-2">{error}</p>
      )}
    </div>
  )
}
