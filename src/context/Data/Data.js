import React, { createContext } from 'react';

import { readDataDeviceFromFirestore } from '../../api/DataApi/readDataDeviceFromFirestore';

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const readData = async (deviceId) => {
    console.log('deviceId');
    console.log(deviceId);
    return await readDataDeviceFromFirestore(deviceId);
  };

  return <DataContext.Provider value={{ readData }}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
