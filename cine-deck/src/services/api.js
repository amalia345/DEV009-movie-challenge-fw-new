const API_KEY = '96706b0f33b454df6da0561912cd7362'

export function discoverMoviesByGenre(genre) { //Código asincrono
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al descubrir películas por genero');
            }
            return response.json();
        })
        .then(data => {
            return data.results.map(movie => ({
                title: movie.title,
                date: movie.release_date,
                poster: movie.poster_path,
                stars: movie.vote_average,
                votes: movie.vote_count,
                genres: movie.genre_ids
            }));
        })
        
}
export function discoverMoviesByYear(year) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${year}&sort_by=vote_count.desc`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al descubrir películas por año de lanzamiento');
            }
            return response.json();
        })
        .then(data => {
            return data.results.map(movie => ({
                title: movie.title,
                date: movie.release_date,
                poster: movie.poster_path,
                stars: movie.vote_average,
                votes: movie.vote_count,
                genres: movie.genre_ids
            }));
        })
}

export function findMovieByName(movieName) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error finding movie by name');
            }
            return response.json();
        })
        .then(data => {
            return data.results.map(movie => ({
                title: movie.title,
                date: movie.release_date,
                poster: movie.poster_path,
                stars: movie.vote_average,
                votes: movie.vote_count,
                genres: movie.genre_ids
            }));
        })
}

// ------------ ------ REGRSEA LAS PELICULAS MAS POPULARES DEL API

export function fetchPopularMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&with_origin_country=JP&language=en-US&page=1`)
        .then(response => {
            if (!response.ok) { throw new Error('Error finding popular movies'); }
            return response.json();
        })
        .then(data => {
            return data.results.map(movie => ({
                title: movie.title,
                date: movie.release_date,
                poster: movie.poster_path,
                stars: movie.vote_average,
                votes: movie.vote_count,
                genres: movie.genre_ids
            }));
        })
};