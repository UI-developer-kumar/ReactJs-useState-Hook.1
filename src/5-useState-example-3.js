import React, { useState } from "react";

const Todo = () => {

    // const tempList = [
    //     {
    //     text: "hello",
    //     id: "sfgdssgre"
    //     },
    //     {
    //         text: "hello world",
    //         id: "sfgdssgregsgsgf"
    //     }
    // ]

    const [list, setList] = useState([])
    const [message, setMessage] = useState({
        text: "",
        id: ""
    })
    const [editItem, setEditItem] = useState({
        id: "",
        isEditing : false,
    })

    const changeMessage = (e) => {
        setMessage({
            ...message,
            text:e.target.value,
        });
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        let newTodo = {
            text:message.text,
            id: new Date().getTime().toString()
        }
        setList([...list, newTodo])
        setMessage({
            text: "",
            id:""
        })
    }

    const hadleDelete = (id) => {
        let newTodos = list.filter((eachItem) => {
            return eachItem.id !== id 
        })
        setList(newTodos)
    }

    const handileEditState = (id) => {
        setEditItem({
            ...editItem,
            id : "id",
            isEditing: true,
        })
        let edittableItem = list.find((eachItem)=> eachItem.id === id)
        setMessage({
            ...message,
            text: edittableItem.text,
            id: edittableItem.id,   
        }) 
    }

    const handleEdit = (e) => {
        e.preventDefault()
        let newTodos = list.map((eachItem) =>{
            if(eachItem.id === editItem.id){
                return{
                text : message.text,
                id : editItem.id,
                }
            }else{
                return eachItem;
            }
        })
        setList(newTodos)
        setMessage({
            text :"",
            id : "",
        })
        setEditItem({
            id: "",
            isEditing: false
        })
    }

    return (
        <div>
        <form>
            <input type="text" name="name" id="name" placeholder="enter your todo" value={message.text} onChange={changeMessage} />
            {
                editItem.isEditing ? <button onClick={handleEdit} type="submit">edit</button> : <button onClick={handleSubmit} type="submit">add</button>
            }
        </form>
        <hr/>
        {
            list.length === 0 && <h3>there is no todos</h3>
        }
        <ul>
            {
                list.map((eachItem) =>{
                    const {text, id} = eachItem;
                    return <li key={id}>
                        <span>{text}</span>
                        <button onClick={()=> handileEditState(id)}>edit</button>
                        <button onClick={() => hadleDelete(id)}>delete</button>
                    </li>
                })
            }
            </ul>
        </div>
    )
}

export default Todo;