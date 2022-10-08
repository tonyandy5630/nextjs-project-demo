import React from "react";

import classes from "./Button.module.css";
console.log("outside button");

const Button = (props) => {
  console.log("in button");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
