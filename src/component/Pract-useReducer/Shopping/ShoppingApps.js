import React, { useEffect, useReducer, useState } from "react";
import { API_URL } from "./API_constant";
import axios from "axios";

const ShoppingApps = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL.products)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  function addToCart(obj) {
    axios({
      method: "POST",
      url: API_URL.addtocart,
      data: {
        name: obj.name,
        price: obj.price,
      },
    })
      .then((res) => {
        alert("product added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
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
                  onClick={() => addToCart(e)}
                >
                  Add Cart
                </button>
              </span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingApps;
