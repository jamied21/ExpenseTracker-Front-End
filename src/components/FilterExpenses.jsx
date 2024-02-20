import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dropdown.css";
const FilterExpenses = () => {
  //For expenses
  const api = "http://localhost:5299/api/Expense";
  const [expenses, setExpenses] = useState([]);
  //For Category
  const apiCategory = "http://localhost:5299/api/ExpenseCategory";
  const [categories, setCategories] = useState([]);
  //For dropdown
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

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

  const loadCategories = () => {
    axios
      .get(apiCategory)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log("Can't load category data");
      });
  };

  useEffect(() => {
    loadExpenses();
    loadCategories();
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategoryId = parseInt(event.target.value, 10);
    setSelectedCategory(selectedCategoryId);

    // Filter expenses based on the selected category
    const expensesForCategory = expenses.filter(
      (expense) => expense.categoryId === selectedCategoryId
    );
    setFilteredExpenses(expensesForCategory);

    // Calculate the total amount for the selected category
    // Calculate the total amount for the selected category
    // Calculate the total amount for the selected category
    const categoryTotalAmount = selectedCategoryId
      ? expensesForCategory.reduce(
          (total, expense) => total + expense.amount,
          0
        )
      : 0;

    // Set totalAmount to a valid number or null
    setTotalAmount(
      Number.isNaN(categoryTotalAmount) ? " " : categoryTotalAmount
    );
  };

  return (
    <div>
      <div className="dropdown-container">
        <label htmlFor="categoryDropdown">Select Category: </label>
        <select
          id="categoryDropdown"
          value={selectedCategory || ""}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCategory && (
        <div className="total-amount">
          <p>
            {totalAmount !== null && !isNaN(totalAmount)
              ? `Total Amount for £${totalAmount.toFixed(2)}`
              : `Total Amount not available`}
          </p>
        </div>
      )}
      <div className="expense-container">
        {selectedCategory
          ? filteredExpenses.map((expense) => (
              <div className="expense-card-body" key={expense.id}>
                <h1 className="expense-card-title">{expense.name}</h1>
                <p className="expense-card-text">£{expense.amount}</p>
              </div>
            ))
          : expenses.map((expense) => (
              <div className="expense-card-body" key={expense.id}>
                <h1 className="expense-card-title">{expense.name}</h1>
                <p className="expense-card-text">£{expense.amount}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default FilterExpenses;
