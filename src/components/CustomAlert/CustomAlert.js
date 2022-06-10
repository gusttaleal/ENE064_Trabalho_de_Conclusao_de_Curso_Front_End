import React from 'react';
import PropTypes from 'prop-types';

import Alert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';

import styles from './CustomAlert.module.scss';

const SuccessAlert = ({ text, isOpen, callback }) => {
  //   setTimeout(callback, 1000);
  return (
    <Modal className={styles['modal']} open={isOpen} onClose={callback}>
      <Alert severity="success">{text}</Alert>
    </Modal>
  );
};
const WarningAlert = ({ text }) => <Alert severity="warning">{text}</Alert>;
const ErrorAlert = ({ text }) => <Alert severity="error">{text}</Alert>;
const InfoAlert = ({ text }) => <Alert severity="info">{text}</Alert>;

SuccessAlert.propTypes = {
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export { SuccessAlert, WarningAlert, ErrorAlert, InfoAlert };
