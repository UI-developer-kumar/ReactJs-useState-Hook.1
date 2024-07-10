import React, { useEffect, useRef, useState } from "react";


const Final =() => {
    const [firstName, SetFirstName] = useState()

    const renderCount = useRef(1)

    useEffect(()=>{
        renderCount.current = renderCount.current + 1;
    })

    return(
        <div>
            <input type="text" name="text" id="text" onChange={(e) => SetFirstName(e.target.value)}/>
            <h3>typeing: {firstName}</h3>
            <h3>times of render {renderCount.current}</h3>
        </div>
    )
}

export default Final