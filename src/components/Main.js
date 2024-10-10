import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  return initializeTimes();
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
  );
};

export default Main;
