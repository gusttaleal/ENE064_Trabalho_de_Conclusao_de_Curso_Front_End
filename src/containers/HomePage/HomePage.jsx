import React from 'react';
import { AppButton } from '../../components/AppButton';
import { logOut } from '../../services/firebase/authentication/logout';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className={styles.home}>
      <AppButton label={'Logout'} callBackFunction={handleLogout} />
    </div>
  );
};
