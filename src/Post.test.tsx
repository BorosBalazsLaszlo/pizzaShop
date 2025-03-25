import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostPage from "./pages/PostPage";

test('Megjelenik a post oldal fő divje', () => {
    render(<PostPage />);
    expect(screen.getByText("Adj hozzá pizzát!"));
});