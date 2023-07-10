import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalculatorPage from '../components/CalculatorPage';
import { BrowserRouter } from "react-router-dom";

describe('CalculatorPage', () => {
    test('should render the navbar and calculator page correctly', () => {
        render(<BrowserRouter>
            <CalculatorPage/>
        </BrowserRouter>)

        const navBar = screen.getByText('Math Magicians');
        expect(navBar).toBeInTheDocument();
        const calculator = screen.getByRole('main');
        expect(calculator).toBeInTheDocument();
    })
})