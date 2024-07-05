import React, { useState } from "react";

const Example = () => {

    const [show, setShow] = useState(false);

    const handleChange = () => {
        setShow(!show)
    }

    return(
        <div>
            <button onClick={handleChange}>{show ? "hide" : "show"}</button>
            {
                show && 
                <p>lorem fkljarwjisjfs fkslajfiaje fnsfneif fsnfklsfkljeivx sdfsdweijffj</p>
            }
        </div>
    )
}

export default Example;