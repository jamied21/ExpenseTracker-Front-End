import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/ExpenseCard.css";
import "../styles/AddButton.css";

const GetExpenses = () => {
  const api = "http://localhost:5299/api/Expense";
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  const loadExpenses = () => {
    axios
      .get(api)
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.log("Can't load expense data");
      });
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const AddExpenseLink = () => {
    navigate("/expense/add");
  };
  //console.log(expenses);

  return (
    <div>
      <button className="expense-button" onClick={AddExpenseLink} type="button">
        Add Expense
      </button>
      <div className="expense-container">
        {expenses.map((expense) => {
          return (
            <div className="expense-card-body" key={expense.id}>
              <h1 className="expense-card-title">{expense.name}</h1>
              <p className="expense-card-text">{expense.amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetExpenses;
