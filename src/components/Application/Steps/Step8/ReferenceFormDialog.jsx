
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DocumentIcon,
  PdfIcon,
  UploadCloudIcon,
} from "@/components/shared/svgs";
import { ChevronDown, File } from "lucide-react";
import PhoneInput from "@/components/ui/phoneInput";
import FormField from "@/components/ui/formField";

const ReferenceDetailsForm = ({
  mobilePhone,
  onMobilePhoneChange,
  homePhone,
  onHomePhoneChange,
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
    {[
      ["firstName", "First Name"],
      ["lastName", "Last Name"],
      ["email", "Email", "email"],
      ["profession", "Profession"],
      ["streetAddress", "Street Address"],
      ["city", "City"],
      ["postalCode", "Postal Code/Zip Code"],
      ["state", "State"],
    ].map(([id, label, type = "text"]) => (
      <FormField key={id} id={id} label={label} required>
        <Input id={id} type={type} placeholder="Type here..." />
      </FormField>
    ))}

    <FormField id="country" label="Country" required>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Here" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="USA">USA</SelectItem>
          <SelectItem value="Canada">Canada</SelectItem>
        </SelectContent>
      </Select>
    </FormField>

    <FormField id="mobilePhone" label="Mobile Phone" required>
      <PhoneInput
        inputId="mobilePhone"
        value={mobilePhone}
        onChange={onMobilePhoneChange}
      />
    </FormField>
    <FormField id="homePhone" label="Home Phone">
      <PhoneInput
        inputId="homePhone"
        value={homePhone}
        onChange={onHomePhoneChange}
      />
    </FormField>

    <FormField id="language" label="Language" required>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Here" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="English">English</SelectItem>
          <SelectItem value="Spanish">Spanish</SelectItem>
        </SelectContent>
      </Select>
    </FormField>
  </div>
);

export function ReferenceFormDialog({ open, onOpenChange, reference, onSave }) {
  const [file, setFile] = useState(null);
  const [mobilePhone, setMobilePhone] = useState("");
  const [homePhone, setHomePhone] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleMobilePhoneChange = (value) => {
    setMobilePhone(value);
  };

  const handleHomePhoneChange = (value) => {
    setHomePhone(value);
  };

  const handleSave = () => {
    onSave({ ...reference, fileName: file?.name });
    onOpenChange(false);
    setFile(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="!bg-red-500">
      <DialogContent className="sm:max-w-[860px] p-0 overflow-hidden rounded-xl">
        <DialogHeader className="p-6">
          <DialogTitle className="flex gap-2 items-center text-lg font-semibold text-gray-800">
            <DocumentIcon /> {reference?.label}
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-4 max-h-[70vh] overflow-y-auto">
          <ReferenceDetailsForm
            mobilePhone={mobilePhone}
            onMobilePhoneChange={handleMobilePhoneChange}
            homePhone={homePhone}
            onHomePhoneChange={handleHomePhoneChange}
          />

          <DialogTitle className="flex gap-2 items-center text-lg mt-6 font-semibold text-gray-800">
            <DocumentIcon /> {reference?.label}
          </DialogTitle>

          <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center">
            <UploadCloudIcon className="w-10 h-10 text-gray-400 mb-4" />
            <p className="text-sm text-[#0A0D14] font-inter font-medium mb-4">
              Choose a file or drag and drop it here.
            </p>
            <div>
              <Label
                htmlFor="file-upload-input"
                className="cursor-pointer font-inter inline-flex items-center justify-center border border-[#E2E4E9] rounded-md bg-white px-4 py-2 text-sm font-medium text-[#525866] hover:bg-gray-100 transition-colors"
              >
                Browse File
              </Label>
              <Input
                id="file-upload-input"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {file && (
            <div className="flex justify-center items-center gap-2 mt-2">
              <File className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">{file.name}</span>
            </div>
          )}

          <div className="mt-4 text-sm text-black font-inter font-normal max-w-[920px] text-left">
            <p>
              This is a writable pdf. Download it to your computer and open it
              in Adobe Reader so you can fill it out electronically and save it,
              then upload the completed document here. If you fill it out in
              your internet browser window it will not save your information.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <PdfIcon className="h-[30px] w-[30px]" />
              <a
                href="#"
                className="text-[#45B5AA] font-inter underline text-sm font-medium"
              >
                Download {reference?.label}
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end p-4 border-t">
          <Button
            className="bg-[#45B5AA] text-primary-foreground hover:bg-primary/90"
            onClick={handleSave}
            disabled={!file}
          >
            Save and Upload
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
