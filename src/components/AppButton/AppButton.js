import React from 'react';
import PropTypes from 'prop-types';

export const AppButton = ({ label, callBackFunction = () => {} }) => {
  return <button onClick={callBackFunction}>{label}</button>;
};

AppButton.propTypes = {
  label: PropTypes.string.isRequired,
};
