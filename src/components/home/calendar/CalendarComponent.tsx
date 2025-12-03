import { useState } from 'react';
import Calendar from 'react-calendar';

import { formatShortWeekday } from './utils/date';
import CalendarHeader from './components/CalendarHeader';

import './styles/CalendarStyles.css';

// Calendar Component

export default function CalendarComponent() {
  // State to track selected date
  const [selected, setSelected] = useState<Date>(new Date());

  return (
    <div className="flex flex-col w-full h-full">
      {/* Render calendar header */}
      <CalendarHeader />

      {/* Render calendar widget */}
      <div className="w-full overflow-hidden">
        <Calendar
          onChange={(value) => setSelected(value as Date)}
          value={selected}
          className="custom-calendar"
          locale="en-EN"
          formatShortWeekday={formatShortWeekday}
        />
      </div>
    </div>
  );
}
