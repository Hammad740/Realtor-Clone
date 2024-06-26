import { useState } from 'react';

import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  function handleChange(e) {
    setEmail(e.target.value);
  }
  return (
    <section>
      <h1 className="mt-6 text-3xl font-bold text-center">Forgot Password</h1>
      <div className="flex flex-wrap items-center justify-center max-w-6xl px-6 py-12 mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 rounded-xl shadow-md">
          <img
            className="object-cover rounded-xl"
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key-image"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="w-full px-4 py-2 mb-6 text-xl text-gray-700 transition ease-in-out bg-white border-gray-300 rounded"
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Email address"
            />

            <div className="flex justify-between text-sm whitespace-nowrap sm:text-lg ">
              <p className="mb-6">
                Have an account?
                <Link
                  to="/sign-in"
                  className="text-red-600 transition duration-200 ease-in-out hover:text-red-700"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to={'/forgot-password'}
                  className="text-blue-600 transition duration-200 ease-in-out hover:text-blue-700"
                >
                  Sign In
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-sm font-medium text-white uppercase transition duration-200 ease-in-out bg-blue-600 rounded-md shadow-md px-7 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800"
            >
              Send Reset Password
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
              <p className="mx-4 font-semibold text-center">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
