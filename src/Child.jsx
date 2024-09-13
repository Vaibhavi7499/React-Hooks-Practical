import React, { memo } from "react";

const Child = ({ name, addition }) => {
  console.log("Child called");
  return (
    <div>
      Child component
      <h2>{name}</h2>
      <button onClick={() => addition(10, 20)}>addition</button>
    </div>
  );
};

export default memo(Child);
