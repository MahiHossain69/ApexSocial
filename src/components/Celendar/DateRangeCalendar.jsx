import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isToday,
  isWithinInterval,
  isAfter,
  getYear,
  getMonth,
  setYear,
  setMonth,
} from "date-fns";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DateRangeCalendar({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onCancel,
  onApply,
}) {
  const currentDate = new Date();
  const currentYear = getYear(currentDate);

  const [leftMonth, setLeftMonth] = useState(() => {
    return startDate
      ? new Date(startDate.getFullYear(), startDate.getMonth(), 1)
      : new Date();
  });

  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate);
  const [selecting, setSelecting] = useState("start");
  const [showMonthPicker, setShowMonthPicker] = useState(null); // 'left' or 'right' or null
  const [showYearPicker, setShowYearPicker] = useState(null); // 'left' or 'right' or null

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
    // Don't allow future dates
    if (isAfter(date, currentDate)) return;

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

  const handleClear = () => {
    setSelectedStartDate(undefined);
    setSelectedEndDate(undefined);
    setSelecting("start");
  };

  const isDateInRange = (date) => {
    if (!selectedStartDate || !selectedEndDate) return false;
    return isWithinInterval(date, {
      start: selectedStartDate,
      end: selectedEndDate,
    });
  };

  const isStartDate = (date) =>
    selectedStartDate ? isSameDay(date, selectedStartDate) : false;
  const isEndDate = (date) =>
    selectedEndDate ? isSameDay(date, selectedEndDate) : false;

  const handleMonthChange = (month, calendarSide) => {
    if (calendarSide === "left") {
      setLeftMonth(setMonth(leftMonth, month));
    } else {
      setLeftMonth(subMonths(setMonth(rightMonth, month), 1));
    }
    setShowMonthPicker(null);
  };

  const handleYearChange = (year, calendarSide) => {
    if (year > currentYear) return; // Prevent future years

    if (calendarSide === "left") {
      setLeftMonth(setYear(leftMonth, year));
    } else {
      setLeftMonth(subMonths(setYear(rightMonth, year), 1));
    }
    setShowYearPicker(null);
  };

  const renderMonthDropdown = (calendarSide) => {
    const currentMonth =
      calendarSide === "left" ? getMonth(leftMonth) : getMonth(rightMonth);

    return (
      <div className="absolute z-20 mt-1 bg-white shadow-lg rounded-md border border-gray-200 p-2 w-40">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            onClick={() => handleMonthChange(i, calendarSide)}
            className={cn(
              "px-3 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer",
              currentMonth === i && "bg-teal-500 text-white hover:bg-teal-600"
            )}
          >
            {format(new Date(2000, i, 1), "MMMM")}
          </div>
        ))}
      </div>
    );
  };

  const renderYearDropdown = (calendarSide) => {
    const currentYearValue =
      calendarSide === "left" ? getYear(leftMonth) : getYear(rightMonth);

    const years = Array.from(
      { length: 50 },
      (_, i) => currentYear - 49 + i
    ).filter((year) => year <= currentYear); // Only show past and current years

    return (
      <div className="absolute z-20 mt-1 bg-white shadow-lg rounded-md border border-gray-200 p-2 w-32 max-h-60 overflow-y-auto">
        {years.map((year) => (
          <div
            key={year}
            onClick={() => handleYearChange(year, calendarSide)}
            className={cn(
              "px-3 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer",
              currentYearValue === year &&
                "bg-teal-500 text-white hover:bg-teal-600",
              year > currentYear && "text-gray-400 cursor-not-allowed"
            )}
          >
            {year}
          </div>
        ))}
      </div>
    );
  };

  const renderMonthHeader = (month, calendarSide) => {
    return (
      <div className="flex items-center justify-center gap-2 mb-2 relative">
        <div className="relative">
          <button
            className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100"
            onClick={() => {
              setShowMonthPicker(
                showMonthPicker === calendarSide ? null : calendarSide
              );
              setShowYearPicker(null);
            }}
          >
            <span>{format(month, "MMMM")}</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          {showMonthPicker === calendarSide &&
            renderMonthDropdown(calendarSide)}
        </div>

        <div className="relative">
          <button
            className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100"
            onClick={() => {
              setShowYearPicker(
                showYearPicker === calendarSide ? null : calendarSide
              );
              setShowMonthPicker(null);
            }}
          >
            <span>{format(month, "yyyy")}</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          {showYearPicker === calendarSide && renderYearDropdown(calendarSide)}
        </div>
      </div>
    );
  };

  const renderMonth = (month, { days, paddingDaysStart }, calendarSide) => (
    <div className="w-full">
      {renderMonthHeader(month, calendarSide)}

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
          const isFuture = isAfter(day, currentDate);

          return (
            <button
              key={day.toString()}
              type="button"
              onClick={() => handleDateClick(day)}
              disabled={isFuture}
              className={cn(
                "h-8 w-8 rounded-lg cursor-pointer flex items-center justify-center text-sm transition-colors",
                isToday(day) && "font-semibold",
                isSelected && "bg-teal-500 text-white",
                inRange && !isSelected && "bg-teal-100 text-teal-600",
                !isSelected && !inRange && !isFuture && "hover:bg-gray-100",
                isFuture && "text-gray-300 cursor-not-allowed"
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
    <div className="flex flex-col">
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            type="button"
            onClick={handlePreviousMonth}
            className="p-1 rounded-lg cursor-pointer z-10 bg-[#FFFFFF]"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
            <div className="text-center text-[14px] font-inter font-medium bg-[#F6F8FA] text-[#0A0D14] rounded-lg pt-[5px] ml-[-31px] h-[36px] sm:text-base">
              {format(leftMonth, "MMM, yyyy")}
            </div>
            <div className="text-center text-[14px] font-inter font-medium bg-[#F6F8FA] text-[#0A0D14] rounded-lg pt-[5px] mr-[-31px] h-[36px] sm:text-base">
              {format(rightMonth, "MMM, yyyy")}
            </div>
          </div>
          <button
            type="button"
            onClick={handleNextMonth}
            className="p-1 rounded-lg cursor-pointer z-10 bg-[#FFFFFF]"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {renderMonth(leftMonth, leftMonthData, "left")}
          {renderMonth(rightMonth, rightMonthData, "right")}
        </div>

        <div className="mt-4 flex flex-col border-t-1 ml-[-16px] pl-[16px] mr-[-15px] pr-[15px] pt-[12px] sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="text-[14px] flex font-inter font-medium gap-[5px] sm:text-sm text-[#0A0D14]">
            <h1 className="text-[#525866] font-inter font-normal text-[14px]">
              Range:{" "}
            </h1>
            {selectedStartDate && selectedEndDate
              ? `${format(selectedStartDate, "MMM d, yyyy")} - ${format(
                  selectedEndDate,
                  "MMM d, yyyy"
                )}`
              : selectedStartDate
              ? `${format(selectedStartDate, "MMM d, yyyy")} - Select end date`
              : "Select a date range"}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleClear}
              className="text-xs cursor-pointer sm:text-sm"
            >
              Clear
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCancel}
              className="text-xs cursor-pointer sm:text-sm"
            >
              Cancel
            </Button>
            <Button
              size="sm"
              className="bg-teal-500 hover:bg-teal-600 text-xs cursor-pointer sm:text-sm"
              onClick={handleApply}
              disabled={!selectedStartDate}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
