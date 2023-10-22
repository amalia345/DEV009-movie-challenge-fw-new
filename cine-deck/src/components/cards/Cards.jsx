import './Cards.css'

const baseURL = 'https://image.tmdb.org/t/p/w500'

function Cards(props) {//Props no se puede modificar 

    let estrellas = '⭐'.repeat(Math.ceil(props.starMovie / 2))

    return (//jsx
        <div className='Cards-card'>
            <div className='titles'>
                <h3 >
                    {props.nameMovie}
                </h3>
                <p>
                    {props.dateMovie.split('-')[0]} {estrellas}
                </p>
                <p>
                    {props.votesMovie} {props.genresMovie}
                </p>
            </div>
            <img src={`${baseURL}${props.posterMovie} `}>
            </img>
        </div>
    )
}

export default Cards; 
