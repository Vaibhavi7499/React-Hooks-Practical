import React, { useState, useMemo } from "react";

const Usememo = () => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);

  let increaseCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  let increaseCounter2 = () => {
    setCounter2(counter2 + 2);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i <= 200000000) i++;
    console.log("counter1", counter1);
    return counter1 % 2 === 0;
  }, [counter1]);

  //   const isEven=()=>{
  // let i=0;
  // while(i<=200000000)i++;
  // console.log("counter1",counter1)
  // return counter1 %2 === 0
  //   }

  return (
    <div className="m-auto">
      <h1>Use memo</h1>
      <div>
        <button className="btn btn-success" onClick={increaseCounter1}>
          add1
        </button>
        <h3>counter1 : {counter1}</h3>
        <span>{isEven ? "Even" : "Odd"}</span>
        <button className="btn btn-info" onClick={increaseCounter2}>
          add2
        </button>
        <h3>counter2 : {counter2}</h3>
      </div>
    </div>
  );
};

export default Usememo;
