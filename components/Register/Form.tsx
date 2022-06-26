import { useFormik } from 'formik';
import type { NextComponentType } from 'next';
import Link from 'next/link';
import * as Yup from 'yup';

export const RegisterForm: NextComponentType = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      Vpassword: '',
    },
    onSubmit: function (values) {
      alert(
        `You are registered! Name: ${values.firstName} ${values.lastName}. Email: ${values.email}. Password: ${values.password}`
      );
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is not valid'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
      Vpassword: Yup.string()
        .required('Retype the Password')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
  });

  return (
    <div className="py-5">
      <form onSubmit={formik.handleSubmit} className="py-5">
        <div className="min-h-screen-md flex flex-col py-5">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center font-bold">Join Us</h1>
              <div className="mb-3">
                <label htmlFor="firstName" className="text-violet-800">
                  First Name
                </label>
                <input
                  type="text"
                  className="block border border-violet-200 focus:outline-none focus:border-violet-500 w-full p-3 rounded"
                  name="firstName"
                  id="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <span className="text-red-400">
                    {formik.errors.firstName}
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="text-violet-800">
                  Last Name
                </label>
                <input
                  type="text"
                  className="block border border-violet-200 focus:outline-none focus:border-violet-500 w-full p-3 rounded"
                  name="lastName"
                  id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <span className="text-red-400">{formik.errors.lastName}</span>
                )}
              </div>
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
              <div className="mb-3">
                <label htmlFor="Vpassword" className="text-violet-800">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="block border border-violet-200 focus:outline-none focus:border-violet-500 w-full p-3 rounded"
                  name="Vpassword"
                  id="Vpassword"
                  value={formik.values.Vpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Vpassword && formik.errors.Vpassword && (
                  <span className="text-red-400">
                    {formik.errors.Vpassword}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-center py-3 rounded font-semibold bg-violet-500 text-white hover:bg-violet-700 focus:outline-none my-1"
              >
                Sign Up
              </button>
              <div className="text-grey-dark mt-6">
                <Link href="/login">
                  <p className="flex gap-1">
                    Already have an account?
                    <p className="cursor-pointer text-violet-900  ">
                      Log in here
                    </p>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
