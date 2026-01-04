import { InfoFilledIcon } from "@/components/shared/svgs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const VideoRequirementModal = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] !max-w-5xl max-h-[90%] overflow-auto noScrollbar border-none">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <InfoFilledIcon />
            <span className="font-semibold font-inter text-lg md:text-xl text-[#171c1c] leading-[1.4em]">
              Video Requirements
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="px-4 py-3 md:px-5 md:py-4 rounded-[12px] bg-[#FCF8E3] text-[#4D3100] mt-2">
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="font-medium font-inter text-sm leading-snug">
              Please upload files in the following formats: MP4, MOV, or AVI
            </p>
            <span className="text-xs font-inter font-normal leading-normal">
              You can convert video files to these formats using various tools
            </span>
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mt-4">
            <span className="text-xs font-inter leading-normal">
              For Windows, we recommend using VLC Media Player:{" "}
              <a
                className="underline font-medium"
                href="https://www.videolan.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.videolan.org
              </a>
            </span>
            <p className="font-medium font-inter text-sm leading-snug">
              Media &gt; Convert/Save &gt; Choose format &gt; Start
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 mt-4">
            <span className="text-xs font-inter font-normal leading-normal">
              For MAC users, you can use QuickTime Player
            </span>
            <p className="font-medium font-inter text-sm leading-snug">
              File &gt; Export As &gt; Select format &gt; Save
            </p>
          </div>
        </div>

        <div className="px-4 py-3 md:px-5 md:py-4 rounded-[12px] bg-[#F6F8FA] text-main-900 mt-6">
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="font-medium font-inter text-sm leading-snug">
              Introduction Video:
            </p>
            <ul className="list-disc font-inter font-normal ml-5 text-xs space-y-2 md:space-y-3">
              <li>Record in landscape mode (horizontal)</li>
              <li>Ensure good lighting and clear audio</li>
              <li>Choose a quiet, clean background</li>
              <li>Video length: 2-3 minutes</li>
              <li>Speak clearly and naturally</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mt-4">
            <p className="font-medium font-inter text-sm leading-snug">
              Content Guidelines:
            </p>
            <ul className="list-disc font-inter font-normal ml-5 text-xs space-y-2 md:space-y-3">
              <li>Introduce yourself and your background</li>
              <li>Share your motivation for becoming a caregiver</li>
              <li>Discuss your experience with children, if any</li>
              <li>Mention your hobbies and interests</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mt-4">
            <p className="font-medium font-inter text-sm leading-snug">
              Important:
            </p>
            <ul className="list-disc font-inter ml-5 text-xs space-y-2 md:space-y-3">
              <li>
                Dress professionally and ensure appropriate content. The video
                should reflect your personality while maintaining a professional
                demeanor.
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoRequirementModal;
