import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div class="topnav">
      <Link to="/" class="active">
        {" "}
        Home{" "}
      </Link>
      <Link to="/expenses">Expense List</Link>
      <Link to="/categories">Categories</Link>
    </div>
  );
};

export default NavBar;
