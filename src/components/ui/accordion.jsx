import { useState } from "react";
import { cn } from "@/lib/utils";
import { DownIcon } from "../shared/svgs";

export function Accordion({ type = "single", collapsible = true, className, children, defaultValue }) {
  const [openItems, setOpenItems] = useState(() => {
    if (type === "single") return defaultValue ? [defaultValue] : [];
    return Array.isArray(defaultValue) ? defaultValue : [];
  });

  const toggleItem = (value) => {
    setOpenItems((prev) => {
      const isOpen = prev.includes(value);
      if (type === "single") {
        if (isOpen && collapsible) return [];
        return [value];
      }
      if (isOpen) return prev.filter((v) => v !== value);
      return [...prev, value];
    });
  };

  return (
    <div className={cn("w-full", className)}>
      {Array.isArray(children)
        ? children.map((child, idx) =>
            child && child.type === AccordionItem
              ? { ...child, props: { ...child.props, __openItems: openItems, __toggleItem: toggleItem } }
              : child
          )
        : children && children.type === AccordionItem
        ? { ...children, props: { ...children.props, __openItems: openItems, __toggleItem: toggleItem } }
        : children}
    </div>
  );
}

export function AccordionItem({ value, className, children, __openItems = [], __toggleItem = () => {} }) {
  const isOpen = __openItems.includes(value);
  return (
    <div className={cn(" cardShadow overflow-hidden", className)}>
      {Array.isArray(children)
        ? children.map((child) =>
            child && child.type && (child.type === AccordionTrigger || child.type === AccordionContent)
              ? { ...child, props: { ...child.props, value, isOpen, onToggle: () => __toggleItem(value) } }
              : child
          )
        : children && children.type && (children.type === AccordionTrigger || children.type === AccordionContent)
        ? { ...children, props: { ...children.props, value, isOpen, onToggle: () => __toggleItem(value) } }
        : children}
    </div>
  );
}

export function AccordionTrigger({ children, className, onToggle, isOpen, icon }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "bg-[#7DA336] text-white flex items-center justify-between w-full px-4 py-2 ",
        className
      )}
      aria-expanded={undefined}
    >
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded grid place-items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
          {icon || null}
        </div>
        <div className="text-base sm:text-xl lg:text-2xl font-inter font-semibold">{children}</div>
      </div>
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded grid place-items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" aria-hidden="true">
        <DownIcon className={cn("transition-transform text-neutral-900", isOpen ? "rotate-180" : "rotate-0")}/>
      </div>
    </button>
  );
}

export function AccordionContent({ children, className, isOpen }) {
  if (!isOpen) return null;
  return <div className={cn("p-2 sm:p-4", className)}>{children}</div>;
}


