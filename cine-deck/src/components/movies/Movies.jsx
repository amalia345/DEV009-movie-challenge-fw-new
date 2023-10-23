import Cards from "../cards/Cards"
import './Movies.css'
function Movies({ titles, currentPage, setCurrentPage, detailedMovie, onClose, onSelect }) {

    const moviesPerPage = 5;
    const totalPages = Math.ceil(titles.length / moviesPerPage)
    const selectedTitles = titles.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage)
    console.log(detailedMovie, ' Valor de selected movies ');

    if (detailedMovie) {
        return (
            <div className="Movies-cards">
                <button id="closer-button" onClick={onClose}>Back to Movies</button>
                <Cards
                    nameMovie={detailedMovie.title}
                    dateMovie={detailedMovie.date}
                    starMovie={detailedMovie.stars}
                    posterMovie={detailedMovie.poster}
                    votesMovie={detailedMovie.votes}
                    genresMovie={detailedMovie.genres}
                    isDetailed={true} // un prop que creamos para que card sepa si esta en detailed o no
                    onSelect={() => onSelect(detailedMovie)}
                />
                
            </div>
        );
    }

    return (
        <div>
            <div className="Movies-cards ">
            {selectedTitles && selectedTitles.map((movie) => (
                    <Cards
                        key={movie.title}
                        nameMovie={movie.title}
                        posterMovie={movie.poster}
                        genresMovie={movie.genres}
                        onSelect={() => onSelect(movie)}
                        data-testid="movie-card" // Añade esto
                    />
                ))}
            </div>
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                        data-testid="pagination-button" // Añade esto
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Movies;