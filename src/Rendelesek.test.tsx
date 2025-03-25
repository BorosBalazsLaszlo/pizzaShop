import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rendelesek from "./pages/Rendelesek";

test('Megjelenik a rendelés oldal fő divje', () => {
    render(<Rendelesek />);
    const rendelesPage = screen.getByTestId('order-page');
    expect(rendelesPage).toBeInTheDocument();
});