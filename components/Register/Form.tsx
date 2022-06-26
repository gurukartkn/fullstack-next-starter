import type { NextComponentType } from 'next';
import Link from 'next/link';

export const RegisterForm: NextComponentType = () => {
  return (
    <div>
      <form>
        <div className="min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center font-bold">Join Us</h1>
              <input
                type="text"
                className="block border border-violet-200 focus:outline-none focus:border-violet-500 w-full p-3 rounded mb-4"
                name="firstName"
                placeholder="First Name"
              />

              <input
                type="text"
                className="block border border-violet-200 focus:outline-none focus:border-violet-500 w-full p-3 rounded mb-4"
                name="lastName"
                placeholder="Last Name"
              />

              <input
                type="text"
                className="block border border-violet-200 focus:outline-none focus:border-violet-500 w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                type="password"
                className="block border border-violet-200 focus:outline-none focus:border-violet-500 w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password (5 characters and above)"
              />

              <input
                type="password"
                className="block border border-violet-200 focus:outline-none focus:border-violet-500 w-full p-3 rounded mb-4"
                name="Vpassword"
                placeholder="Confirm Password"
              />

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
