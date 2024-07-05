import React, { useState } from "react";

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const changeName = (e) => {
    //     setName(e.target.value)
    // }

    // const changeEmail =(e)=> {
    //     setEmail(e.target.value)
    // }

    // const changePassword = (e) => {
    //     setPassword(e.target.value)
    // }

    const handleChange = (e, item) => {
        if(item === "name") {
            setName(e.target.value)
        }else if (item === "email") {
            setEmail(e.target.value)
        }else if (item === "password"){
            setPassword(e.target.value)
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        let userObj = {
            name : name,
            email : email,
            password : password
        }
        console.log(userObj);
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                <input type="text" name="name" id="name" placeholder="enter your name" value={name} 
                // onChange={(e) => setName(e.target.value)}
                onChange={(e) => handleChange(e, "name")}
                />
                </div>
                <div>
                <input type="email" name="email" id="email" placeholder="enter your email" value={email} 
                // onChange={(e) => setEmail(e.target.value)}
                onChange={(e) => handleChange(e, "email")}
                />
                </div>
                <div>
                <input type="password" name="password" id="password" placeholder="enter your password" value={password} 
                // onChange={(e) => setPassword(e.target.value)}
                onChange={(e) => handleChange(e, "password")}/>
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;