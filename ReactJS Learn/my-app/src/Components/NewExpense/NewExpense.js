import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  let [isEditing, setIsEditing] = useState(false);

  const handleStartEdit = () => {
    setIsEditing("true");
  };

  const handleStopEdit = (editState) => {
    setIsEditing(editState);
  };

  return (
    <div className='new-expense'>
      {!isEditing ? (
        <button onClick={handleStartEdit}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onStopEdit={handleStopEdit}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
