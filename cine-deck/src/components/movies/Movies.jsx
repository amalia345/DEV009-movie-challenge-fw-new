import Cards from "../cards/Cards"
import './Movies.css'
function Movies({ titles, currentPage, setCurrentPage, detailedMovie, onClose, onSelect }) {

    const moviesPerPage = 5;
    const totalPages = Math.ceil(titles.length / moviesPerPage)
    const selectedTitles = titles.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage)
    console.log(detailedMovie, ' Valor de selected movies ');
    if (!detailedMovie) {
        return (
            <div className="Movies-cards">
                <Cards
                    nameMovie={detailedMovie.title}
                    dateMovie={detailedMovie.date}
                    starMovie={detailedMovie.stars}
                    posterMovie={detailedMovie.poster}
                    votesMovie={detailedMovie.votes}
                    genresMovie={detailedMovie.genres}
                    onSelect={() => onSelect(detailedMovie)}
                />
                <button onClick={onClose}>Close</button>
            </div>
        );
    }

    return (
        <div>
            <div className="Movies-cards">
                {selectedTitles.map((movie) => ( //Map ciclo for que funciona en react 
                    <Cards
                        nameMovie={movie.title}
                        dateMovie={movie.date}
                        starMovie={movie.stars}
                        posterMovie={movie.poster}
                        votesMovie={movie.votes}
                        genresMovie={movie.genres}
                    />
                ))}
            </div>
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}


            </div>
        </div>
    );
}

export default Movies;