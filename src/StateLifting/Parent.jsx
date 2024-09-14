import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const ParentState = () => {
  let [name, setName] = useState("Vaibhavi");

  return (
    <div>
      <button onClick={() => setName("vaibhavi bodke")}>changeName</button>

      <Child1 name={name} />
      <Child2 name={name} />
    </div>
  );
};

export default ParentState;
