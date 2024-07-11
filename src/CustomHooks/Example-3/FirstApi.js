import React from "react";
import useFetch from "./useFetch";

const URL = "https://jsonplaceholder.typicode.com/users";

const FirstAPI = () => {

    const [userData, isLoading, isError] = useFetch(URL)

    if(isLoading) {
        return <h4>Loading...</h4>
    }

    if(isError) {
        return <h4>something went wrong</h4>
    }

    return(
        <div>
            <h3>Users</h3>
            <ul>
            {
               userData.map((eachUser) => {
                const {id, name} = eachUser
                return <li key={id}>{name}</li>
               })
            }
            </ul>
        </div>
    )
}

export default FirstAPI