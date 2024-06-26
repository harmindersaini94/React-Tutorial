import {useState, useEffect} from "react";

function useCurrencyConvertor(currency){

    //Fetch API
    //Whenever change in currency

    //Now we know api is a method call, so useEffect will be needed, and API will return a data that i to be reflected in UI so useState

    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.JSON)
        .then((res) => setData(res[currency]))
    }, [currency]) // ie whenever change in currency, call the api

    //Now we know that in a hook, whatever we pass it return the processed val, so here the processed value is the data that is returned
    return data
}

export default useCurrencyConvertor;