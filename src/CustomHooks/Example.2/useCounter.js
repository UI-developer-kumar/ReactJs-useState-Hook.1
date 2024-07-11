import {useState} from "react";

const useCounter = (intialCount ) => {
    const [count, setCount] = useState(intialCount)

    const increment= () => {
        setCount(count + 1)
    }

    const decrement=() => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(intialCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter