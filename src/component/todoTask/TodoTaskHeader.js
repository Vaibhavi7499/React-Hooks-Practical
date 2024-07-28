import React, { useContext } from "react";
import todoTaskContext from "../../ContextAPI/TodoTaskContext";

// const TodoTaskHeader = ({todos}) => {

const TodoTaskHeader = () => {
  let { todos } = useContext(todoTaskContext);
  return (
    <>
      <h1> Total Todo's {todos.length} </h1>
    </>
  );
};

export default TodoTaskHeader;
