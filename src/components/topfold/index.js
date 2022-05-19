import "../topfold/topfold.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../../redux/actions/expenses";

const TopFold = () => {

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  
    const handleQuery = (e) =>{
      setQuery(e.target.value)
      dispatch(searchExpense(e.target.value))
  }

  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="bi bi-search"></i>
            <input
              value={query}
              placeholder="search for expenses"
              type="text"
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to='/add-expense' className="topfold-link">
            <div className="add-button">
              <i className="bi bi-file-plus-fill"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to='/' className="topfold-link">
            <div className="add-topfold-button">
              <i className="bi bi-chevron-left"></i>
              <label className="add-topfold-button-label">Back</label>
            </div>
          </Link>
          <Link to='/' className="topfold-link">
            <div className="add-topfold-button">
              <i className="bi bi-x-lg"></i>
              <label className="add-topfold-button-label">Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
