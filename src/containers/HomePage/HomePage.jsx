import React from 'react';

import { AppButton } from '../../components/AppButton';

import { useAuth } from '../../hooks/useAuth';
import { useUser } from '../../hooks/useUser';

// import { BaseApi } from '../../api/BaseApi';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const { signout } = useAuth();
  const { ruleOut } = useUser();

  const logoutUserHandler = async () => {
    try {
      await signout();
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const deleteUserHandler = async () => {
    try {
      await ruleOut();
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  // const devicesHandler = async () => {
  //   try {
  //     const devices = await BaseApi.get('device');
  //     devices.data.map((device) => console.log(device));
  //   } catch (error) {
  //     console.log(`Error: ${error.message}`);
  //   }
  // };

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
