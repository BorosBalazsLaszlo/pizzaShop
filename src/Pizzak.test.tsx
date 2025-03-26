import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pizzak from './pages/Pizzak';
import { MemoryRouter } from 'react-router-dom';

test('Megjelenik a főoldal divje', () => {
    render(
        <MemoryRouter>
            <Pizzak />
        </MemoryRouter>,
    );
    const mainPage = screen.getByTestId('pizzak-mainpage');
    expect(mainPage).toBeInTheDocument();
});

test('Headline stílusa', () => {
    render(
        <MemoryRouter>
            <Pizzak />
        </MemoryRouter>,
    );
    const headline = screen.getByTestId('headline');
    expect(headline).toHaveClass('headline');
});
