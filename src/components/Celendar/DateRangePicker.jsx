import React, { useState } from "react";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { DateRangeCalendar } from "./DateRangeCalendar";

export function DateRangePicker({ id }) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          className="w-full cursor-pointer justify-start text-left font-inter font-normal text-main-900 bg-transparent border-transparent shadow-none rounded-none hover:bg-transparent relative h-10 p-0"
          onClick={() => setCalendarOpen(true)}
        >
          <CalendarDays className="mr-2 h-4 w-4 text-[#525866]" />
          {startDate && endDate ? (
            `${format(startDate, "MMM yyyy")} - ${format(endDate, "MMM yyyy")}`
          ) : (
            <span className="text-[#525866]">Pick a date range</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 shadow-lg rounded-lg"
        align="center"
      >
        <DateRangeCalendar
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={(date) => {
            setStartDate(date);

            if (endDate && date > endDate) {
              setEndDate(null);
            }
          }}
          onEndDateChange={setEndDate}
          onCancel={() => setCalendarOpen(false)}
          onApply={() => setCalendarOpen(false)}
        />
      </PopoverContent>
    </Popover>
  );
}
