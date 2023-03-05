import React, { useState } from 'react';
import Fetch from './Fetch';
import './Styles.css';

const Search = () => {

    const [search, setSearch] = useState("");

    const inputHandler = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Clicked");
    }
    return (
        <div className='FetchAPIDiv'>
            <h1 className='hooked'>HOOKED</h1>
            <input className='inputField' type="text" onChange={inputHandler}/>
            <button className='SubmitBtn' type='submit' onClick={onSubmitHandler}>SEARCH</button>
            <p className='para'>Sharing your few favoriate movies</p>

            <Fetch fetchInput={search} />
        </div>
    );

}

export default Search;