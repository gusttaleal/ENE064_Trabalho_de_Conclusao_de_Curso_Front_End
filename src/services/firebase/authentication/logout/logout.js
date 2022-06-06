import { errorLog } from '../../../../utils/errorLog';
import { signout } from '../../configuration';

const logout = async () => {
  try {
    await signout();
    console.log('Sign-out successful');
  } catch (error) {
    errorLog('logout.js', 'logout()', error);
  }
};

export { logout };
