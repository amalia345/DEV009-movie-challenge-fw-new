import Cards from "./Cards"
function Movies(props) {

    return (// JSX nos permite escribir html dentro de js
        <div>
            <h1>Peliculas:</h1>
            <Cards />
            <Cards titleMovie={props.titles[0]} dateMovie='2000' stars={4} />
            <Cards titleMovie={props.titles[1]} dateMovie='1960' stars={5} />
        </div>
    )
}

export default Movies