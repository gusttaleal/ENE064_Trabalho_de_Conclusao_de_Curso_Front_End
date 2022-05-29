import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './CustomBackdrop.module.scss';

const CustomBackdrop = ({ isOpen }) => {
  return (
    <div>
      <Backdrop className={styles['backdrop']} open={isOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

CustomBackdrop.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export { CustomBackdrop };
