import React, { useContext } from "react";
import expenseContext from "../../../ContextAPI/ExpenseContext";

const ExpenseList = () => {
  let {expense, updateExpense, deleteExpense} = useContext(expenseContext);
  return (
    <>
      <ul className="list-group">
        {expense?.map((e) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {e?.name}
            <span>
              <button className="btn btn-info" onClick={() => updateExpense(e)}>
                update
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => deleteExpense(e?.id)}
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

export default ExpenseList;
