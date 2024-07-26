import React, { useContext } from 'react'
import counterContext from './ContextList'

const CounterB = () => {
    let {count,setCount} = useContext(counterContext);

  return (
    <div>
        <h1>Counter B</h1>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count - 1)} className='btn btn-success'>decCount</button>
        </div>
  )
}

export default CounterB