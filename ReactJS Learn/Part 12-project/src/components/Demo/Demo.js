import React from "react";

const DemoOutput = (props) => {
  console.log("im in Demo");
  return <p>{props.show ? "show" : "not show"}</p>;
};

export default React.memo(DemoOutput);
