import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoExamplePract() {
  let [inptValue, setInptValue] = useState("");
  let [todo, setTodo] = useState([]);
  let [id, setId] = useState("");

  let addTodo = () => {
    if (inptValue.trim() === "") {
      alert("Please enter the todo name .....");
    } else {
      if (id) {
        todo = todo.map((e) => {
          if (e?.id === id) {
            return { ...e, name: inptValue };
          } else {
            return e;
          }
        });
        setTodo(todo);
        setId("");
        setInptValue("");
      } else {
        setTodo([...todo, { id: uuidv4(), name: inptValue }]);
        setInptValue("");
      }
    }
  };

  let deleteTodo = (id) => {
    let a = todo.filter((e) => {
      return e?.id !== id;
    });

    setTodo(a);
  };

  let updateTodo = (obj) => {
    setInptValue(obj?.name);
    setId(obj?.id);
  };

  return (
    <div className="col-md-6 m-auto">
      <h1>Todo</h1>
      <label>Enter the todo name : </label>
      <input
        type="text"
        className="form-control"
        value={inptValue}
        onChange={(e) => setInptValue(e.target.value)}
      />
      <button className="btn btn-primary mt-3" onClick={addTodo}>
        {id ? "Update Todo" : "Add Todo"}
      </button>

      <ol class="list-group list-group-numbered mt-4">
        {todo.map((e) => (
          <li
            key={e?.id}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{e?.name}</div>
            </div>
            <span>
              <button className="btn btn-success" onClick={() => updateTodo(e)}>
                Edit
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(e?.id)}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoExamplePract;
