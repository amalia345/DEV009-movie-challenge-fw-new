import { useState, React } from 'react'; //Funciones que necesitamos para que funcione 
import './App.css';
import Menu from '../menu/Menu';
import Movies from '../movies/Movies';
import Options from '../options/Options';
//App está actuando como el controlador central de los datos, y está pasando funciones
// y estados a sus componentes hijos para que puedan interactuar entre ellos.
function App() {
  const [selectedMovies, setSelectedMovies] = useState([]); //En este estado guarno mis peliculas
  const [currentPage, setCurrentPage] = useState(1)//En este estado guardo la pagina actual de la paginación 
  const [detailedMovie, setDetailedMovie] = useState(null);//Es el estado que guarda qué pelicula vamos a mostrar a detalle 
  // funcion que abre el detailed pasando el setter de la pelicla escogido detailedMovie setDetailedMovie
  function handleMovieSelect(movie) { //Función para seleccionar un pelicula y mostrar detalles
    setDetailedMovie(movie)
  }
  function closeDetailedView() { //Funcion para cerrar la pelicula detallada 
    setDetailedMovie(null)
  }
  return (
    <div className="App" >
      <header className="App-header" >
        <Menu onSetMovies={setSelectedMovies} /> 
      </header>
      <section className="App-section" >
        <Options onSetMovies={setSelectedMovies} />
      </section>
      <main className="App-main" >
        <Movies
        titles={selectedMovies} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onSelect = {handleMovieSelect}
        onClose = {closeDetailedView}
        detailedMovie={detailedMovie}
        />
      </main>
    </div>
  );
}

export default App;