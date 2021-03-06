import type { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import nookies from 'nookies';
import { Footer } from '../components/Home/Footer';
import { Hero } from '../components/Home/Hero';
import { Navbar } from '../components/Home/Navbar';
import {
  ImplicitLoginDocument,
  ImplicitLoginQuery,
} from '../generated/graphql';
import { initializeApollo } from '../lib/apolloClient';
import { prisma } from '../lib/prisma';

interface Props {
  email: string;
  loggedIn: boolean;
}

const Home = ({ loggedIn, email }: Props) => {
  return loggedIn ? (
    <div>
      <Head>
        <title>Full Stack NextJS Boilerplate</title>
        <meta
          name="description"
          content="Generated by create fullstack next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar loggedIn={loggedIn} email={email} />

      <Hero email={email} />

      <Footer />
    </div>
  ) : (
    <div>
      <Head>
        <title>Full Stack NextJS Boilerplate</title>
        <meta
          name="description"
          content="Generated by create fullstack next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar loggedIn={loggedIn} email={email} />

      <Hero email={''} />

      <Footer />
    </div>
  );
};

export const getServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  const cookies = nookies.get({ req });
  if (!cookies.sid) {
    return {
      props: {
        loggedIn: false,
      } as Props,
    };
  }

  const apolloClient = initializeApollo({
    ctx: { req, res, prisma },
  });

  const { data } = await apolloClient.query<ImplicitLoginQuery>({
    query: ImplicitLoginDocument,
  });

  if (!data.implicitLogin) {
    return {
      props: {
        loggedIn: false,
      } as Props,
    };
  }

  return {
    props: {
      email: data?.implicitLogin?.email,
      loggedIn: data?.implicitLogin?.loggedIn,
    } as Props,
  };
};

export default Home;
