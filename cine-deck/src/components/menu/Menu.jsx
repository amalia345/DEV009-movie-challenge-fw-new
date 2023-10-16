import {  useState } from 'react';
import { findMovieByName } from '../../services/api.js'

//const [movieName, setMovieName] = useState('');

function Menu({ onSetMovies }) {
    const [movieName, setMovieName] = useState('');

    function handleMovieByName() {
        findMovieByName(movieName)
            .then(movies => {
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Error en findMovieByName:", error);
            });
    }

    return (
        <div>
            <h1>Cine Deck</h1>
            <input
                id="byName"
                type='text'
                placeholder="Write the name of the movie"
                value={movieName}
                onChange={e => setMovieName(e.target.value)}
            />
            <button onClick={handleMovieByName}>SEARCH</button>
        </div>
    )
}

export default Menu