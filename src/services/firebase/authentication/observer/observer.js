import { launchSigninStateObserver } from '../../configuration';

const observer = (callback) => launchSigninStateObserver(callback);

export { observer };
