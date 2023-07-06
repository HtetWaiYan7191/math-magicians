import React from 'react';
import Navbar from './Navbar';
import Calculator from './Calculator';

const CalculatorPage = () => (
  <div>
    <Navbar />
    <main>
      <h1>Lets do some maths</h1>
      <Calculator />
    </main>
  </div>
);

export default CalculatorPage;
