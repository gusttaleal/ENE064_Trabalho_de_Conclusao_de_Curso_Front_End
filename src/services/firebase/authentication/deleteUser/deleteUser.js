import { ruleOut } from '../../configuration';

const deleteUser = async (user) => await ruleOut(user, _userDeletedSuccessfully, _errorDeletingUser);

const _userDeletedSuccessfully = () => alert('Rule-out successful');

const _errorDeletingUser = (error) => {
  alert(`Faça o login novamente.\nError: ${error.message}`);
};

export { deleteUser };
