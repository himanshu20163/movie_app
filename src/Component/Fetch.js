import { useState, useEffect } from "react";
import DisplayMovies from "./DisplayMovies";

const Fetch = (props) => {
    const apikey = "682f6faa";
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [list, setList] = useState([])

    console.log("Inside the Fetch", props.fetchInput);

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await (await fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${props.fetchInput}`)).json();

            console.log(response);
            if(response['Response'] === "False") {
                setError(response['Error'])
                setIsLoaded(true)
            }
            else {
                setError('');
                setList(response);
                setIsLoaded(true);
            }
        }

        fetchAPI();
    }, [apikey, props.fetchInput])

    if(error) {
        return <>{error}</>
    }
    else if(!isLoaded) {
        return <>Loading.... Please wait...</>
    }
    else {
        return <DisplayMovies list={list} />;
    }

}


export default Fetch;