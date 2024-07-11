import React from "react";

const Button = ({children, clickHandle}) => {
    console.log(`${children} rendered`);
    return (
        <button onClick={clickHandle} >{children}</button>
    )
}

export default React.memo(Button)