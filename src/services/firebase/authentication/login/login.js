import { returnsTimeWithoutSeconds } from '../../../../utils/returnsTimeWithoutSeconds';
import { signin, launchEmailVerification } from '../../configuration';

const login = async () => await signin(_userLoggedInSuccessfully, _errorLoggingUser);

const _userLoggedInSuccessfully = (result) => {
  console.log('Sign-in successful');
  _isFirstAccess(result.user);
};

const _isFirstAccess = (user) => {
  const unixTimeStamp = user.metadata.createdAt;

  const createdAt = returnsTimeWithoutSeconds(unixTimeStamp);
  const dateNow = returnsTimeWithoutSeconds();

  if (createdAt === dateNow) {
    console.log('It is the first access.');
    _sendEmailVerification(user);
  }
};

const _sendEmailVerification = async (user) => {
  await launchEmailVerification(user, _emailVerificationWasSent, _errorSendingEmailVerification);
};

const _emailVerificationWasSent = () => alert('The e-mail verification was sent. Check your inbox and span.');

const _errorSendingEmailVerification = (error) => console.error(error);

const _errorLoggingUser = (error) => console.error(error);

export { login };
