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
    if (sessionStorage.getItem('credential')) {
      setCredential(JSON.parse(decryptData(sessionStorage.getItem('credential'))));
    } else {
      signout();
    }

    observer((user) => setUser(user));
    setTimeout(() => setPending(false), '500');
  }, []);

  const signin = async () => {
    const result = await login();
    sessionStorage.setItem('credential', encryptData(JSON.stringify(result)));
    setCredential(result);
  };

  const signout = async () => {
    await logout();
    sessionStorage.removeItem('credential');
  };

  if (pending) {
    return <CustomBackdrop isOpen={pending} />;
  } else {
    return (
      <AuthContext.Provider value={{ user, credential, setPending, signin, signout }}>{children}</AuthContext.Provider>
    );
  }
};

export { AuthContext, AuthProvider };
