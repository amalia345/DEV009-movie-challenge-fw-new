import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cards from './src/Cards.jsx';
import Menu from './src/Menu.jsx';
import App from './src/App.jsx';
import Movies from './src/Movies.jsx';
import Options from './src/Options.jsx';

describe('Cards component', () => {
    const mockProps = {
        titleMovie: 'Test Movie',
        dateMovie: '2022-10-11',
        starMovie: 4,
        posterMovie: '/path_to_image.jpg',
    };
    test('Render Movie Title', () => {
        const { getByText } = render(<Cards {...mockProps} />);
        expect(getByText('Test Movie')).toBeInTheDocument();
    })
    test('Render Year and Stars for score', () => {
        const { getByText } = render(<Cards {...mockProps} />);
        expect(getByText('2022 ⭐⭐')).toBeInTheDocument();
    })
});

describe('Menu Component', () => {
    test('Renders Cine Deck in Menu', () => {
        const { getByText } = render(<Menu />);
        const headerElement = getByText(/Cine Deck/i);
        expect(headerElement).toBeInTheDocument();
    });
});


describe('App Component', () => {
    test('Renders App componenet correctly', () => {
        const { getByText } = render(<App />);
        const headerElement = getByText(/Cine Deck/i);
        expect(headerElement).toBeInTheDocument();
    });
    test('Renders Options buttons Correctly', () => {
        const { getByText } = render(<Options />);
        const headerElement = getByText(/SEARCH/i);
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
        {
            title: "Star Wars: Episode XII - Final Destiny",
            date: "2031-12-20",
            stars: 5,
            poster: "episodeXII.jpg"
        }
    ];
    const mockCurrentPage = 1;

    test('Renders The correct number of Cards based on titles', () => {
        const { getAllByText } = render(<Movies titles={mockTitles} currentPage={mockCurrentPage}  />);
        const movieTitles = getAllByText(/Star Wars:¨Episode/i);
        expect(movieTitles.length).toBe(3);
    });

});


