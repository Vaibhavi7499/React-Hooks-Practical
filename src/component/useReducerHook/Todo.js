import React, { useReducer, useState } from "react";
import { TODOS_ACTION } from "./Actions";
import TodoList from "./TodoList";
import { Header } from "./Header";
import todosContext from "../../ContextAPI/TodoContext";
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

      case TODOS_ACTION.RESET_TODO:
        return (state = initialState);
      default:
        return state;
    }
  }

  const data = {
    state,
    dispatch
  }
  return (
    <todosContext.Provider value={data}>
    <div className="col-md-6 m-auto">
      {/* <h1>Todo List {state.length}</h1> */}
      <Header />
      
      Add New Task:
      <input
        type="text"
        className="form-control"
        onBlur={(e) =>
          dispatch({ type: TODOS_ACTION.ADD_TODO, payload: e.target.value })
        }
      />{" "}
      <button
        className="btn btn-secondary mt-1"
        onClick={() => dispatch({ type: TODOS_ACTION.RESET_TODO })}
      >
        Reset
      </button>
      <hr />
      <TodoList/>
    </div>
    </todosContext.Provider>
  );
};

export default Todo;
