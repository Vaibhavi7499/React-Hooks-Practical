import React, { useState } from "react";
import TodoTaskList from "./TodoTaskList";
import TodoTaskHeader from "./TodoTaskHeader";
import todoTaskContext from "../../ContextAPI/TodoTaskContext";

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
    if (inptValue == "") {
      alert("Please enter a value!!!!!");
    } else {
      if (isUpdate) {
        updateTodo();
      } else {
        addTodo();
      }
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
    setIsUpdate(false);
    setInptValue("");
  };

  let obj = {
    todos,
    deleteTodo,
    update,
  };

  return (
    <todoTaskContext.Provider value={obj}>
      <div className="col-md-8 m-auto">
        {/* <TodoTaskHeader todos={todos}></TodoTaskHeader> */}
        <TodoTaskHeader></TodoTaskHeader>
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
        {/* <TodoTaskList
        todos={todos}
        deleteTodo={deleteTodo}
        update={update}
      ></TodoTaskList> */}
        <TodoTaskList></TodoTaskList>
      </div>
    </todoTaskContext.Provider>
  );
};

export default TodoTask;
