import React, { useContext } from 'react'
import counterContext from './ContextList'

const CounterA = () => {
    let {count,setCount} = useContext(counterContext);
  return (
    <div>
        <h1>Counter A</h1>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count + 1)} className='btn btn-primary'>incCount</button>
        </div>
  )
}

export default CounterA