import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../js/Api";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const submitForm = (e, formData) => {
    e.preventDefault();
    const response = submitAPI(formData);
    if(response){
      navigate("/ConfirmedBooking");
    }
  }
  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />;
};

export default Main;
