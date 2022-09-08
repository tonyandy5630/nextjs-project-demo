import "./ExpenseItem.css";
import "./ExpenseDate.js";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props) {
  let title = props.title;
  const clickHandler = () => {
    title = "Updated";
  };
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__desc'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
