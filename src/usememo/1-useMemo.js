import React, { useState, useMemo, useEffect } from "react";

const Final = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const changeNumber = useMemo(() => {
        return slowFunction(number)
    },[number]) 

    const themeChange = useMemo(() => {
        return {
            backgroundColor : dark ? 'black' : 'white',
            color : dark ? 'white' : 'black'
        }
    }, [dark]) 

    useEffect(() =>{
        console.log("theme changed");
    }, [themeChange])
    return(
        <main>
            <div>
            <input type="number" name="number" id="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            </div>
            <br/>
            <div>
            <button onClick={() => setDark(!dark)}>change theme</button>
            </div>

            <h4 style={themeChange} >Number is : {changeNumber}</h4>

        </main>
    )

    
}

const slowFunction = (number) => {
    for (let i = 0 ; i < 10000000; i++) {
    }
    console.log("slow function running");
    return number * 2
}

export default Final