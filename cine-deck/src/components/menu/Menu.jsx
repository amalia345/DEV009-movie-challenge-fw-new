import { useState } from 'react';
import { findMovieByName } from '../../services/api.js'
import './menu.css'

//const [movieName, setMovieName] = useState('');

function Menu({ onSetMovies }) {
    const [movieName, setMovieName] = useState('');

    function handleMovieByName() {
        findMovieByName(movieName)
            .then(movies => {
                setMovieName('')//limpiador, se cambia el estado de movie nadme dentro del imput 
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Error en findMovieByName:", error);
            });
    }

    return (
        <div id='menuDiv'>
            <h1>Cine Deck</h1>
            <div>
                <input
                    id="byName"
                    type='text'
                    placeholder="Write the name of the movie"
                    value={movieName}
                    onChange={e => setMovieName(e.target.value)}
                />
                <button onClick={handleMovieByName}>SEARCH</button>
            </div>
        </div>
    )
}

export default Menu