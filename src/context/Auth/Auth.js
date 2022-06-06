import React, { createContext, useEffect, useState } from 'react';

import { login } from '../../services/firebase/authentication/login';
import { logout } from '../../services/firebase/authentication/logout';
import { observer } from '../../services/firebase/authentication/observer';
import { encryptData } from '../../utils/encryptData';
import { decryptData } from '../../utils/decryptData';

import { CustomBackdrop } from '../../components/CustomBackdrop/CustomBackdrop';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [credential, setCredential] = useState(null);

  useEffect(() => {
    const _credential = sessionStorage.getItem('credential');
    if (_credential) {
      setCredential(JSON.parse(decryptData(_credential)));
    } else {
      signout();
    }

    setTimeout(() => setPending(false), '1000');
  }, []);

  const signin = async () => {
    const result = await login();
    console.log(result);
    if (result) {
      const _credential = JSON.stringify(result);
      sessionStorage.setItem('credential', encryptData(_credential));
      setCredential(result);
      observer((user) => setUser(user));
    } else {
      signout();
      alert('Usuário excluido da aplicação');
    }
  };

  const signout = async () => {
    await logout();
    sessionStorage.removeItem('credential');
  };

  if (pending) {
    return <CustomBackdrop isOpen={pending} />;
  } else {
    return (
      <AuthContext.Provider value={{ user, credential, signin, signout, setCredential }}>
        {children}
      </AuthContext.Provider>
    );
  }
};

export { AuthContext, AuthProvider };
