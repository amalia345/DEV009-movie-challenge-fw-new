import './Cards.css';

import genres from '../../services/genres';
const { getGenreNamesByIds } = genres;


const baseURL = 'https://image.tmdb.org/t/p/w500';

function Cards(props) {
    let estrellas = '⭐'.repeat(Math.ceil(props.starMovie / 2));
    const cardClass = props.isDetailed ? 'Cards-card detailed' : 'Cards-card';
   //const genreNames = getGenreNamesByIds(props.genresMovie);
       const genreIds = Array.isArray(props.genresMovie) ? props.genresMovie : [];
    const genreNames = getGenreNamesByIds(genreIds);


    return (
        <div className={cardClass} onClick={props.onSelect} data-testid="card-element" >
            <div className='titles'>
                <h3>
                    {props.nameMovie}
                </h3>
                {/* Muestra estos detalles solo si isDetailed es verdadero */}  
                {props.isDetailed && (
                    <>
                        <p>
                            Year: {props.dateMovie.split('-')[0]}
                        </p>
                        <p>
                            Votes: {props.votesMovie} ({estrellas})
                        </p>
                        <p>
                            Rating: {props.starMovie}
                        </p>
                        <p>
                            Genres: {genreNames.join(', ')}
                        </p>
                    </>
                )}
            </div>
            <img src={`${baseURL}${props.posterMovie}`} alt={`Poster of ${props.nameMovie}`}></img>
        </div>
    );
}

export default Cards;