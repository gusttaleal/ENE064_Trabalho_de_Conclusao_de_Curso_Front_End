import { getUserCredentials, reauthenticateUser, ruleOut } from '../../configuration';
import { errorLog } from '../../../../utils/errorLog';
import { userDeleted } from '../../../../api/UserApi/userDeleted';

const deleteUser = async (user, credential, setCredential) => {
  sessionStorage.removeItem('credential');
  setCredential(null);

  await userDeleted(user);

  const _credential = getUserCredentials(credential);
  await reauthenticateUser(user, _credential);

  await ruleOut(user, _userDeletedSuccessfully, _errorDeletingUser);
};

const _userDeletedSuccessfully = () => {
  console.log('Rule-out successful');
};

const _errorDeletingUser = (error) => {
  errorLog('deleteUser.js', 'deleteUser()', error);
};

export { deleteUser };
