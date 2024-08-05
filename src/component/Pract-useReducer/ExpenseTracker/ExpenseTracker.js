import React, { useReducer, useState } from "react";

const ExpenseTracker = () => {
  let [inptExpense, setInptExpense] = useState("");
  let expense = [];
  let [id, setId] = useState("");
  let [state, dispatch] = useReducer(reducer, expense);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_EXPENSE":
        return [...state, { id: state.length + 1, name: action.payload }];

      case "RESET_EXPENSE":
        return (state = []);

      case "DELETE_EXPENSE":
        return state.filter((e) => {
          return e.id !== action.payload;
        });

      case "UPDATE_EXPENSE":
        return state.map((e) => {
          if (e?.id === action?.payload?.id) {
            return {
              ...e,
              name: action.payload.name,
            };
          } else {
            return e;
          }
        });
      default:
        return state;
    }
  }

  let addExpense = () => {
    if (id) {
      dispatch({
        type: "UPDATE_EXPENSE",
        payload: { id: id, name: inptExpense },
      });
    } else {
      dispatch({ type: "ADD_EXPENSE", payload: inptExpense });
      setInptExpense("");
    }
  };
  let resetExpense = () => {
    dispatch({ type: "RESET_EXPENSE" });
  };

  let deleteExpensse = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  let updateExpense = (obj) => {
    setInptExpense(obj.name);
    setId(obj?.id);
  };

  return (
    <div className="col-md-8 m-auto">
      <h1>Expense Tracker Using API</h1>
      <div className="col-md-4">
        <label>{id ? "Update" : "Add"} Expense Name:</label>
        <input
          type="text"
          onChange={(e) => setInptExpense(e.target.value)}
          value={inptExpense}
        />{" "}
        <button className="btn btn-primary" onClick={addExpense}>
        {id ? "Update" : "Add"}
        </button>
        <button className="btn btn-success mt-2" onClick={resetExpense}>
          Reset All
        </button>
      </div>
      <hr />
      <div className="col-md-8">
        <ul className="list-group">
          {state?.map((e) => (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {e?.name}
              <span>
                <button
                  className="btn btn-info"
                  onClick={() => updateExpense(e)}
                >
                  update
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteExpensse(e?.id)}
                >
                  delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
