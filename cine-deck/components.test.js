import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cards from './src/components/cards/Cards';
import Menu from './src/components/menu/Menu.jsx';
import App from './src/components/menu/Menu';
import Movies from './src/components/movies/Movies';
import { findMovieByName, discoverMoviesByGenre } from './src/services/api';

jest.mock('./src/services/api', () => ({
    findMovieByName: jest.fn(() => Promise.resolve([]))  // Retorno de mock para evitar errores
}));

describe('Componenete Cards ', () => { //Agrpamops varios test para un componente
    const mockProps = {
        nameMovie: 'Pelicula chida',
        dateMovie: '2022-10-11',
        starMovie: 4,
        posterMovie: '/path_to_image.jpg',
        genresMovie: [75, 34],
        votesMovie: 12500,
        isDetailed: true
    };
    test('Renderiza el Titulo de la Pelicula', () => { //Declaro el test 
        const { getByText } = render(<Cards {...mockProps} />); //Consulta a la biblioteca de test, guardas la consulta del componente del mock falso
        expect(getByText('Pelicula chida')).toBeInTheDocument();//Se espera el título de la pelicula 
    })
    test('Renderiza el año correctamente', () => {
        const { getByText } = render(<Cards {...mockProps} />); 
        expect(getByText('Year: 2022')).toBeInTheDocument();//Se espera el año
    })
    test('Renderiza el total de votos correctamente', () => {
        const { getByText } = render(<Cards {...mockProps} />);
        expect(getByText('Votes: 12500 (⭐⭐)')).toBeInTheDocument();

    })
    test('Aplica la clase "Cards-card detailed" cuando isDetailed es verdadero', () => {
        render(<Cards {...mockProps} isDetailed={true} />); //Renderiza el elemento pero con la variable isDatailed
        const card = screen.getByTestId('card-element');//Usamos los id de jest para seleccional el elemento 
        expect(card).toHaveClass('Cards-card detailed');//Checamos si el elemento tiene la clase cirrecta
    });
    
    test('Aplica la clase "Cards-card" cuando isDetailed es falso o no se proporciona', () => {
        render(<Cards {...mockProps} isDetailed={false} />);
        const card = screen.getByTestId('card-element');
        expect(card).toHaveClass('Cards-card');
        expect(card).not.toHaveClass('detailed');
    });
});

describe('Menu Component', () => {
    test('Muestra el titulo de la pagina en el componente menu ', () => {
        const { getByText } = render(<Menu />);
        const headerElement = getByText(/Cine Deck/i);
        expect(headerElement).toBeInTheDocument();
    });
    test('Buscar Películas, en este caso Star Wars', async () => {
        render(<Menu onSetMovies={() => { }} />);  // Pasa una función vacía para onSetMovies por ahora

        // Cambia el valor del input
        const searchInput = screen.getByPlaceholderText('Write the name of the movie');
        fireEvent.change(searchInput, { target: { value: 'Star Wars' } });

        // Hace clic en el botón de búsqueda
        const searchButton = screen.getByText("SEARCH");
        fireEvent.click(searchButton);

        await waitFor(() => {
            expect(findMovieByName).toHaveBeenCalledWith('Star Wars');
        });
    });
    test('Catch en caso de error la buscar pelicula', async () => {

        findMovieByName.mockRejectedValue(new Error('Error finding movies form the API'))
        const spy = jest.spyOn(console, 'error').mockImplementation(() => { })
        render(<Menu onSetMovies={() => { }} />);  // Pasa una función vacía para onSetMovies por ahora

        const searchInput = screen.getByPlaceholderText('Write the name of the movie');
        fireEvent.change(searchInput, { target: { value: 'Rapido y Furioso' } });
        // Hace clic en el botón de búsqueda
        const searchButton = screen.getByText("SEARCH");
        fireEvent.click(searchButton);
        await waitFor(() => {
            expect(console.error).toHaveBeenCalledWith('Error en findMovieByName:', new Error('Error finding movies form the API'));
        });
    });
});


describe('App Component', () => {
    test('Renders App componenet correctly', () => {
        const { getByText } = render(<App />);
        const headerElement = getByText(/Cine Deck/i);
        expect(headerElement).toBeInTheDocument();
    });

});

describe('Movies Component', () => {

    const starWarsMovies = [
        { nameMovie: 'Star Wars: Episode IV - A New Hope', dateMovie: '1977-05-25', starMovie: 4, posterMovie: 'starwars1.jpg', genresMovie: [878], votesMovie: 12000 },
        { nameMovie: 'Star Wars: Episode V - The Empire Strikes Back', dateMovie: '1980-05-21', starMovie: 5, posterMovie: 'starwars2.jpg', genresMovie: [878], votesMovie: 15000 },
        { nameMovie: 'Star Wars: Episode VI - Return of the Jedi', dateMovie: '1983-05-25', starMovie: 4, posterMovie: 'starwars3.jpg', genresMovie: [878], votesMovie: 13000 },
        { nameMovie: 'Star Wars: Episode I - The Phantom Menace', dateMovie: '1999-05-19', starMovie: 3, posterMovie: 'starwars4.jpg', genresMovie: [878], votesMovie: 11000 },
        { nameMovie: 'Star Wars: Episode II - Attack of the Clones', dateMovie: '2002-05-16', starMovie: 3, posterMovie: 'starwars5.jpg', genresMovie: [878], votesMovie: 11500 },
        { nameMovie: 'Star Wars: Episode III - Revenge of the Sith', dateMovie: '2005-05-19', starMovie: 4, posterMovie: 'starwars6.jpg', genresMovie: [878], votesMovie: 12500 },
        { nameMovie: 'Star Wars: Episode VII - The Force Awakens', dateMovie: '2015-12-18', starMovie: 4, posterMovie: 'starwars7.jpg', genresMovie: [878], votesMovie: 14000 },
    ];
    
    test("Renderiza el número de cards y botones de paginación correctos para 7 peliculas", () => {
        const { getAllByTestId } = render(
            <Movies titles={starWarsMovies} currentPage={1} setCurrentPage={jest.fn()} onSelect={jest.fn()} />
        );
        expect(getAllByTestId("card-element")).toHaveLength(5); 
        expect(getAllByTestId("pagination-button")).toHaveLength(2);
    });
    
/*     test('Renders The correct number of Cards based on titles', () => {
        render(<Movies titles={mockTitles} currentPage={1} setCurrentPage={() => { }} />);
        const movieCards = screen.getAllByTestId('movie-card'); // Asumiendo que cada tarjeta tiene un data-testid="movie-card"
        expect(movieCards.length).toBe(3);
    });

    test('Renders The correct number of pages for 3 movies (1 page)', () => {
        render(<Movies titles={mockTitles} currentPage={1} setCurrentPage={() => { }} />);
        const paginationButtons = screen.getAllByTestId('pagination-button'); // Asumiendo que cada botón de paginación tiene un data-testid="pagination-button"
        expect(paginationButtons.length).toBe(1);
    });

    test('Renders The correct number of pages for 7 movies (1 page)', () => {
        render(<Movies titles={starWarsMovies} currentPage={1} setCurrentPage={() => { }} />);
        const paginationButtons = screen.getAllByTestId('pagination-button');
        expect(paginationButtons.length).toBe(2);
    }); */
});


