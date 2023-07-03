import React from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';

const Buttons = ({ number }) => (
    number === '0' ? <div className='input-button zero'>{number}</div> :<div className='input-button'>{number}</div>
);

Buttons.propTypes = {
  number: PropTypes.isRequired,
};

export default Buttons;
