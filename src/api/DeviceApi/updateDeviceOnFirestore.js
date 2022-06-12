import { errorLog } from '../../utils/errorLog';
import { baseApi } from '../BaseApi/baseApi';

const updateDeviceOnFirestore = (device) =>
  baseApi
    .patch('device', {
      deviceId: device.deviceId,
      deviceName: device.deviceName,
      deviceType: device.deviceType,
      deviceStatus: device.deviceStatus,
    })
    .then((resolve, reject) => (resolve ? resolve : reject))
    .catch((error) => errorLog('updateDeviceOnFirestore.js', 'updateDeviceOnFirestore()', error));

export { updateDeviceOnFirestore };
