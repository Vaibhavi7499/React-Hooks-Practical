import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  let [name, setName] = useState("Vaibhavi");
  let [counter, setCounter] = useState(0);

  let addition = useCallback(
    (a, b) => {
      console.log(a + b);
    },
    [name]
  );

  return (
    <div>
      Parent component
      <button onClick={() => setName("Vaibhavi Bodke")}>changeName</button>
      <hr />
      <button onClick={() => setCounter(counter + 1)}>inc</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>dec</button>
      <Child name={name} addition={addition} />
    </div>
  );
};

export default Parent;
