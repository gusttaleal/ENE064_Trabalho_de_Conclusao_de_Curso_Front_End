import { errorLog } from '../../utils/errorLog';
import { baseApi } from '../BaseApi/baseApi';

const userDeleted = (user) => {
  baseApi
    .patch('auth', { userId: user.uid, email: user.email, userCreatedAt: user.metadata.createdAt })
    .then((any) => console.log(any))
    .catch((error) => errorLog('deleteUser.js', 'deleteUser()', error));
};

export { userDeleted };
