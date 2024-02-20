import GetExpenses from "../components/GetExpenses";
import "../styles/ExpensePage.css";
const ExpensePage = () => {
  return (
    <div>
      <div className="expense-page-container ">
        <h1 className="expense-page-title">Expenses </h1>
      </div>
      <GetExpenses />
    </div>
  );
};

export default ExpensePage;
