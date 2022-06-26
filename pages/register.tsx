import type { NextPage } from 'next';
import Head from 'next/head';
import { RegisterForm } from '../components/Register/Form';
import { Navbar } from '../components/Register/Navbar';

const Register: NextPage = () => {
  return (
    <div className="bg-violet-100">
      <Head>
        <title>Register</title>
      </Head>
      <Navbar />
      <RegisterForm />
    </div>
  );
};

export default Register;
