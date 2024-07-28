import React, { useEffect, useState } from "react";
import useTitle from "../customHook/useTitle";

const DtitleA = () => {
  let [count,changeTitle] = useTitle();
  let [firstNum, setFirstNum] = useState("");
  let [secondNum, setSecondNum] = useState("");
  let [addition, setAddition] = useState("");

  

  let add = () => {
    setAddition(Number(firstNum) + Number(secondNum));
  };

  return (
    <div className="col-md-4 m-auto">
      <h1>Dtitle A</h1>
      <h3>count : {count}</h3>
      <button className="btn btn-primary" onClick={changeTitle}>
        changeTitle
      </button>
      <hr />
      <div>
        <input type="text" onChange={(e) => setFirstNum(e.target.value)} />{" "}
        <input type="text" onChange={(e) => setSecondNum(e.target.value)} />
        <h3>Addition of two number : {addition}</h3>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
};

export default DtitleA;
