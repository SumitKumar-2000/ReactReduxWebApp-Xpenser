import React from 'react'
import Card from './card'
import '../expenselist/expenselist.css'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'


const ExpenseList = () => {
  
  const {expenseList:list, query} = useSelector(state => state.expenses)
  const filteredList = list.filter(item => item.title.includes(query))
  const notifySuccess = () => toast.success("Expense Deleted Successfully...");

  return (
    <div className='expense-list'>

      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false} 
        newestOnTop={false}
        closeOnClick
      />

      {filteredList.length ? filteredList.map(item=> <Card item={item} key={item.createdAt} notifySuccess={notifySuccess}/>): (
        <div className='empty-state'>
          <img src={require('../../assets/images/empty.png')} alt="emptyListimg" className='empty-image' />
          <label>Your expense list is empty!</label>
        </div>
      )}
    </div>
  )
}

export default ExpenseList
