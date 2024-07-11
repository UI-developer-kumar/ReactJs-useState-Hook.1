import React from "react";
import useCounter from "./useCounter";

const SecondCounter =()=> {

   const [count, increment, decrement, reset] = useCounter(10)

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


export default SecondCounter