import React, { useContext } from "react";
import { UserContext } from "./UseContext-Advance";


const SubChildComponent = () => {
    const data = useContext(UserContext)
    // const data = useContext(userContext)


    const {firstName, lastName, email} = data;
    return(
        <div>
            <h3>SubChildComponent</h3>
            <h4>name: {firstName}</h4>
            <h4>name: {lastName}</h4>
            <h4>name: {email}</h4>
        </div>
    )
}

export default SubChildComponent;