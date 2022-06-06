import { errorLog } from '../../../../utils/errorLog';
import { launchSigninStateObserver } from '../../configuration';

const observer = (callback) => launchSigninStateObserver(callback, _errorHandler, _observerHandler);

const _errorHandler = (error) => errorLog('Auth.js', 'useEffect()', error);

const _observerHandler = (completed) => console.log(`The observer was removed: ${completed}`);

export { observer };
