// src/components/ActionButton.js
import React from 'react';
import PropTypes from 'prop-types';
// import './ActionButton.css'; // You may style it as needed

const ActionButton = ({ label, onClick }) => {
  return (
    <button className="action-button" onClick={onClick}>
      {label}
    </button>
  );
};

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ActionButton;
