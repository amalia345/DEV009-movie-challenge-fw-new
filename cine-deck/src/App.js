import { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Movies from './Movies';
import Options from './Options';
function App() {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  return ( // JSX nos permite escribir html dentro de js
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <section className="App-section">
        <Options onSetMovies={
          setMovies
        } />
      </section>
      <main className="App-main">
      <Movies titles={movies} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </main>
    </div>
  );
}

export default App;
