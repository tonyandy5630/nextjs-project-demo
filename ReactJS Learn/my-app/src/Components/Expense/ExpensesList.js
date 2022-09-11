import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  //? Handle empty list
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>;
  }

  // ? Handle fullfilled list
  if (props.items.length > 0) {
    return (
      <ul className='expenses-list'>
        {props.items.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              amount={item.amount}
              title={item.title}
              date={item.date}
            />
          );
        })}
      </ul>
    );
  }
};

export default ExpensesList;
