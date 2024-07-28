import React,{useState,useEffect} from 'react'


const useTitle = () => {
  let [count, setCount] = useState(0);

    let changeTitle = () => {
        setCount((prevcount) => prevcount + 1);
      };
    
      useEffect(() => {
        document.title = `Hook ${count}`;
      }, [count]);

      return [count,changeTitle]
}

export default useTitle