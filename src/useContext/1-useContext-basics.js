import React, {useState} from "react";
import SubChildComponent from "../useContext/SubChildComponent"


const ParentComponent = () => {

    const [userDetails, SetUserDetails] = useState({
        firstName:"emma",
        lastName : "watson",
        email:"emma@email.com"
    })

    return(
        <div>
            <h2>Parent Component</h2>
            <SubChildComponent />
            {/* <SubChildComponent userDetails ={userDetails}/> */}
        </div>
    )   
}   

const ChildComponent = (props) => {
    return (
        <div>
            <h2>ChildComponent</h2>
            <SubChildComponent userDetails = {props.userDetails} />
        </div>
    )
}

const SubChildComponent = ({userDetails}) => {
    return(
        <div>
            <h3>SubChildComponent</h3>
            <h4>name: {userDetails.firstName}</h4>
            <h4>name: {userDetails.lastNameName}</h4>
            <h4>name: {userDetails.email}</h4>
        </div>
    )
}


export default ParentComponent;

