import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { ADD_EXPENSE } from '../Slice/ExpenseSlice';

const ExpenseList = () => {

    let dispatch = useDispatch;

    let expense = useSelector((state)=>{
console.log(state)
    })

    let [inptValue,setInptValue] = useState("");

  return (
    <div>
        <h1>ExpenseList</h1>
        <label>Enter expense name : </label>
        <input type='text' value={inptValue} onChange={(e)=>setInptValue(e.target.value)}/>
        <button onClick={()=>dispatch(ADD_EXPENSE({type:"ADD-EXPENSE" , payload:inptValue}))}>Add Expense</button>
        <hr/>
        <ul>
            <li>{expense.name}</li>
        </ul>
    </div>
  )
}

export default ExpenseList