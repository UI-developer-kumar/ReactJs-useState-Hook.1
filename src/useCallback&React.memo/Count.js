import React from "react";

const Count = ({text, number}) => {
    console.log(`${text} rendered`);
    return (<h4>{text} : {number}</h4>)
}

export default React.memo(Count)