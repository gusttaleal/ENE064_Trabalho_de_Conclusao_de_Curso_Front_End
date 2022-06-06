import React from 'react';

import { AppButton } from '../../components/AppButton';

import { useAuth } from '../../hooks/useAuth';
import { useUser } from '../../hooks/useUser';
import { errorLog } from '../../utils/errorLog';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const { signout } = useAuth();
  const { ruleOut } = useUser();

  const logoutUserHandler = async () => {
    try {
      await signout();
    } catch (error) {
      errorLog('HomePage.jsx', 'signout()', error);
    }
  };

  const deleteUserHandler = async () => {
    try {
      await ruleOut();
    } catch (error) {
      errorLog('HomePage.jsx', 'deleteUserHandler()', error);
    }
  };

  return (
    <div className={styles['home']}>
      <div className={styles['button-container']}>
        <AppButton label={'LOGOUT'} callback={logoutUserHandler} />
      </div>
      <div className={styles['button-container']}>
        <AppButton label={'DELETE'} callback={deleteUserHandler} />
      </div>
    </div>
  );
};

export { HomePage };
