import React from 'react';
import Navbar from './Navbar';
import Calculator from './Calculator';

const CalculatorPage = () => (
  <div>
    <Navbar />
    <main>
      <h2>Lets do some maths</h2>
      <Calculator />
    </main>
  </div>
);

export default CalculatorPage;
