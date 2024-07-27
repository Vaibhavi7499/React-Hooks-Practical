import React, { useContext } from "react";
import { TODOS_ACTION } from "./Actions";
import todosContext from "../../ContextAPI/TodoContext";

const TodoList = () => {
 const { state: todoList, dispatch } =  useContext(todosContext);
  return (
    <div>
      <ul>
        {todoList?.map((todo) => (
          <li key={todo?.id} className="mb-2">
            {todo?.name}{" "}
            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch({ type: TODOS_ACTION.DELETE_TODO, payload: todo?.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
