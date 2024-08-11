import React from "react";
import { memo } from "react";

const ChildC = (props) => {
  console.log(props.counterTwo, "child called");
  return (
    <div>
      <h1>Child Component</h1>
      <h3>counter Two : {props.counterTwo}</h3>
      <button className="btn btn-success" onClick={props.increaseCounterTwo}>
        counterTwo
      </button>
    </div>
  );
};

export default memo(ChildC);
