import { InfoFilledIcon } from "@/components/shared/svgs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { InfoIcon } from "lucide-react";

const TipsForUploadingDocumentModal = ({
  isOpen = false,
  onClose = () => {},
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] !max-w-5xl max-h-[90%] overflow-auto noScrollbar border-none">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <InfoFilledIcon />
            <span className="font-semibold text-lg md:text-xl text-[#171c1c] leading-[1.4em]">
              TIPS FOR UPLOADING DOCUMENTS
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 py-3 md:px-5 md:py-4 rounded-[12px] bg-[#F6F8FA] text-main-900 ">
          <div className="flex flex-col gap-2 md:gap-3 mt-4">
            <p className="font-medium text-sm leading-snug">
              TIPS FOR UPLOADING YOUR DOCUMENTS:
            </p>
            <ul className="list-decimal ml-5 text-sm space-y-2 md:space-y-3">
              <li>The only acceptable file format is.pdf.</li>
              <li>The maximum file size for each document is 5 MB.</li>
              <li>Please upload only one document at a time.</li>
              <li>
                If your document has separate pages, you must combine them into
                one .pdf file before uploading.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mt-4">
            <p className=" text-sm leading-snug">
              For more information about the criminal record transcript and
              where to get it please visit:
            </p>
            <div className="flex border-b border-soft-200 gap-10 py-3 text-xs">
              <span className="max-w-36 w-full shrink-0">Germany</span>
              <a
                href="https://www.bundesjustizamt.de/DE/Themen/Buergerdienste/BZR/Inland/FAQ_node.html"
                className="break-all"
              >
                https://www.bundesjustizamt.de/DE/Themen/Buergerdienste/BZR/Inland/FAQ_node.html
              </a>
            </div>
            <div className="flex border-b border-soft-200 gap-10 py-3 text-xs">
              <span className="max-w-36 w-full shrink-0">Austria</span>
              <a
                href="https://www.help.gv.at/Portal.Node/hipd/public/content/30/Seite.300020.html"
                className="break-all"
              >
                https://www.help.gv.at/Portal.Node/hipd/public/content/30/Seite.300020.html
              </a>
            </div>
            <div className="flex border-b border-soft-200 gap-10 py-3 text-xs">
              <span className="max-w-36 w-full shrink-0">Switzerland</span>
              <a
                href="lhttps://www.ch.ch/de/strafregisterauszug"
                className="break-all"
              >
                lhttps://www.ch.ch/de/strafregisterauszug
              </a>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-black">
              Criminal Record Transcripts must not be older than one year at the
              time of departure
            </p>

            <div className="mt-4 rounded-md p-2 bg-BrandPrimary/10 text-sm text-BrandPrimary flex items-center gap-2">
              <InfoIcon size={20} />
              <span>
                Use our PDF Merger to combine separate .pdf files into once,
                reduce the size of .pdf Files and / or convert .jpg to .pdf
                files
              </span>
            </div>
            <div className="mt-4 rounded-md p-2 bg-BrandPrimary/10 text-sm text-BrandPrimary flex items-center gap-2">
              <InfoIcon size={20} />
              <span>
                For additional info, please refer to our Reference and Document
                Guide.
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TipsForUploadingDocumentModal;
