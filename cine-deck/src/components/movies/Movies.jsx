import Cards from "../cards/Cards"
import './Movies.css'
function Movies({ titles, currentPage, setCurrentPage, detailedMovie, onClose, onSelect }) {

    const moviesPerPage = 5;
    const totalPages = Math.ceil(titles.length / moviesPerPage)//Calculo de paginacion 
    const selectedTitles = titles.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage)//Los titles que voy a mostrar en esta pagina

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
                    isDetailed={true} // un booleano, prop que creamos para que card sepa si esta en detailed o no
                    onSelect={() => onSelect(detailedMovie)}
                />
                
            </div>
        );
    }

    else {
        return (
        <div>
            <div className="Movies-cards ">
            {selectedTitles && selectedTitles.map((movie) => (
                    <Cards
                        
                        nameMovie={movie.title}
                        posterMovie={movie.poster}
                        genresMovie={movie.genres}
                        onSelect={() => onSelect(movie)}//Funcion para checar en que momento se le da click a una tarjeta 
                        data-testid="movie-card" // Id para jest
                    />
                ))}
            </div>
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (//destructuracion de un array para mapearlo
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)} //mapea botones
                        className={currentPage === index + 1 ? 'active' : ''}//Para darle estilos a la paginación activa 
                        data-testid="pagination-button" // Id para jest 
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
}

export default Movies;