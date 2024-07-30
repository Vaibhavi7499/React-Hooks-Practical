import React from "react";

function AddFruitList({fruitTodo,deleteTodo,updateTodo}){
return(
    <>
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
    </>
)
}
export default AddFruitList;