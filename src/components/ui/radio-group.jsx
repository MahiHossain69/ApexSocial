import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "bg-white border border-[#E2E4E9]   data-[state=checked]:bg-[#4CC0B0]  transition-colors size-4 rounded-full flex items-center justify-center shadow-sm focus-visible:ring-2 focus-visible:ring-[#4CC0B0]/50 outline-none disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center w-full h-full"
      >
        <CircleIcon
          className="text-white bg-white rounded-[10px] shadow-2xl w-2 h-2"
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
