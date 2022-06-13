import { errorLog } from '../../utils/errorLog';
import { baseApi } from '../BaseApi/baseApi';

const readDeviceOnFirestore = (device = { deviceId: null }) =>
  baseApi
    .get('device', { params: { deviceId: device.deviceId } })
    .then((resolve, reject) => (resolve ? resolve : reject))
    .catch((error) => errorLog('readDeviceOnFirestore.js', 'readDeviceOnFirestore()', error));

export { readDeviceOnFirestore };
