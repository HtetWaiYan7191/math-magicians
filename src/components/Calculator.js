import React, { useState } from 'react';
import './Calculator.css';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

const numbers = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
function Calculator() {
  const [result, setResult] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = result;

  const handleInput = (e) => {
    const value = e.target.textContent;
    setResult(calculate(result, value));
  };

  return (
    <div className="container">
      <div className="output-result">{next || total || operation || 0 }</div>
      {numbers.map((number) => <Buttons number={number} key={number} handleInput={handleInput} />)}
    </div>
  );
}

export default Calculator;
