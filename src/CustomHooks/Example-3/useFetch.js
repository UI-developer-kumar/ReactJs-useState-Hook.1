import {useState, useEffect} from "react";

const useFetch = (URL) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)


    const UserFetchAPi = async() => {
        setIsLoading(true)
        setIsError(false)
        try{
            const response = await fetch(URL)
        const comingData = await response.json()
        setData(comingData)
        setIsLoading(false)
        setIsError(false)
        }catch (error) {
            console.log(error);
            setIsLoading(false)
            setIsError(true)
        }
    }


    useEffect(() => {
        UserFetchAPi(URL)
    }, [])

    return [data, isLoading, isError]

}

export default useFetch