import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from "./pages/LoginPage";

test('Megjelenik a put oldal fő divje', () => {
    render(<Login />);
    expect(screen.getByText("Bejelentkezés"));
});