import React, { useContext ,useState , useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
const {transactions} =  useContext(GlobalContext);
const [balance,setbalance] = useState(0);
useEffect(()=>{
  const amounts = transactions.map((transaction)=>transaction.amount);
  console.log(amounts);
  const totalAmounts = amounts.reduce((acc,item)=>(acc+=item), 0);
  setbalance(totalAmounts);

},[transactions])
//[]后面加dependency，这里是transaction
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id = 'balance'>${balance}</h1>
    </div>
  )
};



export default Balance
