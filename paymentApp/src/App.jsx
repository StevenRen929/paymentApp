import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import React from 'react'
import Header from './Component/Header';
import Balance from './Component/Balance';
import IncomeExpense from './Component/IncomeExpense';
import AddTransaction from './Component/AddTransaction';
import TransactionItem from './Component/TransactionItem';
import TransactionList from './Component/TransactionList';
import { GlobalProvider } from './context/GlobalState';
import './styles.css'



const App = () => {
  return (
    <GlobalProvider>
    <div className='container'>
  <Header/>
  <Balance/>
  <IncomeExpense/>
  <TransactionList/>
  <AddTransaction/>

    </div>
 </GlobalProvider>
  )
}

export default App
