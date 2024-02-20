import React, { useEffect, useState } from "react";
import axios from "axios";
import AddExpenses from "./AddExpenses";
//To be used to moved Category data as a prop
const CategoryList = () => {
  const api = "http://localhost:5299/api/ExpenseCategory";
  const [categories, setCategories] = useState([]);

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

  return (
    <div>
      {/* <div>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <h1>{category.name}</h1>
            </div>
          );
        })}
      </div> */}
      <AddExpenses categories={categories} />
    </div>
  );
};

export default CategoryList;
