import React, { createContext } from 'react';

import { readDataDeviceFromFirestore } from '../../api/DataApi/readDataDeviceFromFirestore';
import { formatDataToShowOnTheChart } from '../../utils/formatDataToShowOnTheChart';

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const readData = async (deviceId, size) => {
    const result = await readDataDeviceFromFirestore(deviceId);
    const data = formatDataToShowOnTheChart(result.data, size);
    return data;
  };

  return <DataContext.Provider value={{ readData }}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
