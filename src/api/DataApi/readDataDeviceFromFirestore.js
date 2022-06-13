import { errorLog } from '../../utils/errorLog';
import { baseApi } from '../BaseApi/baseApi';

const readDataDeviceFromFirestore = (deviceId) =>
  baseApi
    .get(`data?deviceId=${deviceId}`)
    .then((resolve, reject) => (resolve ? resolve : reject))
    .catch((error) => errorLog('readDataDeviceFromFirestore.js', 'readDataDeviceFromFirestore()', error));

export { readDataDeviceFromFirestore };
