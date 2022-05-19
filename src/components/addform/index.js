import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SuccessModal from "./success-modal";
import { toast, ToastContainer } from "react-toastify";
import { addExpense } from "../../redux/actions/expenses";
import { categoryList } from "../../constant_list/categories";
import "../addform/addform.css";
import 'react-toastify/dist/ReactToastify.css';

const AddForm = () => {
  
  const dispatch = useDispatch();
  const categories = categoryList;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [modalOpen,setModalOpen] = useState(false);
  
  const handleCategory = (item) => {
    setCategory(item);
    setCategoryOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || amount === "" || category === "") {
      const notify = () => toast("Please Enter Valid Data")
      notify();
      return;
    }
    const data = {
      title: title,
      amount: amount,
      category: category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(true);
  };

  return (
    <div className="add-form">

      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />

      <SuccessModal isModalOpen={modalOpen}/>

      <div className="form-item">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter Your Expense"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-item">
        <label>Amount ₹</label>
        <input
          type="number"
          placeholder="Enter expense's Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="category-container-parent">
        <div className="category">
            <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
            >
            <label>{category ? category.title : "Category"}</label>
            <i className="bi bi-chevron-down"></i>
            </div >
            {categoryOpen && (
                <div className="categories-box">
                {categories.map((item) => {
                    return (
                        <div
                        className="category-item"
                        style={{ borderRight: `5px solid ${item.color}` }}
                        key={item.id}
                        onClick={() => handleCategory(item)}
                        >
                          <label>{item.title}</label>
                          <img src={item.icon} alt={item.title} className="category-icon"/>
                        </div>
                );
                })}
            </div>
            )}
        </div>  
      </div>
      
      <div className="add-button-container">
        <div className="form-add-button" onClick={() => handleSubmit()}>
          <label>Add</label>
          <i className="bi bi-file-plus-fill"></i>
        </div>
      </div>

    </div>
  );
};

export default AddForm;
