import React, { useState } from "react";

const useInput = (checkHandler) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);
  const [error, setError] = useState("Cannot be empty !!");

  const isValidCheck = checkHandler(enteredValue);
  let isInvalidValue = !isValidCheck && isTouch;

  const InputChangeHandler = (event) => {
    setIsTouch(true);
    setEnteredValue(event.target.value);
    if (!checkHandler(event.target.value)) {
      setIsInvalidValue(false);
    }
  };

  const InputBlurHandler = (event) => {
    setIsTouch(true);
    isInvalidValue = checkHandler && !isTouch;
  };

  const setIsInvalidValue = (bool_value) => {
    setError("");
    isInvalidValue = bool_value;
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouch(false);
  };

  return {
    enteredValue,
    InputChangeHandler,
    InputBlurHandler,
    error,
    isInvalidValue,
    reset,
    setIsInvalidValue,
  };
};

export default useInput;
