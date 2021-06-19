import React from "react";

const Input = ({ placeholder, type }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full block mb-5 h-12"
      />
    </>
  );
};

export default Input;
