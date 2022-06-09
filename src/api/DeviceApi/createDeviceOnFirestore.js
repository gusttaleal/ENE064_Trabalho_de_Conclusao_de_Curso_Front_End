import { errorLog } from '../../utils/errorLog';
import { baseApi } from '../BaseApi/baseApi';

const createDeviceOnFirestore = (
  device,
  callback = (resolve, reject) => {
    console.log(resolve);
    console.log(reject);
    return { resolve, reject };
  }
) =>
  baseApi
    .post('device', {
      userId: device.userId,
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      deviceStatus: device.deviceStatus,
    })
    .then(callback)
    .catch((error) => errorLog('createDeviceOnFirestore.js', 'createDeviceOnFirestore()', error));

export { createDeviceOnFirestore };
