import React, { useState, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";


// const Title = () => {
//     console.log("title rendered");
//     return (
//         <h3>UseCallback & React.Memo</h3>
//     )
// }

// const Count = ({text, number}) => {
//     console.log(`${text} rendered`);
//     return (<h4>{text} : {number}</h4>)
// }

// const Button = ({children, clickHandle}) => {
//     console.log(`${children} rendered`);
//     return (
//         <button onClick={clickHandle} >{children}</button>
//     )
// }
const ParentComponent=()=> {

    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(7000)

    const increaseAge= useCallback( () => {
        setAge(age + 1)
    },[age])

    const increseSalary =useCallback(() => {
        setSalary(salary + 1000)
    },[salary])

    return(
        <div>
            <Title />
            <Count text={"age"} number={age}/>
            <Button clickHandle={increaseAge}>increaseAge</Button>
            <Count text={"salary"} number={salary}/>
            <Button clickHandle={increseSalary}>increaseSalary</Button>
        </div>
    )
}

export default ParentComponent