import React from 'react';
import styles from './LoginButton.module.scss';
import google from '../../assets/images/google-icon.png';

export const LoginButton = ({ login }) => {
  return (
    <button className={styles['button-login']} onClick={login}>
      <img src={google} className={styles['logo-google']} alt="Logo Google" />
      <label className={styles['label-login']}>Login com o Google</label>
    </button>
  );
};
