import React, { useReducer, useState } from "react";
import { actionTypes } from "./ActionTypes";
const AddFruits = () => {
  let initialValue = [];
  let [fruitTodo, dispatch] = useReducer(reducer, initialValue);
  let [inptValue, setInptValue] = useState("");
  let [id, setId] = useState("");

  function reducer(state, action) {
    if (action.type === actionTypes.ADD_TODO && action.payload === "") {
      alert("Please enter the Fruit !!!");
    } else {
      switch (action.type) {
        case actionTypes.ADD_TODO:
          return [
            ...state,
            {
              id: state.length + 1,
              name: action.payload,
            },
          ];

        case actionTypes.RESET_TODOS:
          return (state = []);

        case actionTypes.DELETE_TODO:
          return state.filter((e) => e?.id !== action?.payload);

        case actionTypes.UPDATE_TODO:
          return state.map((e) => {
            if (e?.id === action?.payload?.id) {
              return {
                ...e,
                name: action?.payload?.name,
              };
            } else {
              return e;
            }
          });

        default:
          return state;
      }
    }
  }
  let addUpdateTodo = () => {
    if (id) {
      dispatch({ type: actionTypes.UPDATE_TODO, payload: { id: id, name: inptValue } });
      setId("");
    } else {
      dispatch({ type: actionTypes.ADD_TODO, payload: inptValue });
    }
    setInptValue("");
  };

  let resetTodo = () => {
    dispatch({ type: actionTypes.RESET_TODOS});
    setInptValue("");
  };

  let deleteTodo = (id) => {
    dispatch({ type: actionTypes.DELETE_TODO, payload: id });
  };

  let updateTodo = (obj) => {
    setInptValue(obj?.name);
    setId(obj?.id);
  };

  return (
    <div className="col-md-8 m-auto">
      <h1>Total Fruits {fruitTodo?.length}</h1>
      <label>{id ? "Update" : "Add"} Fruits:</label>
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            value={inptValue}
            onChange={(e) => setInptValue(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" onClick={addUpdateTodo}>
            {id ? "Update" : "Add"} Todo
          </button>
        </div>
      </div>
      <button className="btn btn-success mt-3" onClick={resetTodo}>
        Reset All
      </button>
      <hr />
      <div>
        <ul className="list-group">
          {fruitTodo?.length == 0 ? (
            <h4>TODO is empty</h4>
          ) : (
            fruitTodo?.map((e) => (
              <li
                key={e?.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {e?.name}
                <span>
                  <button
                    className="btn btn-info"
                    onClick={() => updateTodo(e)}
                  >
                    update
                  </button>{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(e?.id)}
                  >
                    delete
                  </button>
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default AddFruits;
