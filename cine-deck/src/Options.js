
function Options({
    onSetMovies
}) {
    function findMovie() {
        onSetMovies([''])
    }
    function showMovie() {
        onSetMovies(['Vertigo', 'Batman','Pokemon','Star Wars','Chihiro'])
    }

    let id;
    return (
        <div>
            <button onClick={showMovie}>Mostrar todas las peliculas</button>

            <input
                type='text'
                value={id}
            //onChange={e => setId(e.target.value)}
            />
            <button onClick={findMovie}>Buscar por id</button>


        </div>
    )
}

export default Options

