import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostPage from "./pages/PostPage";
import { MemoryRouter } from "react-router-dom";

test('Megjelenik a post oldal fő divje', () => {
    render(
        <MemoryRouter>
            <PostPage />
        </MemoryRouter>,
    );
    expect(screen.getByText("Adj hozzá pizzát!"));
});