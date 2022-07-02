import { ApolloError } from '@apollo/client';
import { useFormik } from 'formik';
import type { NextComponentType } from 'next';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Yup from 'yup';
import { useLoginMutation } from '../../generated/graphql';
import { StatusText } from '../Register/StatusText';

export const LoginForm: NextComponentType = () => {
  const router = useRouter();
  const [loginMutation] = useLoginMutation({
    notifyOnNetworkStatusChange: true,
  });
  const [errorMsg, setErrorMsg] = useState<string | undefined>();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      Vpassword: '',
    },
    onSubmit: async (values, actions) => {
      const creds = { ...values };
      actions.resetForm();
      try {
        const { data } = await loginMutation({
          variables: {
            credentials: {
              email: creds.email,
              password: creds.password,
            },
          },
        });
        console.log(data?.login?.username);
        router.push('/');
      } catch (error) {
        setErrorMsg((error as ApolloError).message);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('Email is not valid'),
      password: Yup.string().required('Password is required'),
    }),
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center font-bold">Sign In</h1>

              <div className="mb-3">
                <label htmlFor="email" className="text-violet-800">
                  Email
                </label>
                <input
                  type="text"
                  className="block border border-violet-200 focus:outline-none focus:border-violet-500 w-full p-3 rounded"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="text-red-400">{formik.errors.email}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="text-violet-800">
                  Password
                </label>
                <input
                  type="password"
                  className="block border border-violet-200 focus:outline-none focus:border-violet-500 w-full p-3 rounded"
                  name="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <span className="text-red-400">{formik.errors.password}</span>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-center py-3 rounded font-semibold bg-violet-500 text-white hover:bg-violet-700 focus:outline-none my-1"
              >
                Login
              </button>
              <div className="text-grey-dark my-6">
                <Link href="/register">
                  <p className="flex gap-1">
                    New User?
                    <p className="cursor-pointer text-violet-900  ">
                      Register here
                    </p>
                  </p>
                </Link>
              </div>
              <StatusText errorMsg={errorMsg} statusMsg={''} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
