import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountMNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountMNumber < 1 ||
      enteredAmountMNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountMNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label='Amount'
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p> Enter from 1 to 5</p>}
    </form>
  );
};
export default MealItemForm;
