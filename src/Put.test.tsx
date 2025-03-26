import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PutPage from "./pages/PutPage";
import { MemoryRouter } from "react-router-dom";

test('Megjelenik a put oldal fő divje', () => {
    render(
        <MemoryRouter>
            <PutPage />
        </MemoryRouter>,
    );
    expect(screen.getByText("Változtasd meg!"));
});