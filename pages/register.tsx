import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { RegisterForm } from '../components/Register/Form';
import { Navbar } from '../components/Register/Navbar';
import { TestDocument, useTestQuery } from '../generated/graphql';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import { prisma } from '../lib/prisma';

const Register: NextPage = () => {
  const { data } = useTestQuery({
    notifyOnNetworkStatusChange: true,
  });

  return (
    <div className="bg-violet-100 min-h-screen">
      <Head>
        <title>Register</title>
      </Head>

      <div>{JSON.stringify(data?.test)}</div>

      <Navbar />
      <RegisterForm />
    </div>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo({ ctx: { req, prisma } });

  await apolloClient.query({ query: TestDocument });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Register;
