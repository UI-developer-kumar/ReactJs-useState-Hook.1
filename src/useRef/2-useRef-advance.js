import React, { useRef, useState, useEffect } from "react";

const Final =()=> {

    const [firstName, SetFirstName] = useState("")

    const inputDom = useRef("")

     useEffect (() => {
        console.log(inputDom);
    })

     const focus = () => {
        inputDom.current.focus()
     }

    return(
        <div>
            <input ref={inputDom} type="text" name="text" id="text" onChange={(e) => SetFirstName(e.target.value)} />
            <h3>Typing : {firstName}</h3>
            <button onClick={focus}>focus</button>
        </div>
    )
}

export default Final