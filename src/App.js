import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import AddExpense from "./pages/addexpense";
import Home from "./pages/home";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>    
        <Route path="/" >
          <Home/>
        </Route>
        <Route path="/add-expense" >
          <AddExpense/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
