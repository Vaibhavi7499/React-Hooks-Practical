import React, { useReducer, useState } from "react";
import { actionTypes } from "../ActionTypes";
import ExpenseList from "./ExpenseList";
import expenseContext from "../../../ContextAPI/ExpenseContext";

const ExpenseTracker = () => {
  let [inptExpense, setInptExpense] = useState("");
  let [id, setId] = useState("");
  let expenseL = [];
  let [expense, dispatch] = useReducer(reducer, expenseL);

  function reducer(state, action) {
    switch (action.type) {
      case actionTypes.ADD_EXPENSE:
        return [
          ...state,
          {
            id: state.length + 1,
            name: action.payload,
          },
        ];

      case actionTypes.DELETE_EXPENSE:
        return state.filter((e) => e?.id !== action.payload);

      case actionTypes.RSSET_EXPENSE:
        return (state = []);

      case actionTypes.UPDATE_EXPENSE:
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
  function getInptExpense(e) {
    setInptExpense(e.target.value);
  }

  let addExpense = () => {
    if (id) {
      dispatch({
        type: actionTypes.UPDATE_EXPENSE,
        payload: { id: id, name: inptExpense },
      });
      setInptExpense("");
      setId("");
    } else {
      dispatch({ type: actionTypes.ADD_EXPENSE, payload: inptExpense });
      setInptExpense("");
    }
  };

  let resetExpense = () => {
    dispatch({ type: actionTypes.RSSET_EXPENSE });
    setInptExpense("");
  };

  let deleteExpense = (id) => {
    dispatch({
      type: actionTypes.DELETE_EXPENSE,
      payload: id,
    });
  };

  let updateExpense = (obj) => {
    setInptExpense(obj?.name);
    setId(obj?.id);
  };

  let obj = {
    expense,
    deleteExpense,
    updateExpense,
  };
  return (
    <expenseContext.Provider value={obj}>
      <div className="col-md-8 m-auto">
        <h1>Expense Tracker Using useReducer</h1>
        <div className="col-md-4">
          <label>{id ? "Update" : "Add"} Expense Name:</label>
          <input
            type="text"
            onChange={(e) => getInptExpense(e)}
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
          <ExpenseList></ExpenseList>
        </div>
      </div>
    </expenseContext.Provider>
  );
};

export default ExpenseTracker;
