import React from 'react';
import PropTypes from 'prop-types';

import Alert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';

import styles from './CustomAlert.module.scss';

const SuccessAlert = ({ text, isOpen, callback }) => (
  <Modal className={styles['modal']} open={isOpen} onClose={callback}>
    <Alert key="success" severity="success">
      {text}
    </Alert>
  </Modal>
);

const WarningAlert = ({ text, isOpen, callback }) => (
  <Modal className={styles['modal']} open={isOpen} onClose={callback}>
    <Alert key="warning" severity="warning">
      {text}
    </Alert>
  </Modal>
);

const ErrorAlert = ({ text, isOpen, callback }) => (
  <Modal className={styles['modal']} open={isOpen} onClose={callback}>
    <Alert key="error" severity="error">
      {text}
    </Alert>
  </Modal>
);

const InfoAlert = ({ text, isOpen, callback }) => (
  <Modal className={styles['modal']} open={isOpen} onClose={callback}>
    <Alert key="info" severity="info">
      {text}
    </Alert>
  </Modal>
);

SuccessAlert.propTypes = {
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

WarningAlert.propTypes = {
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

ErrorAlert.propTypes = {
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

InfoAlert.propTypes = {
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export { SuccessAlert, WarningAlert, ErrorAlert, InfoAlert };
