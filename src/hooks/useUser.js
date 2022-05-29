import { useContext } from 'react';
import { UserContext } from '../context/User';

const useUser = () => {
  return useContext(UserContext);
};

export { useUser };
