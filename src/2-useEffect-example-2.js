import React, { useEffect, useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const SearchField = () => {

    const [drinksData, SetDrinksData] = useState([])
    const [searchItem, SetSearchItem] = useState("")
    const [loading, SetLoading] = useState(false);
    const [isError, SetIsError] = useState({status : false, msg: ""});

    
    const FetchDrinkData = async (apiURL)=> {
        SetLoading(true)
        SetIsError({status:false, msg: ""})
        try{
            const response = await fetch(apiURL)
            const {drinks} = await response.json()
            SetDrinksData(drinks)
            SetLoading(false)
            SetIsError({status:false, msg:""})
            if(!drinks) {
                throw new Error("data not found")
            }
        }catch(error){
            SetLoading(false)
            SetIsError({status:true, msg:error.msg || "something went wrong please try again"})
        }
    }

    // if(loading){
    //     return <div>
    //         <h4>Loading...</h4>
    //     </div>
    // }
    

    useEffect(() => {
        FetchDrinkData(URL)
    },[searchItem])

    return (
        <div>
            <form>
            <input type="text" name="name" id="name" placeholder="Search your drink" value={searchItem} onChange={(e) =>SetSearchItem(e.target.value)}/>
            </form>
            <hr/>
            {loading && !isError?.status&& <h4>Loading...</h4>}
            {isError?.status&& <h4 style={{color : "red"}}>{isError.msg}</h4>}
            {
                !loading && !isError?.status && <ul>
                {
                    drinksData.map((eachDrink) => {
                        const {idDrink, strDrink, strDrinkThumb} = eachDrink;
                        return(
                            <li key={idDrink}>
                                <div>
                                <img src={strDrinkThumb} />
                                </div>
                                <div>{strDrink}</div>
                            </li>
                        )
    
                    })
                }
                </ul>
            }
        </div>
    )
}

export default SearchField;