import { returnsTimeWithoutSeconds } from './returnsTimeWithoutSeconds';

const verifyFirstAccess = (user) => {
  const createdAt = returnsTimeWithoutSeconds(user.metadata.createdAt);
  const lastLoginAt = returnsTimeWithoutSeconds(user.metadata.lastLoginAt);

  return createdAt === lastLoginAt;
};

export { verifyFirstAccess };
