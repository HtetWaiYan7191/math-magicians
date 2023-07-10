import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuotePage from './components/QuotePage';
import Home from './components/Home';
import CalculatorPage from './components/CalculatorPage';

const App = () => (

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/calculator" element={<CalculatorPage />} />
    <Route path="/quote" element={<QuotePage />} />
  </Routes>

);

export default App;
