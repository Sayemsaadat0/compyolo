import React from "react";
import { format, compareAsc } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const CalenderTry = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  console.log(date);
  return (
    <div className="mx-auto px-16 py-44">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />

      <p className="my-10 text-2xl font-bold">
        You Have Selected : {format(date, "PP")}
      </p>
    </div>
  );
};

export default CalenderTry;
