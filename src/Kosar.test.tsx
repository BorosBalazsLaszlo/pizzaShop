import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Kosar from "./pages/Kosar";

test('Megjelenik a kosár oldal fő divje', () => {
    render(<Kosar />);
    expect(screen.getByText("Kosár"));
});