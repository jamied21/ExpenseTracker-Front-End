import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ExpensePage from './pages/ExpensePage';
import AddExpensePage from './pages/AddExpensePage';
import CategoryPage from './pages/CategoryPage';
import AddCategoryPage from './pages/AddCategoryPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar/>
    <Routes> 
    <Route path="/" element={<HomePage/>}/>
      <Route path="/expenses" element={<ExpensePage/>}/>
      <Route path='/expense/add' element = { <AddExpensePage/> }/>
      <Route path="/categories" element={<CategoryPage/>}/>
      <Route path="/categories/add" element={<AddCategoryPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
