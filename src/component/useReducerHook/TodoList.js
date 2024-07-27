import React from "react";
import { TODOS_ACTION } from "./Actions";

const TodoList = ({ state: todoList, dispatch }) => {
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
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
