import React from "react";
import useCounter from "./useCounter";


const ParentComponent1 =()=> {

    const [count, increment, decrement, reset] = useCounter(0)
  
    return(
        <div>
            <h3>Example 2</h3>
            <h4>count == {count}</h4>
            <button onClick={increment}>increment </button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}


export default ParentComponent1