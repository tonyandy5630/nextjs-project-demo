import "./App.css";
import ExpenseItem from "./Components/Expense/ExpenseItem";
import Card from "./Components/UI/Card"

const expenses = [
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
];

const expensesObj = expenses.map((item) => (
  <ExpenseItem
    key={item.id}
    id={item.id}
    title={item.title}
    amount={item.amount}
    date={item.date}
  ></ExpenseItem>
));

function App() {
  return (
    <Card className="expense-items">
      <h2>Let's get started</h2>
      {expensesObj}
    </Card>
  );
}

export default App;
