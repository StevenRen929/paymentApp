import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext,useEffect,useReducer,useState} from 'react'

const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  const [text,setText] = useState ("");
  const[amount,setAmount] = useState(0);

  const onSubmit = (e) =>{
    e.preventDefault();
    //console.log("test");
    const newTransaction = {
      id:Math.floor(Math.random()*1000),
      text,
      amount:+amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id = "form" onSubmit={onSubmit}>
          <div className="form-control">
            <label>Add Event Name</label>
            <input type="text" 
            value={text} 
            placeholder='Enter Text...'
            id = "text" onChange={(e)=>setText(e.target.value)}
            autoComplete='off'
            />
            {/* onchange 是当输入文字时把输入的东西放在text state里面 */}
          </div>
          <div className="form-control">
            <label>Add Event Name</label>
            <input 
            type="number" 
            value={amount} 
            placeholder='Enter amount spent...'
            id = "amount"onChange={(e)=>setAmount(e.target.value)}
            autoComplete='off'
          
            />
            {/* onchange 是当输入文字时把输入的东西放在text state里面 */}
          </div>
          <button className='btn'>Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction

 