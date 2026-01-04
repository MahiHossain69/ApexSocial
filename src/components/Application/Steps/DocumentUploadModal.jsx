import { DocumentIcon, MemoryIcon, UploadCloudIcon } from "@/components/shared/svgs";
import { Button } from "@/components/ui/button";
import { ChevronRight, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DocumentUploadModal = ({ isOpen, onClose, documentName, existingFile = null, onSave, onDelete }) => {
  const [selectedFile, setSelectedFile] = useState(existingFile);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  // Update selected file when existingFile prop changes
  useEffect(() => {
    setSelectedFile(existingFile);
  }, [existingFile]);

  if (!isOpen) return null;

  const handleFileSelect = (file) => {
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Please select a PDF file only.");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleSave = () => {
    if (selectedFile && onSave) {
      onSave(selectedFile);
      onClose();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
      setSelectedFile(null);
      onClose();
    }
  };

  const handleCancel = () => {
    setSelectedFile(existingFile);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#122523C2] bg-opacity-50 flex items-center h-screen justify-center z-50">
      <div className="relative bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-soft-200 pb-5">
            <h2 className="inline-flex items-center gap-1">
              <DocumentIcon className="h-5 w-5 " />
              <span className=" text-[#0A0D14] font-inter font-semibold text-[16px]">{name}</span> {documentName}
            </h2>
            <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          {/* Upload Area */}
          <div className="w-full">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center flex flex-col items-center justify-center space-y-4 transition-colors ${
                isDragOver ? "border-[#20B2AA] bg-[#EDF8F7]" : selectedFile ? "border-green-300 bg-green-50" : "border-gray-300"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {selectedFile ? (
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">PDF</span>
                  </div>
                  <p className="text-[#0A0D14] font-medium text-[14px] font-inter">{selectedFile.name}</p>
                  <p className="text-[#525866] text-[12px] font-inter">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                  {existingFile && (
                    <Button variant="outline" size="icon" className="rounded-full bg-white/90 text-red-600 border border-red-200 hover:bg-red-50 w-8 h-8" onClick={handleDelete}>
                      <Trash2 size={12} />
                    </Button>
                  )}
                </div>
              ) : (
                <>
                  <UploadCloudIcon className="h-[24px] w-[24px] text-[#525866]" />
                  <p className="text-[#0A0D14] font-medium text-[14px] font-inter">Choose a file or drag and drop it here.</p>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".pdf" />
                  <Button
                    variant="outline"
                    onClick={handleBrowseClick}
                    className="border-[#E2E4E9] w-[116px] h-[32px] text-[#525866] font-inter font-medium text-[14px] hover:bg-gray-50 bg-transparent"
                  >
                    Browse File
                  </Button>
                </>
              )}
            </div>

            {/* Tips */}
            <div className="mt-4 p-3 text-[#0A0D14] border-b border-soft-200">
              <p className="text-sm font-semibold mb-2">TIPS FOR UPLOADING YOUR DOCUMENTS:</p>
              <ul className="text-xs space-y-1">
                <li>1. The only acceptable file format is .pdf.</li>
                <li>2. The maximum file size for each document is 5 MB.</li>
                <li>3. Please upload only one document at a time.</li>
                <li>4. If your document has separate pages, you must combine them into one .pdf file before uploading.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="flex items-center justify-end gap-3 mt-12">
          <Button variant="outline" onClick={handleCancel} className="px-6 text-[#44B5AA] border-0 bg-[#375DFB14] hover:text-[#44B5AA] h-10 rounded-[10px]">
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!selectedFile} className="px-6 h-10 bg-[#44B5AA] hover:bg-teal-700 text-white rounded-[10px] disabled:opacity-50 disabled:cursor-not-allowed">
            <MemoryIcon className="w-3" />
            Save & Upload
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadModal;
