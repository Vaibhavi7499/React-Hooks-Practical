import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  let [data, setData] = useState([]);
  let [errorMessage, setErrorMessage] = useState("")

  function getData() {
    axios.get(url).then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err)
      setErrorMessage(err.message)
    })
  }

  useEffect(()=>{
getData();
  },[])

  return [data, errorMessage];
};

export default useFetch;
