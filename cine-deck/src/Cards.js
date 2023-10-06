import './Cards.css'

function Cards(props) {
    let estrellas= '⭐'.repeat(props.stars)
    return(// JSX nos permite escribir html dentro de js
        <div className='Cards-card'>
            {props.titleMovie}, {props.dateMovie.split('-')[0]} {estrellas}
        </div>
    )
}

export default Cards; 
