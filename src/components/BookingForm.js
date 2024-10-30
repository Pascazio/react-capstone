import React, { useState, useEffect } from "react";
import { dateGuard } from "../js/DateGuard";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);


  const handleDateChange = (e) => {
    const newDate = e.target.value;
    const isValid = dateGuard(new Date(newDate));
    if (!isValid) {
      return;
    }
    setSelectedDate(newDate);
    dispatch({ type: "UPDATE_TIMES", date: newDate });
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value, 10));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  useEffect(() => {
    const isValid = selectedDate && selectedTime && guests > 0 && occasion;
    setIsFormValid(isValid);
  }, [selectedDate, selectedTime, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: selectedDate,
      time: selectedTime,
      guests: guests,
      occasion: occasion,
    };
    if (!isFormValid) {
      return;
    }
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        aria-label="On which date would you like to make a reservation?"
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={selectedTime} onChange={handleTimeChange} aria-label="On which time do you like to make a reservation?">
        <option value="">Select a time</option>
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
        value={guests}
        onChange={handleGuestsChange}
        aria-label="How many guests will be there?"
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange} aria-label="For wich occasion are you going to visit us?">
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" disabled={!isFormValid} aria-label="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;
