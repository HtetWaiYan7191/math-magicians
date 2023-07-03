import React from 'react';
import './Calculator.css';
import Buttons from './Buttons';

const numbers = ['AC', '+/-', '%', '\u00F7', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '='];
const Calculator = () => (
  <div className="container">
    <div className="output-result">0</div>
    {numbers.map((number) => <Buttons number={number} key={number} />)}
  </div>
);

export default Calculator;
