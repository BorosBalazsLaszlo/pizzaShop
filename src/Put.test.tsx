import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PutPage from "./pages/PutPage";

test('Megjelenik a put oldal fő divje', () => {
    render(<PutPage />);
    expect(screen.getByText("Változtasd meg!"));
});