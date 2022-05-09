import { signin } from '../../configuration';

export const logIn = async () => {
  signin()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // console.log(credential);
      // const token = credential.accessToken;
      // console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.error(errorCode);
      console.error(errorMessage);
      console.error(email);
      // console.error(credential);
    });
};
