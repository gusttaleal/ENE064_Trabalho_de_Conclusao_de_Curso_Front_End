import React, { useState } from 'react';

import { AppButton } from '../../components/AppButton';
import { CustomModal } from '../../components/CustomModal/CustomModal';

import { useAuth } from '../../hooks/useAuth';
import { useDevice } from '../../hooks/useDevice';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const { signout } = useAuth();
  const { createDevice, readDevices } = useDevice();

  const [modal, setModal] = useState(false);

  const logoutUserHandler = async () => {
    await signout();
  };

  const createDeviceHandler = async () => {
    setModal(!modal);
  };

  const readDeviceHandler = async () => {
    await createDevice(modal);
    await readDevices();
  };

  return (
    <div className={styles['home']}>
      <div className={styles['button-container']}>
        <AppButton label={'LOGOUT'} callback={logoutUserHandler} />
      </div>
      <div className={styles['button-container']}>
        <AppButton label={'CREATE DEVICE'} callback={createDeviceHandler} />
      </div>
      <div className={styles['button-container']}>
        <AppButton label={'SHOW DEVICES'} callback={readDeviceHandler} />
      </div>
      <div>
        <CustomModal isOpen={modal} callback={() => setModal(!modal)} submit={() => setModal(!modal)} />
      </div>
    </div>
  );
};

export { HomePage };
