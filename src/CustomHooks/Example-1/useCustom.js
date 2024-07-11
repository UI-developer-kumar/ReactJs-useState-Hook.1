import { useEffect } from "react";

const useCustom = (count) => {
    useEffect (() =>{
        document.title = `count ${count}`
    }, [count])
}

export default useCustom;