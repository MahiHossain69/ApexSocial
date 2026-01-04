import {
  CheckIcon,
  CircleIcon,
  RightArrowIcon,
} from "@/components/shared/svgs";

const Progressbar = ({
  isExpanded,
  currentStep,
  onStepChange,
  steps,
  onToggle,
}) => {
  const isStepCompleted = (index) => index < currentStep;

  return (
    <div className="flex flex-col w-full h-full bg-[#F4F6F6] px-2 md:px-3 pb-4 border-r border-[#E3E8E8]">
      <div className="text-end mb-2">
        <button
          onClick={onToggle}
          className="w-10 h-10 inline-flex items-center justify-center"
        >
          <RightArrowIcon
            className={`${
              !isExpanded ? "rotate-180" : ""
            } transition-transform duration-300`}
          />
        </button>
      </div>

      {steps.map((step, index) => {
        const isCompleted = isStepCompleted(index);
        const isActive = index === currentStep;

        return (
          <button
            key={index}
            onClick={() => onStepChange(index)}
            className={`flex items-center w-full p-3 rounded-md transition-all gap-2.5 justify-between border-b border-neutral-300
              ${
                isActive
                  ? "bg-neutral-800 text-neutral-150"
                  : " text-neutral-800"
              }
              ${isExpanded ? "justify-start" : "justify-center"}
            `}
          >
            <span className="text-sm font-medium">{index + 1}.</span>

            {isExpanded && (
              <span className="text-left text-sm font-medium">
                {step.title}
              </span>
            )}

            {isCompleted ? (
              <CheckIcon className={`w-6 ${isExpanded ? "ml-auto" : ""}`} />
            ) : (
              <CircleIcon className={`w-6 ${isExpanded ? "ml-auto" : ""}`} />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Progressbar;
