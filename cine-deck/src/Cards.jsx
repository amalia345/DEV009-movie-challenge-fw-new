import './Cards.css'

const baseURL = 'https://image.tmdb.org/t/p/w500'

function Cards(props) {//Props no se puede modificar 

    let estrellas = '⭐'.repeat(Math.ceil(props.starMovie / 2))

    return (
        <div className='Cards-card'>
            <div className='titles'>
                <h3 >
                    {props.titleMovie}
                </h3>
                <h5>
                    {props.dateMovie.split('-')[0]} {estrellas}
                </h5>
            </div>
            <img src={`${baseURL}${props.posterMovie} `}>
            </img>
        </div>
    )
}

export default Cards; 
