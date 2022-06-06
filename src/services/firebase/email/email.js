import { errorLog } from '../../../utils/errorLog';
import { launchEmailVerification } from '../configuration';

const sendEmailVerification = async (user) => {
  await launchEmailVerification(user, _emailVerificationWasSent, _errorSendingEmailVerification);
};

const _emailVerificationWasSent = () => alert('The e-mail verification was sent. Check your inbox and span.');

const _errorSendingEmailVerification = (error) => errorLog('email.js', 'sendEmailVerification()', error);

export { sendEmailVerification };
