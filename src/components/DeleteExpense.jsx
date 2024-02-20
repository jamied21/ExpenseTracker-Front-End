import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ExpenseCard.css";
const DeleteExpense = ({ expenseId, setExpenses }) => {
  const api = `http://localhost:5299/api/Expense/${expenseId}`;

  const deleteExpenseById = () => {
    axios
      .delete(api)
      .then(() => {
        // Directly update the state by removing the deleted income
        setExpenses((expenseList) =>
          expenseList.filter((expense) => expense.id !== expenseId)
        );
      })
      .then((response) => {
        console.log("Expense deleted", response.data);
      })
      .catch((error) => {
        console.error("Unable to delete income", error);
      });
  };
  return (
    <div>
      <button class="delete-button" onClick={deleteExpenseById} type="button">
        Delete
      </button>
    </div>
  );
};
export default DeleteExpense;
