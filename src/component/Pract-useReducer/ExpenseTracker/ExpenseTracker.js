import React from "react";

const ExpenseTracker = () => {
  return (
    <div className="col-md-8 m-auto">
      <h1>Expense Tracker Using useReducer</h1>
      <div className="col-md-4">
        <label>Add Expense Name:</label>
        <input type="text"  />{" "}

        <button className="btn btn-primary">add</button>
        <button className="btn btn-success mt-2">Reset All</button>
      </div>
      <hr />
      <div className="col-md-8">
        <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                bag
                <span>
                  <button className="btn btn-info">update</button>{" "}
                  <button className="btn btn-danger">delete</button>
                </span>
              </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
