import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pizzak from './pages/Pizzak';

test('Megjelenik a főoldal divje', () => {
    render(<Pizzak />);
    const mainPage = screen.getByTestId('pizzak-mainpage');
    expect(mainPage).toBeInTheDocument();
});