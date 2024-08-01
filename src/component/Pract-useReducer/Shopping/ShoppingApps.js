import React, { useReducer } from "react";
import { actionTypes } from "../ActionTypes";
import shoppingContext from "../../../ContextAPI/ShoppingContext";

const ShoppingApps = () => {
  let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 30000 },
    { id: 3, name: "Bag", price: 1000 },
    { id: 4, name: "Pencil", price: 6 },
    { id: 5, name: "Pen", price: 10 },
    { id: 6, name: "Watch", price: 8000 },
    { id: 7, name: "TV", price: 25000 },
  ];

  let [myOrder, dispatch] = useReducer(reducer, []);

  function reducer(state, action) {
    switch (action.type) {
      case actionTypes.ADD_CART:
        return [...state, action.payload];

      default:
        return state;
    }
  }

  let obj = {
    myOrder,
  };
  return (
    <shoppingContext.Provider value={{ obj }}>
      <div className=" col-md-8 m-auto">
        <h1>Shopping Apps</h1>
        <h3>Products</h3>
        <ul className="list-group">
          {products.map((e) => (
            <div className="col-md-8">
              <li
                key={e?.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <h6>Product : {e?.name}</h6>
                Price : {e?.price}$
                <span>
                  {" "}
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      dispatch({ type: actionTypes.ADD_CART, payload: e })
                    }
                  >
                    Add Cart
                  </button>
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </shoppingContext.Provider>
  );
};

export default ShoppingApps;
