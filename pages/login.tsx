import type { NextPage } from 'next';
import Head from 'next/head';
import { LoginForm } from '../components/Login/Form';
import { Navbar } from '../components/Login/Navbar';

const Login: NextPage = () => {
  return (
    <div className="bg-violet-100">
      <Head>
        <title>Login</title>
      </Head>
      <Navbar />
      <LoginForm />
    </div>
  );
};

export default Login;
