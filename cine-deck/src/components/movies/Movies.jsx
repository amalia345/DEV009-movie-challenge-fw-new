import Cards from "../cards/Cards"
import './Movies.css'
function Movies({ titles, currentPage, setCurrentPage }) {
    console.log('AQU IES LA INFO DE TITLE S----------------------------');
    console.log(titles);
    const moviesPerPage = 5;
    const totalPages = Math.ceil(titles.length / moviesPerPage)
    const selectedTitles = titles.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage)

    return (
        <div>
            <div className="Movies-cards">
                {selectedTitles.map((movie, index) => ( //Map ciclo for que funciona en react 
                    <Cards key={index} nameMovie={movie.title} dateMovie={movie.date} starMovie={movie.stars} posterMovie={movie.poster} />// props de cards
                ))}
            </div>
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage===index+1 ? 'active': ''}
                    >
                        {index+1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Movies;