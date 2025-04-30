import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,  // keep only once
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isToday,
  subDays,
  startOfYear,
  isWithinInterval,
} from "date-fns";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CustomCalendar({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onCancel,
  onApply,
}) {
  const [leftMonth, setLeftMonth] = useState(() => {
    return startDate ? new Date(startDate.getFullYear(), startDate.getMonth(), 1) : new Date();
  });

  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate);
  const [selecting, setSelecting] = useState("start");

  // NEW STATE: track selected quick option
  const [activeQuickSelect, setActiveQuickSelect] = useState("");

  const rightMonth = addMonths(leftMonth, 1);

  useEffect(() => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  }, [startDate, endDate]);

  const handlePreviousMonth = () => setLeftMonth(subMonths(leftMonth, 1));
  const handleNextMonth = () => setLeftMonth(addMonths(leftMonth, 1));

  const getMonthDays = (month) => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    const days = eachDayOfInterval({ start, end });
    const firstDayOfMonth = start.getDay() || 7;
    const paddingDaysStart = firstDayOfMonth > 1 ? firstDayOfMonth - 1 : 0;
    return { days, paddingDaysStart };
  };

  const leftMonthData = getMonthDays(leftMonth);
  const rightMonthData = getMonthDays(rightMonth);

  const handleDateClick = (date) => {
    // If user manually picks a date, clear quick select highlight
    setActiveQuickSelect("");

    if (selecting === "start" || !selectedStartDate) {
      setSelectedStartDate(date);
      setSelectedEndDate(undefined);
      setSelecting("end");
    } else {
      if (date < selectedStartDate) {
        setSelectedEndDate(selectedStartDate);
        setSelectedStartDate(date);
      } else {
        setSelectedEndDate(date);
      }
      setSelecting("start");
    }
  };

  const handleApply = () => {
    onStartDateChange(selectedStartDate);
    onEndDateChange(selectedEndDate);
    onApply();
  };

  const handleCancel = () => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
    onCancel();
  };

  const isDateInRange = (date) => {
    if (!selectedStartDate || !selectedEndDate) return false;
    return isWithinInterval(date, { start: selectedStartDate, end: selectedEndDate });
  };

  const isStartDate = (date) => selectedStartDate ? isSameDay(date, selectedStartDate) : false;
  const isEndDate = (date) => selectedEndDate ? isSameDay(date, selectedEndDate) : false;

  const quickSelectOptions = [
    {
      label: "Today",
      onClick: () => {
        const today = new Date();
        setSelectedStartDate(today);
        setSelectedEndDate(today);
        setSelecting("start");
        setLeftMonth(new Date(today.getFullYear(), today.getMonth(), 1));
        setActiveQuickSelect("Today"); // mark active
      },
    },
    {
      label: "Last 7 days",
      onClick: () => {
        const end = new Date();
        const start = subDays(end, 6);
        setSelectedStartDate(start);
        setSelectedEndDate(end);
        setSelecting("start");
        setLeftMonth(new Date(start.getFullYear(), start.getMonth(), 1));
        setActiveQuickSelect("Last 7 days");
      },
    },
    {
      label: "Last 30 days",
      onClick: () => {
        const end = new Date();
        const start = subDays(end, 29);
        setSelectedStartDate(start);
        setSelectedEndDate(end);
        setSelecting("start");
        setLeftMonth(new Date(start.getFullYear(), start.getMonth(), 1));
        setActiveQuickSelect("Last 30 days");
      },
    },
    {
      label: "Last 3 months",
      onClick: () => {
        const end = new Date();
        const start = subMonths(end, 3);
        setSelectedStartDate(start);
        setSelectedEndDate(end);
        setSelecting("start");
        setLeftMonth(new Date(start.getFullYear(), start.getMonth(), 1));
        setActiveQuickSelect("Last 3 months");
      },
    },
    {
      label: "Last 12 months",
      onClick: () => {
        const end = new Date();
        const start = subMonths(end, 12);
        setSelectedStartDate(start);
        setSelectedEndDate(end);
        setSelecting("start");
        setLeftMonth(new Date(start.getFullYear(), start.getMonth(), 1));
        setActiveQuickSelect("Last 12 months");
      },
    },
    {
      label: "Month to date",
      onClick: () => {
        const end = new Date();
        const start = new Date(end.getFullYear(), end.getMonth(), 1);
        setSelectedStartDate(start);
        setSelectedEndDate(end);
        setSelecting("start");
        setLeftMonth(new Date(start.getFullYear(), start.getMonth(), 1));
        setActiveQuickSelect("Month to date");
      },
    },
    {
      label: "Year to date",
      onClick: () => {
        const end = new Date();
        const start = startOfYear(end);
        setSelectedStartDate(start);
        setSelectedEndDate(end);
        setSelecting("start");
        setLeftMonth(new Date(start.getFullYear(), start.getMonth(), 1));
        setActiveQuickSelect("Year to date");
      },
    },
    {
      label: "All time",
      onClick: () => {
        const start = new Date(2000, 0, 1);
        const end = new Date(2050, 11, 31);
        setSelectedStartDate(start);
        setSelectedEndDate(end);
        setSelecting("start");
        setActiveQuickSelect("All time");
      },
    },
  ];

  const renderMonth = (month, { days, paddingDaysStart }) => (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
          <div key={day} className="text-center text-xs text-gray-500 py-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: paddingDaysStart }).map((_, i) => (
          <div key={`empty-start-${i}`} className="h-8 w-8"></div>
        ))}
        {days.map((day) => {
          const isSelected = isStartDate(day) || isEndDate(day);
          const inRange = isDateInRange(day);
          return (
            <button
              key={day.toString()}
              type="button"
              onClick={() => handleDateClick(day)}
              className={cn(
                "h-8 w-8 rounded-lg flex items-center justify-center text-sm transition-colors",
                isToday(day) && "font-semibold",
                isSelected && "bg-teal-500 text-white",
                inRange && !isSelected && "bg-teal-100 text-teal-600",
                !isSelected && !inRange && "hover:bg-gray-100"
              )}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Left Sidebar */}
      <div className="w-full sm:w-48 border-b sm:border-b-0 sm:border-r border-gray-200 p-4 space-y-3">
      {quickSelectOptions.map((option) => (
  <button
    key={option.label}
    type="button"
    onClick={option.onClick}
    className={cn(
      "text-sm text-[#525866] font-inter text-[14px] font-medium hover:text-gray-900 w-full text-left rounded-md px-2 py-1",
      activeQuickSelect === option.label && "font-medium text-[14px] font-inter text-[#0A0D14] bg-[#F6F8FA]"
    )}
  >
    {option.label}
  </button>
))}
      </div>

      {/* Calendar Main */}
      <div className="flex-1 cursor-pointer p-4">
        {/* Header */}
        <div className="flex justify-between  items-center mb-4">
          <button type="button" onClick={handlePreviousMonth} className="p-1 rounded-lg cursor-pointer z-10 bg-[#FFFFFF] ">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </button>
          <div className="w-[2px] h-[20px] bg-black"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
            <div className="text-center text-[14px] font-inter font-medium bg-[#F6F8FA] text-[#0A0D14] rounded-lg pt-[5px] ml-[-31px] h-[36px] sm:text-base">{format(leftMonth, "MMM, yyyy")}</div>
            <div className="text-center text-[14px] font-inter font-medium bg-[#F6F8FA] text-[#0A0D14] rounded-lg pt-[5px] mr-[-31px] h-[36px] sm:text-base">{format(rightMonth, "MMM, yyyy")}</div>
          </div>

          <button type="button" onClick={handleNextMonth} className="p-1 rounded-lg cursor-pointer z-10 bg-[#FFFFFF] ">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </button>
        </div>

        {/* Months */}
        <div className="grid cursor-pointer   grid-cols-1 sm:grid-cols-2 gap-10">
          {renderMonth(leftMonth, leftMonthData)}
          <div className="w-[1px] h-[293px] top-0 left-[477px] bg-gray-300 absolute"></div>
          {renderMonth(rightMonth, rightMonthData)}
        </div>
        

       
        {/* Footer */}
        <div className="mt-4 flex flex-col border-t-1 ml-[-16px] pl-[16px] mr-[-15px] pr-[15px] pt-[12px] sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="text-[14px] flex font-inter font-medium gap-[5px] sm:text-sm text-[#0A0D14]">
            <h1 className="text-[#525866] font-inter font-normal text-[14px]">Range: </h1>
            {selectedStartDate && selectedEndDate
              ? `${format(selectedStartDate, "MMM yyyy")} - ${format(selectedEndDate, "MMM yyyy")}`
              : selectedStartDate
              ? `${format(selectedStartDate, "MMM yyyy")} - Select end date`
              : "Select a date range"}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCancel} className="text-xs sm:text-sm">
              Cancel
            </Button>
            <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-xs sm:text-sm" onClick={handleApply} disabled={!selectedStartDate}>
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
