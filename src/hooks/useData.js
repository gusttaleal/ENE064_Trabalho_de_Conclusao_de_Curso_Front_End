import { useContext } from 'react';
import { DataContext } from '../context/Data';

const useData = () => {
  return useContext(DataContext);
};

export { useData };
