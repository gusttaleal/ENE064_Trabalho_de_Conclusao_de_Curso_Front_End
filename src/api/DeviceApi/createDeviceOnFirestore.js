import { errorLog } from '../../utils/errorLog';
import { baseApi } from '../BaseApi/baseApi';

const createDeviceOnFirestore = (device) =>
  baseApi
    .post('device', {
      userId: device.userId,
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      deviceStatus: device.deviceStatus,
    })
    .then((resolve, reject) => (resolve ? resolve : reject))
    .catch((error) => errorLog('createDeviceOnFirestore.js', 'createDeviceOnFirestore()', error));

export { createDeviceOnFirestore };
