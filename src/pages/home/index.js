import React from 'react'
import ExpenseList from '../../components/expenselist'
import TopFold from '../../components/topfold'
import '../home/home.css'

const Home = () => {

  return (
    <div className='home'>
      <TopFold />
      <ExpenseList />
    </div>
  )
}

export default Home
