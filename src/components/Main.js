import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../js/Api";

export const initializeTimes = () => {
  const today = new Date();
  const response = fetchAPI(today);
  return response;
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.date));
  }
  return state;
}

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
};

export default Main;
