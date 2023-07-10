import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom extension

import Navbar from "../components/Navbar";
import { BrowserRouter} from "react-router-dom";

describe('Navbar', () => {
    test('should render a component', () => {
        render(
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        );
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Calculator')).toBeInTheDocument();
        expect(screen.getByText('Quote')).toBeInTheDocument();

    })
})