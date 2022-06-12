import { errorLog } from '../../utils/errorLog';
import { baseApi } from '../BaseApi/baseApi';

const deleteDeviceOnFirestore = (device) =>
  baseApi
    .delete('device', { data: { deviceId: device.deviceId } })
    .then((resolve, reject) => (resolve ? resolve : reject))
    .catch((error) => errorLog('deleteDeviceOnFirestore.js', 'deleteDeviceOnFirestore()', error));

export { deleteDeviceOnFirestore };
