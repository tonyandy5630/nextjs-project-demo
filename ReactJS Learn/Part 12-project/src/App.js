import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/Demo";
import DemoList from "./components/Demo/DemoList";

console.log("im outside app");
function App() {
  // const [showP, setShowP] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);
  const [changeTitle, setChangeTitle] = useState("My List");

  console.log("im in app");
  // const handleShowP = useCallback(() => {
  //   if (allowToggle) {
  //     setShowP((prevShow) => !prevShow);
  //   }
  // }, [allowToggle]);

  const changeTitleHandler = useCallback(() => {
    setChangeTitle("New Title");
  }, []);

  // const handleToggle = () => {
  //   setAllowToggle(true);
  // };
  const myList = useMemo(() => [10, 4, 2, 5, 7], []);
  return (
    <div className='app'>
      <DemoList title={changeTitle} items={myList} />
      <Button onClick={changeTitleHandler}>Change Title</Button>
    </div>
  );
}

export default App;
