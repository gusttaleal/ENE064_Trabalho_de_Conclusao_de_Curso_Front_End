import { signout } from '../../configuration';

const logout = async () => await signout(_userLoggedOutSuccessfully);

const _userLoggedOutSuccessfully = () => console.log('Sign-out successful');

export { logout };
