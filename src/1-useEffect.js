// import React, { useEffect, useState } from "react";

// const URL = "https://jsonplaceholder.typicode.com/users";

// const Effect = () => {

//     const [userData, SetUserData] = useState([]);
//     const [loading, setLoading] = useState(false)
//     const [isError, setIsError] = useState({status:false, msg : ""})

//     const fetchUserData =async (apiURL)=>{
//         setLoading(true)
//         setIsError({status:false, msg:''})
//         try{
//             const response =await fetch(apiURL)
//             const data = await response.json()
//             SetUserData(data)
//             setLoading(false)
//             setIsError({status:false, msg:""})
//             if(response.status === 404){
//                 throw new Error("data not found")
//             }
//         }catch(error) {
//             setLoading(false)
//             setIsError({status:true, msg: error.msg ||"something went wrong please try again"})
//         }
//     }

//     useEffect(() => {
//         fetchUserData(URL)
//     }, [])

//     if(loading) {
//         return <div>
//             <h4>Loading....</h4>
//         </div>
//     }

//     if(isError?.status){
//         return <div>
//             <h4 style={{color: "red"}}>{isError.msg}</h4>
//         </div>
//     }




//     return(
//         <div>
//             <ul>
//             {
//                 userData.map((eachUser) => {
//                     const {id, name, email} = eachUser;
//                     return(
//                     <li key={id}>
//                         <div>{name}</div>
//                         <div>{email}</div>
//                     </li>
//                     )
//                 })
//             }
//             </ul>
//         </div>
//     )
// }

// export default Effect;