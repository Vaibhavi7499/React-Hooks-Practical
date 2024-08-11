import React, { useCallback, useState } from "react";
import ChildC from "./ChildC";

const ParentC = () => {
  let [counterOne, setCounterOne] = useState(0);
  let [counterTwo, setCounterTwo] = useState(0);

  let increaseCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

//   let increaseCounterTwo = () => {
//     setCounterTwo(counterTwo + 1);
//   };

  let increaseCounterTwo = useCallback(() => {
    setCounterTwo(counterTwo + 1);
  }, [counterTwo]);

  return (
    <div>
      <h1>Parent Component </h1>
      <button className="btn btn-primary" onClick={increaseCounterOne}>
        counterOne
      </button>
      <h3>Counter One : {counterOne}</h3>
      {/* <button className='btn btn-success' onClick={increaseCounterTwo}>counterTwo</button> */}
      {/* <h3>Counter Two : {counterTwo}</h3> */}
      <ChildC
        counterTwo={counterTwo}
        increaseCounterTwo={increaseCounterTwo}
      ></ChildC>
    </div>
  );
};

export default ParentC;
