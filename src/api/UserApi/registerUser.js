import { baseApi } from '../BaseApi/baseApi';

const registerUser = async (user) => {
  await baseApi.post('auth', {
    userId: user.uid,
    email: user.email,
    userCreatedAt: user.metadata.createdAt,
    userLastLoginAt: user.metadata.lastLoginAt,
  });
};

export { registerUser };
