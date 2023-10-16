import React, { useEffect, useState } from 'react';
import './Options.css'
import { fetchPopularMovies, discoverMoviesByYear, discoverMoviesByGenre } from '../../services/api.js'

function Options({ onSetMovies }) {
    // ---------------------- Constantes  -----------------------
    const [releaseYear, setReleaseYear] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const predefinedGenres = [
        { id: 878, name: 'Science Fiction' },
        { id: 10752, name: 'War' },
        { id: 27, name: 'Horror' },
        { id: 99, name: 'Documentary' },
        { id: 14, name: 'Fantasy' },
        { id: 10749, name: 'Romance' }
    ];
    // ---------------------- Funciones que manejan el API  -----------------------
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
    function handlePopularMovies() {
        fetchPopularMovies()
            .then(movies => {
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Error en fetchPopularMovies:", error);
            });
    }
    // ---------------------- Effects que maneja el cmabio de los select  -----------------------
    useEffect(() => {
        handleMoviesByGenre();
    }, [selectedGenre])

    // ---------------------- RETURN -----------------------
    return (
        <article className='seccionBusqueda'>
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
                <button onClick={handlePopularMovies}>POPULAR</button>
            </div>
        </article>
    );
}
export default Options;