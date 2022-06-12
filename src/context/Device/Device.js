import React, { createContext } from 'react';

import { createDeviceOnFirestore } from '../../api/DeviceApi/createDeviceOnFirestore';
import { readDeviceOnFirestore } from '../../api/DeviceApi/readDeviceOnFirestore';
import { updateDeviceOnFirestore } from '../../api/DeviceApi/updateDeviceOnFirestore';
import { useAuth } from '../../hooks/useAuth';
const DeviceContext = createContext({});

const DeviceProvider = ({ children }) => {
  const { user, setPending } = useAuth();

  const createDevice = async (deviceName, deviceType, deviceStatus) => {
    setPending(true);
    await createDeviceOnFirestore({
      userId: user.uid,
      deviceName: deviceName,
      deviceType: deviceType,
      deviceStatus: deviceStatus,
    });
    setPending(false);
  };

  const readDevices = async () => (await readDeviceOnFirestore()).resolve.data;

  const updateDevice = async (deviceId, deviceName, deviceType, deviceStatus) =>
    await updateDeviceOnFirestore({
      deviceId: deviceId,
      deviceName: deviceName,
      deviceType: deviceType,
      deviceStatus: deviceStatus,
    });

  return (
    <DeviceContext.Provider value={{ createDevice, readDevices, updateDevice }}>{children}</DeviceContext.Provider>
  );
};

export { DeviceContext, DeviceProvider };
