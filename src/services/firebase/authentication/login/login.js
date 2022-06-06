import { signin } from '../../configuration';
import { verifyFirstAccess } from '../../../../utils/verifyFirstAccess';
import { errorLog } from '../../../../utils/errorLog';
import { registerUser } from '../../../../api/UserApi/registerUser';

const login = async () => {
  try {
    const result = await signin();
    const userStatus = await _userLoggedInSuccessfully(result);
    return userStatus;
  } catch (error) {
    errorLog('login.js', 'login()', error);
  }
};

const _userLoggedInSuccessfully = async (result) => {
  try {
    await registerUser(result.user);

    await verifyFirstAccess(result.user);

    console.log('Sign-in successful');

    return result;
  } catch (error) {
    errorLog('login.js', '_userLoggedInSuccessfully()', error);
    return null;
  }
};

export { login };
