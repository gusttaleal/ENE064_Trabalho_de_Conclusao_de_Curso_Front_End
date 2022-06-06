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
      <div className={styles['text-container']}>
        <p className={styles['text-title']}>Aquisição e Gerenciamento de dados via CoAP</p>
      </div>
      <div className={styles['button-container']}>
        <LoginButton callback={loginUserHandler} />
      </div>
      <div className={styles['text-container']}>
        <p className={styles['text-subtitle']}>
          Autenticação via Google - Verifique nas configurações de segurança da sua conta Google a conexão com nosso
          App, busque pelo tópico "Fazer login em outros sites"
        </p>
      </div>
    </div>
  );
};

export { LoginPage };
