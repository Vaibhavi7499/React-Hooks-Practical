import {useState} from 'react'

const useCounter = (five) => {
    let [counter, setCounter] = useState(0);

    let increment = () => {
       setCounter(prev => prev + five);
    }
  
    let decrement = () => {
       setCounter((prev) => prev - five);
    }
  
    let reset = () => {
       setCounter(0);
    }

    return [counter, increment, decrement, reset]
}

export default useCounter