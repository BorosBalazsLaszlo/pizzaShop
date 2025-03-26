import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SinglePizza from "./pages/SinglePizza";
import { MemoryRouter } from "react-router-dom";

test('Megjelenik az egy termék oldal fő divje', () => {
    render(
        <MemoryRouter>
            <SinglePizza />
        </MemoryRouter>,
    );
    const putPage = screen.getByTestId('put-page');
    expect(putPage).toBeInTheDocument();
});