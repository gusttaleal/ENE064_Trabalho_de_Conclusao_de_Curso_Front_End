import { errorLog } from '../../utils/errorLog';
import { baseApi } from '../BaseApi/baseApi';

const updateDeviceOnFirestore = (
  device,
  callback = (resolve, reject) => {
    console.log(resolve);
    console.log(reject);
    return { resolve, reject };
  }
) =>
  baseApi
    .patch('device', {
      deviceId: device.deviceId,
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      deviceStatus: device.deviceStatus,
    })
    .then(callback)
    .catch((error) => errorLog('updateDeviceOnFirestore.js', 'updateDeviceOnFirestore()', error));

export { updateDeviceOnFirestore };
