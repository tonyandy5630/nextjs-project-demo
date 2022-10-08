import React, { useState } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    InputChangeHandler: firstNameChangeHandler,
    InputBlurHandler: firstNameBlurHandler,
    error: firstNameInputError,
    isInvalidValue: isInvalidFirstName,
    reset: resetNameInput,
    setIsInvalidValue: setFirstNameInvalid,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredLastName,
    InputChangeHandler: lastNameChangeHandler,
    InputBlurHandler: lastNameBlurHandler,
    error: lastNameInputError,
    isInvalidValue: isInvalidLastName,
    reset: resetLastNameInput,
    setIsInvalidValue: setLastNameInvalid,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    InputChangeHandler: EmailChangeHandler,
    InputBlurHandler: EmailBlurHandler,
    error: EmailInputError,
    isInvalidValue: inValidEmail,
    reset: resetEmailInput,
    setIsInvalidValue: setEmailInvalid,
  } = useInput((value) => value.includes("@") && value.trim() !== "");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredFirstName.trim() === "") {
      setFirstNameInvalid(false);
      return;
    }

    if (enteredLastName.trim() == "") {
      setLastNameInvalid(false);
      return;
    }

    if (enteredEmail.trim() === "" || !enteredEmail.includes("@")) {
      setEmailInvalid(false);
      return;
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input
            value={enteredFirstName}
            type='text'
            id='name'
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {isInvalidFirstName && <p className='error-text'>Cannot be empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {isInvalidLastName && <p className='error-text'>Cannot be empty </p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={enteredEmail}
          onChange={EmailChangeHandler}
          onBlur={EmailBlurHandler}
        />
        {inValidEmail && <p className='error-text'>Must Contain '@'</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
