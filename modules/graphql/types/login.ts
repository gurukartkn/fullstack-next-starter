import { extendType, inputObjectType, nonNull, objectType } from 'nexus';
import { createAccount } from '../resolvers/createAccount';
import { implicitLogin } from '../resolvers/implicitLogin';
import { loginAttempt } from '../resolvers/loginAttempt';

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

export const Login = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('login', {
      type: LoginResponse,
      args: { credentials: nonNull(LoginCredentials) },
      resolve: loginAttempt,
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

const LoginCredentials = inputObjectType({
  name: 'loginCredentials',
  definition: (t) => {
    t.nonNull.string('email');
    t.nonNull.string('password');
  },
});

const RegisterResponse = objectType({
  name: 'registerResponse',
  definition: (t) => {
    t.nonNull.string('message');
  },
});

const LoginResponse = objectType({
  name: 'LoginResponse',
  definition: (t) => {
    t.string('email');
    t.string('username');
  },
});

export const ImplicitLogin = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('implicitLogin', {
      type: ImplicitLoginResponse,
      resolve: implicitLogin,
    });
  },
});

const ImplicitLoginResponse = objectType({
  name: 'implicitLoginResponse',
  definition: (t) => {
    t.nonNull.boolean('loggedIn');
    t.string('email');
  },
});
