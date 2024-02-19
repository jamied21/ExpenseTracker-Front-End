// CategoryDropdown.js
import React from "react";

const CategoryDropdown = ({ categories, selectedCategory, onChange }) => {
  return (
    <div>
      <label htmlFor="category">Select Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select...</option>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))
        ) : (
          <option disabled>No categories available</option>
        )}
      </select>
    </div>
  );
};

export default CategoryDropdown;
