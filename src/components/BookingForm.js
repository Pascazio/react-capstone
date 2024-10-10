import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;
