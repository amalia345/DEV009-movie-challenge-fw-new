import React from 'react';
import { render, fireEvent, screen , waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cards from './src/components/cards/Cards';
import Menu from './src/components/menu/Menu.jsx';
import App from './src/components/menu/Menu';
import Movies from './src/components/movies/Movies';
import Options from './src/components/options/Options';
import { findMovieByName, discoverMoviesByGenre } from './src/services/api';

jest.mock( './src/services/api', () => ({
    findMovieByName: jest.fn(() => Promise.resolve([]))  // Retorno de mock para evitar errores
}));

describe('Cards component', () => {
    const mockProps = {
        nameMovie: 'Pelicula chida',
        dateMovie: '2022-10-11',
        starMovie: 4,
        posterMovie: '/path_to_image.jpg',
    };
    test('Render Movie Title', () => {
        const { getByText } = render(<Cards {...mockProps} />);
        expect(getByText('Pelicula chida')).toBeInTheDocument();
    })
    test('Render Year and Stars for score', () => {
        const { getByText } = render(<Cards {...mockProps} />);
        expect(getByText('2022 ⭐⭐')).toBeInTheDocument();
    })
});

describe('Menu Component', () => {
    test('Muestra el titulo de la pagina en el componente menu ', () => {
        const { getByText } = render(<Menu />);
        const headerElement = getByText(/Cine Deck/i);
        expect(headerElement).toBeInTheDocument();
    });
    test('Buscar Películas, en este caso Star Wars', async () => {
        render(<Menu onSetMovies={() => {}} />);  // Pasa una función vacía para onSetMovies por ahora
        
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
        const spy = jest.spyOn(console,'error').mockImplementation(()=>{})
        render(<Menu onSetMovies={() => {}} />);  // Pasa una función vacía para onSetMovies por ahora

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

    const mockTitles = [
        {
            title: "Star Wars: Episode X - The Rising Force",
            date: "2027-12-17",
            stars: 4.5,
            poster: "episodeX.jpg"
        },
        {
            title: "Star Wars: Episode XI - Shadows of the Old Republic",
            date: "2029-12-19",
            stars: 4.7,
            poster: "episodeXI.jpg"
        },
        { title: "Star Wars: Episode XII - Final Destiny",date: "2031-12-20", stars: 5,poster: "episodeXII.jpg" }
    ];
    const starWarsMovies = [
        { title: 'Star Wars: Episode IV - A New Hope', date: '1977-05-25', stars: 4, poster: 'starwars1.jpg' },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', date: '1980-05-21', stars: 5, poster: 'starwars2.jpg' },
        { title: 'Star Wars: Episode VI - Return of the Jedi', date: '1983-05-25', stars: 4, poster: 'starwars3.jpg' },
        { title: 'Star Wars: Episode I - The Phantom Menace', date: '1999-05-19', stars: 3, poster: 'starwars4.jpg' },
        { title: 'Star Wars: Episode II - Attack of the Clones', date: '2002-05-16', stars: 3, poster: 'starwars5.jpg' },
        { title: 'Star Wars: Episode III - Revenge of the Sith', date: '2005-05-19', stars: 4, poster: 'starwars6.jpg' },
        { title: 'Star Wars: Episode VII - The Force Awakens', date: '2015-12-18', stars: 4, poster: 'starwars7.jpg' },
    ];

    test('Renders The correct number of Cards based on titles', () => {
        const { container } = render(<Movies titles={mockTitles} currentPage={1} setCurrentPage={() => { }} />)
        const componentText = container.textContent
        const movieTitlesCount = (componentText.match(/Star Wars/gi))
        expect(movieTitlesCount.length).toBe(3);
    });
    test('Renders The correct number of pages for 3 movies (1 page))', () => {
        const { getAllByRole } = render(<Movies titles={mockTitles} currentPage={1} setCurrentPage={() => { }} />)
        const paginationButtons = getAllByRole('button')
        const pageCount = paginationButtons.length
        expect(pageCount).toBe(1)
    });
    test('Renders The correct number of pages for 7 movies (1 page)', () => {
        const { getAllByRole } = render(<Movies titles={starWarsMovies} currentPage={1} setCurrentPage={() => { }} />)
        const paginationButtons = getAllByRole('button')
        const pageCount = paginationButtons.length
        expect(pageCount).toBe(2)
    });
});


