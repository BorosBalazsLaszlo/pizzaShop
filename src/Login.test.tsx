import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from "./pages/LoginPage";
import { MemoryRouter } from "react-router-dom";

test('Megjelenik a put oldal fő divje', () => {
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>,
    );
    expect(screen.getByTestId("bejelentkezes"));
});