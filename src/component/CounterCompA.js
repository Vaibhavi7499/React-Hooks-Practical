import React from 'react'
import useCounter from '../customHook/useCounter';

export const CounterCompA = () => {
   let [counter, increment, decrement, reset] = useCounter(5);
  
    return (
      <div className="col-md-4 m-auto">
        <h1>{counter}</h1>
        <button className="btn btn-dark" onClick={increment}>Increment</button>{" "}
        <button className="btn btn-info" onClick={decrement}>Decrement</button>{" "}
        <button className="btn btn-light" onClick={reset}>Reset</button>
      </div>
    );
}
