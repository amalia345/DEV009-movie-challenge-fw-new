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

  return (
    <div className="App" >
      <header className="App-header" >
        <Menu onSetMovies={setSelectedMovies} />
      </header>
      <section className="App-section" >
        <Options onSetMovies={setSelectedMovies} />
      </section>
      <main className="App-main" >
        <Movies titles={selectedMovies} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </main>
    </div>
  );
}

export default App;