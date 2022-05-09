import { signout } from '../../configuration';

export const logOut = async () => {
  signout()
    .then(() => {
      // Sign-out successful.
      console.log('LogOut');
    })
    .catch((error) => {
      // An error happened.
      console.log(`Error: ${error}`);
    });
};
