import React from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';

const Buttons = ({ number }) => {
  if (number === '\u00F7' || number === 'x' || number === '-' || number === '+' || number === '=') {
    return <button type="button" className="input-button orange">{number}</button>;
  } if (number === '0') {
    return <button type="button" className="input-button zero">{number}</button>;
  }
  return <button type="button" className="input-button">{number}</button>;
};

Buttons.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Buttons;
