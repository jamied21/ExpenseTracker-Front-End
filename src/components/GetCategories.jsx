import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AddButton.css";

const GetCategories = () => {
  const api = "http://localhost:5299/api/ExpenseCategory";
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const loadCategories = () => {
    axios
      .get(api)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log("Can't load category data");
      });
  };

  useEffect(() => {
    loadCategories();
  }, []);
  const AddCategoryLink = () => {
    navigate("/categories/add");
  };

  return (
    <div>
      <button
        className="expense-button"
        onClick={AddCategoryLink}
        type="button"
      >
        Add Category
      </button>
      <div className="expense-container">
        {categories.map((category) => {
          return (
            <div className="expense-card-body" key={category.id}>
              <h1 className="expense-card-title">{category.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetCategories;
