import { FieldResolver } from 'nexus';
import nookies from 'nookies';
import { DecodedJWT } from '../../../types';
import { verifyToken } from '../../utils/jwt';

export const implicitLogin: FieldResolver<'Query', 'implicitLogin'> = async (
  _,
  __,
  { req }
) => {
  try {
    const cookies = nookies.get({ req });
    const token = cookies.sid || null;
    if (!token) {
      throw new Error();
    }
    const decodedToken = await verifyToken(token);
    return {
      loggedIn: true,
      email: (decodedToken as DecodedJWT).email,
    };
  } catch (error) {
    console.log(error);
    return {
      loggedIn: false,
      email: null,
    };
  }
};
