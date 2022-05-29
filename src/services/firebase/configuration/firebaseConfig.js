import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from '@firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  sendEmailVerification,
  deleteUser,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);

const firestoreDataBase = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signin = (callback, errorHandler) => signInWithPopup(auth, provider).then(callback).catch(errorHandler);

const signout = (callback, errorHandler) => signOut(auth).then(callback).catch(errorHandler);

const ruleOut = (user, callback, errorHandler) => deleteUser(user).then(callback).catch(errorHandler);

const launchEmailVerification = (user, callback, errorHandler) =>
  sendEmailVerification(user).then(callback).catch(errorHandler);

const launchSigninStateObserver = (callback, errorHandler, observerHandler) =>
  onAuthStateChanged(auth, callback, errorHandler, observerHandler);

const getUserCredentials = (result) => GoogleAuthProvider.credentialFromResult(result);

export {
  serverTimestamp,
  firestoreDataBase,
  signin,
  signout,
  ruleOut,
  launchEmailVerification,
  launchSigninStateObserver,
  getUserCredentials,
};
