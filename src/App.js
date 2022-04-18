import React, { useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 4, 20),
  },
  {
    id: 2,
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 12, 3),
  },
  {
    id: 3,
    title: "Car Insurence",
    amount: 294.67,
    date: new Date(2021, 5, 12),
  },
  {
    id: 4,
    title: "New Desk",
    amount: 450,
    date: new Date(2019, 4, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
