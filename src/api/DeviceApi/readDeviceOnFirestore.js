import { errorLog } from '../../utils/errorLog';
import { baseApi } from '../BaseApi/baseApi';

const readDeviceOnFirestore = (
  device = { deviceId: null },
  callback = (resolve, reject) => {
    console.log(resolve);
    console.log(reject);
    return { resolve, reject };
  }
) =>
  baseApi
    .get('device', {
      deviceId: device.deviceId,
    })
    .then(callback)
    .catch((error) => errorLog('readDeviceOnFirestore.js', 'readDeviceOnFirestore()', error));

export { readDeviceOnFirestore };
