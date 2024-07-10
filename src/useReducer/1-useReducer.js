import React, { useReducer } from "react";

const reducer =(state, action) => {
    if(action.type === "DELETE_PERSON"){
        const newPersons = state.data.filter((eachPerson) => {
            return eachPerson.id !== action.payload;
        })
        return {
            ...state,
            data: newPersons,
            length:state.length-1,
        }
    }

    return state;
}

const UseEffect = () => {

    const intialState = {
        data : [
            {id:"2e445",firstName:"prem", email:"prem@mail.com"},
            {id:"fsserg",firstName:"kumar", email:"kumar@mail.com"}
        ],
        length:2,
    };

   const [state, dispatch] = useReducer(reducer, intialState)


   const deleteHandle = (id) => {
        dispatch({
            type:"DELETE_PERSON",
            payload:id,
        })
   }


    return(
        <div>
            <h3>User's length: {state.length}</h3>
            {
                state.data.map((eachItem) => {
                    const {id, firstName, email} = eachItem;
                    return(
                        <div key={id}>
                            <h3>{firstName}</h3>
                            <p>{email}</p>
                            <button onClick={() => deleteHandle(id)}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UseEffect;