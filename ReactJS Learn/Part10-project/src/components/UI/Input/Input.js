import classes from "../../../components/Login/Login.module.css";
import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div
      className={`${classes.control} ${
        props.state === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor='props.inputType.type'>{props.inputType.type}</label>
      <input
        ref={ref}
        type={props.inputType.type}
        id={props.inputType.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
