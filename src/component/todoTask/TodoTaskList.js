import React, { useContext } from "react";
import todoTaskContext from "../../ContextAPI/TodoTaskContext";

// const TodoTaskList = ({todos,deleteTodo,update}) => {

//let {todos} = props;
const TodoTaskList = () => {
  let { todos, deleteTodo, update } = useContext(todoTaskContext);

  return (
    <>
      <ul className="list-group">
        {todos?.map((ele) => (
          <li
            key={ele?.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {ele?.name}{" "}
            <span>
              <button className="btn btn-secondary" onClick={() => update(ele)}>
                update
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(ele?.id)}
              >
                delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoTaskList;
