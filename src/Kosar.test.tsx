import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Kosar from "./pages/Kosar";
import { MemoryRouter } from "react-router-dom";

test('Megjelenik a kosár oldal fő divje', () => {
    render(
        <MemoryRouter>
            <Kosar />
        </MemoryRouter>,
    );
    expect(screen.getByText("Kosár"));
});