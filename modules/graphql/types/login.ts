import { extendType, inputObjectType, nonNull, objectType } from 'nexus';
import { createAccount } from '../resolvers/createAccount';

export const CreateAccount = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createAccount', {
      type: RegisterResponse,
      args: { credentials: nonNull(RegisterCredentials) },
      resolve: createAccount,
    });
  },
});

const RegisterCredentials = inputObjectType({
  name: 'registerCredentials',
  definition: (t) => {
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
    t.nonNull.string('email');
    t.nonNull.string('password');
  },
});

const RegisterResponse = objectType({
  name: 'registerResponse',
  definition: (t) => {
    t.nonNull.string('message');
    t.nonNull.boolean('error');
  },
});
