import axios from "axios";
import { useEffect, useState } from "react";

const AddExpenses = (props) => {
  const api = "http://localhost:5299/api/Expense";
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const categories = props.categories;

  console.log(props, categories);
  //const [category, setCategory] = useState("");
  //const [user, setUser] = useState("");

  const createExpense = (event) => {
    event.preventDefault();

    axios
      .post(api, { name: name, amount: amount })
      .then((response) => {
        console.log("Expense created:", response.data);
      })
      .catch((error) => console.log(error));
  };

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
          <div>
            {categories.map((category) => {
              return (
                <div key={category.id}>
                  <h1>{category.name}</h1>
                </div>
              );
            })}
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenses;
