import React, { useContext } from "react";
import fruitContext from "../../ContextAPI/FruitContext";

function FruitHeader() {
  let { fruitTodo } = useContext(fruitContext);

  return (
    <>
      <h1>Total Fruits {fruitTodo?.length}</h1>
    </>
  );
}

export default FruitHeader;
