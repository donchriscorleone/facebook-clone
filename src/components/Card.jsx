import React from "react";
import Input from "./Input";

const Card = () => {
  return (
    <>
      <div className="divide-y divide-light-blue-400 border-8 w-1/3 ml-20 mb-32 px-4 py-3">
        <div className="py-3">
          <Input type="text" placeholder="Email Or Phone Number" />
          <Input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
          <a href="#">Forgot Password?</a>
        </div>
        <button>Create New Account</button>
        <p>
          <a href="#">Create a Page</a>for a celebrity, band or business.
        </p>
      </div>
    </>
  );
};

export default Card;
