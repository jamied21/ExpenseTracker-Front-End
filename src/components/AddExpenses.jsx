// AddExpenses.js
import React, { useState } from "react";
import axios from "axios";
import CategoryDropdown from "./CategoryDropdown";

const AddExpenses = ({ categories }) => {
  const api = "http://localhost:5299/api/Expense";
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const createExpense = (event) => {
    event.preventDefault();

    axios
      .post(api, { name: name, amount: amount, category: selectedCategory })
      .then((response) => {
        console.log("Expense created:", response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={createExpense}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
          {categories && categories.length > 0 && (
            <CategoryDropdown
              categories={categories}
              selectedCategory={selectedCategory}
              onChange={setSelectedCategory}
            />
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenses;
