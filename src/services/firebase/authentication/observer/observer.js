import { launchSigninStateObserver } from '../../configuration';

const observer = (callback, errorHandler, observerHandler) =>
  launchSigninStateObserver(callback, errorHandler, observerHandler);

export { observer };
