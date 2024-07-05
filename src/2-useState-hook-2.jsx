import React, { useState } from "react";

const Index = () => {

    const tempArray = [
        {
            id : "sfsfdfw",
            firstName : "prem",
            lastName : "kumar",
            age : 28
        },
        {
            id :"fsfafs",
            firstName : "padma",
            lastName : "potharlanka",
            age : 24
        },
        {
            id: "fsfjioafj",
            firstName : "santhosh",
            lastName : "kumar",
            age : 29
        }
    ]

    // const intialObj = {
    //     firstName : "prem",
    //     lastName : "kumar",
    //     age : 28
    // }

    const [data, setData] = useState(tempArray);

    // function obj () {
    //     return {
    //     firstName : "prem",
    //     lastName : "kumar",
    //     age : 28
    //     }
    // }

    // const clickHandle = () => {
    //     setData({
    //         ...data,
    //         firstName : "padma"
    //     })
    // }

    // const clickHandleLast = () => {
    //     setData({
    //         ...data,
    //         lastName : "potharlanka"
    //     })
    // }

    // const changeAge = () => {
    //     setData ({
    //         ...data,
    //         age : 24
    //     })
    // }

    const deleteItem = (commingId) => {
        const filterData = data.filter((eachItem) => {
            return eachItem.id !== commingId;
        })
        setData(filterData)
        console.log(filterData);
    }
    return (
        <main>
            <ul>
            {
            data.map((eachItem, Index) => {
                const {firstName, lastName, age, id} = eachItem;
                return <li key={Index}>
                    <div>firstname is :<strong> {firstName}</strong></div>
                    <div>lastname is :<strong> {lastName}</strong></div>
                    <div>age is :<strong> {age}</strong></div>
                    <button onClick={() =>deleteItem(id)}>delete</button>
                </li>
            })
        }
        </ul>
        </main>
    )
}

export default Index;