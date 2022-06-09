import { launchEmailVerification } from '../configuration';

const sendEmailVerification = (user) => {
  launchEmailVerification(user, _emailVerificationWasSent);
};

const _emailVerificationWasSent = () => alert('The e-mail verification was sent. Check your inbox and span.');

export { sendEmailVerification };
