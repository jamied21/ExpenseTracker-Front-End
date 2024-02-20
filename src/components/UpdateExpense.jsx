import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/DeleteButton.css";
const UpdateExpense = ({ expenseId, setExpenses }) => {
  const api = `http://localhost:5299/api/Expense/${expenseId}`;

  const updateExpenseById = () => {
    axios
      .put(api)
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
      <button class="delete-button" onClick={updateExpenseById} type="button">
        Update
      </button>
    </div>
  );
};
export default UpdateExpense;
