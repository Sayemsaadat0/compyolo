"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex px-3 relative",
        caption_label: "text-xl font-medium ",
        nav: " flex items-center",
        nav_button: cn(
          // opacity-50 hover:opacity-100
          "h-7 w-7 rounded-full bg-transparent p-0 "
        ),
        nav_button_previous: "absolute  right-10",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-12 mx-2 font-bold text-[1rem]",
        row: "flex w-full mt-2",
        cell: `h-9 w-12  rounded-full text-black flex items-center  justify-center mx-2 relative 
        [&:has([aria-selected].day-range-end)]:rounded-r-md 
        [&:has([aria-selected].day-outside)]:text-blue-500 [&:has([aria-selected])]:bg-blue-700 
        [&:has([aria-selected])]:text-white 
        first:[&:has([aria-selected])]:rounded-l-md  focus-within:relative focus-within:z-20`,
        // last:[&:has([aria-selected])]:rounded-r-md
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
