import './Styles.css';

const DisplayMovies = (props) => {
    console.log("Inside the Display Page");
    const MovieList = props.list;
    console.log(MovieList['Search'], "MovieList");
    return(
        <div className="DMain">
            { MovieList.Search.map(movie => 
                <div className="MovieDiv">
                    <h1>{movie.Title}</h1>
                    <img className='Image' src={movie.Poster} alt={movie.Title} />
                    <h4>({movie.Year})</h4>
                </div>
            )}
        </div>
    );
}

export default DisplayMovies;