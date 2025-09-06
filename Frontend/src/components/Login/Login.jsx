import React from "react";

export default function Login() {
  return (
    <div className="relative flex items-top justify-center min-h-[600px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Info */}
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Login
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Access your account securely
              </p>
            </div>

            {/* Login Form */}
            <form className="p-6 flex flex-col justify-center">
              {/* Email */}
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col mt-2">
                <label htmlFor="password" className="hidden">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="md:w-32 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
