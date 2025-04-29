import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  isBefore,
  isAfter,
  isSameDay,
} from "date-fns";
import { Button } from "@/components/ui/button";

export const Mobcele = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onCancel,
  onApply,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSelectingEndDate, setIsSelectingEndDate] = useState(false);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const dayOfWeek = monthStart.getDay();
  const emptyCells = Array.from({ length: dayOfWeek === 0 ? 6 : dayOfWeek - 1 }, (_, i) => i);

  const handleDateClick = (day) => {
    if (!isSelectingEndDate) {
      onStartDateChange(day);
      onEndDateChange(day);
      setIsSelectingEndDate(true);
    } else {
      if (isBefore(day, startDate)) {
        onStartDateChange(day);
      } else {
        onEndDateChange(day);
        setIsSelectingEndDate(false);
      }
    }
  };

  const isInRange = (day) => {
    return isAfter(day, startDate) && isBefore(day, endDate);
  };

  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="w-full max-w-md mx-auto rounded-xl  bg-white overflow-hidden">
      
      

     

      {/* Calendar Navigation */}
      <div className="flex items-center justify-between px-5 py-3 ">
        <Button
          variant="my"
          size="icon"
          onClick={prevMonth}
          className="rounded-lg z-10 w-[28px] h-[28px] ml-[5px] "
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-center text-[14px] font-inter w-full h-[36px] pt-[6px] ml-[-31px] mr-[-31px] font-medium bg-[#F6F8FA] text-[#0A0D14] rounded-lg">
          {format(currentMonth, "MMM, yyyy")}
        </h2>
        <Button
          variant="my"
          size="icon"
          onClick={nextMonth}
          className="rounded-lg w-[28px] h-[28px] mr-[5px]"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 text-center text-xs text-gray-400 px-5 py-2">
        {weekDays.map((day, index) => (
          <div key={index} className="flex items-center justify-center">{day}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1 px-5 pb-5">
        {emptyCells.map((i) => (
          <div key={`empty-${i}`} className="h-10" />
        ))}

        {days.map((day) => {
          const isStart = isSameDay(day, startDate);
          const isEnd = isSameDay(day, endDate);
          const isRange = isInRange(day);

          return (
            <button
              key={day.toString()}
              onClick={() => handleDateClick(day)}
              className={`
                h-10 w-10 flex items-center justify-center rounded-lg transition 
                ${isToday(day) ? "font-bold" : "font-medium"}
                ${!isSameMonth(day, currentMonth) ? "text-gray-300" : "text-gray-900"}
                ${isStart || isEnd ? "bg-teal-500  hover:bg-teal-600" : "hover:text-[#fff]"}
                ${isRange ? "bg-teal-100  hover:bg-teal-200" : "hover:bg-teal-200  hover:text-white"}
              `}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="border-t p-5 flex gap-3">
        <Button
          variant="outline"
          onClick={onCancel}
          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </Button>
        <Button
          onClick={onApply}
          className="flex-1 bg-teal-500 text-white hover:bg-teal-600"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};
