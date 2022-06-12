import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppButton } from '../../components/AppButton/AppButton';
import { CustomSubTitle, CustomTitle, CustomText } from '../../components/CustomText/CustomText';

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  const routeHandler = () => navigate('/', { replace: true });

  return (
    <div className={styles['error']}>
      <div className={styles['text-container']}>
        <p className={styles['text-title']}></p>
        <CustomTitle>Ops!</CustomTitle>
        <CustomSubTitle>Algo deu errado...</CustomSubTitle>
        <CustomText>No momento não conseguimos carregar o conteúdo. Tente novamente mais tarde.</CustomText>
      </div>
      <div className={styles['button-container']}>
        <AppButton label="HOME" callback={routeHandler} />
      </div>
    </div>
  );
};

export { ErrorPage };
