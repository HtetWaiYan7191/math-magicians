import React from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';

const Buttons = ({ number }) => {
  if (number === '\u00F7' || number === 'x' || number === '-' || number === '+' || number === '=') {
    return <div className="input-button orange">{number}</div>;
  } if (number === '0') {
    return <div className="input-button zero">{number}</div>;
  }
  return <div className="input-button">{number}</div>;
};

Buttons.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Buttons;
