import React, { useState, useMemo } from "react";

const UsememoPractiseEx = () => {
  let [nameone, setNameOne] = useState("Hello");
  let [nametwo, setNameTwo] = useState("college");

  let changeName = () => {
    setNameOne("Hello World");
  };

  let OverTheName = () => {
    setNameTwo("COCSIT College");
  };

  //   let checkingName=()=>{
  //     console.log("called when nameone change")
  // return nameone === "Kishor"
  //   }

  let checkingName = useMemo(() => {
    console.log("called when nameone change");
    return nameone === "Kishor";
  }, [nameone]);

  return (
    <div>
      <h1>{checkingName ? "I am Kishor" : "I am Vaibhavi"}</h1>
      <h1>Usememo Practise Example</h1>
      <h3>Name one : {nameone}</h3>
      <button onClick={changeName}>changeName</button>
      <h3>Name two : {nametwo}</h3>
      <button onMouseOver={OverTheName}>hoverName</button>
    </div>
  );
};

export default UsememoPractiseEx;
