import { useContext,useEffect,useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import React from 'react'


const IncomeExpense = () => {
const {transactions} = useContext(GlobalContext);
const[incomeExpense,setIncomeExpense] = useState({
  income:0,
  expense:0,
  
})
useEffect(()=>{
const amounts = transactions.map((transaction)=>transaction.amount);
//filter the item with positive
const incomeArray = amounts.filter((item)=>item>0);
const income = (incomeArray.reduce((acc,item)=>(acc+=item),0)).toFixed(2);

//filter the item with negative
const expenseArray = amounts.filter((item)=>item<0);
const expense = (expenseArray.reduce((acc,item)=>(acc+=item),0)).toFixed(2);

setIncomeExpense({income:income, expense:expense});

},[transactions])

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className = "money plus">${incomeExpense.income}</p>
       </div>
       <div>
       <h4>Expense</h4>
       <p className = "money minus">${incomeExpense.expense}</p>
       </div>
    </div>
  )
}

export default IncomeExpense

