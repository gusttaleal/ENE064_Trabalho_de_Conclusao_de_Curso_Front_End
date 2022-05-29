import React from 'react';
import PropTypes from 'prop-types';

import styles from './LoginButton.module.scss';

import google from '../../assets/images/google-icon.png';

const LoginButton = ({ callback }) => {
  return (
    <button className={styles['button-login']} onClick={callback}>
      <img src={google} className={styles['logo-google']} alt="Logo Google" />
      <label className={styles['label-login']}>Login com o Google</label>
    </button>
  );
};

LoginButton.propTypes = {
  callback: PropTypes.func.isRequired,
};

export { LoginButton };
