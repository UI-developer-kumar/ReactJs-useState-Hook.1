import React from "react";

const Title = () => {
    console.log("title rendered");
    return (
        <h3>UseCallback & React.Memo</h3>
    )
}

export default React.memo(Title)