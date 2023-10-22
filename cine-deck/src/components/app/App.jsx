import { useState, React } from 'react';
import './App.css';
import Menu from '../menu/Menu';
import Movies from '../movies/Movies';
import Options from '../options/Options';
//App está actuando como el controlador central de los datos, y está pasando funciones
// y estados a sus componentes hijos para que puedan interactuar entre ellos.
function App() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [detailedMovie, setDetailedMovie] = useState(null);
  // funcion que abre el detailed pasando el setter de la pelicla escogido detailedMovie setDetailedMovie
  function handleMovieSelect(movie) {
    setDetailedMovie(movie)
  }
  function closeDetailedView() {
    setDetailedMovie(null)
  }
  // funcion que cierra el detaield  handleMovieSelect
  // funcion que cierra el detaield  closeDetailedView
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