import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rendelesek from "./pages/Rendelesek";
import { MemoryRouter } from "react-router-dom";

test('Megjelenik a rendelés oldal fő divje', () => {
    render(
        <MemoryRouter>
            <Rendelesek />
        </MemoryRouter>,
    );
    const rendelesPage = screen.getByTestId('order-page');
    expect(rendelesPage).toBeInTheDocument();
});