import React, { useEffect, useState } from 'react';
import './Options.css'
import { fetchPopularMovies, discoverMoviesByYear, discoverMoviesByGenre } from '../../services/api.js'

function Options({ onSetMovies }) {
    // ---------------------- Constantes  -----------------------
    const [releaseYear, setReleaseYear] = useState('');//Año que seleccionó el usuario
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
    function handleMoviesByYear() {
        discoverMoviesByYear(releaseYear)//Parametro
            .then(movies => {//Respuesta de API, Un objeto
                onSetMovies(movies);//Metemos la respuerta de la API al estado selctedMovies del componente app 
            })
            .catch(error => {
                console.error("Error en findMovieByYear:", error);
            });
    }
    function handleMoviesByGenre() {
        discoverMoviesByGenre(selectedGenre)
            .then(movies => {
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Error en findMovieByGenre:", error);
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
        handleMoviesByGenre();//No necesita boton de click, en cuento cambia se vuelve a llamar a la fucnion 
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
                <button onClick={handleMoviesByYear}>Bring by year</button>
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
                <button onClick={handlePopularMovies}>Popular in Japan</button>
            </div>
        </article>
    );
}
export default Options;