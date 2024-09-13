import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Slice/CounterSlice";

const Counter = () => {
  let count = useSelector((state) => state.counter);

  let dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default Counter;
