import React from "react";
import useFetch from "../customHook/useFetch";
const CustomerList = () => {
  let [customer, errorMessage] = useFetch("http://localhost:8000/customerlist");

  return (
    <div>
      <ul>
        {customer.map((e) => (
          <li key={e?.id}>
            {e?.name} {e?.address}
          </li>
        ))}
      </ul>
      {errorMessage.length ? <h1>Something Went Wrong</h1> : ""}
    </div>
  );
};

export default CustomerList;
