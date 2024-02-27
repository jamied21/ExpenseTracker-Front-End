import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddExpenses = () => {
  const api = "http://localhost:5299/api/Expense";
  const apiCategory = "http://localhost:5299/api/ExpenseCategory";
  const navigate = useNavigate();
  //Post Request
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  //Get Request
  const [categories, setCategories] = useState([]);

  //Error handling
  const [nameError, setNameError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  const createExpense = (event) => {
    event.preventDefault();
    //Stops name containing a number
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      setNameError(true);
      return; // Don't proceed with creating expense
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setAmountError(true);
      return;
    }
    axios
      .post(api, {
        name: name,
        amount: amount,
        categoryId: category,
        expenseDate: new Date(),
      })
      .then((response) => {
        navigate("/expenses");
      })
      .then((response) => {
        console.log("Expense created:", response.data);
      })
      .catch((error) => console.log(error));
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
    loadCategories();
  }, []);

  return (
    <div>
      <form onSubmit={createExpense}>
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
          <label for="formGroupExampleInput">Amount</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="form-control"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {nameError && (
          <div style={{ color: "red" }}>Expense Name cannot have a number.</div>
        )}

        {amountError && (
          <div style={{ color: "red" }}>
            Amount must be positive and a number.
          </div>
        )}
        <button type="submit" class="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenses;
