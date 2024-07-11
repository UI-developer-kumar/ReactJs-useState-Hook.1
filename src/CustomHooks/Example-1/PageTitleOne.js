import React,{useState} from "react";
import useCustom from "./useCustom";

const ParentComponent=()=> {
    const [count, setCount] = useState(0);

   useCustom(count)

    return(
        <div>
            <h3>Custom Hook Example.1</h3>
            <div>
            <button onClick={() => setCount (count + 1)}>count = {count}</button>
            </div>
            
        </div>
    )
}

export default ParentComponent