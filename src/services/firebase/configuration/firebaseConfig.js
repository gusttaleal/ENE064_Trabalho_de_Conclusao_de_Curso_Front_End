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
  reauthenticateWithCredential,
} from 'firebase/auth';
import { errorLog } from '../../../utils/errorLog';

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

const signin = (callback) =>
  signInWithPopup(auth, provider)
    .then(callback)
    .catch((error) => errorLog('firebaseConfig.js', 'signin()', error));

const signout = (callback) =>
  signOut(auth)
    .then(callback)
    .catch((error) => errorLog('firebaseConfig.js', 'signout()', error));

const launchEmailVerification = (user, callback) =>
  sendEmailVerification(user)
    .then(callback)
    .catch((error) => errorLog('firebaseConfig.js', 'launchEmailVerification()', error));

const launchSigninStateObserver = (callback) =>
  onAuthStateChanged(
    auth,
    callback,
    (error) => errorLog('firebaseConfig.js', 'launchSigninStateObserver()', error),
    (completed) => console.log(`The observer was removed: ${completed}`)
  );

const ruleout = (user, callback) =>
  deleteUser(user)
    .then(callback)
    .catch((error) => errorLog('firebaseConfig.js', 'ruleout()', error));

const getUserCredentials = (result) => GoogleAuthProvider.credentialFromResult(result);

const reauthenticateUser = (user, credential) => reauthenticateWithCredential(user, credential);

export {
  serverTimestamp,
  firestoreDataBase,
  signin,
  signout,
  launchEmailVerification,
  launchSigninStateObserver,
  ruleout,
  getUserCredentials,
  reauthenticateUser,
};
