import GetExpenses from "../components/GetExpenses";
import "../styles/ExpensePage.css";
const ExpensePage = () => {
  return (
    <div>
      <h1 className="expense-page-container">Expense List </h1>
      <GetExpenses />
    </div>
  );
};

export default ExpensePage;
