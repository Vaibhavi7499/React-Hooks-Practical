import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  let [data, setData] = useState([]);

  function getData() {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }

  useEffect(()=>{
getData();
  },[])

  return [data];
};

export default useFetch;
