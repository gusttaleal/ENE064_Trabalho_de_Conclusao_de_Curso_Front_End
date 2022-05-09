import React from 'react';

import { LoginButton } from '../../components/LoginButton';
import { logIn } from '../../services/firebase/authentication/login';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  const handleLogin = async () => {
    await logIn();
  };

  return (
    <div className={styles.login}>
      <div className={styles['login-container']}>
        <div className={styles['button-container']}>
          <LoginButton login={handleLogin} />
        </div>
      </div>
    </div>
  );
};
