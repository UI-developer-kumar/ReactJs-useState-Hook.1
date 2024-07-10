
import React, { useEffect, useReducer, useState } from "react";


const reducer=(state, action)=>{
    if(action.type === "UPDATE_USERS_DATA"){
        return{
            ...state,
            usersData:action.payload
        }
    }
    if(action.type === "LOADING"){
        return{
            ...state,
            isLoading:action.payload
        }
    }

    if(action.type === "DELETE_USER"){
        const newUser= state.usersData.filter((eachUser)=> eachUser.id !== action.payload)
        return{
            ...state,
            usersData: newUser
        }
    }
    if(action.type === "ONCLICK_EDIT"){
        return {
            ...state,
            isEditing:action.payload
        }
    }
    if(action.type === "UPDATE_USER"){
        const newUsers = state.usersData.map((eachUser) =>{
            if(eachUser.id === action.payload.id){
                return{
                    id:action.payload.id,
                    name:action.payload.name,
                    email:action.payload.email,
                }
            }else{
                return eachUser
            }
        })
        return{
            ...state,
            usersData: newUsers
        }
    }
    return state
}

const UseReducerAdvance =()=>{

    const FetchUsersData= async(URL) =>{
        dispatch({type:"LOADING", payload:true})
        dispatch({type:"ERROR", payload:{status:false, msg:""}})
        try{
            const response = await fetch(URL)
        const data = await response.json()
        dispatch({type:"UPDATE_USERS_DATA", payload: data })
        dispatch({type:"LOADING", payload:false})
        dispatch({type:"ERROR", payload:{status:false, msg:""}})
        // console.log(data);
        }catch(error){
            console.log(error);
            dispatch({type:"LOADING", payload:false})
            dispatch({type:"ERROR", payload:{status:true, msg:error.msg}})
        }
    }

    useEffect(()=>{
        FetchUsersData("https://jsonplaceholder.typicode.com/users")
    },[])

const intialState={
    usersData :[],
    isLoading:false,
    isError:{status:false, msg:""},
    isEditing: {status:false, id: '', name:'', email:''}
}

const [state, dispatch] = useReducer(reducer, intialState)


    const handleDelete=(id)=>{
        dispatch({type:"DELETE_USER", payload:id})
    }

    const upDataData=(id, name, email )=>{
        dispatch({type:"UPDATE_USER", payload:{id, name, email}})
        dispatch({type:"ONCLICK_EDIT", payload:{status:true, id:id, name:name, email:email }})}
    
    // console.log(upDataData());


    if(state.isLoading){
        return(
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }

    return(
        <div>
            <h3>UsersInformation</h3>

            {state.isEditing?.status && <NewUpdateForm id={state.isEditing.id} comingTitle={state.isEditing.name} comingEmail={state.isEditing.email} upDataData={upDataData} />}

            <hr/>
            {
                // console.log(state)
                state.usersData.map((eachUser)=>{
                    const {id, name, email} = eachUser
                    return(
                        <div key={id}>
                            <h3>{name}</h3>
                            <p>{email}</p>
                            <button onClick={() => handleDelete(id)}>delete</button>
                            <button onClick={() => dispatch({type:"ONCLICK_EDIT", payload:{status:true, id:id, name:name, email:email }})}>edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

const NewUpdateForm =(id, comingTitle, comingEmail, upDataData) => {

    const [title, SetTitle] = useState(comingTitle || '')
    const [email, SetEmail] = useState(comingEmail || '')

    return (
        <>
            <form>
                <input type="text" name="title" id="title" value={title} onChange={(e)=> SetTitle(e.target.value)} />
                <input type="email" name="email" id="email" value={email} onChange={(e) => SetEmail(e.target.value)}/>
                <button onClick={() => upDataData(id, title, email)}>update data</button>
            </form>
        </>
    )
}



export default UseReducerAdvance;