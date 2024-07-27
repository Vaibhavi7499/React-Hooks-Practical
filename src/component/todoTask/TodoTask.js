import React, { useState } from "react";

const TodoTask = () => {
  let [inptValue, setInptValue] = useState("");
  let [todos, setTodos] = useState([]);
  let [isUpdate, setIsUpdate] = useState(false);
  let [id, setId] = useState(null);

  function getInptValue(e) {
    setInptValue(e.target.value);
  }

  function updateTodo() {
    let b = todos.map((e) => {
      if (e?.id == id) {
        return {
          ...e,
          name: inptValue,
        };
      } else {
        return e;
      }
    });
    setTodos(b);
    setIsUpdate(false);
    setInptValue("");
  }

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        name: inptValue,
      },
    ]);
    setInptValue("");
  }

  let addUpdateTodos = () => {
    if (isUpdate) {
      updateTodo();
    } else {
      addTodo();
    }
  };

  let deleteTodo = (id) => {
    let a = todos.filter((e) => {
      return e?.id !== id;
    });
    setTodos(a);
  };

  let update = (obj) => {
    setInptValue(obj?.name);
    setId(obj?.id);
    setIsUpdate(true);
  };

  let resetAll = () => {
    setTodos([]);
  };

  return (
    <div className="col-md-8 m-auto">
      <h1> Total Todo's {todos.length} </h1>
      <label>{isUpdate ? "Update" : "Add"} New Task : </label>
      <div className="row">
        <div className="col-md-5">
          <input
            className="form-control"
            type="text"
            value={inptValue}
            onChange={(e) => getInptValue(e)}
          />
        </div>
        <div className="col-md-3">
          <button onClick={addUpdateTodos} className="btn btn-primary">
            {isUpdate ? "Update Todo" : "Add Todo"}
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-success" onClick={resetAll}>
        Reset All
      </button>
      <hr />
      <ul className="list-group">
        {todos?.map((ele) => (
          <li
            key={ele?.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {ele?.name}{" "}
            <span>
              <button className="btn btn-secondary" onClick={() => update(ele)}>
                update
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(ele?.id)}
              >
                delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoTask;
