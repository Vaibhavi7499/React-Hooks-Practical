import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "./API_constant";

const Myorders = () => {
  let [myOrder, setMyorder] = useState([]);

  function getMyOrder() {
    axios
      .get(API_URL.addtocart)
      .then((res) => {
        setMyorder(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  useEffect(() => {
    getMyOrder();
  }, []);

  let removeFromCart = (id) => {
    axios({
      method: "DELETE",
      url: `${API_URL.addtocart}/${id}`,
    })
      .then((r) => {
        getMyOrder();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>My Orders</h1>
      <ul className="list-group">
        {!myOrder.length ? (
          <h1>No Record Found</h1>
        ) : (
          myOrder?.map((e) => (
            <div className="col-md-8">
              <li
                key={e.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <h6>Product : {e.name} </h6>
                Price : {e.price} $
                <span>
                  {" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(e?.id)}
                  >
                    Remove From Cart
                  </button>
                </span>
              </li>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default Myorders;
