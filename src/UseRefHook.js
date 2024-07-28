import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {

    let [count,setCount] = useState(0);
//let countRef = useRef(10);
let prevCountRef = useRef();
//Keeping track of previous state values 
useEffect(()=>{
prevCountRef.current = count;
},[count])

let prev = prevCountRef.current;
//let inptElement = useRef();

// let click=()=>{
//     console.log(inptElement.current.focus());
//     inptElement.current.style.background = "aqua";
// }

//Storing Mutable Values
// let startCount=()=>{
// if(countRef.current){
// countRef.current=setInterval(()=>{
//   setCount(prev => prev + 1);
// },1000)
// }
// }
// console.log(countRef.current);
// let stopCount=()=>{
// clearInterval(countRef.current);
// countRef.current = null;
// }

  return (
    <div>
        {/* <h1>UseRefHook</h1>
        <h1>{count}</h1>
        <button onClick={startCount}>start</button>{" "}
        <button onClick={stopCount}>stop</button> */}

           {/* Accessing DOM element using useRef

        <input type="text" ref={inptElement}></input>
        <button onClick={click}>click</button> */}

        <h1>Current : {count} </h1>
        <h1>Previous : {prev} </h1>
        <button onClick={()=>setCount(count + 1)}>increment</button>
     </div>
  )
}

export default UseRefHook