import "./App.css";
import { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expense from "./Components/Expense/Expense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 93.12,
    date: new Date(2022, 3, 9),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 93.12,
    date: new Date(2022, 6, 10),
  },
  {
    id: "e3",
    title: "Tuition Fee",
    amount: 2000,
    date: new Date(2022, 13, 9),
  },
  {
    id: "e4",
    title: "Gas",
    amount: 30,
    date: new Date(2022, 7, 9),
  },
  {
    id: "e5",
    title: "Book",
    amount: 21,
    date: new Date(2023, 7, 9),
  },
  {
    id: "e6",
    title: "Shopee",
    amount: 30,
    date: new Date(2024, 7, 9),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
