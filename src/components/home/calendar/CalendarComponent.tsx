import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { formatShortWeekday } from './utils/date';
import CalendarHeader from './components/CalendarHeader';

import './styles/CalendarStyles.css';

export default function CalendarComponent() {
  const [selected, setSelected] = useState<Date>(new Date());

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <CalendarHeader />

      {/* Calendar */}
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
