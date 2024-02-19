import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const api = "http://localhost:5299/api/ExpenseCategory";
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [nameError, setNameError] = useState(false);

  const createCategory = (event) => {
    event.preventDefault();

    //Stops name containing a number
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      setNameError(true);
      return; // Don't proceed with creating expense
    }
    axios
      .post(api, { name: name })

      .then((response) => {
        console.log("Expense Category created:", response.data);
      })
      .then((response) => {
        navigate("/categories");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={createCategory}>
        <div class="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        {nameError && (
          <div style={{ color: "red" }}>
            Category Name cannot have a number.
          </div>
        )}
        <button type="submit" class="btn btn-primary">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
