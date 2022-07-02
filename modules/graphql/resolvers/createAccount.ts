import { hash } from 'bcrypt';
import { FieldResolver } from 'nexus';
import { getRedisClient } from '../../../lib/redis';
import { registrationValidation } from '../../utils/registrationValidation';
const { v4: uuidv4 } = require('uuid');

export const createAccount: FieldResolver<'Mutation', 'createAccount'> = async (
  _,
  { credentials },
  { prisma }
) => {
  await registrationValidation.validate(credentials);

  const existingUser = await prisma.user.findFirst({
    where: {
      email: credentials.email,
    },
  });
  if (existingUser !== null) {
    throw new Error('Email Id already registered');
  }

  const hashedPass = await hash(credentials.password, 10);
  const key = uuidv4();
  const userObj = {
    firstName: credentials.firstName,
    lastName: credentials.lastName,
    email: credentials.email,
    password: hashedPass,
  } as {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  await getRedisClient()
    .multi()
    .hmset(key, userObj)
    .expire(key, 60 * 60)
    .exec();
  await prisma.user.create({
    data: {
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
      passhash: hashedPass,
    },
  });

  return {
    message: 'Thanks for registering! Login to continue.',
  };
};
