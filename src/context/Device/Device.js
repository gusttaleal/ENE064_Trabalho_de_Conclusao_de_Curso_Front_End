import React, { createContext } from 'react';
import { createDeviceOnFirestore } from '../../api/DeviceApi/createDeviceOnFirestore';
import { readDeviceOnFirestore } from '../../api/DeviceApi/readDeviceOnFirestore';

const DeviceContext = createContext({});

const DeviceProvider = ({ children }) => {
  const createDevice = async (device) => {
    await createDeviceOnFirestore(device);
  };

  const readDevices = async (device) => {
    await readDeviceOnFirestore(device);
  };

  return <DeviceContext.Provider value={{ createDevice, readDevices }}>{children}</DeviceContext.Provider>;
};

export { DeviceContext, DeviceProvider };
