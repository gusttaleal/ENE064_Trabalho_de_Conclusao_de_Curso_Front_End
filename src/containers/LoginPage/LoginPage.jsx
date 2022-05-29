import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LoginButton } from '../../components/LoginButton';

import { useAuth } from '../../hooks/useAuth';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const { user, signin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const loginUserHandler = async () => {
    if (user) {
      navigate(from, { replace: true });
    } else {
      await signin();
      navigate(from, { replace: true });
    }
  };

  return (
    <div className={styles['login']}>
      <div className={styles['button-container']}>
        <LoginButton callback={loginUserHandler} />
      </div>
    </div>
  );
};

export { LoginPage };
