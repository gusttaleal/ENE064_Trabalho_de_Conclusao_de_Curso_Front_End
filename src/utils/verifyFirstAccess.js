import { sendEmailVerification } from '../services/firebase/email';
import { returnsTimeWithoutSeconds } from './returnsTimeWithoutSeconds';

const verifyFirstAccess = async (user) => {
  const createdAt = returnsTimeWithoutSeconds(user.metadata.createdAt);
  const lastLoginAt = returnsTimeWithoutSeconds(user.metadata.lastLoginAt);

  const isFirstAccess = createdAt === lastLoginAt;

  if (isFirstAccess) {
    try {
      console.log('It is the first access.');
      sendEmailVerification(user);
    } catch (error) {
      throw error;
    }
  }
};

export { verifyFirstAccess };
