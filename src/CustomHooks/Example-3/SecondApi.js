import React from "react";
import useFetch from "./useFetch";

const URL = "https://jsonplaceholder.typicode.com/posts";

const SecondAPI = () => {

    const [postsData, isLoading, isError] = useFetch(URL)
    
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
               postsData.map((eachUser) => {
                const {id, title} = eachUser
                return <li key={id}>{title}</li>
               })
            }
            </ul>
        </div>
    )
}

export default SecondAPI