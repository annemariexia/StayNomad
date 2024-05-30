import React, { useEffect, useState } from 'react';
import './DatePicker.css';

const DatePicker = () => {
  const monthFormatter = new Intl.DateTimeFormat('en-us', { month: 'long' });
  const weekdayFormatter = new Intl.DateTimeFormat('en-us', { weekday: 'short' });

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const addMonths = (date, months) => {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  };

  const getDateString = (date) => {
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return `${day}/${month}/${year}`;
  };

  const [dates, setDates] = useState([new Date(), addDays(new Date(), 31)]);
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(dates[0].getMonth());
  const [currentYear, setCurrentYear] = useState(dates[0].getFullYear());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setCurrentMonth(dates[currentDateIndex].getMonth());
    setCurrentYear(dates[currentDateIndex].getFullYear());
  }, [dates, currentDateIndex]);

  const updatePickerMonth = (increment) => {
    const newDate = addMonths(dates[currentDateIndex], increment);
    setDates((prevDates) => {
      const newDates = [...prevDates];
      newDates[currentDateIndex] = newDate;
      return newDates;
    });
  };

  const handleDateClick = (index) => {
    setCurrentDateIndex(index);
    setShowDatePicker(true);
  };

  const handleDayClick = (day) => {
    const newDates = [...dates];
    newDates[currentDateIndex] = new Date(currentYear, currentMonth, day);
    setDates(newDates);
    setShowDatePicker(false);
  };

  const renderCalendar = () => {
    const firstOfMonth = new Date(currentYear, currentMonth, 1);
    const firstWeekday = firstOfMonth.getDay();
    const firstOfNextMonth = addMonths(firstOfMonth, 1);
    const lastOfMonth = addDays(firstOfNextMonth, -1).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstWeekday; i++) {
      calendarDays.push(null);
    }
    for (let day = 1; day <= lastOfMonth; day++) {
      calendarDays.push(day);
    }

    const rows = [];
    let cells = [];
    calendarDays.forEach((day, i) => {
      if (i % 7 !== 0 || i === 0) {
        cells.push(day);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(day);
      }
      if (i === calendarDays.length - 1) {
        rows.push(cells);
      }
    });

    return rows.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((day, dayIndex) => (
          <td key={dayIndex} className={day ? 'current-month' : 'inactive'}>
            {day && (
              <button onClick={() => handleDayClick(day)}>
                {day}
              </button>
            )}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div id="date-picker-section" className="date-container">
      <div id="date-picker-container">
        <div id="date-picker-title">
          <h4>Select your dates</h4>
        </div>

        <div id="date-picker-dates">
          {dates.map((date, index) => (
            <div
              key={index}
              className={`date-picker-date ${currentDateIndex === index ? 'active' : ''}`}
              onClick={() => handleDateClick(index)}
            >
              {getDateString(date)}
            </div>
          ))}
        </div>

        <div id="date-picker-display-container">
          {dates.map((date, index) => (
            <div key={index} className="date-picker-display-pair">
              <div className="date-picker-display">
                {date.getDate()} {monthFormatter.format(date).slice(0, 3)}
              </div>
              <div className="date-picker-display-label">
                {index === 0? "FROM" : "TO"}
              </div>
            </div>
          ))}
        </div>

        {showDatePicker && (
          <div id="date-picker-modal">
            <div id="date-picker-top-bar">
              <div
                id="date-picker-previous-month"
                className="date-picker-change-month"
                onClick={() => updatePickerMonth(-1)}
              >
                &lsaquo;
              </div>
              <div id="date-picker-month">
                {monthFormatter.format(new Date(currentYear, currentMonth))} {currentYear}
              </div>
              <div
                id="date-picker-next-month"
                className="date-picker-change-month"
                onClick={() => updatePickerMonth(1)}
              >
                &rsaquo;
              </div>
            </div>
            <table id="date-picker">
              <thead>
                <tr id="date-picker-weekdays">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <th key={index}>{weekdayFormatter.format(new Date(2022, 0, index + 2))}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{renderCalendar()}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
