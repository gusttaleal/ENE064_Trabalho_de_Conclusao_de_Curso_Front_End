import { signin } from '../../configuration';
import { verifyFirstAccess } from '../../../../utils/verifyFirstAccess';
import { saveUserCredentialsOnFirestore } from '../../../../api/UserApi/saveUserCredentialsOnFirestore';
import { sendEmailVerification } from '../../email';

const login = async () => await signin(_userLoggedInSuccessfully);

const _userLoggedInSuccessfully = async (result) => {
  if (verifyFirstAccess(result.user)) {
    await saveUserCredentialsOnFirestore(result.user);
    sendEmailVerification(result.user);
  }
  return result;
};

export { login };
