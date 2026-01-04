import React, { useState, useRef, useEffect } from "react";
import { Label } from "./label";
import { Info } from "lucide-react";
import { Button } from "./button";
import InfoText from "../Application/Steps/InfoText";

const FormField = ({
  id,
  label,
  required = false,
  info = false,
  infoText,
  infoTitle,
  infoDescription,
  description,
  error,
  children,
  className,
  modal: ModalComponent,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const infoRef = useRef(null);
  const infoContainerRef = useRef(null);

  // Handle click outside to close info text
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        infoRef.current &&
        !infoRef.current.contains(event.target) &&
        infoContainerRef.current &&
        !infoContainerRef.current.contains(event.target)
      ) {
        setShowInfo(false);
      }
    };

    if (showInfo) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInfo]);

  const handleInfoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (ModalComponent) {
      setShowModal(true);
    } else if (infoText || infoDescription) {
      setShowInfo(!showInfo);
    }
  };

  return (
    <div className={`space-y-2 relative${className ? ` ${className}` : ""}`}>
      {label && (
        <div className="relative">
          <Label
            htmlFor={id}
            className="w-fit flex text-sm font-medium font-inter text-[#0A0D14] leading-[1.42em] tracking-[-0.006em]"
          >
            <span className="inline align-middle items-center">
              {label}
              {required && <span className="text-red-base ml-1">*</span>}
              {info && (
                <Button
                  type="button"
                  onClick={handleInfoClick}
                  className="ml-1.5 cursor-pointer !px-0 !py-0 w-fit h-fit bg-transparent hover:bg-transparent focus-visible:ring-0 translate-y-1"
                  ref={infoRef}
                >
                  <Info size={12} className="text-soft-400" />
                </Button>
              )}
            </span>
          </Label>
          {showInfo && (infoText || infoDescription) && (
            <div
              className="absolute top-full left-0 mt-2 z-50"
              ref={infoContainerRef}
            >
              <InfoText
                infoTitle={infoTitle || "Information"}
                infoDescription={infoDescription || infoText}
              />
            </div>
          )}
        </div>
      )}

      {children}

      {description && (
        <p className="text-xs md:text-sm font-regular text-[#525866]">
          {description}
        </p>
      )}

      {error && (
        <p className="text-sm text-red-500 mt-1">
          {typeof error === "string" ? error : "This field is required"}
        </p>
      )}

      {/* Render Modal if provided */}
      {ModalComponent && showModal && (
        <ModalComponent
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default FormField;
