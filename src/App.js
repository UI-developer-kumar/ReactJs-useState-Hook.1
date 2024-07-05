import React, {useState} from "react";
import Index from "./2-useState-hook-2";


function App() {

  // const [count, setCount] = useState(0)

  // const decrementCount = () => {
  //   setCount((prevCount) => prevCount - 1)
  //   setCount((prevCount) => prevCount - 1)
  // }

  // const incrementCount = () => {
  //   setCount((prevCount) => prevCount + 1)
  //   setCount((prevCount) => prevCount + 1)
  // }
  return (
    <div className="container">
      {/* <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button> */}

      <Index />
    </div>
  );
}

export default App;
