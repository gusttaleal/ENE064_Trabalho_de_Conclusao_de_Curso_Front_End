import { signout } from '../../configuration';

const logout = async () => await signout(_userLoggedOutSuccessfully, _errorLoggingUser);

const _userLoggedOutSuccessfully = () => console.log('Sign-out successful');

const _errorLoggingUser = (error) => console.error(error);

export { logout };
