import { InfoFilledIcon } from "@/components/shared/svgs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PhotoRequirementModal = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] !max-w-5xl max-h-[90%] overflow-auto noScrollbar border-none">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <InfoFilledIcon />
            <span className="font-semibold font-inter text-lg md:text-xl text-[#171c1c] leading-[1.4em]">
              Photo Requirements
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="px-4 py-3 md:px-5 md:py-4 rounded-[12px] bg-[#FCF8E3] text-[#4D3100] mt-2">
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="font-medium font-inter text-sm leading-snug">
              Please upload files in the following formats: JPG/JPEG
            </p>
            <span className="text-xs font-inter font-normal leading-normal">
              You can convert files to JPG/JPEG using different tools
            </span>
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mt-4">
            <span className="text-xs font-inter leading-normal">
              For Windows please download irfanview here:{" "}
              <a className="underline font-medium"
                href="https://www.irfanview.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.irfanview.com
              </a>
            </span>
            <p className="font-medium font-inter text-sm leading-snug">
              Open the file &gt; File &gt; Save as... &gt; Format JPG/JPEG
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 mt-4">
            <span className="text-xs font-inter font-normal leading-normal">
              For MAC please use the “onboard” tool: Preview
            </span>
            <p className="font-medium font-inter  text-sm leading-snug">
              Open the file &gt; File &gt; Save as... &gt; Format JPG/JPEG
            </p>
          </div>
        </div>

        <div className="px-4 py-3 md:px-5 md:py-4 rounded-[12px] bg-[#F6F8FA] text-main-900 mt-6">
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="font-medium font-inter text-sm leading-snug">
              Profile Pictures:
            </p>
            <ul className="list-disc font-inter font-normal ml-5 text-xs space-y-2 md:space-y-3">
              <li>Photo clearly visible from the front</li>
              <li>Friendly photo with smile straight into the camera.</li>
              <li>Good lighting conditions</li>
              <li>No selfies or mirror photos</li>
              <li>No filters, hats, sunglass, etc</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mt-4">
            <p className="font-medium font-inter text-sm leading-snug">
              Additional Pictures:
            </p>
            <ul className="list-disc font-inter font-normal ml-5 text-xs space-y-2 md:space-y-3">
              <li>Upload up to 10 more photos</li>
              <li>
                Colorful mix of photos from your life, also photo collages
              </li>
              <li>
                Suggestions: Hobbies, with children, with your family/friends,
                from previous trips, your passions, your pet
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:gap-3 mt-4">
            <p className="font-medium font-inter text-sm leading-snug">Important:</p>
            <ul className="list-disc font-inter ml-5 text-xs space-y-2 md:space-y-3">
              <li>
                No photos with alcoholic beverages and appropriate clothing
                choices! Pay attention to what is in the background!
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoRequirementModal;
