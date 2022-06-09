import { useContext } from 'react';
import { DeviceContext } from '../context/Device';

const useDevice = () => {
  return useContext(DeviceContext);
};

export { useDevice };
