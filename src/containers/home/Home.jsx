import React from 'react';
import login from '../../authentication/login';
import LoginButton from '../../components/LoginButton';
import styles from './Home.module.scss';

export const Home = () => {
  const handleLogin = async () => {
    await login();
  };

  return (
    <div className={styles.home}>
      <LoginButton login={handleLogin} />
    </div>
  );
};
