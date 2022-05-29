import React, { createContext } from 'react';

import { deleteUser } from '../../services/firebase/authentication/deleteUser';

import { useAuth } from '../../hooks/useAuth';

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const { user } = useAuth();

  const ruleOut = async () => await deleteUser(user);

  return <UserContext.Provider value={{ ruleOut }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
