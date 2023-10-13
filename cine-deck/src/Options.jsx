import React, { useEffect, useState } from 'react';
import './Options.css'
import { fetchPopularMovies, findMovieByName, discoverMoviesByYear, discoverMoviesByGenre } from './services/api.js'

function Options({ onSetMovies }) {
    const [movieName, setMovieName] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');

    const API_KEY = '96706b0f33b454df6da0561912cd7362'
    const predefinedGenres = [
        { id: 878, name: 'Science Fiction' },
        { id: 10752, name: 'War' },
        { id: 27, name: 'Horror' },
        { id: 99, name: 'Documentary' },
        { id: 14, name: 'Fantasy' },
        { id: 10749, name: 'Romance' }
    ];

    function handleMoviesByGenre() {
        discoverMoviesByGenre(selectedGenre)
            .then(movies => {
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Error en findMovieByGenre:", error);
            });
    }


    function handleMoviesByYear() {
        discoverMoviesByYear(releaseYear)
            .then(movies => {
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Error en findMovieByYear:", error);
            });
    }

    function handleMovieByName() {
        findMovieByName(movieName)
            .then(movies => {
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Error en findMovieByName:", error);
            });
    }


    function handlePopularMovies() {
        fetchPopularMovies()
            .then(movies => {
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Error en fetchPopularMovies:", error);
            });
    }

    useEffect(() => {
        handleMoviesByGenre();
    }, [selectedGenre])

    // ------------ RETURN -------------
    return (
        <article>
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
            <div>
                <input
                    type='text'
                    placeholder="write the year"
                    value={releaseYear}
                    onChange={e => setReleaseYear(e.target.value)}
                />
                <button onClick={handleMoviesByYear}>BRING</button>
            </div>
            <div>
                <select
                    value={selectedGenre}
                    onChange={e => setSelectedGenre(e.target.value)}
                >
                    <option value="">Genres</option>
                    {predefinedGenres.map(genre => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>

            </div>
            <div>
                <p></p>
                <button onClick={handlePopularMovies}>POPULAR</button>
            </div>
        </article>
    );
}

export default Options;