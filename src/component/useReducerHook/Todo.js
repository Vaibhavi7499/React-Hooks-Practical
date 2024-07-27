import React, { useReducer, useState } from "react";
import { TODOS_ACTION } from "./Actions";
import TodoList from "./TodoList";

const initialState = [];

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case TODOS_ACTION.ADD_TODO:
        return [
          ...state,
          {
            id: state.length + 1,
            name: action.payload,
          },
        ];

      case TODOS_ACTION.DELETE_TODO:
        return state.filter((ele) => ele.id != action.payload);
      default:
        return state;
    }
  }

  return (
    <div>
      <h1>Todo List {state.length}</h1>
      Add New Task:
      <input
        type="text"
        onBlur={(e) =>
          dispatch({ type: TODOS_ACTION.ADD_TODO, payload: e.target.value })
        }
      />
      <hr />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
};

export default Todo;
