import { PrismaClient } from '@prisma/client';
import { ValidationError } from 'apollo-server-micro';
import { compare } from 'bcrypt';
import { CookieSerializeOptions } from 'next/dist/server/web/types';
import { FieldResolver } from 'nexus';
import nookies from 'nookies';
import { createToken } from '../../utils/jwt';
import { loginValidation } from '../../utils/loginValidation';

export const loginAttempt: FieldResolver<'Mutation', 'login'> = async (
  _,
  { credentials },
  { prisma, res }
) => {
  try {
    await loginValidation.validate(credentials);
    const existingUser = await getExistingUser(credentials, prisma);

    const encodedToken = await createToken(
      { email: existingUser.email },
      { expiresIn: '1h' }
    );

    nookies.set({ res }, 'sid', encodedToken, {
      httpOnly: true,
      domain: process.env.SERVER_DOMAIN || undefined,
      maxAge: 60 * 5,
      sameSite: true,
    } as CookieSerializeOptions);

    return {
      error: false,
      email: existingUser.email,
      username: existingUser.firstName,
    };
  } catch (error) {
    const errMsg = (error as ValidationError).message || 'Validation error';
    return {
      error: true,
      message: errMsg,
    };
  }
};

const getExistingUser = async (
  credentials: { email: string; password: string },
  prisma: PrismaClient
) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      email: credentials.email,
    },
    select: {
      email: true,
      passhash: true,
      firstName: true,
    },
  });

  const passwordsMatch = await compare(
    credentials.password,
    (existingUser?.passhash as string) || ''
  );

  if (!existingUser || !passwordsMatch) {
    throw new Error('Invalid credentials');
  }

  return existingUser;
};
