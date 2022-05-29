import React, { createContext, useEffect, useState } from 'react';

import { login } from '../../services/firebase/authentication/login';
import { logout } from '../../services/firebase/authentication/logout';
import { observer } from '../../services/firebase/authentication/observer';

import { CustomBackdrop } from '../../components/CustomBackdrop/CustomBackdrop';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [pending, setPending] = useState(true);

  useEffect(() => {
    observer(
      (user) => setUser(user),
      (error) => console.log(`Error: ${error.message}`),
      (completed) => console.log(`The observer was removed: ${completed}`)
    );
    setTimeout(() => setPending(false), '1000');
  }, []);

  const signin = async () => await login();

  const signout = async () => await logout();

  if (pending) {
    return <CustomBackdrop isOpen={pending} />;
  } else {
    return <AuthContext.Provider value={{ user, signin, signout }}>{children}</AuthContext.Provider>;
  }
};

export { AuthContext, AuthProvider };
