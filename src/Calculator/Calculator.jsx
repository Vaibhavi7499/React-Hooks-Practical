import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, sub, mul, div } from "../Slice/CalculatorSlice";
import Result from "./Result";

const Calculator = () => {
  let dispatch = useDispatch();

  let [firstValue, setFirstValue] = useState("");
  let [secondValue, setSecondValue] = useState("");

  return (
    <div className="main-container">
      <h1>Calculator using Redux Toolkit</h1>
      <div className="input-container">
        <div className="input-one">
          {" "}
          <input
            type="text"
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
          />
        </div>
        <div className="input-two">
          <input
            type="text"
            value={secondValue}
            onChange={(e) => setSecondValue(e.target.value)}
          />
        </div>
      </div>
      <div className="btn-container">
        <button onClick={() => dispatch(add({ firstValue, secondValue }))}>
          +
        </button>
        <button onClick={() => dispatch(sub({ firstValue, secondValue }))}>
          -
        </button>
        <button onClick={() => dispatch(mul({ firstValue, secondValue }))}>
          *
        </button>
        <button onClick={() => dispatch(div({ firstValue, secondValue }))}>
          /
        </button>
      </div>
      <Result />
    </div>
  );
};

export default Calculator;
