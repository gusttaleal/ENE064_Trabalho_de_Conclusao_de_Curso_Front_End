import { errorLog } from '../../utils/errorLog';
import { baseApi } from '../BaseApi/baseApi';

const saveUserCredentialsOnFirestore = (
  user,
  callback = (resolve, reject) => {
    console.log(resolve);
    console.log(reject);
    return { resolve, reject };
  }
) =>
  baseApi
    .post('auth', {
      userId: user.uid,
      email: user.email,
      userCreatedAt: user.metadata.createdAt,
      userLastLoginAt: user.metadata.lastLoginAt,
      deleted: false,
    })
    .then(callback)
    .catch((error) => errorLog('saveUserCredentialsOnFirestore.js', 'saveUserCredentialsOnFirestore()', error));

export { saveUserCredentialsOnFirestore };
