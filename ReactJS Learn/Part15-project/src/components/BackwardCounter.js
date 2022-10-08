import { useState, useEffect } from "react";
import useCounter from "./Hooks/use-count";
import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
