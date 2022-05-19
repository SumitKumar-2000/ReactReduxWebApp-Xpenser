import React from 'react'
import '../addexpense/addexpense.css'
import TopFold from '../../components/topfold'
import AddForm from '../../components/addform'

const AddExpense = () => {
  return (
    <div className='addexpense'>
       <TopFold/>
       <AddForm/> 
    </div>
  )
}

export default AddExpense
