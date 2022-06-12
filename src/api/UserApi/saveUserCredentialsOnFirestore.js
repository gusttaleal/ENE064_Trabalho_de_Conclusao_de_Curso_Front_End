import { errorLog } from '../../utils/errorLog';
import { baseApi } from '../BaseApi/baseApi';

const saveUserCredentialsOnFirestore = (user) =>
  baseApi
    .post('auth', {
      userId: user.uid,
      email: user.email,
      userCreatedAt: user.metadata.createdAt,
      userLastLoginAt: user.metadata.lastLoginAt,
      deleted: false,
    })
    .then((resolve, reject) => (resolve ? resolve : reject))
    .catch((error) => errorLog('saveUserCredentialsOnFirestore.js', 'saveUserCredentialsOnFirestore()', error));

export { saveUserCredentialsOnFirestore };
