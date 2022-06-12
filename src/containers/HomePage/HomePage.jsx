import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppButton } from '../../components/AppButton';
import { MenuModal } from '../../components/CustomModal';
import { CustomText, CustomTitle } from '../../components/CustomText';

import { useAuth } from '../../hooks/useAuth';
import { useDevice } from '../../hooks/useDevice';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const navigate = useNavigate();

  const { signout } = useAuth();
  const { createDevice } = useDevice();

  const [modal, setModal] = useState(false);

  const logoutUserHandler = async () => {
    await signout();
  };

  const errorUserHandler = async () => navigate('/error', { replace: true });

  const routeHandler = () => navigate('/devices', { replace: true });

  return (
    <div className={styles['home']}>
      <CustomTitle>MENU</CustomTitle>
      <CustomText>
        Nesta sessão é possível registrar um dispositivo criando ele na aplicação, visualizar os dispositivos ja
        registrdos e sair da aplicação
      </CustomText>
      <div className={styles['button-container']}>
        <AppButton label={'LOGOUT'} callback={logoutUserHandler} />
      </div>
      <div className={styles['button-container']}>
        <AppButton label={'ERROR'} callback={errorUserHandler} />
      </div>
      <div className={styles['button-container']}>
        <AppButton label={'CRIAR DISPOSITIVO'} callback={() => setModal(!modal)} />
      </div>
      <div>
        <MenuModal
          isOpen={modal}
          closeModal={() => setModal(!modal)}
          submit={(deviceName, deviceType, deviceStatus) => createDevice(deviceName, deviceType, deviceStatus)}
        />
      </div>
      <div className={styles['button-container']}>
        <AppButton label={'VER DISPOSITIVOS'} callback={routeHandler} />
      </div>
    </div>
  );
};

export { HomePage };
