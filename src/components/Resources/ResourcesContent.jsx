import {
  ChevronRight,
  LayoutDashboard,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { AiOutlineEdit } from "react-icons/ai";
import { InfoIcon, PdfIcon } from "../shared/svgs";
import { ResourceContentBlocks } from "@/data/resource-content-blocks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { checklists, socialGuides } from "@/data/checklist-and-social-guide";

const ResourcesContent = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleOpen = (itemId) => {
    setOpenItems((prev) => {
      const isCurrentlyOpen = prev[itemId];
      // If clicking on an already open item, close it
      if (isCurrentlyOpen) {
        return {
          ...prev,
          [itemId]: false,
        };
      }
      // Otherwise, close all items and open the clicked one
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      newState[itemId] = true;
      return newState;
    });
  };
  return (
    <div
      className="w-full flex flex-col pb-9
    "
    >
      <div className="flex  items-center justify-between">
        <p className="w-fit flex items-center gap-4  text-main-900 text-base md:text-lg leading-normal font-semibold">
          Resources
        </p>
        <div className="flex gap-3">
          <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white mr-auto">
            <LayoutDashboard /> Dashboard
          </Button>
          <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white mr-auto">
            <AiOutlineEdit /> Edit Application
          </Button>
        </div>
      </div>

      <div className="flex flex-col mt-9 gap-6">
        {ResourceContentBlocks.map((resourceBlock) => {
          return (
            <div
              key={resourceBlock.title}
              className="flex w-full cardShadow  border border-soft-200 rounded-[12px] p-4 md:p-6 flex-col gap-2"
            >
              <p className="text-main-900 text-base md:text-lg leading-normal font-semibold">
                {resourceBlock.title}
              </p>

              {resourceBlock.faqs.map((faq, faqIndex) => {
                const itemId = `${resourceBlock.title}-${faqIndex}`;
                const isOpen = openItems[itemId];

                return (
                  <div
                    key={faq.question}
                    className="flex w-full flex-col border border-soft-200  overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <div
                      onClick={() => toggleOpen(itemId)}
                      className="flex items-center gap-2 px-2 py-4 cursor-pointer  transition-colors duration-200"
                    >
                      <div
                        className={`h-6 w-6 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                          isOpen ? "bg-red-base" : "bg-BrandPrimary"
                        }`}
                      >
                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                      </div>

                      <h2 className="text-main-900 text-lg md:text-xl lg:text-2xl font-semibold">
                        {faq.question}
                      </h2>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-2 pb-4 text-main-900 text-sm font-normal">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        <div className="flex  cardShadow  border border-soft-200 rounded-[12px] p-4 md:p-6 flex-col">
          <p className="text-base text-main-900">
            Dear Apex Social Care Professional, on this page you will find all
            the information and resources you will need for the next steps.
            Simply scroll through or click on the relevant sections to find the
            information you are looking for. We have tried to make the content
            as clear and understandable as possible. If you have any further
            questions or need support, we are happy to help.
          </p>
          <span className="font-semibold text-main-900 text-base mt-6">
            Your Apex Social Team
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  cardShadow  border border-soft-200 rounded-[12px] p-4 md:p-6 gap-6 md:gap-8">
          <div className="flex flex-col">
            <div className="fle flex-col gap-2">
              <p className="text-base font-semibold text-main-900">
                Apex Social Checklists
              </p>
              <p className="text-base text-main-900">
                Here you'll find checklists for your stay abroad with Apex
                Social. If you have any questions, you can contact your Success
                Coach at any time.
              </p>
            </div>
            <div className="flex flex-col gap-5 md:gap-6 items-center mt-4">
              {checklists.map((checklist) => {
                return (
                  <Link
                    to={checklist.href}
                    key={checklist.id}
                    className="flex items-center p-2 bg-pink-base rounded-[10px] text-white justify-center max-w-[285px] w-full text-sm"
                  >
                    {checklist.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="text-base font-semibold text-main-900">
              Other Apex Social Guides
            </p>

            <div className="flex flex-col gap-5 md:gap-6 mt-8 items-center">
              {socialGuides.map((socialGuide) => {
                return (
                  <Link
                    to={socialGuide.href}
                    key={socialGuide.id}
                    className="flex items-center p-2 bg-pink-base rounded-[10px] text-white justify-center max-w-[285px] w-full text-sm"
                  >
                    {socialGuide.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesContent;
