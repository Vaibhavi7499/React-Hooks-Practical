import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  let result = useSelector((state) => {
    return state.calculator;
  });

  return (
    <div>
      <h1>Result is : {result}</h1>
    </div>
  );
};

export default Result;
