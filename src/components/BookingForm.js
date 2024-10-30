import React, { useState, useEffect } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const dateGuard = (date) => {
    const today = new Date();
    if (date < today) {
      return false;
    }
    return true;
  }

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    const isValid = dateGuard(new Date(newDate));
    if (!isValid) {
      alert("Please choose a future date");
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
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
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
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" disabled={!isFormValid} />
    </form>
  );
};

export default BookingForm;
