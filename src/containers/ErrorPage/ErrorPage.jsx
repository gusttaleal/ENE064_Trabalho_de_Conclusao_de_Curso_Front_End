import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppButton } from '../../components/AppButton/AppButton';

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const routeHandler = async () => {
    navigate(from, { replace: true });
  };

  return (
    <div className={styles['error']}>
      <div className={styles['text-container']}>
        <p className={styles['text-title']}>Ops!</p>
        <p className={styles['text-title']}>Algo deu errado...</p>
        <p className={styles['text-subtitle']}>
          No momento não conseguimos carregar o conteúdo. Tente novamente mais tarde.
        </p>
      </div>
      <div className={styles['button-container']}>
        <AppButton label="HOME" callback={routeHandler} />
      </div>
    </div>
  );
};

export { ErrorPage };
