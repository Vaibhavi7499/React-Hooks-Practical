import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addExpenses,
  removeExpenses,
  updateExpenses,
} from "../Slice/ExpenseSlice";
import { v4 as uuidv4 } from "uuid";

const ExpenseList = () => {
  let dispatch = useDispatch();

  let expenseList = useSelector((state) => {
    return state.expense;
  });

  let [inptValue, setInptValue] = useState("");
  let [id, setId] = useState("");

  let addUpdateExpense = () => {
    if (id) {
      dispatch(updateExpenses({ id, expenseName: inptValue }));
      setId("");
    } else {
      dispatch(addExpenses({ id: uuidv4(), expenseName: inptValue }));
    }
    setInptValue("");
  };

  let deleteExpense = (id) => {
    dispatch(removeExpenses(id));
  };

  let updateExpense = (obj) => {
    setInptValue(obj?.expenseName);
    setId(obj?.id);
  };

  return (
    <div>
      <label>Enter expense name : </label>
      <input
        type="text"
        value={inptValue}
        onChange={(e) => setInptValue(e.target.value)}
      />
      <button onClick={addUpdateExpense} className="btn btn-primary">
        {id ? "Update" : "Add"} Expense
      </button>
      <hr />
      <ul>
        {expenseList.map((e) => (
          <li key={e?.id}>
            {e?.expenseName}{" "}
            <button
              className="btn btn-success"
              onClick={() => updateExpense(e)}
            >
              Update
            </button>{" "}
            <button
              className="btn btn-danger"
              onClick={() => deleteExpense(e?.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
