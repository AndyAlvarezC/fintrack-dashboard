import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/CalendarStyles.css";

export default function CalendarPicker() {
  const [selected, setSelected] = useState<Date>(new Date());

  return (
    <div className="w-full max-w-full overflow-hidden">
      <Calendar
        onChange={(value) => setSelected(value as Date)}
        value={selected}
        className="custom-calendar"
        locale="en-EN"
        formatShortWeekday={(locale, date) => 
          date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2).toUpperCase()
        }
      />
    </div>
  );
}
