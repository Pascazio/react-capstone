import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI as fetchData } from "../js/Api";

export const initializeTimes = () => {
  const today = new Date();
  const response = fetchData(today);
  return response;
};

export const updateTimes = (state, action) => {
  return initializeTimes();
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
};

export default Main;
