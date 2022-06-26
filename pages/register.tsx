import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { RegisterForm } from '../components/Register/Form';
import { Navbar } from '../components/Register/Navbar';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import { prisma } from '../lib/prisma';

const Register: NextPage = () => {
  return (
    <div className="bg-violet-100 min-h-screen">
      <Head>
        <title>Register</title>
      </Head>

      <Navbar />
      <RegisterForm />
    </div>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo({ ctx: { req, prisma } });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Register;
