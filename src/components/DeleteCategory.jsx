import React, { useEffect, useState } from "react";
import axios from "axios";
//import "../styles/DeleteButton.css";
const DeleteCategory = ({ categoryId, setCategories }) => {
  const api = `http://localhost:5299/api/ExpenseCategory/${categoryId}`;

  const deleteCategoryById = () => {
    axios
      .delete(api)
      .then(() => {
        // Directly update the state by removing the deleted income
        setCategories((categoryList) =>
          categoryList.filter((category) => category.id !== categoryId)
        );
      })
      .then((response) => {
        console.log("Category deleted", response.data);
      })
      .catch((error) => {
        console.error("Unable to delete category", error);
      });
  };
  return (
    <div>
      <button class="delete-button" onClick={deleteCategoryById} type="button">
        Delete
      </button>
    </div>
  );
};
export default DeleteCategory;
