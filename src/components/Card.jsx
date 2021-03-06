import React, { useState } from "react";

const Card = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="w-3/12 ml-18 mb-32 px-4 py-3 text-center">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="py-3 px-4 relative">
            <input
              type="text"
              placeholder="Email Or Phone Number"
              className="w-full block mb-3 h-12 p-4 border-2 rounded focus:border-blue-600 "
            />
            <input
              type={visible ? "text" : "password"}
              placeholder="Password"
              className="w-full block mb-3 h-12 p-4 border-2 rounded focus:border-blue-600 "
            />
            {visible ? (
              <svg
                className="absolute w-4 right-6 top-20 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setVisible(!visible)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            ) : (
              <svg
                className="absolute w-4 right-6 top-20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setVisible(!visible)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                ></path>
              </svg>
            )}
            <button
              type="submit"
              className="block text-center w-full bg-blue-500 h-10 rounded-md hover:bg-blue-600 my-3"
            >
              Log In
            </button>
            <a href="#" className="my-3 text-blue hover:underline">
              Forgot Password?
            </a>
          </div>
          <button className="bg-green-500 px-4 py-2 rounded-md my-6 hover:bg-green-600">
            Create New Account
          </button>
        </div>
        <p className="mt-7">
          <a href="#">Create a Page</a>for a celebrity, band or business.
        </p>
      </div>
    </>
  );
};

export default Card;
