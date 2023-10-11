Change Log
## <1.02> - <10-10-23 >

### Sprint learnings
QUé son , para qué sirven componentes? 
 Crear componentes principales => A=Title ,B=Options, C= Movies, D=Card
Crear Satates para pasar información de Base de datos.
Funciones = 1. discoverMoviesByGenre() 2. discoverMoviesByYear() 3. findMovieByName() 4. fetchPopularMovies()
Crear buttons y selects
Organizar CSS Y CARDS
Paginación State
Estudiar map() y filter ()
Concluir historias dse Usuario 1 y 2

### Added

En esta sección especifica las funcionalides que agregaste.
Funciones = 1. discoverMoviesByGenre() Con un select, agrega las opciones de genero a escoger 2. discoverMoviesByYear() Busqueda por año
3. findMovieByName() Busqueda por nombre 
 4. fetchPopularMovies() Retorna las 10 peliculas mas populares del momento 


### Changed

En esta sección detalla los cambios que hiciste a funcionalides ya existentes.
Todas las cree desde 0 

### Fixed

En esta sección describe los _bugs_ solucionados.
Effect(()=>{
    discoverMoviesByGenre();
}, [selectedGenre])

### Removed

En esta sección incluye las funcionalidades eliminadas.
Cree una funcionque retornaba por default 10 peliculas al asar pero la eliminé.