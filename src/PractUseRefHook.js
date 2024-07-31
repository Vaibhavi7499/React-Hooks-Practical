import React, { useEffect, useRef, useState } from 'react'

const PractUseRefHook = () => {
    let [count,setCount] = useState("");  
    let myRef = useRef(0);
   
  useEffect(()=>{
    myRef.current=myRef.current+1
  })

  return (
    <div>
        <h1>Pract UseRef Hook</h1>
        <input type='text' onChange={(e)=>setCount(e.target.value)}></input>
    <h3>count : {myRef.current}</h3>
    </div>
  )
}

export default PractUseRefHook